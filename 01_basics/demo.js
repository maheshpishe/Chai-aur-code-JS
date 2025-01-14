//console.table(["hey","mahesh"])
//premitive datatype: stack memory
//non primitive datatype: heap memory

//eg: call by value
let one="one";
let two=one;

two="three"
//console.log(one)
//console.log(two);
//you make changes in the copy, not the actual reference.

//call by reference in non primitive datatypes
let user={
    name:"mahesh",
    age:"24"
}
let user2={...user}
user2.age="30"
//console.log(user)

//string interopolation
//console.log(`my name is ${user2.name}`)

//declaring string
let name="mahesh" //option 1 
let name1= new String("mahesh") //option 2

console.log(name1.slice(-2))//accepts negative indexing
console.log(name1.substring(0,4))//only positive 

let address="   Hinjewadi phase 1   "
console.log(address.trim())

console.log(address.trim().replace("1","one"))
console.log(address.includes("phase"))
