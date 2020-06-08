import { object } from "prop-types";

export interface product {
    name:string
    title : string
    price: number
    image: string
}

export const products: product[] = [
    {
        name:"Skateboard - 9.6 Big Plant Team",
        title:"Skateboard - 8.6 Big Plant Team",
        price: 1999,
        image: "https://www.junkyard.se/media/catalog/product/930x/9/2/924020.jpg" 
    }, {
        name:"Skateboard - 8.6 Big Plant Team",
        title:"Skateboard - 8.6 Big Plant Team",
        price: 999,
        image: "https://www.junkyard.se/media/catalog/product/930x/9/2/924020.jpg" 
    }, {
        name:"Skateboard - 7.75 Double Pipe",
        title:"Skateboard - 7.75 Double Pipe",
        price: 1199,
        image: "https://www.junkyard.se/media/catalog/product/930x/9/0/906343.jpg" 
    }, {
        name:"Skateboard - 5 Stein",
        title:"Skateboard - 5 Stein",
        price: 2900,
        image: "https://www.junkyard.se/media/catalog/product/930x/9/2/927134.jpg" 
    }, {
        name:"Skateboard - 8.6 Stein",
        title: "Skateboard - 8.6 Stein",
        price: 2900,
        image: "https://www.junkyard.se/media/catalog/product/930x/9/1/910985.jpg" 
    }, {
        name:"Skateboard - 7.875 Rave",
        title:"Skateboard - 7.875 Rave",
        price: 499,
        image: "https://www.junkyard.se/media/catalog/product/930x/9/2/923776.jpg" 
    }, {
        name:"Skateboard - 8 Outdoor",
        title:"Skateboard - 8 Outdoor",
        price: 499,
        image: "https://www.junkyard.se/media/catalog/product/930x/8/9/890354.jpg" 
    }, {
        name:"Skateboard - 8 SUB",
        title:"Skateboard - 8 SUB",
        price: 499,
        image: "https://www.junkyard.se/media/catalog/product/930x/9/2/929031.jpg" 
    }, {
        name:"Skateboard - 8.25 Banana",
        title:"Skateboard - 8.25 Banana",
        price: 499,
        image: "https://www.junkyard.se/media/catalog/product/930x/9/2/924722.jpg" 
    }         
]