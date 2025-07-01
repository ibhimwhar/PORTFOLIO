import { Navigate, Route, Routes } from "react-router"
import Home from "./pages/Home"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { useRef } from "react"

const App = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="transition-colors bg-[#fafafa] text-black dark:bg-[#121212] dark:text-white">


      <Header onhandleScroll={handleScroll} />

      <main className="pt-[16vh] p-6 max-w-xl mx-auto">
        <Routes>
          <Route path="/" element={<Navigate to={"/home"} replace />} />

          <Route path="/home" element={<Home onsectionRef={sectionRef} />} />
        </Routes>
      </main>

      <Footer />

    </div>
  )
}

export default App