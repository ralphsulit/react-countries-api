import { Fragment, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CountriesContext } from '../../contexts/countries.context';

import Card from '../card/card.component';


import './card-list.styles.scss';

const CardList = () => {
  const { filteredCountries, loading } = useContext(CountriesContext);
  const  navigate  = useNavigate();

  const handleCardClick = (cca3) => {
    //navigate to the CountryDetailPage with cca3 params
    navigate(`/country/${cca3}`);
  };

  if (loading) {
    <h1>Loading....</h1>
  }
  
  return (
    <Fragment>
      <div className='card-container'>
        { 
          filteredCountries.map((country) => (
            <div key={country.cca3} onClick={() => handleCardClick(country.cca3)}>
              <Card  country={country} />
            </div>
          ))
        }
      </div>
    </Fragment>
  );
};

export default CardList;