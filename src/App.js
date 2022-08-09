import Buscador from './componentes/Buscador/Buscador';
import Filtro from './componentes/Filtro/Filtro';
import Header from './componentes/Header/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Buscador/>
      <Filtro/>
    </div>
  );
}

export default App;
