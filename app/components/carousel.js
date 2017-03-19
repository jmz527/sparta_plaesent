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
      slidesToShow: 1,
      slidesToScroll: 1
    },
    imgs = [
      {type: 'Screening', title: 'DVF Secret Agent Part 1', src: 'hero-img-1.jpg', date: 'October 15, 2017', desc: 'Join us for a private screening of DVF Secret Agent Part 1 with our special guest, director Peter Lindberg.'},
      {type: 'Screening', title: 'DVF Secret Agent Part 2', src: 'hero-img-2.jpg', date: 'October 15, 2017', desc: 'Join us for a private screening of DVF Secret Agent Part 2 with our special guest, director Peter Lindberg.'}
    ];

    var sliderChildren = []

    sliderChildren = imgs.map(function(img) {
      return (<div className="hero-img" style={{maxHeight: 500, backgroundImage: `url('/imgs/`+img.src+`')`}}><h3>1</h3></div>)
      // return (
      //   <div style={{maxHeight: 500}}>
      //     <img style={{width: '100%'}} src={`/imgs/`+img.src} alt=""/>
      //   </div>
      // )
    })

    return (
      <Slider {...settings} className="container-fluid" id="carousel">
        {sliderChildren}
      </Slider>
    );
  }
}

export default Carousel;
