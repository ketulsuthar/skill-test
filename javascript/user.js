
/*
Write JavaScript to store and retrieve a JSON file on your local storage with the following information.

            Name: John Doe

            Age: 35

            City: Collingwood
*/

const user = {
    name: "John Doe",
    age: 35,
    city: "Collingwood"
}

/*
Set user in local storage
*/
setUser = (user) => {
    if (typeof(Storage) !== "undefined") {
        window.localStorage.setItem('user', JSON.stringify(user));
    } else {
        console.log("localstorage not supported by current browser")
    }
}

/*
Return user from local storage
*/
getUser = () => {
    let user = null
    if (typeof(Storage) !== "undefined") {
        user = JSON.parse(window.localStorage.getItem('user'));
    }
    return user
}
