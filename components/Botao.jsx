import {StyleSheet, Text, TouchableOpacity} from "react-native"
import colors from "../design/colors";
import sizes from "../design/sizes";

export default function Botao({ cor, texto, funcao = () => true }) {

    let botao = {
        height: 51,
        width: 296,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: sizes.border_radius,
        shadowColor: 'rgb(0, 0, 0)',
        shadowOpacity: 1,
        elevation: 6,
        shadowRadius: 26,
    }

    if (cor === "verde") {
        botao.backgroundColor = colors.verde
    }
    else if (cor === "vermelho") {
        botao.backgroundColor = colors.vermelho
    }

    return (
        <TouchableOpacity style={botao} onPress={funcao}>
            <Text>{texto}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

})

