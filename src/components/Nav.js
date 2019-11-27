import React from 'react'
import '../App.css'
// import Logo from './Logo'

export default function Nav(props){
    return(
        <div className='nav'>
            <h1 onClick={() => props.toggleChange()}>Click Me To Experience A World of Magic</h1>
            {/* <Logo/> */}
        </div>
    )
}