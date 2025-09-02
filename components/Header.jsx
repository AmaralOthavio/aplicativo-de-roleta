import React from "react";

export default function Header() {
    return (
        <div className="flex flex-col items-center py-4">
            <img src="/logo.png" alt="Logo" className="w-14 h-14 mb-2" />
            <h1 className="text-blue-600 font-bold text-xl">Gota d'Água</h1>
        </div>
    );
}
