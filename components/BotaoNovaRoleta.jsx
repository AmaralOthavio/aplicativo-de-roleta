import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function Botao({ texto, onPress, cor = "#fff", textoCor = "#000" }) {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.botao, { backgroundColor: cor }]}>
            <Text style={[styles.texto, { color: textoCor }]}>{texto}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    botao: {
        borderRadius: 8,
        padding: 14,
        alignItems: "center",
        marginVertical: 6,
        alignSelf: "stretch",
    },
    texto: {
        fontWeight: "bold",
        fontSize: 16,
    },
});
