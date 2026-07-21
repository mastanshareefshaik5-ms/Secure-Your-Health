import { useState } from "react";
import "./Cart.css";
import { toast } from "react-toastify";

function Cart() {

  const [cart, setCart] = useState([
    {
      id: 1,
      medicine: "Paracetamol",
      price: 50,
      quantity: 2,
    },
    {
      id: 2,
      medicine: "Vitamin C",
      price: 120,
      quantity: 1,
    },
    {
      id: 3,
      medicine: "Dolo 650",
      price: 80,
      quantity: 3,
    },
  ]);

  const increaseQty = (id) => {

    setCart(

      cart.map((item) =>

        item.id === id

          ? {

              ...item,

              quantity: item.quantity + 1,

            }

          : item

      )

    );

  };

  const decreaseQty = (id) => {

    setCart(

      cart.map((item) =>

        item.id === id && item.quantity > 1

          ? {

              ...item,

              quantity: item.quantity - 1,

            }

          : item

      )

    );

  };

  const removeItem = (id) => {

    setCart(

      cart.filter((item) => item.id !== id)

    );

    toast.success("Item Removed");

  };

  const total = cart.reduce(

    (sum, item) =>

      sum + item.price * item.quantity,

    0

  );

  return (

    <div className="cart-page">

      <h1 className="cart-title">

        Medicine Cart

      </h1>

      {

        cart.length === 0 ?

        (

          <div className="empty-cart">

            Your Cart is Empty

          </div>

        )

        :

        (

          <>

            <div className="cart-grid">

              {

                cart.map((item)=>(

                  <div

                    className="cart-card"

                    key={item.id}

                  >

                    <h2>

                      {item.medicine}

                    </h2>

                    <p>

                      Price : ₹{item.price}

                    </p>

                    <p>

                      Quantity : {item.quantity}

                    </p>

                    <p>

                      Total : ₹{

                        item.price *

                        item.quantity

                      }

                    </p>

                    <div className="qty-buttons">

                      <button

                        onClick={()=>

                          decreaseQty(item.id)

                        }

                      >

                        -

                      </button>

                      <button

                        onClick={()=>

                          increaseQty(item.id)

                        }

                      >

                        +

                      </button>

                    </div>

                    <button

                      className="remove-btn"

                      onClick={()=>

                        removeItem(item.id)

                      }

                    >

                      Remove

                    </button>

                  </div>

                ))

              }

            </div>

            <div className="cart-summary">

              <h2>

                Grand Total

              </h2>

              <h1>

                ₹{total}

              </h1>

              <button

                className="checkout-btn"

                onClick={()=>

                  toast.success("Order Placed Successfully")

                }

              >

                Checkout

              </button>

            </div>

          </>

        )

      }

    </div>

  );

}

export default Cart;