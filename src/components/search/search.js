import React, { useState } from 'react';
import { AsyncPaginate } from "react-select-async-paginate"
import { geoApiOptions } from '../../api';
import { GEO_API_URL } from '../../api';

const Search = ({onSearchChange}) => {

  const [search, setSearch] = useState(null);

  const loadOptions = (inputValue) => {
    // minPopulation to set the limit for city searching. i.e, the weather app would be generated for cities with at least 100000 population count
    return fetch(`${GEO_API_URL}/cities?minPopulation=100000&namePrefix=${inputValue}`, geoApiOptions)
    .then(response => response.json())
    .then(response => {
        return {
            options: response.data.map((city) => {
                return {
                    value: `${city.latitude} ${city.longitude}` ,
                    label: `${city.name} ${city.countryCode}` ,
                }
            })
        }
    })
    .catch(err => console.error(err))
  }

//   this will retrieve the searched data handled on the AsyncPaginate component
  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  }

  return (
    <AsyncPaginate
    // city to display weather
        placeholder="Search for a City"
        debounceTimeout={600}
        value={search}
        onChange={handleOnChange}
        // loadoptions to load options of uncompleted input eg; Lo -> London, Los Angeles,etc.
        loadOptions={loadOptions}
    
    />
  )
}

export default Search;
