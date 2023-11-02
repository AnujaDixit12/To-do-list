function check(){
    const uname = document.getElementById("uname");
    const pass = document.getElementById("pass");
    
    if(uname.value =="admin" && pass.value =="123"){
        window.location.assign("list.html");
        alert("Login successfull!!");
    }
    else{
        alert("Wrong username or password");
    }
}