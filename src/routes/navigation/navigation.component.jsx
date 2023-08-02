import { Fragment, useContext, useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Moon, Sun } from 'react-feather';

import { CountriesContext } from '../../contexts/countries.context';

import './navigation.styles.scss';

const Navigation = () => {
  const { handleResetCountries } = useContext(CountriesContext);

  const [theme, setTheme] = useState('light');
  

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }

  return (
    <Fragment>
      <section className='nav-container drop-shadow text-xs sm:text-sm font-semibold bg-lightBgSecondary text-lightText dark:bg-darkBgSecondary dark:text-darkText'>
        <div className='element-container flex items-center justify-between mx-auto h-20 max-w-xs md:max-w-3xl lg:max-w-screen-2xl'>
          <h1 className='cursor-pointer w-44' onClick={handleResetCountries}>Where in the world?</h1>
          <span className='cursor-pointer flex items-center justify-between w-24' onClick={handleThemeSwitch}>
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
          </span>
        </div>
      </section>
      <Outlet/>
    </Fragment>
  );
};

export default Navigation;