import React from 'react';

const pickSeats = (props) => {
    /*     A heading that says "Where would you like to sit?". o Movie title
    o Showing date/time
    o Theater name
    o Listing of tables in the theater.
    o Each table has a listing of up to four seats.
    o A "Check out" button */
    const { showing_id } = props.match.params;
    console.log(showing_id);
    return (
        <div>

            <h1> Where would you like to sit?</h1>
            <h2>James Bond</h2>
            <p>Cinepolis Polanco</p>
            <p>DateTime: 09/28/2018</p>
            <table>
                <thead>
                    <tr>
                        <th>A</th>
                        <th>B</th>
                        <th>C</th>
                        <th>D</th>
                    </tr>

                </thead>
                <tbody>
                    <tr>
                        <td> <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" onClick={() => selectSeat()}>1</button> </td>
                        <td> <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" onClick={() => selectSeat()}>2</button> </td>
                        <td> <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" onClick={() => selectSeat()}>3</button> </td>
                        <td> <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" onClick={() => selectSeat()}>4</button> </td>
                    </tr>
                    <tr>
                        <td colSpan="4"><button onClick={() => goToCheckout()}>Checkout</button></td>
                    </tr>
                    
                </tbody>
            </table>
        </div>

    );
}

const goToCheckout = () => {
    console.log('Checkout');
}

const selectSeat = () => {
    console.log('Selected seat');
}

export default pickSeats;