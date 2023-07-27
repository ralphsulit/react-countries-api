import { Fragment } from 'react';

import Card from '../card/card.component';

import './card-list.styles.scss';

const CardList = ({countries}) => {
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