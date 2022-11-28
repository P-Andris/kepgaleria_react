import './App.css';
import Kep from './Kep';

const kepek = [
  {
    cim: "Crash Bandicoot: It's About Time",
    utvonal: "./kepek/crash1.jpg"
  },
  {
    cim: "Crash Bandicoot: N-Sane Trilogy",
    utvonal: "./kepek/crash2.jpg"
  },
  {
    cim: "Jojo's Bizarre Adventure: All Star Battle R",
    utvonal: "./kepek/jojo1.jpg"
  },
  {
    cim: "Jojo's Bizarre Adventure: Eyes of Heaven",
    utvonal: "./kepek/jojo2.jpg"
  },
  {
    cim: "Piller András",
    utvonal: "./kepek/profile_pic.jpg"
  },
  {
    cim: "Tekken 7",
    utvonal: "./kepek/tekken.jpg"
  }
];

function App() {
  function adatotKiir(adat) {
    console.log(adat)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Képgaléria</h1>
      </header>
      <article className="content">
        {
          kepek.map((kep, id) => {
            return (<Kep kepObj = {kep} key = {id} kepreKattintasFuggveny = {adatotKiir}/>)
          })
        }
      </article>
      <footer><p>Piller András</p></footer>
    </div>
  );
}

export default App;