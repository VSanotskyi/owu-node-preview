const sayHello = () => {
    console.log('Hello from helper.js')
}

const fn = () => {
    console.log('helper.js')
    console.log('dirname', __dirname)
    console.log('filename', __filename)
    console.log('process.pwd()', process.cwd())
}

module.exports = {
    sayHello,
    fn,
}

