const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]


let displayOne = document.getElementById("input-one")
let displayTwo = document.getElementById("input-two")


 
function generate() {

    displayOne.textContent = ""
    displayTwo.textContent = ""

    let passwordLength = 16
    let password1 = ""
    let password2 = ""

    

    for (let i = 0; i < passwordLength; i++) {
        let randomPassword = Math.floor (Math.random()* characters.length)

        password1 += characters[randomPassword]
        password2 += characters[randomPassword]

    }
        
    displayOne.textContent += password1 
    displayTwo.textContent += password2

    
}



