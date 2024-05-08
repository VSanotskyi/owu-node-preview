const fn = () => {
    console.log('test/helpers.js')
    console.log('dirname', __dirname)
    console.log('filename', __filename)
    console.log('process.pwd()', process.cwd())
}

module.exports = {
    fn,
}