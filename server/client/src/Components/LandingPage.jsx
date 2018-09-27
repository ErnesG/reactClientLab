import React from 'react';
import films from '../films.json';
import {posterStyle, tagLineStyle, titleStyle} from './css/LandingPage.css';
import ShowingDate from './ShowingDate';
/* import poster from '../../public/img/posters/1.png'; */
const landingPage = ()=>{
    console.log("films are ", films );
    return (
        <div>
            <h1 style={titleStyle}>What do you want to see?</h1>
            <ShowingDate pickDate={(event)=>chooseDate(event.target.value)}/>

            <section className="filmsList" style={posterStyle}>
                <section className="film" onClick={()=>{chooseFilm({title:'007 Mexico rises', year:2018})}}>
                    <div>
                        <label>movie</label>
                        {/* <image src=""></image> */}
                    </div>
                </section>
            </section>
        </div>

    );
}

const chooseFilm = (movie) => {
    console.log(movie);
}
const chooseDate = (date) =>{
  console.log(date);
}
export default landingPage;