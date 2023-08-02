import { Fragment, useState, useContext } from 'react';

import { CountriesContext } from '../../contexts/countries.context';

import './region-selector.styles.scss';

const RegionSelector = () => {
  const [isActive, setIsActive] = useState(false);
  const {regions, handleFilterByRegion} = useContext(CountriesContext);

  const toggleHandler = () => {
    setIsActive(!isActive);
  };

  const handleMenuItem = (region) => {
    setIsActive(false);
    handleFilterByRegion(region);
  };

  return (
    <Fragment>
      <section className='relative inline-block pl-2.5 my-5 md:my-0 md:p-2.5'>
        <div>
          <button
            id='region-btn'
            className='region-selector-btn rounded-lg flex items-center justify-between '
            type='button'
            onClick={toggleHandler}
          >
            Filter By Region
            <svg
              className={`-mr-1 h-5 w-5 text-gray-400 ${isActive ? 'tranform rotate-180' : ''}`}
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd"   
              />
            </svg>
          </button>
        </div>

        {isActive && (
          <div className='absolute menu-item rounded-lg mt-1' role='menu' aria-orientation='vertical' aria-labelledby='region-btn' tabIndex='-1'>
            <div className='py-1' role='none'>
              {
                regions.map((region, i) => (
                  <button
                    key={i}
                    className="block px-4 py-2 text-sm"
                    role='menuitem'
                    tabIndex='-1'
                    onClick={() => handleMenuItem(region)}
                  >
                    {region}
                  </button>
                ))
              }
            </div>
          </div>
        )}
      </section>
    </Fragment>
  );
};

export default RegionSelector;