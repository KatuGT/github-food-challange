import './filtro.scss';
import { AiFillTags } from 'react-icons/ai';
import { IoMdArrowDropdown } from 'react-icons/io';
import { chain } from 'lodash';
import { useRef } from 'react';
import { useQueryChangeContext, useQueryContext } from '../../providers/queryProviders';
import useFecth from '../../hook/useFech';

const Filtro = () => {
  const setQuery = useQueryChangeContext();
  const useQuery = useQueryContext();

  const handleShowList = (e) => {
    setQuery((prevState) => ({
      ...prevState,
      showTagList: e.target.checked,
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

  const handleTags = (e) => {
    console.log(e);
  };
  return (
    <div className='wrapper-filtro'>
      <div className='check-fulltime'>
        <input type='checkbox' checked={useQuery.showTagList} onChange={handleShowList} id='fulltime' />
        <label htmlFor='fulltime'>Show tag´s list</label>
      </div>
      <div className='wrapper-tags'>
        <p className='tags-title'>TAGS</p>
        <form className='wrapper-input' onChange={handleLocation}>
          <label htmlFor='tags' id='tags-label-icon'>
            <AiFillTags />
          </label>
          <input
            type='search'
            id='tags'
            placeholder='Easy, African, under 40 minutes...'
          />
        </form>
        <form className='tags-list-wrapper' onChange={handleLocation}>
          {categorias?.sort().map((categoria, index) => (
            <ul className='categorias' key={index}>
              <li className='titulo-categoria' onClick={mostrarItems}>
                <p>{categoria[0]?.replace('_', ' ')}</p>
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
                        id={nombre?.display_name?.replace(' ', '_')}
                        value={nombre?.name}
                        onClick={handleTags}
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
