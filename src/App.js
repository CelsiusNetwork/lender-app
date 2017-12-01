import React from "react";
import {Button, Container, Content, Footer, FooterTab, Header, Title} from "native-base";
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import ReduxThunk from "redux-thunk";
import reducers from "./reducers/index";
import Routes from "./Routes";

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Container>
          {this.props.statusBar}
          <Routes />
        </Container>
      </Provider>
    );
  }
}

export default (App);