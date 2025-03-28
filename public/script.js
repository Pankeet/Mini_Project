// SignUp
async function signup(){
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const fullName = document.getElementById('fname').value;
    const phoneNum = document.getElementById('pnumber').value;
    const address = document.getElementById('address').value;

    let response = await axios.post("http://localhost:1011/user/signup" , {
        email , password , fullName , phoneNum , address
    });

    if(response){
        alert("SignUp Successful , Congrats New User Created");
    }

    else{
        document.getElementById('main-inputs').innerHTML  = "Unable to create User";
    }
}

// SignIN
async function signin(){
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    let response = await axios.post("http://localhost:1011/user/signin",{
        email : email  , password : password
    });
   
    if(response){
    localStorage.setItem("token", response.data.token);
    alert("SignIn Successfully");
    render(response.data.message);
    }
}

function render(response){
    document.getElementById('forgot-pass').innerHTML = "";
    const newData = document.createElement('div');
    newData.innerHTML = response ;
    document.getElementById("forgot-pass").append(newData);
}



