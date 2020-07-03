import React, { Component } from 'react';



// Provider
// Consumer
class ProductContext extends Component {
    state = {   
      allProdducts:[],     
      price: 0,    
      cart: [],
      cartItems: 0,          
      cartTotal: 0,
      tax: 0,
      storeProducts: [],
      singleProduct: {},
      loading: true
      
    };

componentDidMount() {
    //from contentful items
    
    this.setProducts(items);
}

// get totals
getTotals = () => {
    let subTotal = 0;
    let cartItems = 0;   
    this.state.cart.forEach(item => {
      subTotal += item.total;
      cartItems += item.count;
    });
 
    subTotal = parseFloat(subTotal.toFixed(0));   
    let total = subTotal;
    total = parseFloat(total.toFixed(0));
    return {
      cartItems,
      subTotal,      
      total
    };
  };

  // get totals
  getTotals = () => {
   
      
      let cartItems = 0;
    
      this.state.cart.forEach(item => {
      
        cartItems += item.count;
      });

    let subTotal = 0;
    this.state.cart.map(item => (subTotal += item.total));
    const tempTax = subTotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;
    return {
       cartItems,
       subTotal,
       tax,
       total
     
    };
  };


  addTotals = () => {
    const totals = this.getTotals();
    this.setState(
      () => {
        return {
          cartItems: totals.cartItems,
          cartSubTotal: totals.subTotal,
          cartTax: totals.tax,
          cartTotal: totals.total,
          
        };
      },
      () => {
        // console.log(this.state);
      }
    );
  };

//increment and decrement

  increment = id => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(item => {
      return item.id === id;
    });
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count = product.count + 1;
    product.total = product.count * product.price;
    this.setState(() => {
      return {
        cart: [...tempCart]
      };
    }, this.addTotals);
    this.syncStorage();
  };

  decrement = id => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(item => {
      return item.id === id;
    });
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count = product.count - 1;
    if (product.count === 0) {
      this.removeItem(id);
    } else {
      product.total = product.count * product.price;
      this.setState(() => {
        return { cart: [...tempCart] };
      }, this.addTotals);

        this.syncStorage();
      
    }
  };

  //shippment

  postNord = () => {
    const totals = this.getTotals();
    this.setState({   
      cartTotal: totals.total +45   
    }  
    );
  };

  dHL = () => {
    const totals = this.getTotals();
   
    this.setState({     
      cartTotal: totals.total + 80 
    }
    ); 
  };
  
  exPress = () => {
    const totals = this.getTotals();
    this.setState( {
      cartTotal: totals.total + 120   
    },

    );
  };
   

  // removeItem
  removeItem = id => {
    let tempCart = [...this.state.cart];
    tempCart = tempCart.filter(item => item.id !== id);
    this.setState(
      {
        cart: [...tempCart]
      },
      () => {
        this.addTotals();
        this.syncStorage();
      }
    );
  };

  clearCart = () => {
    this.setState(
      {
        cart: []
      },
      () => {
        this.addTotals();
        this.syncStorage();
      }
    );
  };
  

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,         
          addToCart: this.addToCart,
          removeItem: this.removeItem,
          clearCart: this.clearCart,           
          syncStorage: this.syncStorage,
          addTotals: this.addTotals,
          getTotals: this.getTotals,
          increment: this.increment,
          decrement: this.decrement,
          postNord: this.postNord,
          dHL: this.dHL,
          exPress: this.exPress,
          setSingleProduct: this.setSingleProduct,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}



export default ProductContext;
