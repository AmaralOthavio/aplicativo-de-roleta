import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // ou outro pacote de ícones

export default function Header({ title, onBack }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onBack}>
                <Ionicons name="arrow-back" size={24} color="#fff" />
            </TouchableOpacity>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        padding: 12,
        backgroundColor: "#7b2ff2",
    },
    title: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 12,
    },
});
