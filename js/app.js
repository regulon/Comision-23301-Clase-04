let myDom = document;

const myDog = {
    name: "Firulais"
}


const myCat = {
    "name": "Kitty"
}

console.log(myDog.name);
console.log(myCat.name);
/*
class Mouse {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}*/

function Mouse(name, age){
    this.name = name;
    this.age = age;
}

const myMouse = new Mouse("Perez", 4);

class Button {
    constructor(parentID, text) {

    }

    render(){
        let myApp = document.getElementById(this.parentID);
        
        myApp.innerHTML = ""; 
    }
}