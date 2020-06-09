import React from 'react';
//import { Cartprovider } from './context/cartProvider'
//import { Container } from '@material-ui/core';
import { products } from '../products';
import { ProductList } from './ProductList'
import Layout from './Layout'
import { MyForm } from './MyForm'

function App() {
  return (
    <div className="App">
      <Layout />
      <div style={{textAlign: "center"}}>
        <MyForm onSubmit={({email, firstName, lastName, adress, postalCode}) => {
          console.log(email, firstName, lastName, adress, postalCode)}} 
        />
      </div>
    </div>
    
  );
}

export default App;
