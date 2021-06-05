import './App.css';
import { ListaDeNotas } from './components/listaDeNotas';

function App() {
  return (
    <section>
      <form>
        <input type="text" placeholder="Título" />
        <textarea placeholder="Escreva sua nota" />
        <button>Criar nota</button>
      </form>
      <ListaDeNotas />
    </section>
  );
}

export default App;
