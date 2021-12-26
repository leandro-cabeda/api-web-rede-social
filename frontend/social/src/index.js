import 'bootstrap/dist/css/bootstrap.min.css';
import './app/styles/index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';
import { ApolloProvider } from "@apollo/client";
import client from "./app/service";

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

serviceWorker.unregister();
