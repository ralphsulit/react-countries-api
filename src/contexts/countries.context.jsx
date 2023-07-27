import { createContext, useState, useEffect } from 'react';

import axios from 'axios';

export const CountriesContext = createContext({
  countries: [],
});

export const CountriesProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const value = { countries };

  //fetch data from Rest Countries API  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('https://restcountries.com/v3.1/all/');
        setCountries(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return <CountriesContext.Provider value={value}>{children}</CountriesContext.Provider>;
};

