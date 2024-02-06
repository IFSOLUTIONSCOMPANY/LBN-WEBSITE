function Banner() {

  return (
    <>
      <div
        className="w-full h-[350px] bg-[url(/assets/images/banner/01.jpg)]"
        style={{
          marginTop: "-68px",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="container mx-auto h-full flex items-center justify-center">
          <div className="text-center mt-20">
            <h1 className="text-6xl font-bold text-white">
              Welcome to <span className="text-accent">LBN</span>
            </h1>
            <p className="text-2xl text-white">
              Your best friend{" "}
              <span className="font-bold text-white">SoccerBET</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
