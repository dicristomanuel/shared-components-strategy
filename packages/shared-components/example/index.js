const ReactDOM = require('react-dom');
const components = require('../lib');

const Header = components.header;
const Tooltip = components.tooltip;

ReactDOM.render(
  <div>
   <Header />
   <Tooltip />
 </div>,
  document.getElementById('container')
);
