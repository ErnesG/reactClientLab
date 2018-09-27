import React from 'react';
import { posterStyle } from './css/LandingPage.css';
const Film = (props) => {
    return (
        <section className="filmsList" style={posterStyle} onClick={props.onClick}>
            <h1>{props.film.title}</h1>
            <h2>{props.film.tagline}</h2>
            <img src={props.film.poster_path}></img>
        </section>
    )
}
export default Film;