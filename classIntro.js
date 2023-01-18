// class User {
//     talk(){
//         console.log("Talking");
//     }
// }
// let person1 = new User();
// let person2 = new User();


// class Obj{
//     constructor(fristName, lastName, email, password){
//         this.fristName = fristName;
//         this.lastName = lastName;
//         this.email = email;
//         this.password = password
//     }
//     getFullName(){
//         const fullName = this.fristName + " " + this.lastName
//         return fullName;
//     }
// }

// let user1 = new Obj("Adarsh", "Chhetri", "chhetriadarsh912@gmail.com", "******");
// console.log(user1);
// console.log(user1.getFullName());

// let user2 = new Obj("Bani", "Romin", "rominbani0111@gmail.com", "******");
// console.log(user2);

//  ========GETTER AND SETTER========== 

// class User{
//     constructor(fristName, lastName){
//         this.fristName = fristName;
//         this.lastName = lastName;
//     }
//     getFullName(){
//         const fullName = this.fristName + " " + this.lastName
//         return fullName;
//     }
//     get getFirstName(){
//         return this.fristName
//     }
//     get getLastName(){
//         return this.lastName
//     }

//     set setScore(score){
//         this.score = score;
//     }

//     get getScore(){
//         return this.score;
//     }
// }

// let user1 = new User("JavaScript", "WebDeveloper")
// console.log(user1.getFirstName);
// console.log(user1.getLastName);

// console.log(user1.getScore);
// user1.setScore = 7;
// console.log(user1.getScore);

// ===========Inheritance===========

// class UserOne{
//     constructor(firstName, lastName){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.score = 0;
//     }
//     getFullName(){
//         const fullName = this.fristName + " " + this.lastName
//         return fullName;
// }

// class UserTwo extends UserOne { 
//     getFullName(){
//         const fullName = this.fristName + " " + this.lastName
//         return fullName;
//     }
// }
