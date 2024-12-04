import { About } from '../about/about';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';
import { Portfolio } from '../portfolio/portfolio';
import { Skills } from '../skills/skills';
import './App.css';

function App() {
  return (
    <div>
      <Header />

      <About />
      <Skills />
      <Portfolio />

      <Footer />

      {/* <div style={{height: "100vh"}}></div> */}
    </div>
  );
}

export default App;
