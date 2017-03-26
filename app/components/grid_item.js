import React from 'react';

class GridItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
  	return (
		<li className="grid-item-wrap col s12 m6 l4">
			<div className="grid-item">
				<img className="grid-img" src={'/imgs/'+this.props.src} alt={this.props.alt} />
				<date className="grid-date">{this.props.date}</date>
				<h2 className="grid-heading">{this.props.title}</h2>
				<span className="grid-span">Presented by <a href="#!">{this.props.pres}</a></span>
			</div>
		</li>
	);
  }
};

export default GridItem;
