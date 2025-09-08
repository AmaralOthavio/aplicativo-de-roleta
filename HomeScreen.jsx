import {StyleSheet, View} from 'react-native'
import {useNavigation} from "@react-navigation/native";
import Header from "../components/Header";
import sizes from "../design/sizes"
import colors from "../design/colors"
import {useEffect, useState} from "react";
import Botao from "../components/Botao";
import RoletaIlustrativa from "../components/RoletaIlustrativa";

export default function HomeScreen() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Header/>
            <View style={styles.container_btn}>
                <Botao texto={"CRIAR NOVA ROLETA"} cor={"verde"} funcao={() => navigation.navigate('NovaRoletaScreen')}/>
                <Botao texto={"MODELOS PRONTOS"} cor={"vermelho"} funcao={() => navigation.navigate('ModelosProntos')}/>
            </View>
            <RoletaIlustrativa/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.azul_escuro,
        height: "100%",
        flex: 1,
    },
    container_btn: {
        alignItems: "center",
        justifyContent: "center",
        gap: 15
    }
})