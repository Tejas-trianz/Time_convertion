const timeconvertion = (val ,fromUnit ,toUnit) => 
{
    if(!parseInt(val))
        return 'Value error';
    if(val < 0)
        return 'Value should be greater than 0';
    if(fromUnit == toUnit)
        return 'Units are same';
         //hours to minutes and seconds
    if(fromUnit == 'hours'){
        //to minutes
        if(toUnit == 'minutes') 
            return val * 60 + ' minutes';
        //to seconds
        else if(toUnit == 'seconds')
            return val * 3600 + ' seconds';
        else
            return 'invalid o/p unit';
    }
}

var result = timeconvertion(10, 'seconds','seconds');
console.log(result);