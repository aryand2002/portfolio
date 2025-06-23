import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Project from './Project';
import Contact from './Contact';



function App() {
  return (
    <div>
      <Header></Header>
      <Home/>
      <About/>
      <Skills/>
      <Project/>
      <Contact/>

    </div>
  );
}

export default App;
