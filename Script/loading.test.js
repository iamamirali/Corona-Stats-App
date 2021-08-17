const loading = require('./app')

test('check if loading is truthy or falsy', () =>{
    expect(loading()).toBeTruthy();
})
