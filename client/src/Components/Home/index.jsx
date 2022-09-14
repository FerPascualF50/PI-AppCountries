import React from 'react';
import {useState, useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {
    getAllCountries,
    getActivity,
    filterByContinent,
    orderByName,
    orderByPopulation,
    filterActivity,
  } from '../../Redux/Action';
import CardCountry from '../CardCountry';
import Pages from '../Pages';
import Filters from '../Filters';
import Header from '../Header';
import './index.css';

export default function Home() {
  const dispatch = useDispatch();
  
  const allCountries = useSelector((state) => state.countries);

  useEffect(() =>{
    dispatch(getActivity)
    dispatch(getAllCountries())
    }, [dispatch])

  const [order, setOrder] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  
  let countriesPerPage = 10;
  //if(currentPage !== 1) {countriesPerPage = 10}
  
  const lastCountry = currentPage * countriesPerPage;
  const firstCountry = lastCountry - countriesPerPage;
  const currentCountries = allCountries.slice(firstCountry, lastCountry);
  
  const pages = (pageNumbers) => {
    setCurrentPage(pageNumbers)
  }



  function handleContinent(e){
    dispatch(filterByContinent(e.target.value))
    setCurrentPage(1)
  }

  function handlePopulation(e){
    e.preventDefault()
    dispatch(orderByPopulation(e.target.value))
    setCurrentPage(1)
    setOrder(e.target.value)
  }

  function handleName(e){
    e.preventDefault()
    dispatch(orderByName(e.target.value))
    setCurrentPage(1)
    setOrder(e.target.value)
  }

  function handleActivity(e){
    dispatch(filterActivity(e.target.value));
    setCurrentPage(1)
  }

  return (
    <div className='home'>
      <div>
        <Header />
      </div>
      <div className='content-nav'>
              <Filters
                byName={handleName}
                byContinent={handleContinent}
                byPopulation={handlePopulation}
                byActivities={handleActivity}
              />
        <div className='content-card'>
          {currentCountries?.map((c) => {
            return (
              <CardCountry
              image={c.image}
              name={c.name}
              continent={c.continent}
              key={c.id}
              id={c.id}
              />
              );
            })}
        </div>
      </div>
      <div className='footer'>
        <Pages
          countriesPerPage={countriesPerPage}
          allCountries={allCountries.length}
          pages={pages}
        />
      </div>
    </div>
  )
}