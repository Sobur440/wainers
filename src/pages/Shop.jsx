import { useEffect, useState } from "react";

import supabase from "../data/supabaseClient";
import Products from "../components/Products";
import Footer from "../components/Footer";

function Shop() {
  document.title = "Wainers | Shop";

  const [goods, setGoods] = useState([]);

  useEffect(() => {
    const fetchGoods = async () => {
      const { data: goods } = await supabase.from("goods").select("*");
      setGoods(goods);
    };
    fetchGoods();
  }, []);

  if (goods.length === 0)
    return (
      <p className="w-[100vw] h-[100vh] flex justify-center items-center fixed text-[4vw] ">
        Loading...
      </p>
    );
  else
    return (
      <>
        <div className="height-screen">
          <div className="w-[100%] gap-[5rem] flex flex-col items-center lg:flex-row lg:justify-center flex-wrap ">
            {goods.map((good) => (
              <Products good={good} key={good.id} />
            ))}
          </div>
        </div>
        <Footer />
      </>
    );
}

export default Shop;
