Array.prototype.find = function (callback) {
    const array = this;

    for (let i = 0; i < array.length; i++) {
        const item = array [i];

        console.log("dentro del for", item);
        if (callback(item)) {
            return item;
        }
    }

    return undefined;
};

Array.prototype.nombredelapañalera = function (){
    console.log("Esta pañalera tiene cómo nombre La placita");
}

const productos = [
    { id: 1, nombre: "Babysec - Ultrasec"},
    { id: 2, nombre: "Pampers - Premium care, piel delicada"},
    { id: 3, nombre: "Pampers - Premium care, recién nacido hipoalergénico"},
];

const result = productos.find(
    (producto) => producto.nombre == "Pampers - Premium care, piel delicada"
)
console.log(result)