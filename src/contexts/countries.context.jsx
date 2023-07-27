import { createContext, useState, useEffect } from 'react';

import axios from 'axios';

export const CountriesContext = createContext({
  countries: [],
  searchField: '',
  setSearchField: () => {},
  filteredCountries: [],
});

export const CountriesProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [searchField, setSearchField] = useState('');
  const [filteredCountries, setFilteredCountries] = useState(countries);

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

  //filter countries 
  useEffect(() => {
    const newFilteredCountries = countries.filter((country) => {
      return country.name.common.toLowerCase().includes(searchField);
    });

    setFilteredCountries(newFilteredCountries);
  }, [countries, searchField])

  const onSearchChange = (e) => {
    const searchFieldString = e.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };
  
  const value = {
    countries,
    filteredCountries,
    onSearchChange,
  };


  return <CountriesContext.Provider value={value}>{children}</CountriesContext.Provider>;
};

