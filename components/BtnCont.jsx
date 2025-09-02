import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import sizes from "../design/sizes";
import colors from "../design/colors";

export default function BtnCont ({
    titulo,
    numero,
    acao = () => true,
    eVerde = false
                                 }) {

    let circulo = {
        width: 30,
            height: 30,
            backgroundColor: colors.purple_light,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: sizes.border_circle
    }
    let num = {
        fontSize: sizes.size_cont,
        color: colors.purple_dark,
        fontWeight: "bold",
    }

    if (eVerde) {
        circulo.backgroundColor = colors.green_light
        num.color = colors.green_dark
    }

    return (
        <TouchableOpacity onPress={acao} style={styles.btn}>
            <Text style={styles.titulo}>{titulo}</Text>
            <View style={circulo}>
                <Text style={num}>
                    {numero}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btn: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        justifyContent: 'flex-start'
    },
    titulo: {
        fontSize: sizes.size_medium,
        color: colors.gray_500,
        fontWeight: "bold",
    },
})