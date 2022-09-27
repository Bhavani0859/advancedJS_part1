
/*1. what is the purpose of a constructor function?
The purpose of a constructor is to create an object and set values if there are any object properties present.
It helps to reduce the dulication
you do not need to explicitly state what to return as the constructor function, by default, returns the object that gets created within it.*/

/*2. What does the new keyword do?
 * new keyword used to create as a constructor, Creates a blank, plain JavaScript object.*/ 
 
/*3. what does the keyword this refers to inside of a constructor function?
 *  when we create a constructor function, we can use the “this” keyword to reference the object that will be created when the constructor is instantiated*/

/*4. What is a class? what is an instance?
 * class is the logical entity on which the instance/object will work
 * Instance/object is the physical entity which works on class*/

//5. Create a constructor function for a Person, each person should have a firstName, lastName, favoriteColor and favoriteNumber.
  function Person(firstName, lastName, favoriteColor, favoriteFood){
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
    this.favoriteFood = favoriteFood;
}
   let obj1=new Person("Bhavani","kurupudi","white","Biryani");

//6. Write a method called multiplyFavoriteNumber that takes in a number and returns the product
 // of the number and the Person's favorite number
  function MultiplyFavoriteNumber(n1){
    this.fav_number= 3;
    console.log(this.fav_number*n1);
  }
  let obj2 = new MultiplyFavoriteNumber(9);

 
 
/*7 Refactor the following code so that there is no duplication inside the Child function.

  function Parent(firstName, lastName, favoriteColor, favoriteFood){
      this.firstName = firstName;
      this.lastName = lastName;
      this.favoriteColor = favoriteColor;
      this.favoriteFood = favoriteFood;
  }
  
  function Child(firstName, lastName, favoriteColor, favoriteFood){
      this.firstName = firstName;
      this.lastName = lastName;
      this.favoriteColor = favoriteColor;
      this.favoriteFood = favoriteFood;
  }*/
  function Parent(firstName, lastName, favoriteColor, favoriteFood){
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
    this.favoriteFood = favoriteFood;
}
let a=new Parent("Bhavani","kurupudi","white","Biryani")
let b=new Parent("vani","k","red","fruits")
