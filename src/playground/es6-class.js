class Person {
   constructor(name = 'Anonymous', age = 0) {
      this.name = name;
      this.age = age;
   }

   getDescription() {
       return `Hii, i am  ${this.name}.`;
   }
   
   getGreeting() {
       return `${this.name} is ${this.age} years old`;
   }
}

class Student extends Person {
    constructor(name, age, major) {
       super(name, age);
       this.major = major;
    }
    
    hasMajor() {   
        return !!this.major;
    }

    getDescription() {
        var description = super.getDescription();

        if(this.hasMajor()) {
            description += `i am major in ${this.major}`
        } 

        return description;
    }
}

var vivek = new Student('vivek', '23', 'node.js');
console.log(vivek.getDescription());

var bhanu = new Student('bhanu', '23');
console.log(bhanu.getDescription());
