export const userLogin = (user, pwd) => {
    fetch("http://localhost:3000/", {
    method: "POST",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        user: user,
        pwd: pwd,
    })
    })
    .then((response) => response.json())
    .then((data) => {
        if(data !== undefined){
            localStorage.setItem('access_token', data.token)
        }else {
            localStorage.removeItem('access_token');
        }
    })
    if(user === 'user' && pwd === '123'){
        return true;
    }else {
        return false;
    }
}