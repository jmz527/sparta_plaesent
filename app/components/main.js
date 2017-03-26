import React from 'react';

import Header from './header';
import Carousel from './carousel';
import Grid from './masonry_grid';
// import Grid from './flex_grid';
import Footer from './footer';

const Main = () => (
  <main>

	<div style={{
		display: "none",
		backgroundImage: "url('/imgs/sample.png')",
		backgroundColor: "teal",
		opacity: "0.6",
		position: "absolute",
		zIndex: 5000,
		top: "0", left: "0", right: "0", width: "100%", minHeight: "2725px"}}/>

    <Header />
    <Carousel />
    <Grid />
    <Footer />

  </main>
);

export default Main;
