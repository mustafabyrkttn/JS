console.log("Info") // console.log'a aktarilan bilgi

/* birden fazla bilgi
react js egitimi */


/**
 * birden fazla satiri aciklama
 * ikinci satir
 * 
 * 
 */

//JSdoc ornegi >
/**
 * 
 * @param {number} num1 sayi 1
 * @param {number} num2 sayi 2
 * @returns 
 */
function sum(num1,num2){
    return num1+num2
}


/**
 * Add String to list
 * @param {Array} users
 * @param {string} user
 * @returns
 */
function addTolist(users,user){
   console.log(users.length)
   users.push(user)
return users
}
