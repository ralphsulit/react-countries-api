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
      <section className='container mx-auto'>
        <div className='grid grid-cols-1 gap-28 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 justify-items-center'>
          { 
            filteredCountries.map((country) => (
              <div
                key={country.cca3}
                onClick={() => handleCardClick(country.cca3)}
              >
                <Card  country={country} />
              </div>
            ))
          }
        </div>
      </section>
    </Fragment>
  );
};

export default CardList;