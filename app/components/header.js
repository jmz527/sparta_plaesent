import React from 'react';

const Header = () => (
	<header className="container-fluid">
		<div className="flex-header">
			<div>
				<div id="logo">
					<a href="#!"><img src="/imgs/logo.svg" alt="Sparta Plaesent"/></a>
				</div>
				<div id="side-menu">
					<a className="burger" href="#!"><img src="/imgs/hamburger.png" alt="menu"/></a>

					<div className="hide-on-small-only">
						<a href="#!"><span className="btn-span">login</span></a>
						<a href="#!"><tel>212.555.5555</tel></a>
					</div>
{/*
					<div className="hide-on-med-and-up">
						<a href="#!"><i className="fa fa-sign-in fa-2" aria-hidden="true"></i></a>
						<a href="#!"><i className="fa fa-phone fa-2" aria-hidden="true"></i></a>
					</div>
*/}

				</div>
			</div>
		</div>
	</header>
);

export default Header;
