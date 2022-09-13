import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

export default function CountryCard({ name, continent, image, id, }) {
    return (
        <div className='card'>
            <Link className='link' to={`/home/details/${id}`}>
                <div >
                    <img className='image' src={image} alt="not found" width='100px' height='50px' />
                    <h3 className='text'>{name}</h3>
                    <h5 className='text'>Continent: {continent}</h5>
                </div>
            </Link>
        </div>
    );
}