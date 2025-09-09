import React, { useState } from "react";
import { SafeAreaView, Text, Modal, View, Button, StyleSheet, TouchableOpacity } from "react-native";
import SpinningWheel from "../components/SpinningWheel";
import Botao from "../components/Botao";

export default function RoletaScreen() {
    const [resultado, setResultado] = useState(null);
    const [modalVisivel, setModalVisivel] = useState(false);
    const [items, setItems] = useState([
        "Azul", "Amarelo", "Verde", "Preto", "Vermelho", "Roxo", "Rosa",
        "Cinza", "Branco", "Laranja", "Marrom"
    ]);

    const removendoOpcao = () => {
        setItems(prevItems => prevItems.filter(item => item !== resultado));
        setModalVisivel(false);
        setResultado(null);
    };

    return (
        <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <SpinningWheel
                size={320}
                items={items}
                onSelect={(r) => {
                    setResultado(r.label);
                    setModalVisivel(true);
                }}
            />

            {/* modal */}
            <Modal
                animationType="slide"
                transparent={true}
                visivel={modalVisivel}
                onRequestClose={() => setModalVisivel(false)}
            >
                <View style={styles.fundoEscurecido}>
                    <View style={styles.modalContainer}>
                        <Text style={styles.modalText}>Resultado: {resultado}</Text>
                        <Botao texto={"REMOVER OPÇÃO"} cor={"vermelho"} onPress={removendoOpcao} />
                        <Botao texto={"FECHAR"} cor={"verde"} onPress={() => setModalVisivel(false)} />
                    </View>
                </View>
            </Modal>

            {resultado && <Text style={styles.marginTop}>Sorteado: {resultado}</Text>}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    fundoEscurecido: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalContainer: {
        width: 350,
        padding: 25,
        backgroundColor: "white",
        borderRadius: 10,
        alignItems: "center",
    },
    modalText: {
        fontSize: 18,
        marginBottom: 15,
        fontFamily: 'Baloo-Regular',
    },
    marginTop: {
        marginTop: 12,
    }
});