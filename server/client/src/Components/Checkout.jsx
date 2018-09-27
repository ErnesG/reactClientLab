import React from 'react';
const checkout = () =>{
    return (
        <div>
           <h1>
              Checkout 
           </h1>
           <table>
               <thead>
                   <tr>
                       <th>Name</th>
                       <th>Price</th>
                       <th>Quantity</th>
                       <th>Total</th>
                       <th></th>
                   </tr>
               </thead>
               <tbody>
                   <tr>
                       <td>A</td>
                       <td>2</td>
                       <td>1</td>
                       <td>2</td>
                       <td><button onClick={() => checkoutClick()}>Purchase</button></td>
                   </tr>
               </tbody>
               <tfoot>
                   <tr>
                       <td colSpan="2">Subtotal</td>
                       <td colSpan="3">1</td>
                   </tr>
                   <tr>
                       <td colSpan="2">Tax</td>
                       <td colSpan="3">1</td>
                   </tr>
                   <tr>
                       <td colSpan="2">Tax</td>
                       <td colSpan="3">1</td>
                   </tr>
                   <tr>
                       <td colSpan="2">Total</td>
                       <td colSpan="3">1</td>
                   </tr>

               </tfoot>
           </table>
           <a href="#">Keep purchasing</a>
        </div>
    );
}

const checkoutClick = () => {
    console.log('Checking Out');
}

export default checkout;