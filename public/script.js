async function signin(){
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    let response = await axios.post("http://localhost:1011/user/signin",{
        email : email  , password : password
    });
   
    localStorage.setItem("token", response.data.token);
    alert("SignIn Successfully");
    render(response.data.message);
}

function render(response){
    document.getElementById('forgot-pass').innerHTML = "";
    const newData = document.createElement('div');
    newData.innerHTML = response ;
    document.getElementById("forgot-pass").append(newData);
}