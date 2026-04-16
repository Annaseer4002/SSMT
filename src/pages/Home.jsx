
import Header from "../components/Header.jsx"
import MainContent from "../components/Main.jsx"
import Footer from "../components/Footer.jsx"
import TravelHeader from "../components/travel header.jsx"
import Travels from "../components/travels.jsx"
import Jokes from "../components/jokes.jsx"

export default function Home() {
  return (
    <>
    <Header />
    <MainContent />
    <TravelHeader />
    <Travels />
    <Jokes />
    <Footer />
    </>
  )
}
