import './buscador.scss';

const Buscador = () => {
  return (
    <div className='wrapper-buscador'>
        <div className="wrapper-input">
            <input type="search" placeholder='Title, companies, expertise or benefits' />
            <button type="submit"className='button-search' >Search</button>
        </div>
    </div>
  );
};

export default Buscador;
