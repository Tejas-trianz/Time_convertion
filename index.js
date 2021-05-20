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
    //minutes to seconds and hours
    else if(fromUnit == 'minutes'){
        //to seconds
        if(toUnit == 'seconds')
            return val * 60 + ' seconds';
        //to hours
        else if(toUnit == 'hours'){
            let calhrs = Math.floor(val / 60);
            let calmins = val % 60;
            return calhrs + ':' + calmins + ' hours';
        }
        else
            return 'invalid o/p unit';
    }
}

var result = timeconvertion(3, 'hours','seconds');
console.log(result);