//Inporting Module
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
//addToCart('bread', 5);

console.log('Importing module');
// import * as ShopingCart from './shoppingCart.js';

import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js';

add('bread', 5);
// console.log(ShopingCart.totalPrice);
console.log(price);
