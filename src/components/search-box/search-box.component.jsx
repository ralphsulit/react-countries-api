import { Fragment, useContext } from 'react';

import { CountriesContext } from '../../contexts/countries.context';

import './search-box.component.scss';

const SearchBox = () => {
  const { onSearchChange } = useContext(CountriesContext);

  return (
    <Fragment>
      <section>
        <div className="relative p-2.5">
          <div className="absolute inset-y-0 left-0 flex items-center pl-6 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
          </div>
          <input onChange={onSearchChange} type="search" id="default-search" className="search-box w-72 p-4 pl-14 text-sm rounded-lg outline-none" placeholder="Search for a country..." required />
        </div>
      </section>
    </Fragment>
  );
};

export default SearchBox;