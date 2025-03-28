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
            window.location.href = "./signin.html"; 
        }

    } catch (error) {
        document.getElementById('main-inputs').innerHTML = "Unable to create user";
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
    
        if(response.status == 200){
        localStorage.setItem("token", response.data.token);
        alert("SignIn Successfully");
        render(response.data.message);
        }
        else{
            render(response.data.message);
        }
    }
    catch(error){
        document.getElementById('forgot-pass').innerHTMl = "Error ! Try Signing In Again After some time";
    }
}

function render(response){
    document.getElementById('forgot-pass').innerHTML = "";
    const newData = document.createElement('div');
    newData.innerHTML = response ;
    document.getElementById("forgot-pass").append(newData);
}


