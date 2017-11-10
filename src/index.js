import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom'

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import blue from 'material-ui/colors/blue'

import { routes as merchantRoutes } from "./Merchant";
import './index.css';
import AppContainer from './App';
import configureStore from './configureStore';
import registerServiceWorker from './registerServiceWorker';

const theme = createMuiTheme({
  palette: {
    primary: {
      ...blue,
      500: '#1B4691',
    },
  },
});
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <AppContainer>
        <Router>
          <Switch>
            {merchantRoutes}
          </Switch>
        </Router>
      </AppContainer>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();