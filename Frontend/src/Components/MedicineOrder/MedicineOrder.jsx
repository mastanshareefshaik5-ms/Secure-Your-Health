import { useEffect, useState } from "react";
import API from "../../api/api";
import "./MedicineOrder.css";

function MedicineOrder() {

  const [medicines,setMedicines]=useState([]);

  useEffect(()=>{

    fetchMedicines();

  },[]);

  const fetchMedicines=async()=>{

    const res=await API.get("/medicines");

    setMedicines(res.data);

  };

  const addToCart=(medicine)=>{

    let cart=JSON.parse(localStorage.getItem("cart")) || [];

    cart.push(medicine);

    localStorage.setItem("cart",JSON.stringify(cart));

    alert("Medicine Added To Cart");

  };

  return(

<div className="order-page">

<h1>Medicine Order</h1>

<div className="order-grid">

{medicines.map((medicine)=>(

<div className="order-card" key={medicine._id}>

<h3>{medicine.name}</h3>

<p>{medicine.company}</p>

<p>₹ {medicine.price}</p>

<button onClick={()=>addToCart(medicine)}>

Add To Cart

</button>

</div>

))}

</div>

</div>

);

}

export default MedicineOrder;