import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { App } from './components/App';
import './css/index.css';

import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="phonebook">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {/* <Container> */}
            <App />
          {/* </Container> */}
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
