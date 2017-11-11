import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom'

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import blue from 'material-ui/colors/blue'
import orange from 'material-ui/colors/orange'

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
    secondary: {
      ...orange,
      'A200': '#e87f36'
    }
  },
});
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <Router>
        <AppContainer>
          <Switch>
            {merchantRoutes}
          </Switch>
        </AppContainer>
      </Router>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
