import { Fragment, useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { Moon } from 'react-feather';

import { CountriesContext } from '../../contexts/countries.context';

import './navigation.styles.scss';

const Navigation = () => {
  const { handleResetCountries } = useContext(CountriesContext);

  return (
    <Fragment>
      <section className='nav-container text-xs sm:text-sm font-semibold'>
        <div className='element-container flex items-center justify-between h-20 lg:max-w-7xl lg:mx-auto'>
          <h1 className='cursor-pointer w-44' onClick={handleResetCountries}>Where in the world?</h1>
          <span className='flex items-center justify-between w-24'><Moon size={18}/>Dark Mode</span>
        </div>
      </section>
      <Outlet/>
    </Fragment>
  );
};

export default Navigation;