import Header from "./components/header";
import Main from "./components/main";

export default function App() {
  return (
    <div className="h-screen w-screen flex flex-col gap-y-6 items-center justify-center relative">
      <div className="absolute inset-0 bg-[url('/bg.png')] bg-cover bg-center opacity-10" />
      <div className="w-5xl h-fit flex flex-col bg-gradient-to-br from-black/1 via-black/3 to-black/2 p-9 rounded-3xl border-2 border-white/10 backdrop-blur space-y-8">
        <Header />
        <Main />
      </div>
      <footer>
        <p className="text-sm text-white/70">
          Created by: Hadi Yusuf Al Ghifari
        </p>
      </footer>
    </div>
  );
}
