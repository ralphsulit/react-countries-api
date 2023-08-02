import { Fragment } from 'react';

import SearchBox from '../../components/search-box/search-box.component';
import RegionSelector from '../../components/region-selector/region-selector.component';
import CardList from '../../components/card-list/card-list.component';

import './home.styles.scss';

const Home = () => {
  return (
    <Fragment>
      <section className='home-container h-full bg-lightBg text-lightText dark:bg-darkBg dark:text-darkText'>
        <div className='home-element flex flex-col w-full max-w-xs mx-auto md:max-w-3xl lg:max-w-screen-2xl py-5'>
          <SearchBox />
          <RegionSelector />
        </div>
        <CardList/>
      </section>
    </Fragment>
  );
};

export default Home;