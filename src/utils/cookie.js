const setCookie = (name, value) => {
    let d = new Date();
    const exdays = 1;
    d.setDate(d.getDate() + (exdays * 24 * 60 * 60 * 1000))
    let expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

const getCookie = (cname) => {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    let user = getCookie("username");
    if (user != "") {
        alert("Welcome again " + user);
    } else {
        user = prompt("Please enter your name:", "");
        if (user != "" && user != null) {
            setCookie("username", user);
        }
    }
}

function deleteCookie(cookieName) {
    document.cookie =
        cookieName + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
}

export { getCookie, setCookie, checkCookie, deleteCookie }