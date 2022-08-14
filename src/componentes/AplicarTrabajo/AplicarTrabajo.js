import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import './aplicarTrabajo.scss';

const AplicarTrabajo = () => {
  return (
    <div className='aplicar'>
      <Link to='/' className='back-search'>
        <BsArrowLeft />
        <span>Back to search</span>
      </Link>
      <p className='how-apply'>HOW TO APPLY</p>
      <p className='apply-text'>
        Please email a copy of your resume and online portfolio to
        <span>wes@kasisto.com</span> & CC <span>eric@kasisto.com</span>
      </p>
    </div>
  );
};

export default AplicarTrabajo;
