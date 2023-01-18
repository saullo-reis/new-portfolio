import { Header } from "./components/header/header";
import './styles/App.sass'
import { About } from "./components/about/about";
import { Projects } from "./components/projects/projects";
import { Skills } from "./components/skills/skill";
import { Email } from "./components/email/email";

function App() {
  return (
    <>
      <Header />
      <About />
      <Projects />
      <Skills />
      <Email/>
    </>
  );
}

export default App;
