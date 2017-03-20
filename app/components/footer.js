import React from 'react';

class Footer extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
  	let now = new Date(), year = now.getFullYear();

  	return (
		<footer className="container">
			<span className="foot-text">
				&#169; {year} <br/> — <br/> Sparta Plaesent <br/> - <a href="#!">instagram</a> - <a href="#!">facebook</a> - <a href="#!">twitter</a> -
			</span>
		</footer>
	);

  }


}

export default Footer;
