const ReactDOM = require('react-dom');
const components = require('../lib');

const Header = components.header;

ReactDOM.render(
  <Header />,
  document.getElementById('container')
);
