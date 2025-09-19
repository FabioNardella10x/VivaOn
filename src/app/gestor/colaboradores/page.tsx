"use client";
import { useState } from "react";
import EquipeCard from "./EquipeCard";
import { equipesMock, detalhesEquipes } from "@/data/mockedData";

export default function ColaboradoresPage() {
  const [equipeSelecionada, setEquipeSelecionada] = useState<number | null>(
    null
  ); // Inicia com a primeira equipe selecionada

  // Mock de detalhes para cada equipe (poderia ser um objeto separado, mas para exemplo, indexa pelo nome)

  // Seleciona os detalhes da equipe selecionada
  const equipe =
    equipeSelecionada !== null ? equipesMock[equipeSelecionada] : null;
  const detalhesEquipe =
    equipeSelecionada !== null ? detalhesEquipes[equipeSelecionada] : null;
  const R = 46;
  const circunferencia = 2 * Math.PI * R;
  const offset = detalhesEquipe
    ? circunferencia - (detalhesEquipe.desempenho / 100) * circunferencia
    : 0;

  return (
    <>
      <style>{`
          @keyframes fadein { from { opacity: 0; } to { opacity: 1; } }
          @keyframes slideup { from { transform: translateY(40px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
          .animate-fadein { animation: fadein 0.3s ease; }
          .animate-slideup { animation: slideup 0.4s cubic-bezier(.4,1.7,.6,1) 0.05s both; }
        `}</style>
      <div className="p-8">
        <div className="w-full flex justify-center">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 w-full max-w-6xl">
            {equipesMock.map((equipe, index) => (
              <div
                key={index}
                onClick={() => setEquipeSelecionada(index)}
                className="cursor-pointer transition-transform duration-200 hover:scale-105 hover:shadow-xl rounded-2xl"
              >
                <EquipeCard
                  nome={equipe.nome}
                  pessoas={equipe.pessoas}
                  foto={equipe.foto}
                  desempenho={equipe.desempenho}
                  selecionada={equipeSelecionada === index}
                  detalhesEquipe={detalhesEquipes[index]} // <-- aqui!
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
