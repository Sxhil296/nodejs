function greet(name) {
    console.log(`Hello ${name}`)
}

function highOrderFunction(callback) {
    const name = "Sahil"
    callback(name)
}

highOrderFunction(greet)