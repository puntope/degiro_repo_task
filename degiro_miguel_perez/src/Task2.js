/*
Task 2

Start with the basic code.
Create a function sortProductsByPrice that finds 5 products with the highest prices and 5
products with the lowest prices from the product array.

**/

function sortProductsTask2(products, options = { size: 5 }) {
    let lowestToFill = products.length - options.size;
    let highest = null;
    let lowest = null;
    if (options.size && lowestToFill >= 0) {
        products.sort((a, b) => (a.price > b.price ? 1 : -1));
        highest = products.slice(0 - options.size);
        if (lowestToFill > 0) {
            if (lowestToFill > options.size) {
                lowest = products.slice(0, options.size);
            } else {
                lowest = products.slice(0, lowestToFill);
            }

        }
    }

    return { highest: highest, lowest: lowest };
};

module.exports = sortProductsTask2;
