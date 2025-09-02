import {StyleSheet, TextInput, View} from "react-native";
import sizes from "../design/sizes";
import colors from "../design/colors";

export default function Search({pesquisa, setPesquisa}) {
    return (
        <View style={styles.container}>
            <TextInput value={pesquisa} onChangeText={setPesquisa} style={styles.input} placeholder={"Busque por tarefas"}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: sizes.margin_horizontal,
        marginVertical: sizes.size_medium
    },
    input: {
        backgroundColor: colors.white,
        fontSize: sizes.size_medium,
        padding: sizes.padding_medium,
        color: colors.gray_500,
        borderRadius: sizes.borderRadius,
        borderColor: colors.gray_330,
        borderWidth: 1,
        elevation: 3,
    }
})