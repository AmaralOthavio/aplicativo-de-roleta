import React, { useState } from "react";
import { SafeAreaView, Text, Modal, View, Button, StyleSheet } from "react-native";
import SpinningWheel from "../components/SpinningWheel";

export default function RoletaScreen() {
    const [resultado, setResultado] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [items, setItems] = useState([
        "Pedra", "Papel", "Tesoura"
    ]);

    const removendoOpcao = () => {
        setItems(prevItems => prevItems.filter(item => item !== resultado));
        setModalVisible(false);
        setResultado(null);
    };

    return (
        <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <SpinningWheel
                size={320}
                items={items}
                onSelect={(r) => {
                    setResultado(r.label);
                    setModalVisible(true);
                }}
            />

            {/* modal */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContainer}>
                        <Text style={styles.modalText}>Resultado: {resultado}</Text>
                        <Button title="Remover Opção" onPress={removendoOpcao} />
                        <Button title="Fechar" onPress={() => setModalVisible(false)} />
                    </View>
                </View>
            </Modal>

            {resultado && <Text style={{ marginTop: 12 }}>Sorteado: {resultado}</Text>}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalContainer: {
        width: 300,
        padding: 20,
        backgroundColor: "white",
        borderRadius: 10,
        alignItems: "center",
    },
    modalText: {
        fontSize: 18,
        marginBottom: 15,
    }
});