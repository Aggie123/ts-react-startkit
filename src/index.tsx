import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import App from './App';
import Hello from './container/Hello';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  // <App />,
  <Hello name='Alice' enthusiasmLevel={10}/>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
