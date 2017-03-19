import React from 'react';

import Header from './header';
import Carousel from './carousel';
import Grid from './masonry_grid';
import Footer from './footer';

// FONT TEST
  	// <p className="font-one">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio autem quidem quod corporis. Blanditiis beatae temporibus totam, a quam obcaecati sit, dolorum, commodi quos ad fugit voluptas ea reprehenderit ratione!</p>

  	// <p className="font-two">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio labore reiciendis itaque in quas incidunt illo doloribus deleniti vitae porro officia, iure repellendus repudiandae ratione tempora nobis esse quo sapiente.</p>

  	// <p className="font-three">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio labore reiciendis itaque in quas incidunt illo doloribus deleniti vitae porro officia, iure repellendus repudiandae ratione tempora nobis esse quo sapiente.</p>


const Main = () => (
  <div>
    <Header />
    <Carousel />
    <Grid />
    <Footer />
  </div>
);

export default Main;
