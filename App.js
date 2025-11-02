import Header from "../src/components/Header";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import Leadership from "./components/Leadership";
import Aside from "./components/Aside";
import Footer from "./components/Footer";
import "./styles/styles.css";

export default function App() {
  return (
    <>
      <Header />
      <NavBar />

      <main>
        <Main />
        <Leadership />
        <Aside />
        <Footer />
      </main>
    </>
  );
}
