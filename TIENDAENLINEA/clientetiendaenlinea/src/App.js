import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BaseLayout from './layouts/BaseLayout';

// Pages
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import NotFoundPage from './pages/NotFoundPage';
import ProductsPage from './pages/ProductsPage';

function App() {
  return (
     <Router>
       <BaseLayout>
          <Routes>
            <Route exact path="/" component={LoginPage}/>
            <Route exact path="/signup" component={SignUpPage} />
            <Route exact path="/products" component={ProductsPage} />
            <Route component={NotFoundPage} />
          </Routes>
      </BaseLayout>
   </Router>
    );
}

export default App;