import React from "react";

export default function Historico({ dados }) {
    return (
        <div className="bg-white rounded-2xl shadow p-4">
            <h2 className="font-bold text-lg text-blue-700 mb-3">Histórico Diário</h2>
            {dados.length === 0 ? (
                <p className="text-gray-500">Nenhum registro encontrado.</p>
            ) : (
                <ul>
                    {dados.map((item, i) => (
                        <li key={i} className="flex justify-between border-b py-1">
                            <span>{item.dia}</span>
                            <span className="font-bold">{item.qtd} L</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
