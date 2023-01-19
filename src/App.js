import { Header } from "./components/header/header";
import './styles/App.sass'
import { About } from "./components/about/about";
import { Projects } from "./components/projects/projects";
import { Skills } from "./components/skills/skill";
import { Email } from "./components/email/email";
import { Footer } from "./components/footer/footer";

function App() {
  return (
    <>
      <Header />
      <About />
      <Projects />
      <Skills />
      <Email/>
      <Footer/>
    </>
  );
}

export default App;
