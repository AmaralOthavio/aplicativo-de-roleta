import {StyleSheet, ScrollView, Text, View} from "react-native";
import colors from "../design/colors";
import EscolhaDeRoleta from "../components/EscolhaDeRoleta";
import VoltarBotao from "../components/VoltarBotao";
import EscolhaDeRoletaCinza from "../components/EscolhaDeRoletaCinza";

export default function ModelosProntos() {
    return (
        <View style={styles.body}>
            <View style={styles.container_titulo}>
                <VoltarBotao/>
                <Text style={styles.text_titulo}> ESCOLHA UMA ROLETA</Text>
            </View>


            <View style={styles.container}>
                <Text style={styles.text}></Text>
                <View style={{ flex: 1 }}>
                    <ScrollView contentContainerStyle={styles.container_btn}>
                        <EscolhaDeRoleta/>
                        <EscolhaDeRoleta/>
                        <EscolhaDeRoleta/>
                        <EscolhaDeRoleta/>
                        <EscolhaDeRoleta/>
                        <EscolhaDeRoleta/>
                        <EscolhaDeRoleta/>
                        <EscolhaDeRoletaCinza/>
                    </ScrollView>
                </View>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    body: {
        backgroundColor: colors.azul_escuro,
        height: "100%",
        flex: 1,
    },
    container: {
        backgroundColor: colors.white,
        borderTopStartRadius: 20,
        height: '77%',
    },
    container_titulo: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        height: 150,
        gap: 30,
    },
    container_btn: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
    },
    text_titulo: {
        fontSize: 20,
        textAlign:"center",

    }
})