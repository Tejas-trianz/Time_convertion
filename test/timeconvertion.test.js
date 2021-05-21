const timeconvertion = require('../index');

console.log(timeconvertion(10,'hours','minutes'));

test('10 hours equal to 600 minutes', () =>{
    expect(timeconvertion(10,'hours','minutes')).toBe('600 minutes');
});
