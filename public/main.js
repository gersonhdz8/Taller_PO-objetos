let section1=document.getElementById("punto1");
let section2=document.getElementById("punto2");
let section3=document.getElementById("punto3");
let section4=document.getElementById("punto4");
let section5=document.getElementById("punto5");

let myForm = document.querySelector("#form");
let myForm2 = document.querySelector("#form2");
let myForm3 = document.querySelector("#form3");
let myForm4 = document.querySelector("#form4");
let myForm5 = document.querySelector("#form5");

let mensajes=document.getElementById("mensajeConsola")
let mensajes2=document.getElementById("mensajeConsola2")
let mensajes3=document.getElementById("mensajeConsola3")
let mensajes4=document.getElementById("mensajeConsola4")
let mensajes5=document.getElementById("mensajeConsola5")

let btnPunto1=document.getElementById("1").addEventListener("click",clickBtnPunto)
let btnPunto2=document.getElementById("2").addEventListener("click",clickBtnPunto)
let btnPunto3=document.getElementById("3").addEventListener("click",clickBtnPunto)
let btnPunto4=document.getElementById("4").addEventListener("click",clickBtnPunto)
let btnPunto5=document.getElementById("5").addEventListener("click",clickBtnPunto)

section1.style.display="none"
section2.style.display="none"
section3.style.display="none"
section4.style.display="none"
section5.style.display="none"


function clickBtnPunto(event)
{
    const btn=event.target
    const idBtn=btn.id

    if(idBtn==1)
    {
        section1.style.display="grid"
        section2.style.display="none"
        section3.style.display="none"
        section4.style.display="none"
        section5.style.display="none"
    }
    else if (idBtn==2)
    {
        section1.style.display="none"
        section2.style.display="grid"
        section3.style.display="none"
        section4.style.display="none"
        section5.style.display="none"
    }
    else if (idBtn==3)
    {
        section1.style.display="none"
        section2.style.display="none"
        section3.style.display="grid"
        section4.style.display="none"
        section5.style.display="none"
    }
    else if (idBtn==4)
    {
        section1.style.display="none"
        section2.style.display="none"
        section3.style.display="none"
        section4.style.display="grid"
        section5.style.display="none"
    }
    else if (idBtn==5)
    {
        section1.style.display="none"
        section2.style.display="none"
        section3.style.display="none"
        section4.style.display="none"
        section5.style.display="grid"
    }
}
//-----------------PUNTO1------------------------------------------------
/**
 ** Clase Persona con 3 parametros de entrada
    @param  {nombre} nombre nombre de la persona
    @param  {edad} edad edad de la persona
    @param  {sexo} sexo sexo de la persona
 */
class Persona{
    constructor({nombrePersona,edadPersona,sexoPersona})
    {
        this.nombrePersona = nombrePersona;
        this.edadPersona = edadPersona;
        this.sexoPersona = sexoPersona;
    }
    /**
     * * Metodo saludar de la clase Persona, devuelve un mensaje 
     */
    saludar()
    {
        mensajes.innerHTML+=`Hola soy ${this.nombrePersona}, tengo ${this.edadPersona} y soy ${this.sexoPersona}`
    }
    get getEdad()
    {
        return this.edadPersona
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
    constructor({nombrePersona,edadPersona,sexoPersona,carreraEstudiante})
    {
        /**
         *Super inicializa el contructor de la clase padre y asigna sus atributos
         */
        super({nombrePersona,edadPersona,sexoPersona});
        this.carreraEstudiante = carreraEstudiante;
    }

    /**
     * Metodo de la clase Estudiante, devuelve un mensaje
     */

    estudiar() 
    {
        mensajes.innerHTML+=`. Estoy estudiando ${this.carreraEstudiante}`
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
    mensajes.innerHTML=""     
    let persona1= new Persona({...data});
    let estudiante1= new Estudiante({...data})
    persona1.saludar()    
    estudiante1.estudiar()
    Persona.mayorEdad(persona1.edadPersona)    
    }
)

//----------------------------------------------------------------------------
//------PUNTO2----------------------------------------------------------------
class Animal {
    constructor({nombreAnimal,sexoAnimal})
    {
        this.nombreAnimal = nombreAnimal;
        this.sexoAnimal = sexoAnimal;
    }
    sonidoAnimal()
    {
        mensajes2.innerHTML+=`El animal ${this.nombreAnimal} está haciendo ruido` 
    }
}
class Perro extends Animal {

    constructor({nombreAnimal,sexoAnimal,razaPerro})
    {
        super({nombreAnimal,sexoAnimal});
        this.razaPerro=razaPerro;
    }
    moverCola()
    {
        mensajes2.innerHTML+=`El perro de raza ${this.razaPerro} está moviendo la cola`
        
    }    
}
myForm2.addEventListener("submit",(e)=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    console.log(data); 
    mensajes2.innerHTML=""   
    let animal1= new Animal({...data})
    let perro1= new Perro({...data})
    animal1.sonidoAnimal()
    perro1.moverCola()
    }
)

//----------------------------------------------------------------------------------------
//---------------PUNTO3-------------------------------------------------------------------
class Figura{
    constructor({colorFigura,areaFigura})
    {
        this.colorFigura=colorFigura;
        this.areaFigura=areaFigura;
    }
    calcularArea()
    {
        mensajes3.innerHTML+=` El area de la figura es ${this.areaFigura}`
    }
}

