var passWord = ["abr3", "Abwi8#766@", "fgrddeww", "Azadp9ak#istan", "19765435"];

// for (let index = 0; index < passWord.length; index++) {
//     var passData = passWord.length;

//     if (passData == /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/) {
//         passData = true
//     }else{
//         passData = false
//     }console.log(passData);
    
// }

var newArray = passWord.map((element) =>{
    
      if (element.match(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/)) {
      return true
      }  
        else{
            return false
        } 
    }
)
console.log("Through map" , newArray);

var newArray1 = passWord.map((element) =>{
      
   var isCapitalLetter = false;
    var isSmallLetter = false;
    var isSpeacialChar = false;
     for (let index = 0; index < element.length; index++) {
        const char = element[index];
        
     
    if(char >= "a" || char <= "z" ){
isSmallLetter = true
    }
     if (char >= "A" || char <= "Z") {
        isCapitalLetter = true
    }
   
     if (char.charCodeAt() >= 34 || char.charCodeAt() <= 47 || char.charCodeAt() >= 58 || char.charCodeAt() <= 64 || char.charCodeAt() >= 91 || char.charCodeAt() <= 96 || char.charCodeAt() >= 123 || char.charCodeAt() <= 126) {
        isSpeacialChar = true
    }
    if(isCapitalLetter  && isSmallLetter && isSpeacialChar && element.length > 8){
        return true
    }
    return false
}});
console.log("through for loop",newArray1);