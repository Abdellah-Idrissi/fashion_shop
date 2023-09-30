import Header from "@/components/main/Header";
import Footer from "@/components/main/Footer";
import { prata } from "../layout";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col h-screen  pt-[64px]">
      <Header font={prata.className}/>
      {children}
      <Footer font={prata.className} />
    </div>
  );
}
