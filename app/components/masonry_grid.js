import React from 'react';
import Masonry from 'react-masonry-component';

import Image from './image';

const masonryOptions = {
    transitionDuration: 0
};

class Grid extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
  	// let imgs = [];

  	// for (var i = 0; i < 5; i++) {
  	// 	imgs.push(<Image />);
  	// }


  	let elements = [
  		{src: 'http://i.imgur.com/kLDFoVp.jpg'},
  		{src: 'http://i.imgur.com/slPxxIB.jpg'},
  		{src: 'http://i.imgur.com/srT7G.png'},
  	]

    var childElements = elements.map(function(element){
       return (
            <li className="image-element-class">
                <img src={element.src} />
            </li>
        );
    });


                // onImagesLoaded={this.handleImagesLoaded}
                // onLayoutComplete={laidOutItems => this.handleLayoutComplete(laidOutItems)}
                // onRemoveComplete={removedItems => this.handleRemoveComplete(removedItems)}

    return (
		<div id="masongry_grid">
			<div>Grid</div>
			<div>
	            <Masonry
	                className={'my-gallery-class'} // default ''
	                elementType={'ul'} // default 'div'
	                options={masonryOptions} // default {}
	                disableImagesLoaded={false} // default false
	                updateOnEachImageLoad={true} // default false and works only if disableImagesLoaded is false

	

	            >
	                {childElements}
	            </Masonry>
			</div>
		</div>
    );
  }
}

export default Grid;