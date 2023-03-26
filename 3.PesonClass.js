class Person {
    constructor(firstname,lastname,age,gender,location)
    {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
        this.gender = gender;
        this.location = location;
    }
    fullname()
    {
        return `${this.firstname} ${this.lastname}`;
    }
    
}

const user = new Person('Siva','Raman',25,'Male','Tamilnadu');
console.log(user.fullname());
console.log(user.age);
console.log(user.gender);
console.log(user.location);




