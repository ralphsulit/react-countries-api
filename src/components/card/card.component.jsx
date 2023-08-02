import { Fragment } from 'react';

import './card.styles.scss';

const Card = ({ country }) => {
  const { name, flags, population, region, capital } = country;
  
  return (
    <Fragment>
      <section className='card max-w-sm rounded overflow-hidden shadow-lg bg-lightBgSecondary text-lightText dark:bg-darkBgSecondary dark:text-darkText'>
        <img className='w-full drop-shadow-md' src={flags.png} alt={name.common} />
        <div className='px-6 py-4 bg-lightBgSecondary text-lightText dark:bg-darkBgSecondary dark:text-darkText'>
          <div className='font-bold text-xl mb-2'>{name.common}</div>
          <div className='card-details text-base '>
            <p>Population: <span>{population}</span></p>
            <p>Region: <span>{region}</span></p>
            <p>Capital: <span>{capital}</span></p>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Card;