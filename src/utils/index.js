const fs = require('fs')

function writeData(path, content) {
    fs.writeFile(path, JSON.stringify(content), err => {
        if (err) {
            console.error('Error write data for: ', path, '', err)
            return
        }
        console.log('Success write data for: ', path, ' , content: ', content)
        //file written successfully
    })
}

module.exports = writeData


