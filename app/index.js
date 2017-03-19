import "babel-polyfill";
import React from 'react';
import ReactDOM from 'react-dom';

import Main from './components/main';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin(); // Needed for onTouchTap, see: http://stackoverflow.com/a/34015469/988941

// import all styles
import './public/materialize.css';
import './public/style.css';

ReactDOM.render(<Main />, document.getElementById('root'));
