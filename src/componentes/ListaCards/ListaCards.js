import useFech from '../../hook/useFech';
import { useQueryContext } from '../../providers/queryProviders';
import Card from '../Card/Card';
import IconCargando from '../../assets/imagenes/IconCargando.gif';
import './listaCards.scss';

const ListaCards = () => {
  const useQuery = useQueryContext();

  const key = process.env.REACT_APP_SECRET_KEY;

  const config = {
    params: { from: '0', size: '20', tags: 'under_30_minutes' },
    headers: {
      'X-RapidAPI-Key': key,
      'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
    },
  };

  const actualURL = 'https://tasty.p.rapidapi.com/recipes/list';

  const dataReceta = useFech(actualURL, config);
  const listaRecetas = dataReceta?.data?.data?.results;
  console.log(listaRecetas);

  return (
    <div className='wrapper_cards'>
      {
      listaRecetas
        ? listaRecetas?.map((receta) => (
          <Card
            to={receta?.id}
            key={receta?.id}
            img={receta?.thumbnail_url}
            recipeName={receta?.seo_title ? receta?.seo_title : receta?.name}
            description={receta?.description}
            yields={receta?.yields}
            credits={receta?.credits[0]?.name}
            totalTime={receta?.total_time_tier?.display_tier}
            id={receta?.id}
          />
        ))
        : <div className='cargando'>
          <img src={IconCargando} alt="Icono cargando" />
          </div>}
    </div>
  );
};

export default ListaCards;
