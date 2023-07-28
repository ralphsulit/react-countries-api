import { createContext, useState, useEffect } from 'react';

import axios from 'axios';

export const CountriesContext = createContext({
  countries: [],
  searchField: '',
  setSearchField: () => {},
  filteredCountries: [],
  regions: [],
  setRegions: () => {}
});

export const CountriesProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [searchField, setSearchField] = useState('');
  const [filteredCountries, setFilteredCountries] = useState(countries);
  const [regions, setRegions] = useState([]);
  const [loading, setLoading] = useState(true);

  // fetch data from Rest Countries API  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('https://restcountries.com/v3.1/all/');
        setCountries(res.data);
        setLoading(false);

        //get regions from data
        const uniqueRegions = [...new Set(res.data.map(country => country.region))];
        setRegions(uniqueRegions);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // filter countries 
  useEffect(() => {
    const newFilteredCountries = countries.filter((country) => {
      return country.name.common.toLowerCase().includes(searchField);
    });

    setFilteredCountries(newFilteredCountries);
  }, [countries, searchField]);

  // filter countries by region
  const handleFilterByRegion = (region) => {
    if (region === '') {
      setFilteredCountries(countries);
    } else {
      const filtered = countries.filter((country) => country.region === region);
      setFilteredCountries(filtered);
    }
  };

  // reset filtered countries
  const handleResetCountries = () => {
    setFilteredCountries(countries);
  };


  // handle the change event of the search input field.
  const onSearchChange = (e) => {
    const searchFieldString = e.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };
  
  const value = {
    countries,
    filteredCountries,
    regions,
    loading,
    onSearchChange,
    handleFilterByRegion,
    handleResetCountries
  };


  return <CountriesContext.Provider value={value}>{children}</CountriesContext.Provider>;
};

