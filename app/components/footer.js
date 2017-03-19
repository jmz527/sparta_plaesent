import React from 'react';

class Footer extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
  	let now = new Date(), year = now.getFullYear();

  	return (
		<footer className="container">
			<span>
				&#169; {year} -- SPARTA PLAESENT -
				<a href="#!">instagram</a> - <a href="#!">facebook</a> - <a href="#!">twitter</a>
			</span>
		</footer>
	);

  }


}

export default Footer;
