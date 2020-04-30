function sortProductsTask1(products, options = {size: 5}) {
    products.sort((a, b) => (a.price > b.price) ? 1 : -1);
    return {highest: products.slice(0 - options.size), lowest: products.slice(0,options.size)};
};

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

let memo = false;
function sortProductsTask3(products, options = {size: 5}) {
    if (memo !== products) {
        memo = products;
    } else {
        return {highest: null, lowest: null};
    }

    return sortProductsTask2(products, options);

};

const products = [
    { id: 1, price: 10 },
    { id: 2, price: 11 },
    { id: 3, price: 1 },
    { id: 4, price: 3 },
    { id: 5, price: 1 },
    { id: 6, price: 8 },
    { id: 7, price: 3 },
    { id: 8, price: 0 },
    { id: 9, price: 4 },
    { id: 10, price: 5 },
    { id: 11, price: 9 },
    { id: 12, price: 13 },
];



console.log('-- Task 1 --');
let result = sortProductsTask1(products);
console.log(result);



console.log('-- Task 2 --');
result = sortProductsTask2([
    {id: 1, price: 10}, {id: 2, price: 11}, {id: 3, price: 1}
], {size: 3});
console.log(result);



console.log('-- Task 3 --');
result = sortProductsTask3(products); // ok
result = sortProductsTask3(products); // null
console.log(result);
