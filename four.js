function hasproperty(obj,propertyname){
    return obj.hasownproperty(propertyname);
}

const exampleObject = { name: "Alice", age: 25 };
console.log(hasProperty(exampleObject, "age")); 

