let database = [
    {
        username: "John",
        password: "secret"
    },
    {
        username: "Victor",
        password: "money1000"
    },
    {
        user: "Bolu",
        password: "bunny_rabbits"
    }
];

let newsFeed = [
    {
        user: "Imeh",
        status: "Code. Learn. Watch anime. Repeat!"
    },
    {
        user: "Uche",
        status: "Quality music over loud speakers"
    }
];

let usernamePrompt = prompt("What is your username?");
let passwordPrompt = prompt("What is your password?");

function isUserValid(user, pass) {
    for(let counter = 0; counter < database.length; counter++) {
        if(user === database[counter].username && pass === database[counter].password) {
            return true;
        }
        return false;
    }
}

function logIn(user, pass) {
    if(isUserValid) {
        console.log(newsFeed);
    } else {
        alert("Wrong username and passwors, sorry!")
    }
}

console.log(logIn(usernamePrompt, passwordPrompt));