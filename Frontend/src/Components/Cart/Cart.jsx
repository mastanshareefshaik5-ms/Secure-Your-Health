import "./Cart.css";
import { useState, useEffect } from "react";

function Cart() {

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {

    const medicines = [
      {
        id: 1,
        name: "Paracetamol",
        price: 50,
        quantity: 1
      },
      {
        id: 2,
        name: "Vitamin C",
        price: 80,
        quantity: 2
      }
    ];

    setCartItems(medicines);

  }, []);

  const increaseQty = (id) => {
    setCartItems(
      cartItems.map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCartItems(
      cartItems.map(item =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">

      <h1>🛒 My Cart</h1>

      {cartItems.length === 0 ? (
        <h2>Your cart is empty.</h2>
      ) : (
        <>
          {cartItems.map(item => (
            <div className="cart-card" key={item.id}>

              <div>
                <h2>{item.name}</h2>

                <p>Price : ₹{item.price}</p>

                <p>Quantity : {item.quantity}</p>
              </div>

              <div className="buttons">

                <button onClick={() => increaseQty(item.id)}>
                  +
                </button>

                <button onClick={() => decreaseQty(item.id)}>
                  -
                </button>

                <button
                  className="remove"
                  onClick={() => removeItem(item.id)}
                >
                  Remove
                </button>

              </div>

            </div>
          ))}

          <div className="total">

            <h2>Total : ₹{total}</h2>

            <button className="checkout">
              Proceed to Checkout
            </button>

          </div>
        </>
      )}

    </div>
  );
}

export default Cart;