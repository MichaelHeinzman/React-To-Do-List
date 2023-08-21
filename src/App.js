import LandingPage from "./pages/LandingPage";
import Content from "./pages/Content";

function App() {
  return (
    <main className="flex min-h-screen w-screen flex-col overflow-hidden bg-[#5a7779] transition-all ease-in">
      <LandingPage />
      <Content />
    </main>
  );
}

export default App;
