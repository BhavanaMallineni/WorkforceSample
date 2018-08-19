import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { createMuiTheme } from 'material-ui/styles';
import './index.css';
import AppRoutes from './routes';
import store from './store';
import { Provider } from 'react-redux';

const theme = createMuiTheme();

  // We select the messages to pass to IntlProvider based on the user's locale
  ReactDOM.render(<Provider store={store}>
                          <MuiThemeProvider theme={theme}>
                              <AppRoutes />
                          </MuiThemeProvider>
                        </Provider>, document.getElementById('root'));
