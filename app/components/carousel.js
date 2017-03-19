import React from 'react';
var Slider = require('react-slick');

var SimpleSlider = React.createClass({
  render: function () {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        <div><h3>1</h3></div>
        <div><h3>2</h3></div>
        <div><h3>3</h3></div>
        <div><h3>4</h3></div>
        <div><h3>5</h3></div>
        <div><h3>6</h3></div>
      </Slider>
    );
  }
});

class Carousel extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
		<div>
			<div>Carousel</div>

      <SimpleSlider />

		</div>
    );
  }
}

export default Carousel;
