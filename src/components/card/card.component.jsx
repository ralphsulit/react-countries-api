
import { Fragment } from 'react';

import './card.styles.scss';

const Card = ({ country}) => {
  const { name, flags, population, region, capital } = country;

  return (
    <Fragment>
      <section className='card'>
        <img src={flags.png} alt={name.common} />
        <h1>{name.common}</h1>
        <p>Population: {population}</p>
        <p>Region: {region}</p>
        <p>Capital: {capital}</p>
      </section>
    </Fragment>
  );
};

export default Card;