import React from 'react';
import { Cartprovider } from './context/cartProvider'
import { Container } from '@material-ui/core';
import { products } from '../products';
import { ProductList } from './ProductList'
import Layout from './Layout'

function App() {
  return (
    <div className="App">
        <Layout />
    </div>
  );
}

export default App;
