import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Link } from "react-router";

function HeroSlider() {
  return (
    <>
      <div className="hero">
        <div className="container">
          <Swiper
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[Autoplay, Pagination]}
            pagination={{
              clickable: true,
            }}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="content">
                <h4>Introducing the new</h4>
                <h3>
                  Microsoft Xbox <br />
                </h3>
                <p>Windows Xp/10/7/8 Ps3 , TV Box.</p>
                <Link to="/about" className="btn">
                  Shop Now
                </Link>
              </div>
              <img src="/src/assets/img/banner_Hero1.jpg" alt="hero Slide1" />
            </SwiperSlide>
            <SwiperSlide>
              <div className="content">
                <h4>Introducing the new</h4>
                <h3>
                  Microsoft Xbox <br />
                </h3>
                <p>Windows Xp/10/7/8 Ps3 , TV Box.</p>
                <Link to="/about" className="btn">
                  Shop Now
                </Link>
              </div>
              <img src="/src/assets/img/banner_Hero2.jpg" alt="hero Slide1" />
            </SwiperSlide>
            <SwiperSlide>
              <div className="content">
                <h4>Introducing the new</h4>
                <h3>
                  Microsoft Xbox <br />
                </h3>
                <p>Windows Xp/10/7/8 Ps3 , TV Box.</p>
                <Link to="/about" className="btn">
                  Shop Now
                </Link>
              </div>
              <img src="/src/assets/img/banner_Hero3.jpg" alt="hero Slide1" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default HeroSlider;
