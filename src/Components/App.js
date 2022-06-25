import "./App.css";
import Header from "../Layout/Header/Header";
import Footer from "../Layout/Footer/Footer";
import Main from "../Layout/Main/Main";
import Joke from "./Joke/Joke";

function App() {
  return (
    <>
      <Header />
      <Main><Joke/></Main>
      <Footer />
    </>
  );
}

export default App;
