import { useState, useContext } from "react";
import { useLocation, useParams } from "react-router-dom";
import { CartContext } from "../App";

function Product() {
  const { name } = useParams();
  const { good } = useLocation().state;
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(CartContext);

  document.title = `Wainers | ${name}`;

  const handleAddToCart = () => {
    const newProduct = { image: good.image, name, price: good.price, quantity };
    addToCart(newProduct);
  };

  return (
    <div className="h-[80vh] w-[100%] flex flex-col items-center bg-[white] lg:flex-row">
      <div className="w-[80%] h-[80%] lg:w-[50%] lg:h-[100%] lg:flex justify-center items-center lg:flex-1 ">
        <img
          src={`/${good.image}`}
          alt={name}
          className="h-[90%] w-[100%] lg:w-[30rem] lg:h-[100%] object-cover"
        />
      </div>

      <div className="flex-1 w-[80%] h-[7rem] lg:h-[100%] flex flex-col justify-between items-center gap-[1.1rem] lg:gap-0 lg:items-start">
        <div>
          <h1 className="text-[2rem] lg:text-[4rem] ">{name}</h1>
          <p>{good.price}</p>
        </div>

        <div className="lg:w-[80%] gap-[.5rem] flex flex-col lg:flex-row lg:justify-between  ">
          <div className="w-[5rem] border border-solid border-black px-1 flex justify-between self-center ">
            <button
              onClick={() =>
                setQuantity((quantity) => (quantity > 1 ? quantity - 1 : 1))
              }
            >
              -
            </button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity((quantity) => quantity + 1)}>
              +
            </button>
          </div>
          <button
            onClick={handleAddToCart}
            className="w-[10rem] h-[2.5rem] bg-[black] text-[white] text-[1rem] "
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
