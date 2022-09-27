/*What is the value of the keyword this in the following example:*/
var data = this;
console.log(data);

/*this keyword in JS refers to some object, the value of this keyword defers based on where it was used
here the keyword this is in default binding because it was in global scope so the value in "this" keyword is """window"""*/


/*What does this function output? Why?*/
function logThis(){
    return this;
}
a=logThis()
console.log(a)
/* output is window
this keyword in JS refers to some object, the value of this keyword defers based on where it was used
here the keyword this is in default binding because it was in global scope so the value in "this" keyword is """window"""*/


//What does this function output? Why?
var instructor = {
    firstName: 'Tim',
    sayHi: function(){
        console.log("Hello! " + this.firstName);
    }
}

instructor.sayHi()

/* output is "Hello! Tim"
 here the function "sayHi" wrapping the keyword "this" is called as method on the object "instructor" and returned the value of firstName,
 And here the call-site has the parent object "instructor"  and according to Implicit binding rule this should refere to its parent object
 */


 //What does this function output? Why?
var instructor = {
    firstName: 'Tim',
    info: {
        catOwner: true,
        boatOwner: true
    },
    displayInfo: function(){
        console.log("Cat owner? " + this.catOwner);
    }
}

instructor.displayInfo()

/*output: Cat owner? undefined
because object "info" which was holding the "catOwner" is not the parent of "this" keyword so it will not be accessed using this keyword*/


//What does this function output? Why?
var instructor = {
    firstName: 'Tim',
    info: {
        catOwner: true,
        boatOwner: true,
        displayLocation: function(){
            return this.data.location;
        },
        data: {
            location: "Oakland"
        }
    },
}

instructor.info.displayLocation() // ?

/* output: Oakland
because displaylocation function is returning "this.data.location"
where "this" keyword is used in the child function of "info" object and the "data" object too the child of "info"
so here "this" keyword has access to "data" object and the elemnts of "data" object
*/

//What does this function output? Why?
var instructor = {
    firstName: 'Tim',
    info: {
        catOwner: true,
        boatOwner: true,
        displayLocation: function(){
            return this.location;
        },
        data: {
            location: "Oakland",
            logLocation: this.displayLocation
        }
    },
}

instructor.info.data.logLocation() // Why might we be getting an error here?

/*output: Type error
--because loglocation is not a function
--loglocation is holding the value this.displayLocation --> Oakland  ie 
                -- this.displayLocation function returns the value in this.location i.e Oakland
  (here logLocation is not a function but displayLocation is a function ,logLocation only stores the value
     returned by the displayLocation function)
    */





