import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ImageSlider = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className="mt-5">
      <Slider {...settings}>
        <div className="relative group cursor-pointer">
          <a>
            <img src="/images/slider-badging.jpg" alt="" className="rounded-lg shadow-lg" />
          </a>
        </div>

        <div className="relative group cursor-pointer">
          <a>
            <img src="/images/slider-scale.jpg" alt="" className="rounded-lg shadow-lg" />
          </a>
        </div>

        <div className="relative group cursor-pointer">
          <a>
            <img src="/images/slider-badag.jpg" alt="" className="rounded-lg shadow-lg" />
          </a>
        </div>

        <div className="relative group cursor-pointer">
          <a>
            <img src="/images/slider-scales.jpg" alt="" className="rounded-lg shadow-lg" />
          </a>
        </div>
      </Slider>
    </div>
  );
};

export default ImageSlider;
