import Buscador from '../componentes/Buscador/Buscador';
import Filtro from '../componentes/Filtro/Filtro';
import ListaCards from '../componentes/ListaCards/ListaCards';
import Main from '../componentes/MainHome/Main';

const Home = () => {
  return (
    <>
      <Buscador />
      <Main>
        <Filtro />
        <ListaCards />
      </Main>
    </>
  );
};

export default Home;
