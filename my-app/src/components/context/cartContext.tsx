import React, {createContext, Component} from 'react'
import { ProviderState } from './cartProvider'
import { product, products} from '../../products'

export interface ContexState extends ProviderState {
    addProductToCart: ( product: product) => void
}

export const cartContext = createContext<ContexState>({
    cartList: [],
    addProductToCart: (product: product)=> {
        console.log(
            "Sonmthing Went Wrong With Adding" + product.name + "to e cart..."
        )}
})

export const CartConsumer = cartContext.Consumer

