import React from 'react';

const Header = () => (
	<header className="container">
		<div className="row">
			<div className="col s4">
				<img src="/imgs/logo.svg" alt="Sparta Plaesent"/>
			</div>
			<div className="col s4 offset-s4">
				<tel>212.555.5555</tel>
				<button>login</button>
				<button>hamburger</button>
			</div>
		</div>
	</header>
);

export default Header;
