//High Order Function & Callback Function

function getFirstName(fullname){
    //fullname = we get "TONY STARK",use to split the 'name' on 'space';
    let fullName= fullname.split(" ");
    //fullName=["TONY", "STARK"];
    return fullName[0];
}
function getLastName(fullname){
    //fullname = we get "TONY STARK",use to split the 'name' on 'space';
    let fullName= fullname.split(" ");
    
    return fullName[1]; //fullName=["TONY", "STARK"];
}

function sayHi(fullname,fun){

    let name=fun(fullname);
    console.log(name)
}

sayHi("TONY STARK",getFirstName);
sayHi("BRUCE BANNER",getLastName);