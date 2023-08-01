import { Fragment, useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { Moon } from 'react-feather';

import { CountriesContext } from '../../contexts/countries.context';

import './navigation.styles.scss';

const Navigation = () => {
  const { handleResetCountries } = useContext(CountriesContext);

  return (
    <Fragment>
      <section className='nav-container text-sm font-semibold h-20 flex items-center justify-between mx-auto px-3 sm:px-6 lg:px-8'>
        <h1 className='cursor-pointer w-44' onClick={handleResetCountries}>Where in the world?</h1>
        <span className='flex items-center justify-between w-24'><Moon size={18}/>Dark Mode</span>
      </section>
      <Outlet/>
    </Fragment>
  );
};

export default Navigation;