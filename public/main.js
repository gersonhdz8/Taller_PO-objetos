let myForm = document.querySelector("#form");
let mensajes=document.getElementById("mensajeConsola")
let myForm2 = document.querySelector("#form2");
let mensajes2=document.getElementById("mensajeConsola2")
/**
 ** Clase Persona con 3 parametros de entrada
    @param  {nombre} nombre nombre de la persona
    @param  {edad} edad edad de la persona
    @param  {sexo} sexo sexo de la persona
 */
class Persona{
    constructor({nombre,edad,sexo})
    {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
    }
    /**
     * * Metodo saludar de la clase Persona, devuelve un mensaje 
     */
    saludar()
    {
        mensajes.innerHTML+=`Hola soy ${this.nombre}, tengo ${this.edad} y soy ${this.sexo}`
    }
    get getEdad()
    {
        return this.edad
    }
    static mayorEdad(edad)
    {
        if(edad>18)
        {
            mensajes.innerHTML+=`. Es mayor de edad`
        }
        else
        {
            mensajes.innerHTML+=`. Es menor de edad`
        }
        
    
    }
}

/**
 ** Clase Estudiante con 4 parametros de entrada, hereda los metodos y atributos de la clase Persona
    @param  {nombre} nombre nombre de la persona
    @param  {edad} edad edad de la persona
    @param  {sexo} sexo sexo de la persona
    @param  {carrera} carrera carrera del estudiante
 */

class Estudiante extends Persona
{
    constructor({nombre,edad,sexo,carrera})
    {
        /**
         *Super inicializa el contructor de la clase padre y asigna sus atributos
         */
        super({nombre,edad,sexo});
        this.carrera = carrera;
    }

    /**
     * Metodo de la clase Estudiante, devuelve un mensaje
     */

    estudiar() 
    {
        mensajes.innerHTML+=`. Estoy estudiando ${this.carrera}`
    }
}
/**
 ** Se extraen todos los datos del formulario y luego se desectructuran para enviarlos como parametros al inicializar las variables de tipo class
 ** Después de inicializar las clases, se ejecutan sus metodos respectivos.
 */
myForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    console.log(data);
    let persona1= new Persona({...data});
    let estudiante1= new Estudiante({...data})
    persona1.saludar()    
    estudiante1.estudiar()
    Persona.mayorEdad(persona1.edad)    
    }
)



