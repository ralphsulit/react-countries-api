import { Fragment, useContext } from 'react';

import { CountriesContext } from '../../contexts/countries.context';

import './search-box.component.scss';

const SearchBox = () => {
  const { onSearchChange } = useContext(CountriesContext);

  return (
    <Fragment>
      <section className='p-12'>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
          </div>
          <input onChange={onSearchChange} type="search" id="default-search" className="search-box w-96 p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none" placeholder="Search for a country..." required />
        </div>
      </section>
    </Fragment>
  );
};

export default SearchBox;