const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.write(`
        <html>
            <body>
                <h1> Eddie Van Halen</h1>
            </body>
        </html>
        `)
    }

    if(req.url === '/aboutEddie') {
        res.write(`
        <html>
            <body>
                <h1> A Little Bit About Eddie!</h1>
            </body>
        </html>
        `)
    }

    if(req.url === '/discography') {
        res.write (`
        <html>
            <body>
                <h1> Eddie Van Halen Discography</h1>
                <ul>
                    <li> Van Halen </li>
                    <li> Van Halen II </li>
                    <li> Women and Children First </li>
                    <li> Fair Warning </li>
                    <li> Diver Down </li>
                    <li> 1984 </li>
                    <li> 5150 </li>
                    <li> OU812 </li>
                    <li> For Unlawful Carnal knowledge </li>

                </ul>
            </body>
        </html>    
        `)
     }

        res.end();
    
})

const port = process.env.PORT || 3000;

server.listen(port, (console.log(`listening on port ${port}`)))