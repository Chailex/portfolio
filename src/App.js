import './App.css';
import Header from './components/header/Header';
import Home from "./components/home/Home";
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Qualification from './components/qualification/Qualification';
import Testimonial from './components/testimonial/Testimonial';
import Contanct from './components/contact/Contanct';
import Footer from './components/footer/Footer';
import Scrollup from './components/scrollup/Scrollup';
import Work from './components/work/Work';

function App() {
  return (
    <>
      <Header/>
      <main className='main'>
        <Home/>
        <About/>
        <Skills/>
        <Services/>
        <Qualification/>
        <Work/>
        <Testimonial/>
        <Contanct/>
      </main>
      <Footer/>
      <Scrollup/>
    </>
  )
}

export default App;
