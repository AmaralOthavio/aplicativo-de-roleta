import {Image, StyleSheet, View} from "react-native";

export default function RoletaIlustrativa() {
    return (
        <View style={styles.container}>
            <Image style={styles.img} source={require("../assets/roleta-ilustrativa.png")}/>
        </View>

    )
}

const styles = StyleSheet.create({
    img: {
        justify_self: "flex-end",
        alignSelf: "center",
        marginTop: "58.5%"
    }
})