
let formatter = {
                 prefix: "Hello",
                 append:  function(sufix){
                    let output = `${formatter.prefix} ${sufix}`;
                    console.log(output);
                 }   
                }


formatter.toLowerString = function(textInput){
    console.log(textInput.toLowerCase());
}

export { formatter };