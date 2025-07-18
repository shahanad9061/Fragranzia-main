import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import { Provider } from "react-redux"
import store from './redux/store';
import CartPage from './pages/CartPage';
import CheckOutPage from './pages/CheckOutPage';
import SuccessPage from './pages/SuccessPage';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Cart" element={<CartPage />} />
          <Route path='/CheckOutPage' element={<CheckOutPage/>}/>
          <Route path="/success" element={<SuccessPage/>}/>
        </Routes>
      </Router>
    // </Provider>
  );
}

export default App;


