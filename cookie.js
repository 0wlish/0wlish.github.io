function setCookie (cname, cvalue) {
    document.cookie = "name=test;" + cname + "=" + cvalue + ";" + "path=/;SameSite=None; Secure";
    console.log(document.cookie);
}
function getCookie(cname) {
    let name = cname + "=";
    const cArr = document.cookie.split(";");
    for (let i = 0; i < cArr.length; i++) {
        let c = cArr[i];
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
function checkCookie() {
    let user = getCookie("username");
    if (user != "") {
        alert("welcome back, " + user);
        console.log(document.cookie);
    }
    else {
        alert("you are not a user");
        setCookie("username", "prevuser");
    }
}