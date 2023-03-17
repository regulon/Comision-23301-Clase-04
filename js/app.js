let myDom = document; //document es un objeto global

// Construir un objeto
const myDog = {
    name: "Firulais"
};

// Tambien se puede colocar el atributo entre comillas
const myCat = {
    "name": "Kitty"
};

// Un modo equivalente es:

//let name = "Firulais"; // La diferencia está que entre llaves se declatra un atributo razón por la cual se utilizan dos puntos.

console.log(myDog.name);
console.log(myCat.name); // Se puede modificar por consola, para esto se debe detener la ejecución con un punto de interrupción

/* class Mouse {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}; */

function Mouse(name, age){
    this.name = name;
    this.age = age;
};

const myMouse = new Mouse("Perez", 4);


class Button {
    constructor(parentID, text) {
        this.parentID = parentID;
        // completar this.text
    }

    render(){
        let myApp = document.getElementById(this.parentID);
        
        myApp.innerHTML = "<button>PLACEHOLDER</button>"; // Vamos a escribir el html para que se dibuje un botón con el texto de this.text
    }   
}

// Construir el objeto botón
// y llamar al método render de este objeto.
// ejemplo, let myButton = new ...
//myButton.metodoQueSea(), en este caso el método render
