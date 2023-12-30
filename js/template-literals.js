let firstName = "musTafa"
let lastName ='BAYraktuTan'
let training = `Template Literal Js`
let age = 30

let info = `${firstName} ${lastName}`
console.log(info)

info = `Merhaba ${firstName[0].toLocaleUpperCase()}${firstName.slice(1).toLocaleUpperCase()} ${lastName[0].toLocaleUpperCase()}${lastName.slice(1).toLocaleUpperCase()} Gelecek sene yasin ${age+1}`
console.log(info)