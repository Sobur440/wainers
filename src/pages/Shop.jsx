import { useEffect, useState } from "react";
import Products from "../components/Products";

function Shop() {
  const [goods, setGoods] = useState([]);

  const url = "http://localhost:8000/goods";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setGoods(data))
      .catch(() => console.log("their was an error"));
  }, []);

  if (goods.length <= 0)
    return (
      <p className="w-[100vw] h-[100vh] flex justify-center items-center fixed text-[4vw] ">
        Loading...
      </p>
    );
  else
    return (
      <div className="height-screen">
        <div className="w-[100%] gap-[5rem] flex flex-col items-center lg:flex-row lg:justify-center flex-wrap ">
          {goods.map((good) => (
            <Products good={good} key={good.id} />
          ))}
        </div>
      </div>
    );
}

export default Shop;
