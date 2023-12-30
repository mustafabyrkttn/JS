let firstName = "mustafa"
let lastName ='Bayraktutan'
let training = `Template Literal Js`

console.log(firstName+" "+lastName)
console.log("firstName.length =",firstName.length)

console.log("firstName[0] =",firstName[0])
console.log("firstName.charAt(0) =",firstName.charAt(0))
console.log("firstName.toLowerCase() =",firstName.toLowerCase())
console.log("firstName.toUpperCase() =",firstName.toUpperCase())

console.log("training.search('lorem') =",training.search("lorem"))
console.log("training.search('Lit') =",training.search("Lit"))
console.log("training.search('lit') =",
training.toLowerCase().search("lit"))

console.log("training.indexOf('Lit') =",training.indexOf("Lit"))

const adminMail = "admin@js.com"

adminMail.search("@")
adminMail[5]
adminMail.slice(1)
console.log(adminMail.slice(0))
console.log(adminMail.search("@")+1)

console.log(adminMail.search('@')+1)

const domainName = adminMail.slice ( adminMail.search('@')+1)
const userName = adminMail.slice (0, adminMail.search('@'))
console.log("userName",userName)
console.log("domainName",domainName)

training = training.replace("Js","JavaScript")
console.log("training =",training)


console.log(
firstName.charAt(0).toLocaleUpperCase() + firstName.slice(1).toLocaleUpperCase() + " " +lastName.charAt(0).toLocaleUpperCase() + lastName.slice(1).toLocaleUpperCase() 
)


console.log(
    training.toLocaleUpperCase().includes("JAVASCRIPT")
)