class Circulo extends Figura
{
    constructor({colorFigura,areaFigura,radioCirculo})
    {
        super({colorFigura,areaFigura})
        this.radioCirculo=radioCirculo
    }
    calcularArea()
    {
        const pi = 3.1416
        const radio= this.radioCirculo
        console.log(radio)
        const areaCirculo = pi*(radio^2);
        console.log(areaCirculo)
        mensajes3.innerHTML+=` El area del circulo es ${areaCirculo}` 
    }
}
class Rectangulo extends Figura
{
    constructor({colorFigura,areaFigura,largoRectangulo,anchoRectangulo})
    {
        super({colorFigura,areaFigura});
        this.largoRectangulo=largoRectangulo;
        this.anchoRectangulo=anchoRectangulo;
    }
    calcularArea()
    {
        const base = this.anchoRectangulo;
        const altura= this.largoRectangulo;
        const area= base*altura
        console.log(area)       
        mensajes3.innerHTML+=` El area del rectangulo es ${area}`  
    }
}

myForm3.addEventListener("submit",(e)=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    console.log(data); 
    mensajes3.innerHTML=""
    let figura1= new Figura({...data})
    let circulo1= new Circulo({...data})
    let rectangulo1= new Rectangulo({...data})
    figura1.calcularArea()
    circulo1.calcularArea()
    rectangulo1.calcularArea()
    }
)

//------------------------------------------------------------------------------------------
//----------------PUNTO4---------------------------------------------------------------------
class Vehiculo {
    constructor({marcaVehiculo,modeloVehiculo,velocidadVehiculo})
    {
        this.marcaVehiculo=marcaVehiculo;
        this.modeloVehiculo=modeloVehiculo;
        this.velocidadVehiculo=velocidadVehiculo;
    } 

    acelerar()
    {
        let newVel=parseFloat(this.velocidadVehiculo)+10
        console.log(newVel)
        mensajes4.innerHTML+=`Se ha sumado 10 unidades a la velocidad, velocidad actual ${newVel} kmh.` 
    }
    static converKmhtoMph(vel)
    {
        const velKmh=vel
        let velMph=parseFloat(vel/1.60934)
        mensajes4.innerHTML+=`La velocidad en Mph es ${velMph} .`
    }
}
class Coche extends Vehiculo
{
    constructor({marcaVehiculo,modeloVehiculo,velocidadVehiculo,combustible})
    {
        super({marcaVehiculo,modeloVehiculo,velocidadVehiculo});
        this.combustible=combustible;
    }

    acelerar()
    {
        let newVel=parseFloat(this.velocidadVehiculo)+20
        console.log(newVel)
        mensajes4.innerHTML+=` Se ha sumado 20 unidades a la velocidad ${this.velocidadVehiculo} kmh, velocidad actual ${newVel} kmh.`
    }
}
myForm4.addEventListener("submit",(e)=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    console.log(data); 
    mensajes4.innerHTML=""
    let vehiculo1= new Vehiculo({...data})
    let coche1= new Coche({...data})
    vehiculo1.acelerar()
    coche1.acelerar()
    Vehiculo.converKmhtoMph(vehiculo1.velocidadVehiculo)
    }
)

//-----------------------------------------------------------------
//-------------------PUNTO5----------------------------------------

class Empleado{
    static id = 0;
    constructor({nombreEmpleado,edadEmpleado,sueldoEmpleado})
    {
        this.idEmpleado = Empleado.generarIdEmpleado();
        this.nombreEmpleado = nombreEmpleado;
        this.edadEmpleado = edadEmpleado;
        this.sueldoEmpleado = sueldoEmpleado;
        
        
    }
    salarioAnual()
    {
        let sueldo= this.sueldoEmpleado
        let sueldoAnual =  sueldo*12
        mensajes5.innerHTML+=`Sueldo Anual del empleado = ${sueldoAnual.toLocaleString()}.`
    }
    /**
     * *Metodo estatico que genera un Id único para el empleado y muestra el número de Id cada vez que se instancie uno nuevo.
     * En este caso sale por la console IdEmpleado = 1 e IdEmpleado=2 ya que el constructor de la clase Empleado se instancia 2 veces.
     */
    static generarIdEmpleado()
    {
        ++Empleado.id;
        mensajes5.innerHTML+=`IdEmpleado = ${Empleado.id}. `
        return Empleado.id;
    }
}

class Gerente extends Empleado
{
    constructor({nombreEmpleado,edadEmpleado,sueldoEmpleado,departamentoGerente})
    {
        super({nombreEmpleado,edadEmpleado,sueldoEmpleado})
        this.departamentoGerente = departamentoGerente;
    }

    salarioAnual()
    {
        let sueldoAnual= this.sueldoEmpleado*12
        let sueldoBono=sueldoAnual*0.1
        let sueldoAnualTotal=sueldoAnual+sueldoBono
        mensajes5.innerHTML+=` Sueldo Anual+Bono = ${sueldoAnualTotal.toLocaleString()}`
    }
    

}

myForm5.addEventListener("submit",(e)=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    console.log(data); 
    mensajes5.innerHTML=""
    let empleado1= new Empleado({...data})
    let gerente1_= new Gerente({...data})

    empleado1.salarioAnual()
    gerente1_.salarioAnual()   

    }
)





