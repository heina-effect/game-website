import React, { ReactElement } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from 'components/Home';
import Globalstyles from 'components/Globalstyles';


const App = () : ReactElement => (
  <>
    <Globalstyles/>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </BrowserRouter>
  </>
)
export default App;