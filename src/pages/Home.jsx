import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="w-[100%] h-screen fixed flex flex-col justify-center items-center gap-5 ">
      <p className="text-[4vw] ">
        We are still thinking of what to put here 😂
      </p>
      <Link
        to="/shop"
        className="bg-[black] text-[white] w-[7rem] h-[2rem] flex justify-center items-center rounded "
      >
        Go to shop
      </Link>
    </div>
  );
}

export default Home;
