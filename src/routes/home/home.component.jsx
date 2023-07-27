import { Fragment, useState, useEffect } from 'react';

import axios from 'axios';

import SearchBox from '../../components/search-box/search-box.component';
import CardList from '../../components/card-list/card-list.component';

import './home.styles.scss';

const Home = () => {
  const [countries, setCountries] = useState([]);

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('https://restcountries.com/v3.1/all/');
        console.log(res.data);
        setCountries(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  

  return (
    <Fragment>
      <section className='home bg-slate-800 h-full'>
        <SearchBox />
        <CardList countries={countries} />
      </section>
    </Fragment>
  );
};

export default Home;