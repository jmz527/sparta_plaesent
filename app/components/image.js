import React from 'react';


class Image extends React.Component {

  constructor(props) {
    super(props);

  }
  render() {
  	return (
		<li className="image-element-class col s12 m6 l4" style={{display: "flex", justifyContent: "center"}}>
			<div style={{width: 250}}>
				<img style={{display: "block"}} src={'/imgs/'+this.props.src} alt={this.props.alt} />
				<date style={{display: "block"}}>{this.props.date}</date>
				<h2 style={{display: "block"}}>{this.props.title}</h2>
				<span style={{display: "block"}}>Presented by <a href="#!">{this.props.pres}</a></span>
			</div>
		</li>
	);
  }

};

export default Image;
