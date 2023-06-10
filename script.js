var passWord = ["abr3", "Abwi8#766@", "fgrddeww", "Azadpakistan", "19765435"];

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

