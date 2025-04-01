// SignUp
async function signup() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const fullName = document.getElementById('fname').value;
    const phoneNum = document.getElementById('pnumber').value;
    const address = document.getElementById('address').value;

    try {
        let response = await axios.post("http://localhost:1011/user/signup", {
            email, password, fullName, phoneNum, address
        });

        if (response.status === 200) {  
            alert("SignUp Successful, Congrats! New User Created");
            window.location.href = "./HomePage.html"; 
        }
    } 

    catch (error) {
        document.getElementById('main-inputs').innerHTML = error.response?.data?.message || "User Cannot be Created ! Please Try Again Later";
    }
}

// SignIN 
async function signin(){
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

   try{
        let response = await axios.post("http://localhost:1011/user/signin",{
            email : email  , password : password
        });
    
        if(response.status === 200){
        localStorage.setItem("token", response.data.token);
        alert("SignIn Successfully");
        document.getElementById('forgot-pass').innerHTML = response.data.message;
        }
    }
    catch(error){
        document.getElementById('forgot-pass').innerHTML = error.response?.data?.message || "Please Try Again Later";
    }
}

async function googleLogin(){
    window.location.href = "http://localhost:1011/auth/google";
}