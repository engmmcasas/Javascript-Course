class ejercicio4_Login {

    constructor(username, password){

        this.username = username;
        this.password = password;

    }

    login(){

        if (this.username === "admin" && this.password === "passwd"){
            alert("User logged in");
        }
        else{
            alert("user or password incorrect");
        }

    }

}


export {ejercicio4_Login};