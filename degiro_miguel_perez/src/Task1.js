/*
Task 1

Start with the basic code.
Create a function sortProductsByPrice that finds 5 products with the highest prices and 5
products with the lowest prices from the product array.

**/

function sortProductsTask1(products, options = {size: 5}) {
    products.sort((a, b) => (a.price > b.price) ? 1 : -1);
    return {highest: products.slice(0 - options.size), lowest: products.slice(0,options.size)};
};

module.exports = sortProductsTask1;


