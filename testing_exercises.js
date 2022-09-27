/*Write a function called replaceWith that takes in a string, a character to replace and 
a character to replace it with and returns the string with the replacements. 
Write tests to make sure this is case sensitive
replaceWith("awesome", "e", "z") // "awzsomz"
replaceWith("Foo", "F", "B") // "Boo"*/

function replaceWith(string1,char1,char2){
    for(let i=0; i<string1.length; i++){
        if (string1[i]== char1){
                string1=string1.replace(char1,char2)
                //console.log(string1)
        }
    }
    //console.log(string1)
    return string1
}
let a=replaceWith("Bhaveni","e","a")
console.log("after replacing:")
console.log(a)

/*Write a function called expand which takes an array and a number and returns a copy of the array with as many numbers as specified
expand([1,2,3],3) //[1,2,3,1,2,3,1,2,3]
expand(["foo", "test"],1) //["foo","test"]*/
function expand(arr,num){
    a=[]
    for(let i=0; i<=arr.length; i++){
        a=a.concat(arr)
    }
    return a
}
let expanding=expand([1,2,3,4],5)
console.log("after repeting array elements [1,2,3,4] 5 times")
console.log(expanding)

/*Write a function called mergeArrays which takes in two arrays and returns one array with the values sorted
mergeArrays([2,1],[3,4]) // [1,2,3,4]*/
console.log("-------merging arrays in sorted order---------")
function mergeTwo(arr1, arr2) {
    arr1=arr1.concat(arr2)
    //console.log(arr1)
    arr1.sort()
    return arr1
  }
  
  let mergedArray=mergeTwo([1,3,9],[5,6,2]);
  console.log("after merging")
  console.log(mergedArray)

  /*Write a function called mergeObjects which takes in two objects and return an object with the keys and values 
  combined. If the second parameter has the same key - it should override first one. There is a built in function
   called Object.assign - research it, but do not use it, try to do this on your own!
var obj1= {
    name: "Foo",
    num: 33
}
var obj2 = {
    test: "thing",
    num: 55
}
mergeObjects(obj1, obj2) 
{
    name: "Foo",
    test: "thing",
    num: 55
}
*/

console.log("------merging two objects--------")
//we can do this in two ways one is spread operator(...) and another way is using Object.assign() built in method 
var obj1= {
    name: "Foo",
    num: 33
}
var obj2 = {
    test: "thing",
    num: 55
}
function mergeObjects(obj1, obj2) 
{
    let obj3={}
    for( let i in obj1 ){
        obj3[i] = obj1[i]; }
    for (let i in obj2) {
        //console.log(obj3[attrname])
        obj3[i] = obj2[i]; }
        return obj3;
}
let a1 = mergeObjects(obj1,obj2)
console.log(a1)








