import React from "react";
import { Route, Routes } from 'react-router'

import Header from "./components/Header";
import Main from "./components/Main";



import './css/common.css'

const App = () => {
  return (
    <div className="Wrapper">
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
      </Routes>

    </div>

  );
}

export default App;
