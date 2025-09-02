import React, { useState } from "react";
import Header from "./components/Header";
import FormCadastro from "./components/FormCadastro";
import Progresso from "./components/Progresso";
import Historico from "./components/Historico";

export default function App() {
    const [meta, setMeta] = useState(null);
    const [consumo, setConsumo] = useState(0);
    const [historico, setHistorico] = useState([
        { dia: "Hoje", qtd: 2.5 },
        { dia: "Ontem", qtd: 2.0 },
        { dia: "Segunda", qtd: 2.4 },
        { dia: "Domingo", qtd: 3.0 },
        { dia: "Sábado", qtd: 2.8 },
    ]);

    function calcularMeta({ peso }) {
        const metaAgua = (peso * 35) / 1000; // 35ml por kg
        setMeta(metaAgua.toFixed(1));
    }

    function adicionarConsumo() {
        setConsumo(consumo + 0.5);
    }

    return (
        <div className="min-h-screen bg-gray-100 p-4 max-w-md mx-auto">
            <Header />
            {!meta ? (
                <FormCadastro onCalcular={calcularMeta} />
            ) : (
                <>
                    <Progresso meta={meta} consumo={consumo} adicionar={adicionarConsumo} />
                    <Historico dados={historico} />
                </>
            )}
        </div>
    );
}
