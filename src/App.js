import Buscador from './componentes/Buscador/Buscador';
import Card from './componentes/Card/Card';
import Filtro from './componentes/Filtro/Filtro';
import Header from './componentes/Header/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Buscador/>
      <Filtro/>
      <section className="wrapper-card">
        <Card/>
      </section>
    </div>
  );
}

export default App;
