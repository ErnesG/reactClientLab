import React from 'react';

const pickSeats = () => {
    /*     A heading that says "Where would you like to sit?". o Movie title
    o Showing date/time
    o Theater name
    o Listing of tables in the theater.
    o Each table has a listing of up to four seats.
    o A "Check out" button */
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
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <td><button>Checkout</button></td>
                        <td><button>Checkout</button></td>
                        <td><button>Checkout</button></td>
                        <td><button>Checkout</button></td>
                    </tr>


                </tbody>
            </table>
        </div>

    );
}
export default pickSeats;