import axios from 'axios';
import useFech from '../../hook/useFech';
import { useQueryContext } from '../../providers/queryProviders';
import Card from '../Card/Card';
import './listaCards.scss';

const ListaCards = () => {
  const useQuery = useQueryContext();

  const config = {
    params: { from: '0', size: '20', tags: 'under_30_minutes' },
    headers: {
      'X-RapidAPI-Key': '88a864ae53msh999934775aef7fcp1fd42djsn78b996068f97',
      'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
    },
  };

  const actualURL = 'https://tasty.p.rapidapi.com/recipes/list';

  const dataReceta = useFech(actualURL, config);
  const listaRecetas = dataReceta?.data?.data?.results;
  console.log(listaRecetas);

  return (
    <div className='wrapper_cards'>

      {listaRecetas?.map((receta) => (
          <Card
            to={receta?.name}
            key={receta?.name}
            img={receta?.thumbnail_url}
            companyName={receta?.seo_title}
            position={receta?.description}
            scheduleType={receta?.yields}
            location={receta?.credits[0]?.name}
            postedAt={receta?.total_time_tier?.display_tier}
            id={receta?.name}
          />
      ))}
    </div>
  );
};

export default ListaCards;
