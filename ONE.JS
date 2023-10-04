let car={
    make:"moris garage",
    model:"MG Hector",
    year:2023,
};
function displayproperties(car)
{
 for(const property in car){
    console.log(property+" "+car[property]);
        
 }  
};
displayproperties(car);
