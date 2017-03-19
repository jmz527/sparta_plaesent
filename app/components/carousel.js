import React from 'react';

import Image from './image';

class Carousel extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
  	let imgs = [];

  	for (var i = 0; i < 5; i++) {
  		imgs.push(<Image />);
  	}

    return (
		<div>
			<div>Carousel</div>
			<div>
				{imgs}
			</div>
		</div>
    );
  }
}

export default Carousel;
