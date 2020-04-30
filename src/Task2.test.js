const sortProductsTask2 =  require('./Task2')

test('Task 2: Example provided', () => {
    expect(sortProductsTask2([
        {id: 1, price: 10}, {id: 2, price: 11}, {id: 3, price: 1}
    ], {size: 4})).toStrictEqual({
        highest: null,
        lowest: null
    });
});

test('Task 2: Example 2', () => {
    expect(sortProductsTask2([
        {id: 1, price: 10}, {id: 2, price: 11}, {id: 3, price: 1}
    ], {size: 3})).toStrictEqual({
        highest: [{id: 3, price: 1},{id: 1, price: 10}, {id: 2, price: 11}],
        lowest: null
    });
});

test('Task 2: Example 2', () => {
    expect(sortProductsTask2([
        {id: 1, price: 10}, {id: 2, price: 11}, {id: 3, price: 1}
    ], {size: 2})).toStrictEqual({
        highest: [{id: 1, price: 10}, {id: 2, price: 11}],
        lowest: [{id: 3, price: 1}]
    });
});

test('Task 2: Example 3', () => {
    expect(sortProductsTask2([
        {id: 1, price: 10}, {id: 2, price: 11}, {id: 3, price: 1}
    ], {size: 1})).toStrictEqual({
        highest: [{id: 2, price: 11}],
        lowest: [{id: 3, price: 1}]
    });
});

test('Task 2: Example 4', () => {
    expect(sortProductsTask2([
        {id: 1, price: 10}, {id: 2, price: 11}, {id: 3, price: 1}
    ], {size: 0})).toStrictEqual({
        highest: null,
        lowest: null
    });
});


