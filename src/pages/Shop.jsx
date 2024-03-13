import Products from "../components/Products";

function Shop() {
  const goods = [
    {
      name: "Nice Shoe",
      price: "$20",
      image: "shoes.png",
      id: 1,
    },
    {
      name: "Nice Bangles",
      price: "$350",
      image: "bangles.png",
      id: 2,
    },
    {
      name: "Nice Chains",
      price: "$72",
      image: "chains.png",
      id: 3,
    },
    {
      name: "Nice Socks",
      price: "$23",
      image: "halfsocks.jpg",
      id: 4,
    },
    {
      name: "Nice Perfume",
      price: "$45",
      image: "perfume.png",
      id: 5,
    },
    {
      name: "Nice Rings",
      price: "$20",
      image: "tenrings.jpg",
      id: 6,
    },
    {
      name: "Nice Towel",
      price: "$15",
      image: "towels.jpg",
      id: 7,
    },
    {
      name: "Nice Watch",
      price: "$600, 000",
      image: "watch.jpg",
      id: 8,
    },
  ];

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
