import Buscador from './componentes/Buscador/Buscador';
import Filtro from './componentes/Filtro/Filtro';
import Header from './componentes/Header/Header';
import ListaCards from './componentes/ListaCards/ListaCards';

function App() {
  return (
    <div className='App'>
      <Header />
      <Buscador />
      <Filtro />
      <ListaCards/>
    </div>
  );
}

export default App;
