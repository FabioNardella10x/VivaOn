import NavBar from "@/_components/NavBar";
import SecondaryMenu from "@/_components/SecondaryMenu";
import RoleSwitcher from "@/_components/RoleSwitcher";

const secondaryMenuItems = [
  { label: "HOME", path: "/gestor" },
  { label: "COLABORADORES", path: "/gestor/colaboradores" },
];

export default function GestorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#f5f3fa]">
      <NavBar />
      <SecondaryMenu items={secondaryMenuItems} />
      <main className="max-w-6xl mx-auto w-full px-2 sm:px-8 py-6">
        {children}
      </main>
    </div>
  );
}
