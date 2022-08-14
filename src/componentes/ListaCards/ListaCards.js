import useFech from '../../hook/useFech';
import { useQueryContext } from '../../providers/queryProviders';
import Card from '../Card/Card';
import './listaCards.scss';

const ListaCards = () => {
  const useQuery = useQueryContext();
  console.log(useQuery);

  const actualURL = `https://cors-anywhere.herokuapp.com/https://serpapi.com/search.json?engine=google_jobs&api_key=f30043ba5541ffb1f98dec1d83e179af811d6d84c34caa525d80f0b82609202a&q=${useQuery.q}&location=${useQuery.location}`;

  const dataTrabajo = useFech(actualURL);
  const listaTrabajos = dataTrabajo?.data?.data?.jobs_results;
  const fullTimeJobs = listaTrabajos?.filter(trabajo => trabajo?.detected_extensions.schedule_type !== 'Full-time');
  console.log(fullTimeJobs);
  return (
    <div className='wrapper_cards'>

      {listaTrabajos?.map((trabajo) => (
          <Card key={trabajo?.job_id}
            img={trabajo?.thumbnail}
            companyName={trabajo?.company_name}
            position={trabajo?.title}
            scheduleType={trabajo?.detected_extensions?.schedule_type}
            location={trabajo?.location}
            postedAt={trabajo?.detected_extensions?.posted_at}
          />
      ))}
    </div>
  );
};

export default ListaCards;
