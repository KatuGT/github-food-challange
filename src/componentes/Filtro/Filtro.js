import './filtro.scss';
import { BiWorld } from 'react-icons/bi';
import { IoMdArrowDropdown } from 'react-icons/io';
import { chain } from 'lodash';
import { useRef } from 'react';
import { useQueryChangeContext } from '../../providers/queryProviders';
import useFecth from '../../hook/useFech';

const Filtro = () => {
  const setQuery = useQueryChangeContext();

  const handleTime = (e) => {
    setQuery((prevState) => ({
      ...prevState,
      isFullTime: e.target.checked,
    }));
  };

  const handleLocation = (e) => {
    setQuery((prevState) => ({
      ...prevState,
      location: e.target.value,
    }));
  };

  const key = process.env.REACT_APP_SECRET_KEY;

  const config = {
    headers: {
      'X-RapidAPI-Key': key,
      'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
    },
  };

  const { data } = useFecth('https://tasty.p.rapidapi.com/tags/list', config);
  const tags = data?.data?.results;

  const categorias = chain(tags).groupBy('type').toPairs().value();

  const listado = useRef();
  const mostrarItems = (e) => {
    const { target } = e;
    const tituloCategoria = target.parentElement.className === 'titulo-categoria';
    const listaContenedoratitulo = target.className === 'titulo-categoria';

    if (tituloCategoria) {
      target.parentElement.nextElementSibling.classList.toggle('mostrar');
    } else if (listaContenedoratitulo) {
      target.nextElementSibling.classList.toggle('mostrar');
    }
  };
  return (
    <div className='wrapper-filtro'>
      <div className='check-fulltime'>
        <input type='checkbox' onChange={handleTime} id='fulltime' />
        <label htmlFor='fulltime'>Full time</label>
      </div>
      <div className='wrapper-locacion'>
        <p className='location-title'>LOCATION</p>
        <form className='wrapper-input' onChange={handleLocation}>
          <label htmlFor='location' id='world-label-icon'>
            <BiWorld />
          </label>
          <input
            type='search'
            id='location'
            htmlFor='world-label-icon'
            placeholder='City, state, zip code or country'
          />
        </form>
        <form className='location-radiobtns' onChange={handleLocation}>
          {categorias?.sort().map((categoria, index) => (
            <ul className='categorias' key={index}>
              <li className='titulo-categoria' onClick={mostrarItems} >
                <p>{categoria[0].replace('_', ' ')}</p>
                <IoMdArrowDropdown />
              </li>
              <ul className='lista-categoria' ref={listado}>
                {categoria[1]
                  .sort((x, y) => {
                    return x.display_name.localeCompare(y.display_name);
                  })
                  .map((nombre, indice) => (
                    <li className='nombre-categoria' key={indice} >
                      <input
                        type='checkbox'
                        id={nombre.display_name.replace(' ', '_')}
                        value={nombre.display_name}
                      />
                      <label
                        htmlFor={nombre.display_name.replace(' ', '_')}
                        className='label-nombre'
                      >
                        {nombre.display_name}
                      </label>
                    </li>
                  ))}
              </ul>
            </ul>
          ))}
        </form>
      </div>
    </div>
  );
};

export default Filtro;
