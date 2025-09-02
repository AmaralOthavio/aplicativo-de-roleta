import {Image, StyleSheet, TextInput, TouchableOpacity, View} from "react-native";
import colors from "../design/colors";
import sizes from "../design/sizes";

export default function FormCadastro({fnCadastrar, texto, setTexto}) {
    return (
        <View style={styles.container}>
            <TextInput style={styles.input}
                       onChangeText={setTexto}
                       value={texto}
                       placeholder={"Adicione uma nova tarefa"}/>
            <TouchableOpacity
                onPress={fnCadastrar}
                style={styles.btn}>
                <Image style={styles.img} source={require("../assets/add.png")}/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        gap: 10,
        height: 70,
        marginTop: -35
    },
    input: {
        backgroundColor: colors.white,
        borderWidth: 1,
        borderColor: colors.gray_330,
        borderRadius: sizes.border_radius,
        color: colors.gray_500,
        fontSize: sizes.size_title,
        padding: sizes.padding_medium,
        width: "70%",
        marginLeft: 20,
        elevation: 2
    },
    btn: {
        backgroundColor: colors.purple_dark,
        borderRadius: sizes.border_radius,
        width: "16%",
        justifyContent: "center",
        alignItems: "center",
    },
    img: {
        height: 30,
        resizeMode: "contain",
    }
})