function greeting() {
    let userName = 'Ana';
    console.log(userName);

    if(userName === 'Ana') {
        console.log(`Hello ${userName}!`)
    }
}
greeting();
console.log(userName);// esto nos genera un error porque no podemos acceder 