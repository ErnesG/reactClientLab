import React from 'react';
import films from '../films.json';
import {titleStyle} from './css/LandingPage.css';
import ShowingDate from './ShowingDate';
import FilmList from './FilmList';
import { Redirect } from 'react-router-dom';
/* import poster from '../../public/img/posters/1.png'; */
const landingPage = ()=>{
    console.log("films are ", films );
    return (
        <div>
            <h1 style={titleStyle}>What do you want to see?</h1>
            <ShowingDate pickDate={(event)=>chooseDate(event.target.value)}/>

            <FilmList films={films} clicked={(film) => chooseFilm(film)}></FilmList>
        </div>

    );
}

const chooseFilm = (film) => {
    console.log('selected movie');
    console.log(film);
    
    <Redirect to="/filmdetails"></Redirect>
}
const chooseDate = (date) =>{
  console.log(date);
}
export default landingPage;