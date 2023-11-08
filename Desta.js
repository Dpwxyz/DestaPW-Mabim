function Login() {
    var done = 0;
    var username = document.login.username.value;
    var password = document.login.password.value;
    if (username == "DestaGanteng" && password =="DestaGanteng"){
            if(confirm("Apakah anda Jawa?") == true){
                window.location.href = "https://github.com/Dpwxyz";
            } else {
                alert("Login dibatalkan karena anda bukan jawa!");
            }
            
    } else{
            if (done == 0) {
                alert("Username/Pasword Salah");
            }
    }
} 