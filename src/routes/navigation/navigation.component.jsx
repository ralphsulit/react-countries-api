import { Fragment, useContext } from 'react';
import { Outlet } from 'react-router-dom';

import { CountriesContext } from '../../contexts/countries.context';

import './navigation.styles.scss';

const Navigation = () => {
  const { handleResetCountries } = useContext(CountriesContext);

  return (
    <Fragment>
      <section className='nav-container text-lg font-semibold py-4 px-12 h-16'>
        <h1 className='cursor-pointer w-44' onClick={handleResetCountries}>Where in the world?</h1>
      </section>
      <Outlet/>
    </Fragment>
  );
};

export default Navigation;