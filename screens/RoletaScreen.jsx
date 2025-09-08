import React, { useState } from "react";
import { SafeAreaView, Text } from "react-native";
import SpinningWheel from "../components/SpinningWheel";

export default function RoletaScreen() {
    const [resultado, setResultado] = useState(null);

    return (
        <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <SpinningWheel
                size={320}
                items={["Batata","Arroz","Churrasco","Jacaré","Capivara","Cupim","Lasanha"]}
                onSelect={(r) => setResultado(r.label)}
            />
            {resultado && <Text style={{ marginTop: 12 }}>Sorteado: {resultado}</Text>}
        </SafeAreaView>
    );
}
