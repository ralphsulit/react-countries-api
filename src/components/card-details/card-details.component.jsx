
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

  // navigate to homepage
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
      <section className='card-details-container'>
        <button onClick={handleBackButton} className='card-details-btn rounded-sm drop-shadow-lg'><ArrowLeft size={16}/>Back</button>
        <div className='card-details mt-20 flex flex-col item-center'>
          <img src={flags.png} alt={country.name.common} />
          <div className='card-body mt-8'>
            <h1 className='text-xl font-bold'>{name.common}</h1>
            <div className='text-sm leading-6'>
              <div className='my-5'>
                <p><span className='font-semibold'>Native Name: </span>{nativeNameCommon}</p>
                <p><span className='font-semibold'>Population: </span>{population}</p>
                <p><span className='font-semibold'>Region: </span> {region}</p>
                <p><span className='font-semibold'>Sub Region: </span> {subregion}</p>
                <p><span className='font-semibold'>Capital: </span> {capital[0]}</p>
              </div>
              <div className='my-5'>
                <p><span className='font-semibold'>Top Level Domain:</span> {tld?.[0]}</p>
                <p><span className='font-semibold'>Currency:</span> {Object.values(currencies)[0].name}</p>
                <p><span className='font-semibold'>Languages:</span> {Object.values(languages).join(', ')}</p>
              </div>
            </div>
              {borders && borders.length > 0 && (
              <p className='text-sm'>
                <span className='font-semibold'>Border Countries: <br /></span>
                {borders.map((border) => {
                  const borderCountry = countries.find((country) => country.cca3 === border);
                  return borderCountry ? borderCountry.name.common : '';
                }).join(', ')}
              </p>
              )}
            </div>
        </div>
      </section>
    </Fragment>
  );
};

export default CardDetails;