import {Text, View, StyleSheet} from "react-native";

export default function Titulo({ texto1, texto2 }) {
    return (
        <View>
            <Text style={styles.titulo}> {texto1} </Text>
            <Text style={styles.subtitulo}> {texto2} </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    subtitulo: {
        textAlign: "center",
        fontSize: 24,
        fontWeight: "light",
        color: "black",
        marginBottom: 40,
    },

    titulo: {
        textAlign: "center",
        fontSize: 36,
        marginTop: 40,
        fontWeight: "bold",
        color: "red"
    }
})