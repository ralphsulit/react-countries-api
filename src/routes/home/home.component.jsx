import { Fragment } from 'react';

import SearchBox from '../../components/search-box/search-box.component';
import CardList from '../../components/card-list/card-list.component';

import './home.styles.scss';

const Home = () => {
  return (
    <Fragment>
      <section className='home-container h-full'>
        <SearchBox />
        <CardList/>
      </section>
    </Fragment>
  );
};

export default Home;