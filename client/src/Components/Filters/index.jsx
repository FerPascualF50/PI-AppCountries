import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCountries, getActivity } from '../../Redux/Action'
import './index.css'


export default function Filters({byName, byPopulation, byContinent, byActivities}) {
    const dispatch = useDispatch()

    function handleClick(e) {
      e.preventDefault()
      dispatch(getAllCountries())
    }

    useEffect(() => {
        dispatch(getAllCountries())
      }, [dispatch])

      const allActivities = useSelector((state) => state.activities);
      useEffect(()=>{
        dispatch(getActivity())
      }, [dispatch]);



  return (
    <div className='cntnav'>
      <button className='btnreload' onClick={(e) => { handleClick(e) }}>RESTART Filter</button>
      <div className='cntselect'>
        <h3>Order by...</h3>
        <select className='select' onChange={(e) => byContinent(e)}>
          <option value="All" key='All'>Continent</option>
          <option value="Africa" key='Africa'>Africa</option>
          <option value="Americas" key='Americas'>America</option>
          <option value="Antarctic" key='Antarctic'>Antarctic</option>
          <option value="Asia" key='Asia'>Asia</option>
          <option value="Europe" key='Europe'>Europe</option>
          <option value="Oceania" key='Oceania'>Oceania</option>
        </select>
        <select className='select' onChange={(e) => byName(e)}>
          <option value="alpha" key='alpha'>Alphabetically</option>
          <option value="asc" key='asc'>A to Z</option>
          <option value="desc" key='desc'>Z to A</option>
        </select>
        <select className='select' onChange={(e) => byPopulation(e)}>
          <option value="order" key='order'>Population</option>
          <option value="population asc" key='population asc'>Upward</option>
          <option value="population desc" key='population desc' >Falling</option>
        </select>
        <h3>With...</h3>
        <select className='select' onChange={(e) => byActivities(e)}>
          <option value='All'>Activities</option>
          {allActivities?.map((e) => { return <option key={e.id} value={e.name}>{e.name}</option> })}
        </select>
      </div>
    </div>
  )
}