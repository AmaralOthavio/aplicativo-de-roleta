import React, { useMemo, useRef, useState } from "react";
import { View, Pressable, Animated, Easing, StyleSheet, Text } from "react-native";
import Svg, { G, Path, Text as SvgText, Circle, Polygon } from "react-native-svg";

const PALETTE = [
    "#4CC9F0", "#F72585", "#72EFDD", "#FFE066",
    "#B5179E", "#43AA8B", "#FFD6A5", "#3F37C9",
];

function normalizeItems(items) {
    return items.map((it, i) =>
        typeof it === "string" ? { label: it, color: PALETTE[i % PALETTE.length] } : it
    );
}

function polarToCartesian(cx, cy, r, angleDeg) {
    const a = ((angleDeg - 90) * Math.PI) / 180.0;
    return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) };
}

function describeArc(cx, cy, r, startAngle, endAngle) {
    const start = polarToCartesian(cx, cy, r, endAngle);
    const end = polarToCartesian(cx, cy, r, startAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
    return `M ${cx} ${cy} L ${start.x} ${start.y} A ${r} ${r} 0 ${largeArcFlag} 0 ${end.x} ${end.y} Z`;
}

export default function SpinningWheel({
                                          items = [],
                                          size = 300,
                                          durationMs = 4500,
                                          turns = 6,
                                          onSelect,
                                          centerText = "GIRAR",
                                      }) {
    const N = Math.max(1, items.length);
    const data = useMemo(() => normalizeItems(items), [items]);
    const anglePerSlice = 360 / N;
    const radius = size / 2;

    const rotateAnim = useRef(new Animated.Value(0)).current;
    const [spinning, setSpinning] = useState(false);

    function spin() {
        if (spinning || N === 0) return;
        setSpinning(true);

        const index = Math.floor(Math.random() * N);
        const mid = index * anglePerSlice + anglePerSlice / 2;
        const targetDeg = turns * 360 + (360 - mid);

        Animated.timing(rotateAnim, {
            toValue: targetDeg,
            duration: durationMs,
            easing: Easing.out(Easing.cubic),
            useNativeDriver: true,
        }).start(() => {
            const rest = targetDeg % 360;
            rotateAnim.setValue(rest);
            setSpinning(false);
            onSelect && onSelect({ index, label: data[index].label });
        });
    }

    const slices = data.map((it, i) => {
        const startAngle = i * anglePerSlice;
        const endAngle = startAngle + anglePerSlice;
        const path = describeArc(radius, radius, radius - 6, startAngle, endAngle);

        const mid = startAngle + anglePerSlice / 2;
        const labelR = radius * 0.62;
        const { x, y } = polarToCartesian(radius, radius, labelR, mid);

        return (
            <G key={String(i)}>
                <Path d={path} fill={it.color || PALETTE[i % PALETTE.length]} />
                <SvgText
                    x={x}
                    y={y}
                    fontSize={Math.max(12, size * 0.06)}
                    fill="#0b0b0b"
                    fontWeight="600"
                    textAnchor="middle"
                    alignmentBaseline="middle"
                    transform={`rotate(${mid} ${x} ${y})`}
                >
                    {it.label}
                </SvgText>
            </G>
        );
    });

    return (
        <View style={{ alignItems: "center" }}>
            <View style={{ width: size, height: size }}>
                {/* ponteiro fixo */}
                <Svg width={size} height={size} style={StyleSheet.absoluteFill}>
                    <Polygon
                        points={`${size - 8},${radius} ${size - 28},${radius - 12} ${size - 28},${radius + 12}`}
                        fill="#e11d48"
                        stroke="#7f1d1d"
                        strokeWidth={1}
                    />
                </Svg>

                {/* roda animada */}
                <Animated.View
                    style={[
                        StyleSheet.absoluteFill,
                        {
                            transform: [
                                {
                                    rotate: rotateAnim.interpolate({
                                        inputRange: [0, 360],
                                        outputRange: ["0deg", "360deg"],
                                    }),
                                },
                            ],
                        },
                    ]}
                >
                    <Svg width={size} height={size}>
                        <G>
                            <Circle cx={radius} cy={radius} r={radius - 2} fill="#ffffff" />
                            <Circle cx={radius} cy={radius} r={radius - 2} fill="#e5e7eb" opacity={0.25} />
                            {slices}
                            <Circle cx={radius} cy={radius} r={size * 0.11} fill="#111827" />
                            <SvgText
                                x={radius}
                                y={radius}
                                fontSize={Math.max(12, size * 0.07)}
                                fill="#ffffff"
                                textAnchor="middle"
                                alignmentBaseline="middle"
                                fontWeight="700"
                            >
                                {centerText}
                            </SvgText>
                        </G>
                    </Svg>
                </Animated.View>
            </View>

            <Pressable onPress={spin} disabled={spinning} style={({ pressed }) => [
                styles.button,
                { opacity: spinning ? 0.6 : pressed ? 0.8 : 1 },
            ]}>
                <Text style={styles.buttonText}>{spinning ? "Girando..." : "Girar roleta"}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        marginTop: 16,
        paddingHorizontal: 18,
        paddingVertical: 12,
        borderRadius: 999,
        backgroundColor: "#111827",
    },
    buttonText: { color: "#fff", fontWeight: "700" },
});
