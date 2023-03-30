import React from 'react';
import { useState } from "react";
import {IoOptionsOutline} from 'react-icons/io5'
import axios from 'axios';
import { useRouter } from 'next/router';

function SearchBar({suggestions}) {

    const router = useRouter()
    let [advSearchToggle, setAdvSearchToggle] = useState(false)

    const [searchData, setSearchData] = useState('')
    const [keyword, setKeyword] = useState('');


    const [propertyType, setPropertyType] = useState('');
    const [area, setArea] = useState('');
    const [developer, setDeveloper] = useState('');
    const [fromPrice, setFromPrice] = useState('');
    const [toPrice, setToPrice] = useState('');
   
    function handleTypeChange(event) {
        setPropertyType(event.target.value);
      }
    
      function handleAreaChange(event) {
        setArea(event.target.value);
      }

      function handleDeveloperChange(event) {
        setDeveloper(event.target.value)
      }

      function handleFromPriceChange(event) {
        setFromPrice(event.target.value)
      }

      function handleToPriceChange(event) {
        setToPrice(event.target.value)
      }
    
      async function handleKeywordChange(event) {
        let key = event.target.value
        setKeyword(key)
        try {
          let result = await fetch(`http://localhost:3000/properties/suggestions/${key}`)
          result = await result.json()
          if(result) { 
            setSearchData(result);
          }
          console.log(event.target.value)
        } catch(error) {
          console.log(error)
        }
      }

      function handleSuggestionClick(projectName) {
        setKeyword(projectName);
        setSearchData([]);
      }
    
      function handleSubmit(event) {
        event.preventDefault();
        let query = ''
        if(propertyType) {
          query = query + `propertyTypes=${propertyType}`
        }
        if(area) {
          if(query) {
            query += '&'
          }
          query = query + `area=${area}`

        }
        if(developer) {
          if(query) {
            query += '&'
          }
          query = query + `developer=${developer}`
        }
        if(fromPrice) {
          if(query) {
            query += '&'
          }
          query = query + `fromprice=${fromPrice}`
        }
        if(toPrice) {
          if(query) {
            query += '&'
          }
          query = query + `toprice=${toPrice}`
        }
        router.push(`/search?${query}`)
        console.log(query)
        // Do something with the query, like send it to a server to fetch data
        /* fetchData(query); */
      }

    return(
        <div className="bg-white xl:rounded-full py-4 px-20 flex justify-center w-full content-wrap shadow-lg">
            <form className="grid grid-cols-12 filter-search">
                <div className="col-span-9 grid-rows-2">
                    <div className="grid grid-cols-12 gap-5">
                        <div className="basis-full col-span-3 md:basis-3/12 xl:basis-2/12">
                            <label className="block font-semibold mb-1">Property Type</label>
                            <select name="types" value={keyword} className="w-full border-b p-2 focus-within:border-none" onChange={handleTypeChange}>
                                <option value="propertytype">Property Type</option>
                                <option value="apartment">Apartment</option>
                                <option value="townhouse">Townhouse</option>
                                <option value="penthouse">Penthouse</option>
                                <option value="villa">Villa</option>
                            </select>
                        </div>
                        <div className="basis-full col-span-3 md:basis-3/12 xl:basis-2/12">
                            <label className="block font-semibold mb-1">Locations</label>
                            <select name="areas" className="w-full border-b p-2" onChange={handleAreaChange}>
                                <option value="allcities">All cities</option>
                                <option value="dubai">Dubai</option>
                                <option value="abudhabi">Abu Dhabi</option>
                                <option value="sharjah">Sharjah</option>
                                <option value="rak">Ras Al Khaimah</option>
                            </select>
                        </div>
                        <div className="basis-full col-span-6 md:basis-5/12 xl:basis-4/12">
                            <label className="block font-semibold mb-1">Search</label>
                            <input type="search" name="search" value={keyword} className="w-full border-b p-2" onChange={handleKeywordChange} placeholder="Enter Keywords" />
                            {searchData.length > 0 && (
                            <ul className='suggestions border'>
                              {searchData.map((result, index) => 
                                <li key={index} className="p-1" 
                                onClick={() => handleSuggestionClick(result.projectName)}>
                                  {result.projectName}
                                </li>
                              )}
                            </ul>
                            )}
                        </div>
                    </div>
                    {!advSearchToggle ? '' : 
                    <div className="grid grid-cols-12 gap-5 mt-5">
                        <div className="col-span-3">
                            <label className="block font-semibold mb-2">Developer</label>
                            <select className="w-full border-b p-2" onChange={handleDeveloperChange}>
                                <option value="Emaar">Emaar</option>
                                <option value="Damac">Damac</option>
                                <option value="Omniyat">Omniyat</option>
                                <option value="Meeras">Meeras</option>
                                <option value="Deyaar">Deyaar</option>
                            </select>
                        </div>
                        <div className="col-span-3">
                            <label className="block font-semibold mb-2">From Price</label>
                            <input onChange={handleFromPriceChange} type="number" name="fromprice" placeholder='From Price' className="w-full border-b p-2" />
                        </div>
                        <div className="col-span-3">
                            <label className="block font-semibold mb-2">To Price</label>
                            <input onChange={handleToPriceChange} type="number" name="toprice" placeholder='To Price' className="w-full border-b p-2" />
                        </div>
                    </div>
                    }
                </div>
                <div className="col-span-12 md:col-span-3 xl:col-span-3 basis-full md:basis-3/12 xl:basis-2/12 flex items-center text-right">
                    <div className="basis-full col-span-2 text-sm flex mx-5">
                        <button type="button" onClick={() => {setAdvSearchToggle(!advSearchToggle)}} className='flex items-center text-base'><IoOptionsOutline size={'32px'} /> Advanced Search</button>
                    </div>
                    <input type="submit" onClick={handleSubmit} className="cursor-pointer mareacolorbg text-white py-3 px-9 rounded-full" value="search" />
                </div>
            </form>
        </div>
    )
}


function Suggestions({ suggestions }) {
    return (
      <div>
        <h1>Search Suggestions:</h1>
        <ul>
          {suggestions.map((suggestion, index) => (
            <li key={index}>{suggestion}</li>
          ))}
        </ul>
      </div>
    );
  }
  
  export async function getServerSideProps() {
    const res = await axios.get('https://localhost:3000/properties/search' + query);
    const data = await res.data;
  
    return {
      props: {
        suggestions: data,
      },
    };
  }
  

export default SearchBar