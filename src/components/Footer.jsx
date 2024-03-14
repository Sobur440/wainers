function Footer() {
  const title = document.title;

  if (
    title === "Wainers" ||
    title === "Wainers | User" ||
    title === "Wainers | 404"
  )
    return <div className="hidden"></div>;
  else
    return (
      <div className="bg-[black] text-[white] text-[1.3rem] w-[100%] h-[3.5rem] flex items-center justify-evenly mt-[15rem]">
        <p className="">Wainers</p>
        <div>&copy;Uchihadev {new Date().getFullYear()}</div>
      </div>
    );
}

export default Footer;
