
import { Fragment, useContext, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {ArrowLeft}  from 'react-feather';

import { CountriesContext } from '../../contexts/countries.context';
import { languageCodes } from '../../utils/language-codes';


import './card-details.scss';

const CardDetails = () => {
  const { cca3 } = useParams();
  const { countries } = useContext(CountriesContext);
  
  const [countryDataLoaded, setCountryDataLoaded] = useState(false);
  const [country, setCountry] = useState(null);

  const navigate = useNavigate();

  // Find the country object that matches the cca3 parameter
  useEffect(() => {
    const selectedCountry = countries.find((country) => country.cca3 === cca3);
    if (selectedCountry) {
      setCountry(selectedCountry);
      setCountryDataLoaded(true);
    }
  }, [cca3, countries])

  // Check if the country object exists and contains the required properties
  if (!countryDataLoaded) {
    return <div>Loading...</div>;
  }

  // Loop through languageCodes to find the common name of the country in the specified language, if available.
  let nativeNameCommon;

  for (const code of languageCodes) {
    if (country.name.nativeName[code]?.common) {
      nativeNameCommon = country.name.nativeName[code]?.common;
      break;
    }
  }

  // Get back from previous page
  const handleBackButton = () => {
    navigate('/');
  };

    // Destructure the details from the country object
  const {
    name,
    flags,
    languages,
    region,
    subregion,
    capital,
    population,
    currencies,
    tld,
    borders,
  } = country;


  return (
    <Fragment>
      <button onClick={handleBackButton}><ArrowLeft />Back</button>
      <section>
        <div>
          <img src={flags.png} alt={country.name.common} />
        </div>
        <h1>{name.common}</h1>
        <p>Region: {region}</p>
        <p>Sub Region: {subregion}</p>
        <p>Capital: {capital[0]}</p>
        <p>Population: {population}</p>
        <p>Languages: {Object.values(languages).join(', ')}</p>
        <p>Currency: {Object.values(currencies)[0].name}</p>
        <p>Native Name: {nativeNameCommon}</p>
        <p>Top Level Domain: {tld?.[0]}</p>
        {borders && borders.length > 0 && (
          <p>Border Countries: {borders.map((border) => {
            const borderCountry = countries.find((country) => country.cca3 === border);
            return borderCountry ? borderCountry.name.common : '';
          }).join(', ')}</p>
        )}
      </section>
    </Fragment>
  );
};

export default CardDetails;