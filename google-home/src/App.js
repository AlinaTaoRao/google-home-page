import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./components/navbar/Navbar.jsx";
import { Header } from "./components/header/Header.jsx";
import { Footer } from "./components/footer/Footer.jsx";
function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Footer />
    </>
  );
}

export default App;
