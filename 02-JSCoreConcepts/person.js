class Person {
        constructor(name, surname) {
          this.name = name;
          this.surname = surname;
    };

    showNameAndSurname(){
        console.log(`${this.name} ${this.surname.toUpperCase()}`);
    };

    showInitials(){
        console.log(`${this.name[0]}.${this.surname[0]}.`);
    };
}

person1 = new Person("Jan", "Nowak");
person2 = new Person("Paweł", "Czachura");

person1.showNameAndSurname();
person1.showInitials();

person2.showNameAndSurname();
person2.showInitials();
