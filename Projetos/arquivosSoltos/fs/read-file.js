const fs = require(fs);
let path = 'textingText.js'

fs.readFile(path, (err, data) => {
    if(err) throw err;

    console.log(data.toString())
})

console.log('(*￣3￣)╭')