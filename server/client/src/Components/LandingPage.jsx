import React from 'react';
import films from '../films.json';
/* import poster from '../../public/img/posters/1.png'; */
const landingPage = ()=>{
    console.log("films are ", films );
    return (
        <div>
            <h1>What do you want to see?</h1>
            <input type="date" name="datePicker" />

            <section className="filmsList>">
                <section className="film">
                    <panel>
                        <label>movie</label>
                        {/* <image src=""></image> */}
                    </panel>
                </section>
            </section>
        </div>

    );
}
export default landingPage;