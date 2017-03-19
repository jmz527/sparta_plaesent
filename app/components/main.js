import React from 'react';

import Header from './header';
import Carousel from './carousel';
import Grid from './masonry_grid';
import Footer from './footer';

const Main = () => (
  <div className="container-fluid">
    <div className="row">
      <div className="col s12">
        <Header />
      </div>
    </div>
    <div className="row">
      <div className="col s12">
        <Carousel />
      </div>
    </div>
    <div className="row">
      <div className="col s12">
        <Grid />
      </div>
    </div>
    <div className="row">
      <div className="col s12">
        <Footer />
      </div>
    </div>

  </div>
);

export default Main;
