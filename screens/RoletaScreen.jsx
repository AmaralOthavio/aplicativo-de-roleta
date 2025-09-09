// RoletaScreen.jsx
import React, { useState } from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";
import SpinningWheel from "../components/SpinningWheel";

export default function RoletaScreen({ route, navigation }) {
    // recebe params vindos da NovaRoletaScreen
    const { nome = "Roleta sem nome", opcoes = [] } = route.params || {};
    const [resultado, setResultado] = useState(null);

    // transforma as strings em objetos { label: "..." } que o SpinningWheel parece usar
    const itemsFromParams = opcoes
        .filter(o => typeof o === "string" && o.trim() !== "")
        .map(o => ({ label: o.trim() }));

    // fallback caso não tenha opções válidas
    const fallback = ["Batata", "Arroz", "Churrasco", "Lasanha"].map(l => ({ label: l }));
    const items = itemsFromParams.length ? itemsFromParams : fallback;

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.titulo}>{nome}</Text>

            <SpinningWheel
                size={320}
                items={items}
                onSelect={(r) => {
                    // dependendo do SpinningWheel, r pode ser string ou objeto; aqui assumimos objeto {label}
                    const label = (r && (r.label || r)) || "—";
                    setResultado(label);
                }}
            />

            {resultado && <Text style={styles.result}>Sorteado: {resultado}</Text>}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", alignItems: "center" },
    titulo: { fontSize: 20, fontWeight: "bold", marginBottom: 20 },
    result: { marginTop: 12, fontSize: 16 }
});
