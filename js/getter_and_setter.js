// accesors

let obj = {
    name: 'ruben',
    lastname: 'string',
    age: 29,
    assignments: [
        {
            na: 'espanol'
            ave: 90
        },
        {
            na: 'mate'
            ave: 90
        },{
            na: 'ciencias'
            ave: 90
        }
    ],
    getFullName: function() {
        return this.name + ' ' + this.lastname
    },
    saltar: function(){
        return `${this.name} esta saltando`
    },
    getYearsOld: function(){
        return `${this.age} años`
    },
    getAverage: function(){
        let assignments = this.assignments
        let total = assignments.reduce((acc,cv) => {
            return acc + cv.ave
        },0) 
        return total / assignments.length
    }
}

obj.getFullName()
obj.saltar()
obj.getYearsOld()

let koder = {
    name: 'Oscar',
    generation: '1aPython',
    apodo: 'caos',
    meetCode: 'yco-tkkn-kkg',
    horario: '19.00',
    horasClase: 3,
    semanasCurso: 4,
    birthday: '03-10-1983',
    bootcamp: 'python',
    generation: 1,
    weight: 85,
    height: 187,
    curso: [
        {   tema: 'CSS',
            maestro: 'Fer'
        },
        {   tema: 'JS',
            maestro: 'Jorge'
        },
        {   tema: 'Linux',
            maestro: 'Alfredo'
        },
        {   tema: 'Git',
            maestro: 'Charles'
        }
    ],
    getName: function(){
        return this.name
    },
    getApodo: function(){
        return this.apodo
    },
    getMaestro: function(){
        return this.maestro
    },
    getAprendo: function(){
        return `En ${this.generation} aprendo a las ${this.horario} `
    },
    getHorasSemana: function(){
        return this.horasClase * 5
    },
    getHorasCurso: function(){
        return this.getHorasSemana() * this.semanasCurso
    },
    getSenseis: function(){
        let curso = this.curso
        let maestros = curso.map( c => c.maestro)
        return maestros
    },
    getAge: function(){
        let date = this.birthday.slice(this.birthday.length-4)
        return `${this.getName()} tiene ${2020 - date} años `
    },
    getIMC: function(){
        return this.weight / Math.pow(this.height/100,2)
    },
    setBootcamp: function(newBootCamp){
        this.bootcamp = newBootCamp
    },
    setNewProperty: function(nameProperty, valueProperty){
        this[nameProperty] = valueProperty
    },
    set newBootcamp (newBootCamp){
        console.log(newBootCamp)
        this.bootcamp = this.newBootcamp
    },
    get IMC (){
        return this.weight / this.height * this.height
    }

}









