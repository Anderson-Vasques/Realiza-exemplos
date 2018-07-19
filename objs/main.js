var person = {
    firstName:"John", 
    lastName:"Doe", 
    age:50, 
    eyeColor:"blue",
    showAll: function() {
        return this;
    }
};

// Em uma funcao, a palavra reservada `this` se refere ao dono da funcao;


function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}


var myFather = new Person("John", "Doe", 50, "blue");
var myMother = new Person("Sally", "Rally", 48, "green");