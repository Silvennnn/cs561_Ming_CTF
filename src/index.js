function getInfo() {
    return {
        username: document.getElementById("Username").value,
        password: document.getElementById("Password").value
    };
}


document.getElementById('login').addEventListener("click",  function (){
    const user = getInfo();
    const inputUsername = btoa(user.username);
    const inputPassword = btoa(user.password)

    if (inputUsername !== "SGVyZUlzVGhlVXNlcm5hbWU=") {
        alert("Username Incorrect!")
    } else {
        // Send Login Request
    }
})

document.getElementById('forget').addEventListener("click", function (){

})



// let url = "HereIsTheUsername"
// let encode = Buffer.from(url).toString('base64');
// console.log(encode)
// SGVyZUlzVGhlVXNlcm5hbWU=

// let url = "YouHaveMyPassword"
// let encode = Buffer.from(url).toString('base64');
// console.log(encode)
// WW91SGF2ZU15UGFzc3dvcmQ=

