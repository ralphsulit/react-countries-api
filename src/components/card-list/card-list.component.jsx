import { Fragment, useContext } from 'react';

import { CountriesContext } from '../../contexts/countries.context';

import Card from '../card/card.component';


import './card-list.styles.scss';

const CardList = () => {
  const { countries } = useContext(CountriesContext);
  
  return (
    <Fragment>
      <div className='card-container'>
          { 
            countries.map((country) => (
              <Card key={country.cca3} country={country} />
            ))
          }
        </div>
    </Fragment>
  );
};

export default CardList;