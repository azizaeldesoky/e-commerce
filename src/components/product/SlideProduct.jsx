import Product from "./Product";
import "./product.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

function SlideProduct({ data, title }) {
  return (
    <div className="slide-products slide">
      <div className="container">
        <div className="top-slide">
          <h2>{title}</h2>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>

        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          slidesPerView={5}
          spaceBetween={10}
          navigation={true}
          modules={[Navigation, Autoplay]}
          className="mySwiper"
        >
          {data.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <Product item={item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default SlideProduct;
