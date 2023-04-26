const chekSeatStatus = require('../homework.js');
it('checkSeatStatus', () => 
{   
     expect(typeof chekSeatStatus).toBe("function");
});

it('The checkSeatStatus debería recibir una parametro tipo string', () => 
{   
