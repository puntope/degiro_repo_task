const sortProductsTask1 =  require('./Task1')

test('Task 1: Example provided', () => {
    expect(sortProductsTask1([
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
    ])).toStrictEqual({
        highest: [
            { id: 6, price: 8 },
            { id: 11, price: 9 },
            { id: 1, price: 10 },
            { id: 2, price: 11 },
            { id: 12, price: 13 },
        ],
        lowest: [
            { id: 8, price: 0 },
            { id: 5, price: 1 },
            { id: 3, price: 1 },
            { id: 7, price: 3 },
            { id: 4, price: 3 },
        ]
    });
});
test('Task 1: Custom example with size set', () => {
    expect(sortProductsTask1([
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
    ], {size: 2})).toStrictEqual({
        highest: [
            { id: 2, price: 11 },
            { id: 12, price: 13 },
        ],
        lowest: [
            { id: 8, price: 0 },
            { id: 5, price: 1 },
        ]
    });
});
