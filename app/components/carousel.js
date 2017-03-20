import React from 'react';
import Slider from 'react-slick';

import CarouselItem from './carousel_item';

const settings = {
  autoplay: true,
  autoplaySpeed: 5000,
  dots: true,
  infinite: true,
  lazyLoad: 'ondemand',
  speed: 500,
  swipe: true,
  slidesToShow: 1,
  slidesToScroll: 1
}

class Carousel extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let imgs = [
      {type: 'Screening', title: 'DVF Secret Agent Part 1', src: 'hero-img-2.jpg', bgPos: "50% 25%", date: 'October 15, 2017', desc: 'Join us for a private screening of DVF Secret Agent Part 2 with our special guest, director Peter Lindberg.'},
      {type: 'Screening', title: 'DVF Secret Agent Part 2', src: 'hero-img-3.jpg', bgPos: "50% 50%", date: 'October 15, 2017', desc: 'Join us for a private screening of DVF Secret Agent Part 2 with our special guest, director Peter Lindberg.'},
      {type: 'Screening', title: 'DVF Secret Agent Part 3', src: 'hero-img-4.jpg', bgPos: "50% 0%", date: 'October 15, 2017', desc: 'Join us for a private screening of DVF Secret Agent Part 2 with our special guest, director Peter Lindberg.'}
    ];

    let sliderChildren = []
        sliderChildren = imgs.map(function(img, idx) {
          return (
            <div key={idx} className="hero-wrap">
              <CarouselItem img={img} />
            </div>
          )
        })

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col s12" id="carousel">
            <div className="carousel-flex">
              <div className="carousel-wrap">
                <Slider {...settings}>
                  {sliderChildren}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Carousel;
