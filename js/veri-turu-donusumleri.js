let isActive = true
let firstName = "gizem"
let year = 2023

console.log("isActive =",isActive, typeof(isActive))
console.log("firstName =",firstName, typeof(firstName))

console.log("year  =",year, typeof(year))
console.log("year  =", typeof(year) === "number")

let age = 30
let ageToAge ="11.1asf"

console.log(typeof(ageToAge),typeof(parseInt(ageToAge)))
console.log("ageToage bilgisi= ",ageToAge, "parse edilince =",parseInt(ageToAge))


result = age + parseInt(ageToAge)
console.log("age + ageToage =",result)
//number la cagırırsak 


result = age + Number(ageToAge)
console.log("age + ageToage =",result)

//FLOAT la cagırırsak 
result = age + parseFloat(ageToAge)
console.log("age + ageToage =",result)