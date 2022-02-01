
const express = require('express');

const app = express();

const bandBank = require('./bandBank');


app.use(express.static('Public'));

app.use(require('morgan')('dev'));



const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening on port ${port}`))

const nav = () => {

    return `
        <nav>
            <a href='/'>Home</a>
            <a href='/band'> Eddie's Bandmates</a>
            <a href='/discography'>Discography</a>
            <a href='/quotes'>Quotes</a>
        </nav>
        `;
};




app.get('/',(req,res,next) => {
    
    res.send(
       ` <html>
            <head>
                <title> Eddie's Tribute Page!</title>
                <link rel="stylesheet" href="/style.css" />
            </head>
            <body>
                ${ nav()}
           
                <h1> Eddie Van Halen Tribute Page</h1>
                <div> 
                    <img src ="./Eddie-Van-Halen.jpeg" />
                </div>
                

            </body>
        </html>`

    );

})

app.get('/band',(req,res,next) => {
    const bandMates = bandBank.bandlist();
    res.send(
       `<html>
       <head>
            <title> Eddie's Tribute Page!</title>
            <link rel="stylesheet" href="/style.css" />
     </head>
       <body>
       ${ nav()}

        <h1> Eddie Van Halen Tribute Page</h1>
        <h2> A List of Eddie's BandMates!</h2>
                ${
                    bandMates.map( mate => {
                        return `
                        <a href='/band/${mate.id}'>
                        <li>
                        ${ mate.name}
                        </li>
                        </a>
                        `;
                    }).join('')
                }
       </body>
   </html> `

    );

})
app.get('/band/:id',(req,res,next) => {
    const mate = bandBank.findBandMate(req.params.id);
    const mates = [ mate ]; 
    res.send(
       `<html>
       <head>
            <title> Eddie's Tribute Page!</title>
            <link rel="stylesheet" href="/style.css" />
     </head>
       <body>
       ${ nav()}

        <h1> Eddie Van Halen Tribute Page</h1>
        ${ mates.map( mate => {
            return `
           <h2>
           ${mate.name}
           </h2>
           <div>
           <p>
           ${mate.bio}
           </p>
           </div>
            `;
        }).join('')  
        }
        <h3> Click <a href='/'> HERE <a> to get back to Homepage </h3>
       </body>
   </html> `

    );

})


app.get('/discography',(req,res,next) => {
    const albums = bandBank.albumList();
    res.send(
       `<html>
       <head>
            <title> Eddie's Tribute Page!</title>
            <link rel="stylesheet" href="/style.css" />
        </head>

       <body>
            ${ nav()}
           <h1> Eddie Van Halen Tribute Page</h1>
           <h2><a href = 'https://www.discogs.com/artist/94066-Van-Halen'> Van Halen Discography</a></h2>
           
            ${

                albums.map(album => {
                    return `
                    <li>
                    ${album.name} - ${album.label} - ${album.year}
                    </li>
                    `;
                }).join('')
            } 
       </body>
   </html>   `

    );

})

app.get('/quotes',(req,res,next) => {
    res.send(
       `<html>
       <head>
            <title> Eddie's Tribute Page!</title>
            <link rel="stylesheet" href="/style.css" />
   </head>
       <body>
            ${ nav()}

            <div>
                <h1> Eddie Van Halen Tribute Page</h1>
                <h2> Some of Eddie's Best Quotes!! </h2>
                <ul id="quotes">
                    <li>"You only have 12 notes. Do what you want with them".</li>
                    <li> "If you want to be a rock star or just be famous, then run down the street naked, you'll make the news or something. But if you want music to be your livelihood, then play, play, play and play! And eventually you'll get to where you want to be".</li>
                    <li> "It's always about the music, never about anything else".</li>
                    <li> "If I can help a kid discover a liking, or even a passion for music in their life, then that’s a wonderful thing".</li>
                    <li> Here is a <a href=https://www.brainyquote.com/authors/eddie-van-halen-quotes crossOrigin="anonymous"> _link_ </a> to some more of Eddie's best quotes! </li>
           </ul>
           </div>
       </body>
   </html>
`

    );

})

app.use(function (req, res, next) {
    res.status(404).send("Sorry can't find that page!")
  });
