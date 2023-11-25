import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Banner = () => {
  return (
    <Carousel>
      {/* first banner  */}
      <div className="hero h-screen">
        <img className="" src="https://i.ibb.co/f15DkFr/banner1.jpg" alt="" />
        <div className="hero-overlay bg-opacity-80"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="mb-96">
            <h1 className="mb-5 text-4xl font-bold leading-snug">
              <span className="text-[#f62b48]">Hotelier</span> Dining: Culinary
              Excellence for University Living
            </h1>
            <p className="mb-5">
              Indulge in a culinary journey tailored for university life at
              Hotelier Dining. Our delectable meals bring a touch of <br />
              sophistication to student living, offering a diverse menu crafted
              with care. <br /> Elevate your dining experience with us, where
              every meal <br /> is a celebration of taste and convenience.
            </p>
            <div className="join">
              <input
                className="input input-bordered join-item"
                placeholder="Search"
              />
              <button className="btn bg-[#f62b48] border-none text-white join-item rounded-r-full">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* second banner  */}
      <div className="hero h-screen">
        <img src="https://i.ibb.co/2MGP5qy/banner2.jpg" alt="" />
        <div className="hero-overlay bg-opacity-80"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="mb-96">
            <h1 className="mb-5 text-4xl font-bold leading-snug">
              <span className="text-[#f62b48]">Hotelier</span> Dining: Culinary
              Excellence for University Living
            </h1>
            <p className="mb-5">
              Indulge in a culinary journey tailored for university life at
              Hotelier Dining. Our delectable meals bring a touch of <br />
              sophistication to student living, offering a diverse menu crafted
              with care. <br /> Elevate your dining experience with us, where
              every meal <br /> is a celebration of taste and convenience.
            </p>
            <div className="join">
              <input
                className="input input-bordered join-item"
                placeholder="Search"
              />
              <button className="btn bg-[#f62b48] border-none text-white join-item rounded-r-full">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* third banner  */}
      <div className="hero h-screen">
        <img src="https://i.ibb.co/Bg8rNPk/banner3.jpg" alt="" />
        <div className="hero-overlay bg-opacity-80"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="mb-96">
            <h1 className="mb-5 text-4xl font-bold leading-snug">
              <span className="text-[#f62b48]">Hotelier</span> Dining: Culinary
              Excellence for University Living
            </h1>
            <p className="mb-5">
              Indulge in a culinary journey tailored for university life at
              Hotelier Dining. Our delectable meals bring a touch of <br />
              sophistication to student living, offering a diverse menu crafted
              with care. <br /> Elevate your dining experience with us, where
              every meal <br /> is a celebration of taste and convenience.
            </p>
            <div className="join">
              <input
                className="input input-bordered join-item"
                placeholder="Search"
              />
              <button className="btn bg-[#f62b48] border-none text-white join-item rounded-r-full">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* forth banner  */}
      <div className="hero h-screen">
        <img
          className="h-full"
          src="https://i.ibb.co/8M9RdRd/banner4.jpg"
          alt=""
        />
        <div className="hero-overlay bg-opacity-80"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="mb-96">
            <h1 className="mb-5 text-4xl font-bold leading-snug">
              <span className="text-[#f62b48]">Hotelier</span> Dining: Culinary
              Excellence for University Living
            </h1>
            <p className="mb-5">
              Indulge in a culinary journey tailored for university life at
              Hotelier Dining. Our delectable meals bring a touch of <br />
              sophistication to student living, offering a diverse menu crafted
              with care. <br /> Elevate your dining experience with us, where
              every meal <br /> is a celebration of taste and convenience.
            </p>
            <div className="join">
              <input
                className="input input-bordered join-item"
                placeholder="Search"
              />
              <button className="btn bg-[#f62b48] border-none text-white join-item rounded-r-full">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default Banner;
