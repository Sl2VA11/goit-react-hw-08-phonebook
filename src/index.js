import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App';
import './index.css';
import Container from './components/container/Container.jsx';
import { Provider } from 'react-redux';
import store,{persistor} from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Container>
          <App />
        </Container>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
