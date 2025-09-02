import React from "react";

export default function Progresso({ meta, consumo, adicionar }) {
    const porcentagem = Math.min((consumo / meta) * 100, 100).toFixed(0);
    const falta = Math.max(meta - consumo, 0).toFixed(1);

    return (
        <div className="bg-white rounded-2xl shadow p-4 mb-4">
            <h2 className="font-bold text-lg text-blue-700 mb-3">Seu Progresso</h2>
            <p className="mb-2">Sua meta hoje: {meta} L</p>
            <div className="flex flex-col items-center my-4">
                <div className="w-32 h-32 rounded-full border-8 border-blue-400 flex items-center justify-center">
                    <div className="text-center">
                        <p className="text-lg font-bold">{consumo.toFixed(1)} L</p>
                        <p className="text-sm text-gray-500">de {meta} L</p>
                        <p className="text-sm text-blue-600">{porcentagem}%</p>
                    </div>
                </div>
            </div>
            <p className="text-center mb-3">Continue! Falta {falta} L</p>
            <button
                className="w-full bg-blue-600 text-white rounded-lg p-2 font-bold"
                onClick={adicionar}
            >
                + 500 ml
            </button>
        </div>
    );
}
