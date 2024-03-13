function NotFound() {
  return (
    <div className="w-[100%] h-[100vh] fixed flex flex-col justify-center items-center">
      <div>
        <img
          src="/no-results.png"
          alt="NO result"
          className="h-[30vh] w-310vw] "
        />
      </div>
      <p className="text-[4vw]">Page not found</p>
    </div>
  );
}

export default NotFound;
