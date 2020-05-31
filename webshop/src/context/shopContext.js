import React, { Component } from 'react'
import Client from 'shopify-buy'

const shopContext = React.createContext()

const client = Client.buildClient({
    domain: 'root',
    storefrontAccessToken: 'root'
  });

class ShopProvider extends Component {

    state = {
        products: [], 
        product: {},
        checkout: {},
        isCartOpen: false,
        test: 'test'
    }

    createCheckout = async () => {

    }

    addIyeamToCart = async () => {

    }

    fetchAllProducts = async () => {
        
    }

    fetchProductWithId = async (id) => {
        
    }

    closeCart = () => {   }
    openCart = () => {   }


    render() {
        return (
            <shopContext.Provider value={{ ...this.state }} >
            {this.props.children}
                
            </shopContext.Provider>
        )
    }
}

const shopConsumer = shopContext.Consumer
export { shopConsumer, shopContext}
export default ShopProvider