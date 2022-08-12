import Buscador from './componentes/Buscador/Buscador';
import Filtro from './componentes/Filtro/Filtro';
import Header from './componentes/Header/Header';
import ListaCards from './componentes/ListaCards/ListaCards';
import { QueryProvider } from './providers/queryProviders';

function App() {
  return (
   <QueryProvider>
    <div className='App'>
      <Header />
      <Buscador />
      <Filtro />
      <ListaCards/>
    </div>
   </QueryProvider>
  );
}

export default App;
