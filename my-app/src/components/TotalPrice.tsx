import React, { Component} from 'react';
import {CartContextData} from '../context/cartContext'; 

export interface State {
}
export class TotalPrice extends Component<{}, State>{

    constructor(props: {}){
        super(props)
    }
      
        render(){
            return(
                <CartContextData>
                    {({ getTotalPrice, selectedShipping }) => (
                        <div>
                            <h2>Totalt pris inklusive frakt & Moms:</h2> 
                                
                            <h2> {getTotalPrice() + selectedShipping.cost} :- </h2>
                            <p> VAT: {(getTotalPrice() + selectedShipping.cost) * 0.2} :- </p>
                        </div>
                    )}
               
                </CartContextData>
            )
        }
    }
    



export default TotalPrice;