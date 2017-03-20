import React from 'react';

const Header = () => (
	<header className="container-fluid">
		<div className="row">
			<div className="col s6" id="logo">
				<a href="#!"><img src="/imgs/logo.svg" alt="Sparta Plaesent"/></a>
			</div>
			<div className="col s6" id="side-menu">
				<a href="#!"><img src="/imgs/hamburger.png" alt="menu"/></a>
				<a className="hide-on-small-only" href="#!"><span className="btn-span">login</span></a>
				<a className="hide-on-small-only" href="#!"><tel>212.555.5555</tel></a>
			</div>
		</div>
	</header>
);

export default Header;
