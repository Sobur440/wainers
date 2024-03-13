import { Link } from "react-router-dom";

function Products({ good }) {
  return (
    <Link
      to={good.name}
      state={{ good }}
      className="h-[30rem] lg:h-[35rem] w-[80%] lg:w-[30%]  "
    >
      <img
        src={`/${good.image}`}
        alt={good.name}
        className="object-cover w-[100%] h-[100%]"
      />
      <p>{good.name}</p>
      <p>{good.price}</p>
    </Link>
  );
}

export default Products;
