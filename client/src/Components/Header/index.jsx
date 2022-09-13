import React from 'react'
import SearchBar from '../SearchBar'
import { Link } from 'react-router-dom';
import './index.css'

export default function Header() {
    return (
        <div className='cntheader'>
            <Link className='linkheader' to={'/home/activities'}>GO FUN!! CREATE ACTIVITY</Link>
            <SearchBar />
        </div>
    )
}