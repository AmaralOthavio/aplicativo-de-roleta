import {Image, View, StyleSheet, Dimensions} from "react-native";
import colors from "../design/colors";

export default function Header() {
    return (
        <View style={styles.container}>
            <Image style={styles.img} source={require('../assets/Logo.png')} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin_top: 300,
        height: 400,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.azul_escuro,
    },
    img: {
        height: 300     ,
        max_width: 400,
    }
})