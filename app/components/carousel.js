import React from 'react';
var Slider = require('react-slick');

class Carousel extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
    var settings = {
      autoplay: true,
      autoplaySpeed: 5000,
      dots: true,
      infinite: true,
      lazyLoad: 'ondemand',
      speed: 500,
      swipe: true,
      slidesToShow: 1,
      slidesToScroll: 1
    },
    imgs = [
      {type: 'Screening', title: 'DVF Secret Agent Part 2', src: 'hero-img-2.jpg', date: 'October 15, 2017', desc: 'Join us for a private screening of DVF Secret Agent Part 2 with our special guest, director Peter Lindberg.'},
      {type: 'Screening', title: 'DVF Secret Agent Part 1', src: 'hero-img-1.jpg', date: 'October 15, 2017', desc: 'Join us for a private screening of DVF Secret Agent Part 1 with our special guest, director Peter Lindberg.'},
      {type: 'Screening', title: 'DVF Secret Agent Part 2', src: 'hero-img-2.jpg', date: 'October 15, 2017', desc: 'Join us for a private screening of DVF Secret Agent Part 2 with our special guest, director Peter Lindberg.'}
    ];

    var sliderChildren = []

    sliderChildren = imgs.map(function(img, idx) {
      console.log(idx);

      return (
              <div key={idx} className="hero-wrap">
                <div className="hero-img" style={{backgroundImage: `url('/imgs/`+img.src+`')`, backgroundPosition: `50% 25%`}}>
                  <h3>{idx}</h3>
                </div>
              </div>
              )
      // return (
      //   <div key={idx} style={{position: 'relative', maxHeight: 500}}>
      //     <img style={{height: '100%', width: '100%'}} src={`/imgs/`+img.src} alt=""/>
      //   </div>
      // )
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
