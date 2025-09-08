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
    else if (cor === "rosa") {
        botao.backgroundColor = colors.rosa
    }
    else if (cor === "preto") {
        botao.backgroundColor = colors.black
    }
    else if (cor === "ciano") {
        botao.backgroundColor = colors.ciano
    }
    else if (cor === "roxo") {
        botao.backgroundColor = colors.roxo
    }

    return (
        <TouchableOpacity style={botao} onPress={funcao}>
            <Text style={styles.texto}>{texto}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    texto: {
        color: colors.white,
        fontFamily: 'Baloo-Regular',
        shadowColor: colors.black,
        textShadowColor: 'black',
        textShadowRadius: 9,
        textShadowOffset: {
            width: 0,
            height: 0,
        },
    }
})

