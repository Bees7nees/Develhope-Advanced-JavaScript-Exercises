//Constructor functions => Class method - constructor method

/*
Las clases ahorran líneas de código y son flexibles a la hora de referenciar elementos.
*/

class Mascotas {
    constructor(name, furColor, raza, age, isCute) {
        this.name = name;
        this.furColor = furColor;
        this.raza = raza;
        this.age = age;
        this.isCute = isCute;
    };
    /*
    Los métodos abren muchas posibilidades con las clases.
    */
    comer() {
        console.log("Estoy comiendo");
    };
}

let mascota1 = new Mascotas ("Alfredo", "negro", "pastor aleman", 5, true);
// console.log(mascota1.name);

// mascota1.comer();

// Mascotas.tengoFamilia()


mascota2 = new Mascotas("Coco", "blanco", "chihuahua", 2, false);

console.log(Mascotas.name)

// mascota2.comer();

class Perro extends Mascotas {
    constructor (name, furColor, raza, age, isCute, isFriendly) {
        super(name, furColor, raza, age, isCute);
        this.isFriendly = isFriendly;
    };
    /* extends method está bueno porque permite heredar los metodos sin tener que repetir los del super */
    static tengoFamilia() {
        return console.log("Tengo familia! 8)))");
    };
    ladrar() {
        return console.log("GUAU GUAU GUAU");
    };
}


let firulais = new Perro("Firulais", "blanco", "chihuahua", 4, true, true);

// firulais.comer();

// Perro.tengoFamilia()

// Perro.ladrar()

// firulais.ladrar()