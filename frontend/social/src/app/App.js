import React from 'react';
import jssExtend from 'jss-extend';
import { create } from 'jss';
import AppContext from './AppContext';
import Main from './main/Main';
import { StylesProvider, jssPreset, createGenerateClassName } from '@material-ui/styles';

const generateClassName = createGenerateClassName();
const jss = create({
  ...jssPreset(),
  plugins: [...jssPreset().plugins, jssExtend()],
  insertionPoint: document.getElementById('jss-insertion-point'),
});

const App = () => {
  return (
    <AppContext.Provider>
      <StylesProvider jss={jss} generateClassName={generateClassName}>
        <Main />
      </StylesProvider>
    </AppContext.Provider>
  );
};

export default App;
