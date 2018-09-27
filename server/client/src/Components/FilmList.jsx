import React from 'react';

import Film from './Film';
const filmList = (props) => {

    let response = (props.films.map(film => {
        return (
            <Film film={film} onClick={() => props.clicked(film)} />
        )
    }));

    return (<div>
        {response}
    </div>)
}

export default filmList;