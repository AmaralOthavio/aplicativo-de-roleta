import { TextInput, StyleSheet } from "react-native";

export default function InputTexto({ value, onChangeText, placeholder }) {
    return (
        <TextInput
            style={styles.input}
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            placeholderTextColor="#aaa"
        />
    );
}

const styles = StyleSheet.create({
    input: {
        width: "100%",
        backgroundColor: "#fff",
        borderRadius: 8,
        marginBottom: 12,
        padding: 10,
        fontSize: 16,
    },
});
