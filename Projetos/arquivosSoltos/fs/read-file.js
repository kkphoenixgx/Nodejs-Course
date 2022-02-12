fs = require(fs)
let path = 'textingText.js'

await fs.readFile(path, (err, data) => {
    if(err) throw err;

    console.log(data.toString())
})

console.log('(*￣3￣)╭')