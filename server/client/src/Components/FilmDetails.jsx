import React from 'react';
import { Link } from 'react-router-dom'
//import poster from '../public/img/posters/1.png';
const filmDetails = (props) =>{
    console.log(props);
    console.log(props.location.state);
    
    return (
        <div>
            <h1>{props.location.state.film.title}</h1>
            <p>{props.location.state.film.overview}</p>
            <img src={props.location.state.film.poster_path} />
            <Link to="/pickseats/123"> here</Link>
        </div>
    );
}
export default filmDetails; 