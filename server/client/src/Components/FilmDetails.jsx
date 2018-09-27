import React from 'react';
import { Link } from 'react-router-dom'
//import poster from '../public/img/posters/1.png';
const filmDetails = () =>{
    return (
        <div>
            <h1>Chunnet</h1>
            <p>I'm Bond, James Bond</p>
            {/* <img src={poster} /> */}
            <Link to="/pickseats/123"> here</Link>
        </div>
    );
}
export default filmDetails; 