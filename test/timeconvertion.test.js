const timeconvertion = require('../src/index');

test('should throw a invalid i/p unit if fromUnit is not valid', () => {
    expect(timeconvertion(90, 'minute', 'seconds')).toBe('invalid i/p unit');
});

test('should throw a invalid o/p unit if toUnit is not valid', () => {
    expect(timeconvertion(90, 'hours', 'second')).toBe('invalid o/p unit');
    expect(timeconvertion(90, 'minutes', 'second')).toBe('invalid o/p unit');
    expect(timeconvertion(90, 'seconds', 'minute')).toBe('invalid o/p unit');
});

// console.log(timeconvertion('one','hours','minutes'));
test('should throw a input value error if you passes a string', () => {
    expect(timeconvertion('one', 'hours', 'minutes')).toEqual('Value error'); //toEqual used for object compare
});

test('should throw a Value is not greater than 0 error if you pass negative value', () => {
    expect(timeconvertion(0, 'hours', 'seconds')).toBe('Value should be greater than 0')
});

test('should throw a units are same error if fromUnit and toUnit are same', () => {
    expect(timeconvertion(2, 'minutes', 'minutes')).toBe('Units are same');
});

//Hours to minutes and seconds
// console.log(timeconvertion(10,'hours','minutes'));
test('10 hours equal to 600 minutes', () => {
    expect(timeconvertion(10, 'hours', 'minutes')).toBe('600 minutes');
});

test('2 hours not equal to 200 minutes', () => {
    expect(timeconvertion(2, 'hours', 'minutes')).not.toBe('200 minutes');
});

test('2 hours is equal to 200 seconds', () => {
    expect(timeconvertion(2, 'hours', 'seconds')).toBe('7200 seconds');
});

//minutes to hours and seconds
test('90 minutes equal to 1:30 hours', () => {
    expect(timeconvertion(90, 'minutes', 'hours')).toBe('1:30 hours');
});

// console.log(timeconvertion(90, 'minutes', 'seconds'))
test('90 minutes equal to 5400 seconds', () => {
    expect(timeconvertion(90, 'minutes', 'seconds')).toBe('5400 seconds');
});

//seconds to minutes and hours
test('120 seconds equal to 2 minutes', ()=>{
    expect(timeconvertion(140, 'seconds','minutes')).toBe('2:20 minutes');
});

test('3600 seconds equal to 1 hour', ()=>{
    expect(timeconvertion(3600, 'seconds','hours')).toBe('1:0 hours')
})