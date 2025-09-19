"use client";
import { useEffect, useState } from "react";
import {
  Calendar,
  ClipboardList,
  BellDot,
  CalendarPlus,
  StickyNote,
  BarChart2,
  TrendingUp,
  MessageSquare,
} from "lucide-react";

export default function GestorHome() {
  const [nome, setNome] = useState<string>("");
  useEffect(() => {
    const nomeSalvo = localStorage.getItem("nomeUsuario") || "";
    setNome(nomeSalvo);
  }, []);

  // Mock de dados
  const reunioesHoje = 2;
  const reunioesMes = 5;
  const metasCumpridas = 80;

  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-[#f5f3fa] py-6 px-2">
      <p className="text-2xl sm:text-3xl font-bold text-[#663399] mb-6 text-center">
        Olá, Gestor{nome ? ` ${nome}` : ""}!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
        {/* Resumo do Dia */}
        <div className="flex flex-col bg-white rounded-xl p-5 shadow-sm gap-2">
          <p className="text-lg font-bold text-[#663399] mb-2">Resumo do Dia</p>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3 text-base text-[#663399]">
              <Calendar size={28} />
              <span className="font-semibold text-black">
                Você tem{" "}
                <span className="text-[#663399] font-bold">
                  {reunioesHoje} reuniões
                </span>{" "}
                hoje
              </span>
            </div>
            <div className="flex items-center gap-3 text-base text-[#663399]">
              <ClipboardList size={28} />
              <span className="font-semibold text-black">
                1 tarefa com prazo{" "}
                <span className="text-[#663399] font-bold">AMANHÃ</span>
              </span>
            </div>
            <div className="flex items-center gap-3 text-base text-[#663399]">
              <BellDot size={28} />
              <span className="font-semibold text-black">
                3 notificações não lidas
              </span>
            </div>
          </div>
        </div>

        {/* Atalhos Rápidos */}
        <div className="flex flex-col bg-white rounded-xl p-5 shadow-sm gap-3">
          <p className="text-lg font-bold text-[#663399] mb-2">
            Atalhos Rápidos
          </p>
          <div className="flex flex-row gap-3 justify-between">
            <button className="flex flex-col items-center justify-center bg-[#ede9f7] hover:bg-[#e0d6f7] rounded-lg p-3 w-full transition-colors">
              <CalendarPlus size={28} color="#663399" />
              <span className="font-semibold text-black text-sm mt-1">
                Agendar reunião
              </span>
            </button>
            <button className="flex flex-col items-center justify-center bg-[#ede9f7] hover:bg-[#e0d6f7] rounded-lg p-3 w-full transition-colors">
              <StickyNote size={28} color="#663399" />
              <span className="font-semibold text-black text-sm mt-1">
                Criar lembrete
              </span>
            </button>
            <button className="flex flex-col items-center justify-center bg-[#ede9f7] hover:bg-[#e0d6f7] rounded-lg p-3 w-full transition-colors">
              <BarChart2 size={28} color="#663399" />
              <span className="font-semibold text-black text-sm mt-1">
                Gerar relatório
              </span>
            </button>
          </div>
        </div>

        {/* Indicadores Pessoais */}
        <div className="flex flex-col bg-white rounded-xl p-5 shadow-sm gap-2">
          <p className="text-lg font-bold text-[#663399] mb-2">
            Indicadores Pessoais
          </p>
          <div className="flex items-center gap-3 text-base text-[#663399]">
            <Calendar size={24} />
            <span className="font-semibold text-black">
              {reunioesMes} REUNIÕES ESTE MÊS
            </span>
          </div>
          <div className="flex items-center gap-3 text-base text-[#663399]">
            <TrendingUp size={24} />
            <span className="font-semibold text-black">
              {metasCumpridas}% das metas cumpridas
            </span>
          </div>
          <div className="flex items-center gap-3 text-base text-[#663399]">
            <MessageSquare size={24} />
            <span className="font-semibold text-black">Feedbacks</span>
          </div>
        </div>

        {/* Agenda Integrada */}
        <div className="flex flex-col bg-white rounded-xl p-5 shadow-sm gap-2">
          <p className="text-lg font-bold text-[#663399] mb-2">
            Agenda Integrada
          </p>
          <div className="w-full grid grid-rows-2 grid-cols-7 gap-y-1 text-center text-black font-semibold text-lg mt-2">
            {/* Dias da semana */}
            <span className="text-[#663399]">D</span>
            <span className="text-[#663399]">S</span>
            <span className="text-[#663399]">T</span>
            <span className="text-[#663399]">Q</span>
            <span className="text-[#663399]">Q</span>
            <span className="text-[#663399]">S</span>
            <span className="text-[#663399]">S</span>
            {/* Números */}
            <span>29</span>
            <span>30</span>
            <span>31</span>
            <span className="bg-[#663399] text-white rounded px-2">01</span>
            <span>02</span>
            <span>03</span>
            <span>04</span>
          </div>
        </div>
      </div>
    </div>
  );
}
