const express = require('express')
const app = express()
const port = process.env.PORT || 4000;
const path = require('path')

app.use(express.static(path.join(__dirname, 'public')))

app.get('/view', (req, res) => {
    let img = req.query.img
    let title = req.query.title
    let preview = req.query.preview
    res.send(`
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="style.css">
        <meta property="og:image" content="${preview}">
        <meta name="author" content="koneko">
        <title>${title}</title>
    </head>
    <body>
        <br>
        <div class="main">
            <div class="contentspesh">
                <div class="holderspesh">
                <h1>${title}</h1>
                <br><br>
                <img src=${img}><br><br>
                <button onclick="window.close()">Close</button>
            </div>
                </div>
        </div>
    </body>
    </html>
    `)
})

app.listen(port, () => console.log('Listening on port ' + port))
// console.log(process.argv[2])