import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import beach from './playa.jpg'

export default function LandingPage() {
    return (
        <div className='main'>
            <div className='img-container'>
                <img alt='playa' src={beach}></img>
            </div>
            <section className='showcase'>
                <div className='content'>
                    <div>
                        <h1 className='title'>THE BETTER APP TO TRAVEL</h1>
                    </div>
                    <div>
                        <Link to='/home' >
                            <button className='button'>
                                GO ON!!
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}