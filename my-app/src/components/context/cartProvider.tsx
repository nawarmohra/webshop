import React, { createContext, Component } from 'react'
import { cartContext } from './cartContext'
import { product, products } from '../../products'

export interface ProviderState {
    cartList: product[]
}

// export interface ProviderState {
//     cartList: { //objekt
//         product: product
//         quantity: number
//     }[]//array av objekt
// }

export class Cartprovider extends Component<{}, ProviderState>{
    constructor(props: {}){
        super(props)
        this.state={
            cartList: []
        }
    }

    addProductToCart = (product: product) => {
        const clonedCart = Object.assign([], this.state.cartList)
        clonedCart.push(product)
        this.setState({ cartList: clonedCart }, () => { console.log(this.state)})
    }

    render() {
        return (
            <cartContext.Provider value={{
                ...this.state,
                addProductToCart: this.addProductToCart
            }}>
                {this.props.children}
            </cartContext.Provider>
        )
    }
}

