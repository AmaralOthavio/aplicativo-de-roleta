import { View, TextInput, TouchableOpacity, Text, StyleSheet } from "react-native";

export default function OpcaoItem({ texto, onChangeText, cor, onRemover }) {
    return (
        <View style={[styles.container, { backgroundColor: cor }]}>
            <TextInput
                style={styles.input}
                value={texto}
                onChangeText={onChangeText}
                placeholder="Digite uma opção"
                placeholderTextColor="#fff"
            />
            <TouchableOpacity onPress={onRemover}>
                <Text style={styles.excluir}>X</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 8,
        marginBottom: 10,
        paddingHorizontal: 10,
        height: 48,
    },
    input: {
        flex: 1,
        fontWeight: "bold",
        fontSize: 16,
        color: "#fff",
    },
    excluir: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 18,
        marginLeft: 8,
    },
});
