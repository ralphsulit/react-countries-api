import { Fragment } from 'react';

import SearchBox from '../../components/search-box/search-box.component';
import RegionSelector from '../../components/region-selector/region-selector.component';
import CardList from '../../components/card-list/card-list.component';

import './home.styles.scss';

const Home = () => {
  return (
    <Fragment>
      <section className='home-container h-full'>
        <div className='flex justify-between items-center'>
          <SearchBox />
          <RegionSelector />
        </div>
        <CardList/>
      </section>
    </Fragment>
  );
};

export default Home;