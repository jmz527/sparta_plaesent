import React from 'react';
import Masonry from 'react-masonry-component';

import GridItem from './grid_item';

const masonryOptions = {
    transitionDuration: 0
};

const mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const mS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

class Grid extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let elements, d, date, times = [], childElements;
      	elements = [
          {title: 'Bureaux exquisite delightful carefully curated soft power.', presenter: 'LOREM IPSUM', src: 'grid-img-1.png', alt: 'img-1', date: 1486702800000},
          {title: 'Sharp bureaux sleepy K-pop carefully curated.', presenter: 'LOREM IPSUM', src: 'grid-img-2.png', alt: 'img-2', date: 1486011600000},
          {title: 'St Moritz uniforms Beams.', presenter: 'LOREM IPSUM', src: 'grid-img-3.png', alt: 'img-3', date: 1485493200000},
          {title: 'Artisanal iconic cutting-edge business class.', presenter: 'LOREM IPSUM', src: 'grid-img-6.png', alt: 'img-6', date: 1484197200000},
          {title: 'Esse airport veniam ryokan soft power', presenter: 'LOREM IPSUM', src: 'grid-img-4.png', alt: 'img-4', date: 1484974800000},
          {title: 'K-pop extraordinary.', presenter: 'LOREM IPSUM', src: 'grid-img-5.png', alt: 'img-5', date: 1484715600000},
      	];

    childElements = elements.map(function(element, idx){
      d = new Date(element.date);
      date = mL[d.getMonth()] +' '+ d.getDate() +' '+ d.getFullYear();

       return (<GridItem key={idx} title={element.title} pres={element.presenter} src={element.src} alt={element.alt} date={date} />);
    });

    return (
  		<div id="masongry_grid">
        <div className="flex-grid">
          <div>
            <div className="container-fluid">
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
          </div>
        </div>
  		</div>
    );
  }
}

export default Grid;