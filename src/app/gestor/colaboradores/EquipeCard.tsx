import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Button,
} from "@heroui/react";

interface Membro {
  nome: string;
  foto: string;
  pts: number;
}

interface DetalhesEquipe {
  desempenho: number;
  concluidas: number;
  pendentes: number;
  total: number;
  membros: Membro[];
}

interface EquipeCardProps {
  nome: string;
  pessoas: number;
  foto: string;
  desempenho: number; // 0-100
  selecionada?: boolean;
  onClick?: () => void;
  detalhesEquipe?: DetalhesEquipe; // opcional para segurança
}

export default function EquipeCard({
  nome,
  pessoas,
  foto,
  desempenho,
  selecionada,
  onClick,
  detalhesEquipe,
}: EquipeCardProps) {
  const R = 40; // raio do círculo
  const circ = 2 * Math.PI * R;
  const offset = circ * (1 - desempenho / 100);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  // fallback: se não vier detalhesEquipe, usamos os dados básicos
  const detalheDesempenho = detalhesEquipe?.desempenho ?? desempenho;
  const membros = detalhesEquipe?.membros ?? [];
  const total = detalhesEquipe?.total ?? 0;
  const concluidas = detalhesEquipe?.concluidas ?? 0;
  const pendentes = detalhesEquipe?.pendentes ?? 0;

  return (
    <>
      <button
        className={`flex flex-col items-center justify-center bg-white rounded-2xl shadow p-2 w-48 h-48 m-2 border-2 transition-all duration-200 whitespace-normal break-words ${
          selecionada
            ? "border-[#2196f3] ring-2 ring-[#2196f3]/30 scale-105"
            : "border-[#e0e0e0] hover:border-[#2196f3]"
        }`}
        onClick={onOpen}
        style={{ outline: "none" }}
      >
        <div className="flex flex-col items-center w-full">
          {/* Barra de desempenho circular com foto centralizada */}
          <div className="relative w-24 h-24 mb-2 flex-shrink-0">
            <svg width="96" height="96">
              <circle
                cx="48"
                cy="48"
                r={R}
                stroke="#e0e0e0"
                strokeWidth="4"
                fill="none"
              />
              <circle
                cx="48"
                cy="48"
                r={R}
                stroke="#2196f3"
                strokeWidth="4"
                fill="none"
                strokeDasharray={circ}
                strokeDashoffset={offset}
                strokeLinecap="round"
                style={{ transition: "stroke-dashoffset 0.5s" }}
                transform="rotate(-90 48 48)"
              />
            </svg>
            <img
              src={foto}
              alt={nome}
              className="absolute top-1/2 left-1/2 w-16 h-16 rounded-full object-cover border-4 border-white shadow -translate-x-1/2 -translate-y-1/2"
              style={{ boxShadow: "0 2px 8px #0001" }}
            />
          </div>
          <span className="font-bold text-sm text-center w-full break-words mt-1 text-gray-800">
            {nome} {/* <-- corrigido aqui */}
          </span>
          <span className="text-xs text-gray-500">{pessoas} pessoas</span>
        </div>
      </button>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {nome} {/* título do modal usando a prop correta */}
              </ModalHeader>
              <ModalBody>
                <div className="flex flex-col-reverse lg:flex-row gap-6 sm:gap-8 items-center lg:items-start flex-wrap mt-0">
                  {/* Gráfico circular e nome */}
                  <div className="flex flex-col items-center gap-2 sm:gap-4 min-w-[140px] sm:min-w-[180px]">
                    <div className="relative">
                      <svg width="100" height="100" className="sm:hidden">
                        <circle
                          cx="50"
                          cy="50"
                          r="44"
                          stroke="#fff3"
                          strokeWidth="8"
                          fill="none"
                        />
                        <circle
                          cx="50"
                          cy="50"
                          r="44"
                          stroke="#00e6ff"
                          strokeWidth="8"
                          fill="none"
                          strokeDasharray={2 * Math.PI * 44}
                          strokeDashoffset={
                            2 * Math.PI * 44 * (1 - detalheDesempenho / 100)
                          }
                          strokeLinecap="round"
                          style={{ transition: "stroke-dashoffset 0.5s" }}
                          transform="rotate(-90 50 50)"
                        />
                      </svg>
                      <svg width="120" height="120" className="hidden sm:block">
                        <circle
                          cx="60"
                          cy="60"
                          r="54"
                          stroke="#fff3"
                          strokeWidth="8"
                          fill="none"
                        />
                        <circle
                          cx="60"
                          cy="60"
                          r="54"
                          stroke="#00e6ff"
                          strokeWidth="8"
                          fill="none"
                          strokeDasharray={2 * Math.PI * 54}
                          strokeDashoffset={
                            2 * Math.PI * 54 * (1 - detalheDesempenho / 100)
                          }
                          strokeLinecap="round"
                          style={{ transition: "stroke-dashoffset 0.5s" }}
                          transform="rotate(-90 60 60)"
                        />
                      </svg>
                      <span className="absolute text-white font-bold text-base sm:text-lg left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        EQUIPE
                      </span>
                    </div>

                    <span className="text-white text-lg sm:text-xl font-bold mt-2 text-center">
                      {nome} {/* exibe o nome certo */}
                    </span>

                    <div className="flex gap-2 sm:gap-4 mt-2 flex-wrap justify-center">
                      <span className="flex items-center gap-1 sm:gap-2 text-white/80 text-xs sm:text-sm">
                        <span className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#b388ff] inline-block"></span>
                        Concluídas
                      </span>
                      <span className="flex items-center gap-1 sm:gap-2 text-white/80 text-xs sm:text-sm">
                        <span className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#00e6ff] inline-block"></span>
                        Pendentes
                      </span>
                    </div>
                  </div>

                  {/* Membros e métricas */}
                  <div className="flex-1 w-full min-w-[220px]">
                    <div className="grid grid-cols-1 gap-2 sm:gap-4">
                      {membros.map((membro, idx) => (
                        <div
                          key={idx}
                          className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 bg-white/10 rounded-lg p-2 sm:p-3"
                        >
                          <img
                            src={membro.foto}
                            alt={membro.nome}
                            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white object-cover"
                          />
                          <div className="flex-1 w-full">
                            <div className="text-white font-semibold text-sm sm:text-base text-center sm:text-left">
                              {membro.nome}
                            </div>
                            <div className="flex gap-2 sm:gap-4 mt-1 flex-wrap justify-center sm:justify-start">
                              {/* ... seus mini gráficos ... */}
                              <div className="flex flex-col items-center">
                                {/* ex.: valor duro só como exemplo */}
                                <span className="text-[9px] sm:text-[10px] text-white/80">
                                  50%
                                </span>
                                <span className="text-[9px] sm:text-[10px] text-white/60">
                                  Concluído
                                </span>
                              </div>
                              {/* outros indicadores */}
                            </div>
                          </div>
                          <span className="font-bold text-white text-base sm:text-lg ml-2">
                            {membro.pts} pts
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Cards de totais */}
                    <div className="flex flex-row gap-2 sm:gap-4 mt-4 sm:mt-8 justify-center items-center flex-wrap">
                      <div className="bg-white/90 rounded-lg p-3 sm:p-4 min-w-[90px] sm:min-w-[100px] text-center shadow">
                        <div className="text-gray-700 text-xs sm:text-sm">
                          Total
                        </div>
                        <div className="text-xl sm:text-2xl font-bold text-[#7b2ff2]">
                          {total}
                        </div>
                      </div>
                      <div className="bg-white/90 rounded-lg p-3 sm:p-4 min-w-[90px] sm:min-w-[100px] text-center shadow">
                        <div className="text-gray-700 text-xs sm:text-sm">
                          Concluídas
                        </div>
                        <div className="text-xl sm:text-2xl font-bold text-[#b388ff]">
                          {concluidas}
                        </div>
                      </div>
                      <div className="bg-white/90 rounded-lg p-3 sm:p-4 min-w-[90px] sm:min-w-[100px] text-center shadow">
                        <div className="text-gray-700 text-xs sm:text-sm">
                          Pendentes
                        </div>
                        <div className="text-xl sm:text-2xl font-bold text-[#00e6ff]">
                          {pendentes}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ModalBody>

              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
