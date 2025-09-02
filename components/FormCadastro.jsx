import React, { useState } from "react";

export default function FormCadastro({ onCalcular }) {
    const [nome, setNome] = useState("");
    const [peso, setPeso] = useState("");
    const [altura, setAltura] = useState("");

    return (
        <div className="bg-white rounded-2xl shadow p-4 mb-4">
            <h2 className="font-bold text-lg text-blue-700 mb-3">Seus Dados</h2>
            <input
                className="w-full border rounded-lg p-2 mb-2"
                placeholder="Nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
            />
            <input
                className="w-full border rounded-lg p-2 mb-2"
                placeholder="Peso (em kg)"
                type="number"
                value={peso}
                onChange={(e) => setPeso(e.target.value)}
            />
            <input
                className="w-full border rounded-lg p-2 mb-2"
                placeholder="Altura (cm)"
                type="number"
                value={altura}
                onChange={(e) => setAltura(e.target.value)}
            />
            <button
                className="w-full bg-blue-600 text-white rounded-lg p-2 font-bold"
                onClick={() => onCalcular({ nome, peso, altura })}
            >
                Calcular Meta
            </button>
        </div>
    );
}
