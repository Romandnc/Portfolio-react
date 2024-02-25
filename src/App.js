
import './App.css';
import Navbar from './componentes/section/Navbar';
import Footer from './componentes/section/Footer';
import Project from './componentes/section/Projects';
import Skills from './componentes/section/Skills';
import Presentation from './componentes/section/Presentation';
function App() {
  return (
    <div className="App">
     
    <Navbar/>
    <Presentation/>
    <Skills/>
    <Project/>
    <Footer/>
    </div>
  );
}

export default App;
