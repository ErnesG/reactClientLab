import React from 'react';
import {posterStyle} from './css/LandingPage.css';

const filmList = (props) =>{

    let response = (props.films.map( film => {
        return (
        <div>
            <section className="filmsList" style={posterStyle}>
                <section className="film" onClick={()=>props.clicked(film)}>
                        <div>
                                <h1>{film.title}</h1>
                                <h2>{film.tagline}</h2>
                                <img src={film.poster_path}></img>
                                {/* <image src=""></image> */}
                        </div>
                </section>
            </section>
        </div>)
    }));


    return (<div>
        {response}
    </div>) 
    
}


export default filmList;