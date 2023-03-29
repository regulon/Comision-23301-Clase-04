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
        this.text = text;
    }

    render(){
        let myApp = document.getElementById(this.parentID);
        
        const myButtonHTML = `${myApp.innerHTML}<botton class="btn btn-success btn btn-outline-primary" id="bot1">${this.text}</botton>`; // Vamos a escribir el html para que se dibuje un botón con el texto de this.text
       
        myApp.innerHTML = myButtonHTML;
        
    }   
}

let boton1 = new Button("app", "Esto es un botón");
boton1.render();

let boton2 = new Button("app", "Esto es otro botón");
boton2.render();

let boton3 = new Button("app", "Esto es un botón más");
boton3.render();



// Construir el objeto botón
// y llamar al método render de este objeto.
// ejemplo, let myButton = new ...
//myButton.metodoQueSea(), en este caso el método render

class Input{
    constructor(parentID, type, clase, clase1, placeholder){
        this.parentID = parentID;
        this.type = type;
        this.clase = clase;
        this.clase1 = clase1;
        this.placeholder = placeholder;
    }

    render(){
        let myApp = document.getElementById(this.parentID);
        
        const myButtonHTML = `${myApp.innerHTML}<div class="${this.clase1}"><input class="${this.clase} ph-left" placeholder="${this.placeholder}" id="inp1" type="${this.type}" value=""></div>`; // Vamos a escribir el html para que se dibuje un botón con el texto de this.text
       
        myApp.innerHTML = myButtonHTML;
    }
}

let input1 = new Input("app", "text", "form-control", "col-3", "Ingrese el nombre de quien quiere saludar");
input1.render();
let input2 = new Input("app", "date", "form-control mt-1", "col-3", "");
input2.render();
let input3 = new Input("app", "password", "form-control mt-1", "col-3", "Introduzca su password");
input3.render();

// Renderizar elementos mediante un array
let superArrayOfStrings = ["Esto es un botón", "Esto es otro botón", "Esto es un botón más"];
