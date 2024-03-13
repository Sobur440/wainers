import { useContext } from "react";
import { CartContext } from "../App";

function Cart() {
  const { cartItems, deleteCartItem } = useContext(CartContext);

  if (cartItems.length <= 0)
    return (
      <p className="text-[4vw] h-screen w-screen fixed flex justify-center items-center ">
        Your Cart is empty
      </p>
    );
  else
    return (
      <ul className="w-[100%] flex flex-col gap-[4rem] ">
        {cartItems.map((item, i) => (
          <li
            key={i}
            className="w-[100%] flex flex-col lg:flex-row items-center lg:items-start lg:justify-evenly "
          >
            <div>
              <div>
                <img
                  src={`/${item.image}`}
                  alt={item.name}
                  className="w-[15rem] h-[10rem] object-cover"
                />
              </div>

              <div className="mb-[1rem] lg:mb-0 ">
                <p>{item.name}</p>
                <p>Quantity: {item.quantity} </p>
                <p>{item.price}</p>
              </div>
            </div>

            <div className="flex gap-5">
              <button className="bg-[black] text-[white] w-[6rem] h-[1.6rem] rounded-[.2rem] ">
                checkout
              </button>
              <button
                className="border-black border-[1px] text-[black] w-[6rem] h-[1.6rem] rounded-[.2rem] "
                onClick={() => deleteCartItem(i)}
              >
                remove
              </button>
            </div>
          </li>
        ))}
      </ul>
    );
}

export default Cart;
