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

  // componentDidMount() {
  //     this.hide();
  // }

  // handleImagesLoaded(imagesLoadedInstance) {
  //     this.show();
  // }

  render() {

  	let elements = [
      {title: 'Bureaux exquisite delightful carefully curated soft power.', presenter: 'LOREM IPSUM', src: 'grid-img-1.png', alt: 'img-1', date: 'FEBRUARY 10 2017'},
      {title: 'Sharp bureaux sleepy K-pop carefully curated.', presenter: 'LOREM IPSUM', src: 'grid-img-2.png', alt: 'img-2', date: 'FEBRUARY 2 2017'},
      {title: 'St Moritz uniforms Beams.', presenter: 'LOREM IPSUM', src: 'grid-img-3.png', alt: 'img-3', date: 'JANUARY 27 2017'},
      {title: 'Artisanal iconic cutting-edge business class.', presenter: 'LOREM IPSUM', src: 'grid-img-6.png', alt: 'img-6', date: 'JANUARY 12 2017'},
      {title: 'Esse airport veniam ryokan soft power', presenter: 'LOREM IPSUM', src: 'grid-img-4.png', alt: 'img-4', date: 'JANUARY 21 2017'},
      {title: 'K-pop extraordinary.', presenter: 'LOREM IPSUM', src: 'grid-img-5.png', alt: 'img-5', date: 'JANUARY 18 2017'},
  	]

    var childElements = elements.map(function(element, idx){
       return (
          <Image key={idx} title={element.title} pres={element.presenter} src={element.src} alt={element.alt} date={element.date} />
        );
    });

                  // onImagesLoaded={this.handleImagesLoaded}
                  // onLayoutComplete={laidOutItems => this.handleLayoutComplete(laidOutItems)}
                  // onRemoveComplete={removedItems => this.handleRemoveComplete(removedItems)}

    return (
		<div id="masongry_grid" className="container-fluid">
      <div className="row">
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