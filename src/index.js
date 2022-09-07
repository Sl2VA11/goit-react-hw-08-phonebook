import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App';
import './index.css';
import Container from './components/container/Container.jsx';
import { Provider } from 'react-redux';
import store from './redux/store';

console.log(store);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Container>
        <App />
      </Container>
    </Provider>
  </React.StrictMode>
);
