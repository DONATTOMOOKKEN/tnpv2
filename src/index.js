import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './helpers/store';
import { Router, Route, Switch } from "react-router-dom";
import indexRoutes from "./routes";
import { Provider } from 'react-redux';
import { history } from './helpers/history';
import * as serviceWorker from './serviceWorker';
import { red, green } from "@material-ui/core/colors";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";

const theme=createMuiTheme({
  // palette: {
  //   type: "dark",
  //   primary: {
  //     main: '#fafafa',
  //     light: '#ffffff',
  //     dark: '#c7c7c7'
  //   },
  //   secondary: {
  //     main: '#1eb980',
  //     light: '#62ecb0',
  //     dark: '#008853'
  //   } 
  // }
});
console.log(theme);
ReactDOM.render(
    <MuiThemeProvider theme={theme}>
      <Provider store={store}>
          <Router history={history}>
            <Switch>
              {indexRoutes.map((prop, key) => {
                return <Route path={prop.path} key={key} component={prop.component} />;
              })}
            </Switch>
          </Router>
      </Provider>
    </MuiThemeProvider>,
    document.getElementById("root")
  );
  
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
