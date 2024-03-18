import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { CartContext } from "../App";

function NavBar() {
  const [menu, setMenu] = useState(false);
  const { cartItems } = useContext(CartContext);

  return (
    <nav className="bg-[white] shadow-md w-[100%] h-[4rem] flex justify-between items-center px-[1rem] mb-[3rem] fixed left-0 top-0 z-10">
      <Link to="/" className="font-bold text-[1.6rem] ">
        Wainers
      </Link>

      <ul
        className={
          menu
            ? "text-[white] top-[0] flex flex-col items-center gap-[5rem] lg:flex-row lg:gap-[.8rem] bg-[black] lg:bg-white w-[100%] lg:w-[5rem] h-screen lg:h-[3rem] absolute z-5 left-0 lg:static menu"
            : "flex flex-col items-center lg:flex-row lg:gap-[.8rem] bg-[black] lg:bg-white w-[100%] lg:w-[5rem] h-screen lg:h-[3rem] absolute top-[-100vh] z-5 left-0 lg:static menu"
        }
      >
        <li
          className="lg:hidden cursor-pointer self-end mr-5 mt-5"
          onClick={() => setMenu(false)}
        >
          close
        </li>
        <li>
          <NavLink to="/" onClick={() => setMenu(false)}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/shop" onClick={() => setMenu(false)}>
            Shop
          </NavLink>
        </li>
      </ul>

      <ul className="flex gap-[.8rem] ">
        <li>
          <Link to="/user">
            <img src="/user.png" alt="user" className="h-[2rem]" />
          </Link>
        </li>
        <li>
          <Link to="/cart" className="relative">
            <img src="/cart.png" alt="cart" className="h-[2rem]" />
            <div
              className={
                cartItems.length === 0
                  ? "hidden"
                  : "bg-[black] h-[1.2rem] w-[1.2rem] text-[white] text-[.8rem] flex justify-center items-center rounded-[.4rem] absolute top-[-.4rem] right-[-0.6rem] z-[-1] "
              }
            >
              {cartItems.length}
            </div>
          </Link>
        </li>
        <li>
          <button className="lg:hidden" onClick={() => setMenu(true)}>
            <img src="/menu.png" alt="menu" className="h-[2rem]" />
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
