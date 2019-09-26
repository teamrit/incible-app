import React from 'react';
import './App.css';
import {Main} from "./components/Main";
import {Provider} from "react-redux";
import store from "./redux/store";


const App: React.FC = () => {
  return (
      <Provider store={store}>
        <Main/>
      </Provider>
  );
};

export default App;
