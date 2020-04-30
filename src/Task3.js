const sortProductsTask2 =  require('./Task2')

/*
Task 3.

When we call the function with unmodified params it should return null in the data fields

**/

let memo = false;
function sortProductsTask3(products, options = {size: 5}) {
    if (memo !== products) {
        memo = products;
    } else {
        return {highest: null, lowest: null};
    }

    return sortProductsTask2(products, options);

};

module.exports = sortProductsTask3;
