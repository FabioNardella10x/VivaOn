"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import RoleSwitcher from "./RoleSwitcher";
interface NavBarProps {
  greeting?: boolean;
}

export default function NavBar({ greeting = true }: NavBarProps) {
  const [nome, setNome] = useState("");
  const router = useRouter();

  useEffect(() => {
    const nomeSalvo = localStorage.getItem("nomeUsuario") || "";
    setNome(nomeSalvo);
  }, []);

  return (
    <nav className="flex flex-col sm:flex-row items-center sm:justify-between gap-4 px-4 sm:px-8 py-3 bg-[#f5f3fa] shadow-sm w-full relative mb-2">
      <div className="flex items-center gap-2 sm:gap-4 w-full sm:w-auto justify-between sm:justify-start">
        <div className="flex items-center gap-2 sm:gap-4">
          <span
            className="text-[40px] sm:text-[52px] font-bold text-[#663399] leading-none cursor-pointer transition-colors duration-200 hover:text-[#4b2178] focus:text-[#4b2178]"
            style={{
              fontFamily:
                "Montserrat, Inter, Segoe UI, Roboto, Arial, sans-serif",
              letterSpacing: "0.01em",
            }}
            onClick={() => router.push("/")}
            tabIndex={0}
            role="button"
            aria-label="Voltar para a página inicial"
          >
            vivo
          </span>
        </div>
      </div>
      <RoleSwitcher />
      {greeting && (
        <div className="hidden sm:block text-[#663399] font-semibold text-base sm:text-lg w-full sm:w-auto text-center sm:text-right">
          Olá, {nome || "usuário"}
        </div>
      )}
    </nav>
  );
}
