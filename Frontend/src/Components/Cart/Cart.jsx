import { useEffect, useState } from "react";
import "./Cart.css";

function Cart(){

const [cart,setCart]=useState([]);

useEffect(()=>{

setCart(JSON.parse(localStorage.getItem("cart"))||[]);

},[]);

const removeItem=(index)=>{

const updated=[...cart];

updated.splice(index,1);

setCart(updated);

localStorage.setItem("cart",JSON.stringify(updated));

};

const total=cart.reduce((sum,item)=>sum+Number(item.price),0);

return(

<div className="cart-page">

<h1>Shopping Cart</h1>

{cart.length===0?

<h2>No Medicines Added</h2>

:

<>

<table>

<thead>

<tr>

<th>Name</th>

<th>Company</th>

<th>Price</th>

<th>Action</th>

</tr>

</thead>

<tbody>

{cart.map((item,index)=>(

<tr key={index}>

<td>{item.name}</td>

<td>{item.company}</td>

<td>₹{item.price}</td>

<td>

<button onClick={()=>removeItem(index)}>

Remove

</button>

</td>

</tr>

))}

</tbody>

</table>

<h2>Total : ₹ {total}</h2>

</>

}

</div>

);

}

export default Cart;