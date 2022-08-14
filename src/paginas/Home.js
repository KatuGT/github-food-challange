import Buscador from '../componentes/Buscador/Buscador';
import Filtro from '../componentes/Filtro/Filtro';
import Header from '../componentes/Header/Header';
import ListaCards from '../componentes/ListaCards/ListaCards';
import Main from '../componentes/Main/Main';

const Home = () => {
  return (
    <>
      <Header />
      <Buscador />
      <Main>
        <Filtro />
        <ListaCards />
      </Main>
    </>
  );
};

export default Home;
