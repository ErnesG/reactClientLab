import React from 'react';

const ShowingDate = (props) =>{
    return (
        <div>
            <input type="date" name="datePicker" onChange={props.pickDate} />
        </div>
    );
    
}


export default ShowingDate;