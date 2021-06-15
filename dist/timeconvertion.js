"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.timeconvertion = void 0;
var timeconvertion = function (val, fromUnit, toUnit) {
    if (typeof (val) !== 'number')
        return 'Value error';
    if (val <= 0)
        return 'Value should be greater than 0';
    if (fromUnit == toUnit)
        return 'Units are same';
    //hours to minutes and seconds
    if (fromUnit == 'hours') {
        //to minutes
        if (toUnit == 'minutes')
            return val * 60 + ' minutes';
        //to seconds
        else if (toUnit == 'seconds')
            return val * 3600 + ' seconds';
        else
            return 'invalid o/p unit';
    }
    //minutes to seconds and hours
    else if (fromUnit == 'minutes') {
        //to seconds
        if (toUnit == 'seconds')
            return val * 60 + ' seconds';
        //to hours
        else if (toUnit == 'hours') {
            var calhrs = Math.floor(val / 60);
            var calmins = val % 60;
            return calhrs + ':' + calmins + ' hours';
        }
        else
            return 'invalid o/p unit';
    }
    //seconds to hours and minutes
    else if (fromUnit == 'seconds') {
        //to minutes
        if (toUnit == 'minutes') {
            var calmins = Math.floor(val / 60);
            var calsecs = (val % 60);
            return calmins + ':' + calsecs + ' minutes';
        }
        //to hours
        else if (toUnit == 'hours') {
            var calhrs = Math.floor(val / 3600);
            var calmins = Math.floor((val % 3600) / 60);
            return calhrs + ':' + calmins + ' hours';
        }
        else
            return 'invalid o/p unit';
    }
    else {
        return 'invalid i/p unit';
    }
};
exports.timeconvertion = timeconvertion;
// console.log(timeconvertion(1,'hours','minutes'));
