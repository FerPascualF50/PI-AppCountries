import React from 'react'
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { postActivity, getAllCountries } from '../../Redux/Action';
import { useDispatch, useSelector } from 'react-redux';
import validate from './validate';
import './index.css'

export default function CardActivityCreator() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { countries } = useSelector((state) => { return state })
  const [errors, setErrors] = useState({})
  const [input, setInput] = useState({
    name: '',
    difficulty: '',
    duration: '',
    season: '',
    countries: []
  })

  function handleDifficulty(e) {
    e.preventDefault();
    setInput({
      ...input,
      difficulty: e.target.value
    })
  }

  function handleDuration(e) {
    e.preventDefault();
    setInput({
      ...input,
      duration: e.target.value
    })
  }

  function handleSeason(e) {
    e.preventDefault();
    setInput({
      ...input,
      season: e.target.value
    })
  }

  function handleCountry(e) {
    e.preventDefault();
    setInput({
      ...input,
      countries: [...input.countries, e.target.value]
    })
  }

  function handleChange(e) {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
    setErrors(validate({
      ...input,
      [e.target.name]: e.target.value
    }))
  }

  useEffect(() => {
    dispatch(getAllCountries())
  }, [dispatch])

  function handleSubmit(e) {
    if (!input.name) alert('Name is need')
    else if (!input.difficulty) alert('Chose difficulty.')
    else if (!input.duration) alert('Chose a duration.')
    else if (!input.season) alert('Chose a season.')
    else if (!input.countries.length) alert('Chose a country.')
    else {
      e.preventDefault();
      setErrors(validate({
        ...input,
        [e.target.name]: e.target.value
      }))

      dispatch(postActivity(input));
      alert('Congratulations... activity created!')
      setInput({
        name: '',
        difficulty: '',
        duration: '',
        season: '',
        countries: []
      })
      navigate('/home')
    }
  }

  function handleDelete(e) {
    setInput({
      ...input,
      countries: input.countries.filter((country) => country !== e)
    })
  }

  return (
    <div className='createbg'>
      <Link to={'/home'}><button className='btncreate'>BACK</button></Link>
      <form className='cntcreate' onSubmit={(e) => handleSubmit(e)}>
        <h2 className='titlecreate'>Create an Activity</h2>
        <div>
          <label htmlFor="">Name</label>
          <input
            type={'text'}
            name={'name'}
            value={input.name}
            required
            onChange={(e) => handleChange(e)}
            placeholder='Write an activity'
            className='inputname'
          />
        </div>

        <div>
          <label>Difficulty</label>
          <select className='selectcreate' onChange={(e) => handleDifficulty(e)}>
            <option key={'difficulty'} disabled selected >Select</option>
            <option value={1} key={'1'}>1</option>
            <option value={2} key={'2'}>2</option>
            <option value={3} key={'3'}>3</option>
            <option value={4} key={'4'}>4</option>
            <option value={5} key={'5'}>5</option>
          </select>
        </div>

        <div>
          <label>Duration</label>
          <select className='selectcreate' onChange={(e) => handleDuration(e)}>
            <option key={'duration'} disabled selected>Select</option>
            <option value={'1hr'} key={'1hr'}>1 hr.</option>
            <option value={'2hs'} key={'2hs'}>2 hs.</option>
            <option value={'3hs'} key={'3hs'}>3 hs.</option>
            <option value={'5hs'} key={'5hs'}>5 hs.</option>
            <option value={'7hs'} key={'7hs'}>7 hs.</option>
            <option value={'8hs'} key={'8hs'}>More than 7 hs.</option>
          </select>
        </div>
        <div>
          <label>Season</label>
          <select className='selectcreate' onChange={(e) => handleSeason(e)}>
            <option key={'season'} disabled selected>Select</option>
            <option value={'Summer'} key={'Summer'}>Summer</option>
            <option value={'Fall'} key={'Fall'}>Fall</option>
            <option value={'Winter'} key={'Winter'}>Winter</option>
            <option value={'Spring'} key={'Spring'}>Spring</option>
          </select>
        </div>
        <div>
          <label>Countries</label>
          <select className='selectcreate' onChange={(e) => handleCountry(e)}>
            <option key={'Country'} disabled selected>Select</option>
            {countries.map((country) => (
              <option value={country.id} key={country.id}>{country.name}</option>
            ))}
          </select>

          {errors.name || !input.name || !input.difficulty || !input.duration || !input.season || !input.countries.length
            ? <button className='btncreate' type="submit" disabled={true}>CREATE</button>
            : <button className='btncreate' type="submit">CREATE</button>}
          {errors.name && (<p>{errors.name}</p>)}
          <div>
            {
              input.countries.map(e =>
                <div className='cntdelete'>
                  <button className='btndelete' onClick={() => handleDelete(e)}>X</button>
                  <p>{e}</p>
                </div>
              )
            }
          </div>
        </div>
      </form>
    </div>
  )
}