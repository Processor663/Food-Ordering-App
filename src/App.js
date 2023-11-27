import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Section_five from './components/Section_five/Section_five';
import Section_four from './components/Section_four/Section_four';
import Section_three from './components/Section_three/Section_three';
import Section_two from './components/Section_two/Section_two';


function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <Hero />
        <Section_two />
        <Section_three />
        <Section_four />
        <Section_five />
      </main>
     



    </div>
  );
}

export default App;
