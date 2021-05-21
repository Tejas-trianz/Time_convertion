const timeconvertion = require('../index');

//Hours to minutes
// console.log(timeconvertion(10,'hours','minutes'));
test('10 hours equal to 600 minutes', () => {
    expect(timeconvertion(10, 'hours', 'minutes')).toBe('600 minutes');
});

// console.log(timeconvertion(2,'hours','minutes'));
test('2 hours not equal to 200 minutes', () => {
    expect(timeconvertion(2, 'hours', 'minutes')).not.toBe('200 minutes');
});

//check for value error
// console.log(timeconvertion('one','hours','minutes'));
test('input value error', () => {
    expect(timeconvertion('one', 'hours', 'minutes')).toEqual('Value error'); //toEqual used for object compare
});

//check value is greater than 0
test('Value is not greater than 0', () => {
    expect(timeconvertion(0, 'hours', 'seconds')).toBe('Value should be greater than 0')
});


//check for input units are same
test('fromUnit and toUnit are same', () => {
    expect(timeconvertion(2, 'minutes', 'minutes')).toBe('Units are same');
});