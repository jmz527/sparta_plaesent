import React from 'react';

class CarouselItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
  	return (
		<div className="hero-img" style={{backgroundImage: "url('/imgs/"+this.props.img.src+"')", backgroundPosition: this.props.img.bgPos}}>
		  <div className="hero-text">
		    <h3>{this.props.img.type}:<br/>{this.props.img.title}</h3>
		    <h5>{this.props.img.date}</h5>
		    <p>{this.props.img.desc}</p>
		  </div>
		  <div className="scrim"></div>
		</div>
	);
  }

};

export default CarouselItem;
