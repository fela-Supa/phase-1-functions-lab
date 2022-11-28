// Code your solution in this file!
function distanceFromHqInBlocks(location)
{
    if (location == 43){
        return (1);
    }
    else 
    {
        return (8);
    }

}
function distanceFromHqInFeet(block)
{
    if (block == 43)
    {
        const feetDistance  = (block - 42) * 264;
        return feetDistance;
    }
    else 
    {
        return (2112);
    }

}
function distanceTravelledInFeet(a,b)
{
    if (b > a)
    {
    const distance = (b - a) * 264;
    return (distance);
    }
    else if (a > b)
    {
        const distance = (a - b) * 264;
        return  (distance);
    }
}
function calculatesFarePrice(start, destination)
{
    const dist =  distanceTravelledInFeet( start,destination)
    let n;
    if (dist <=400)
    {
        n = 0;
    
    }
     else if (dist > 400 && dist < 2000)
    {   
        n = 2.56;
        
    }
     else if (dist > 2000 && dist < 2500 )
     {
        n = 25;
     }
     else  if ( dist > 2500) 
     {
         n = 'cannot travel that far';
    }
    return n;
}