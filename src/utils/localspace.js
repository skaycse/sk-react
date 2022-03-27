const loginObj = [
    {
        userName: "Sreekumar",
        password: "Sreekumar"
    },
    {
        userName: "admin",
        password: "admin"
    }
]

export const validateUser = (username, password) => {
    let found = false;
    const result = loginObj.find((user) => {

        if (user.userName.toLowerCase() == username.toLowerCase() && user.password == password)
            return true
    })
    return result == null ? false : true;
}