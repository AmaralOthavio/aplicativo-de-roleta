import React, { useState } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

import HeaderNovaRoleta from "../components/HeaderNovaRoleta";
import InputTexto from "../components/InputTexto";
import OpcaoItem from "../components/OpcaoItem";
import BotaoNovaRoleta from "../components/BotaoNovaRoleta";

const coresOpcoes = ["#FF69B4", "#000", "#20CFCF", "#B020C9"];

export default function NovaRoletaScreen({ navigation }) {
    const [nome, setNome] = useState("");
    const [opcoes, setOpcoes] = useState(["", "", "", ""]);

    const handleEditOption = (text, idx) => {
        const novas = [...opcoes];
        novas[idx] = text;
        setOpcoes(novas);
    };

    const adicionarOpcao = () => setOpcoes([...opcoes, ""]);
    const removerOpcao = (idx) => {
        if (opcoes.length > 2) {
            setOpcoes(opcoes.filter((_, i) => i !== idx));
        }
    };

    const salvar = () => {
        if (!nome.trim()) {
            alert("Digite um nome para a roleta!");
            return;
        }
        if (opcoes.filter((o) => o.trim() !== "").length < 2) {
            alert("Adicione pelo menos 2 opções!");
            return;
        }

        navigation.navigate("Roleta", { nome, opcoes });
    };

    return (
        <View style={styles.container}>
            <HeaderNovaRoleta title="NOVA ROLETA" onBack={() => navigation.goBack()} />

            <InputTexto value={nome} onChangeText={setNome} placeholder="Nome" />

            <Text style={styles.subtitulo}>Opções:</Text>

            <ScrollView style={{ maxHeight: 200, alignSelf: "stretch" }}>
                {opcoes.map((texto, idx) => (
                    <OpcaoItem
                        key={idx}
                        texto={texto}
                        cor={coresOpcoes[idx % coresOpcoes.length]}
                        onChangeText={(t) => handleEditOption(t, idx)}
                        onRemover={() => removerOpcao(idx)}
                    />
                ))}
            </ScrollView>

            <BotaoNovaRoleta texto="+ Adicionar opção" onPress={adicionarOpcao} cor="#fff" textoCor="#571EFF" />
            <BotaoNovaRoleta texto="SALVAR" onPress={salvar} cor="#15e96e" textoCor="#fff" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#7b2ff2",
        padding: 16,
    },
    subtitulo: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16,
        marginBottom: 6,
    },
});
