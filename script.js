//Inporting Module
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
//addToCart('bread', 5);

// console.log('Importing module');
// // import * as ShopingCart from './shoppingCart.js';

// import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js';

// add('bread', 5);
// // console.log(ShopingCart.totalPrice);
// console.log(price);

import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

const state = {
  cart: [
    {
      product: 'bread',
      quantity: 5,
    },
    {
      product: 'pizza',
      quantity: 5,
    },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);

state.user.loggedIn = false;
console.log(stateClone);
