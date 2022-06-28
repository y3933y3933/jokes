import Header from "../layout/Header/Header";
import Footer from "../layout/Footer/Footer";
import Main from "../layout/Main/Main";
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
