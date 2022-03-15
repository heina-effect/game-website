import React, { ReactElement } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from 'components/Home'


const App = () : ReactElement => (
  <BrowserRouter>
    <Routes>
      <Route path='/'>
        <Home />
      </Route>
    </Routes>
  </BrowserRouter>
)
export default App