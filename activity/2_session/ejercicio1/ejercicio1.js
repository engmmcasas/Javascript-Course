function ejercicio1(objt){

    let output_array = [];
    for (let property in objt){
        output_array.push(property);
    }
    return output_array;
}

export { ejercicio1 };

