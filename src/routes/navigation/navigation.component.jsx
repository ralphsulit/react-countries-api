import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

import './navigation.styles.scss';

const Navigation = () => {
  return (
    <Fragment>
      <section className='nav-container text-lg font-semibold py-4 px-12 h-16'>
        <h1>Where in the world?</h1>
      </section>
      <Outlet/>
    </Fragment>
  );
};

export default Navigation;