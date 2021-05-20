const timeconvertion = (val ,fromUnit ,toUnit) => 
{
    if(!parseInt(val))
        return 'Value error';
    if(val < 0)
        return 'Value should be greater than 0';
    if(fromUnit == toUnit)
        return 'Units are same';
}

var result = timeconvertion(10, 'seconds','seconds');
console.log(result);