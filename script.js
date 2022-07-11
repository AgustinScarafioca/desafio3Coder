
class Producto{
    constructor (name, id, precio, stock,){
    this.name =  name;
    this.id = id;
    this.precio = precio
    this.stock = stock;
}
    aumentarStock(ingreso = 1){
        this.stock = this.stock + ingreso
    }
    disminuirStock(egreso = 1){
        this.stock = this.stock - egreso
    }
    aumentoPrecio(porcentaje = 1){
        this.precio = precio * porcentaje
        // this.precio *= porcentaje
    }
    mostrarSeleccion(){
        console.log(`Usted selecciono el producto ${this.nombre}`)
    }
}

const producto1= new Producto ("Sauron", 1, 1500, 5)
const producto2= new Producto ("Frodo Bolson", 2, 2000, 1)
const producto3= new Producto ("Smaug", 3, 1800, 3)
const producto4= new Producto ("Stormtrooper", 4, 800, 25)
const producto5= new Producto ("Darth Vader", 5, 1200, 10)
const producto6= new Producto ("Han Solo", 6, 1400, 15 )

const productos = [producto1, producto2, producto3, producto4, producto5, producto6]

console.log(productos)


/* const input1= document.getElementById("input1")
const input2= document.getElementById("input2")

input1.addEventListener("change")

input2.addEventListener("change")
 */

const boton1 = document.getElementById("boton1")

boton1.addEventListener("click",() => {
    const divProductos = document.getElementById("divProductos")

    productos.forEach(producto =>{
        divProductos.innerHTML += `
        <div class= "card p-5 m-2 w-25 bg-info" id= "${producto.id}">
            <p>${producto.name}</p>
            <p>${producto.id}</p>
            <p>Precio: ${producto.precio}</p>
            <p>Stock: ${producto.stock}</p>
        </div>
        `
    })
})  


class User{
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password
    }
}

const formulario = document.getElementById("userForm")

const usuarios = []

formulario.addEventListener("submit", (e) =>{
    e.preventDefault()
    let username= document.getElementById("userInput").value
    let email = document.getElementById("mailInput").value
    let password = document.getElementById("passwordInput").value
    const user = new User (username, email, password)
    usuarios.push(user)
    formulario.reset()
    console.log(usuarios)
})


/*
const usuarioExitoso = document.getElementById("exito")
function lenghtUsers(usuarios) {
    var length = usuarios.length;
    for (var i = 0; i < length; i++) {
        console.log(usuarios[i]);
    }
    return
}

let longitud=  lenghtUsers (usuarios)
console.log(lenghtUsers)

if (longitud > 0) {
    usuarioExitoso.innerHTML+=`
    <div class= "container">
        <p> El usuario ha sido creado con exito</p>
    </div>
    ` 
}
*/



