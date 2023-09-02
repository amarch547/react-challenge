import React from 'react'
import './Home.css'
import Card from './Card'
import Card2 from './Card2'
export default function Home() {
    return (
        <div className='home'>
            <div className='header'>
                <h2>Dog Breeds</h2>
                <p>❤️</p>
            </div>
            <div className='searchBarStyle'>
                <input className='inputStyle' type="text" placeholder="" />
                <button className='btnStyle'><big>🔍</big> Search</button>
            </div>
            <div className='card'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <div>
                <hr className='hl' />
            </div>
            <div className='header2'>
                <h2>❤️ Favorites</h2>
            </div>

            <div className='card-2'>
                <Card2 />
                <Card2 />
                <Card2 />
                <Card2 />
            </div>
        </div>
    )
}
