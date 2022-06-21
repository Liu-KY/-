loginCk()
function loginCk(){
    let ck = getCookie("login")
    if(ck!=1){
        location.href ="./login.html"
    }
}