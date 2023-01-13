import { Header } from "./components/header/header";
import './styles/App.sass'
import { About } from "./components/about/about";
import { Projects } from "./components/projects/projects";

function App() {
  return (
    <>
      <Header />
      <About />
      <Projects/>
    </>
  );
}

export default App;
