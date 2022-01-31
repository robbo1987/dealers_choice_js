
const express = require('express');

const app = express();


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
        <ul>
           <li><a href='/band/1'> David Lee Roth</a></li> 
           <li><a href='/band/2'> Sammy Hagar</a></li>  
           <li><a href='/band/3'> Alex Van Halen</a></li>  
           <li><a href='/band/4'> Michael Anthony</a></li>    
        </ul>
       </body>
   </html> `

    );

})
app.get('/band/1',(req,res,next) => {
    res.send(
       `<html>
       <head>
            <title> Eddie's Tribute Page!</title>
            <link rel="stylesheet" href="/style.css" />
     </head>
       <body>
       ${ nav()}

        <h1> Eddie Van Halen Tribute Page</h1>
        <h2> David Lee Roth</h2>
        <p> David Lee Roth (born October 10, 1954) is an American rock musician, singer, songwriter and former radio personality. Best known for his wild, energetic stage persona, he was the lead singer of the hard rock band Van Halen across three stints, from 1974 to 1985, in 1996 and again from 2006 to their disbandment in 2020. He was also known as a successful solo artist, releasing numerous RIAA-certified Gold and Platinum albums. After more than two decades apart, Roth re-joined Van Halen in 2006 for a North American tour that became the highest-grossing in the band's history and one of the highest-grossing of that year. In 2012, Roth and Van Halen released the comeback album A Different Kind of Truth. In 2007, he was inducted into the Rock and Roll Hall of Fame as a member of Van Halen </p>
       </body>
   </html> `

    );

})
app.get('/band/2',(req,res,next) => {
    res.send(
       `<html>
       <head>
            <title> Eddie's Tribute Page!</title>
            <link rel="stylesheet" href="/style.css" />
     </head>
       <body>
       ${ nav()}

        <h1> Eddie Van Halen Tribute Page</h1>
        <h2> Sammy Hagar</h2>
        <p> Samuel Roy Hagar (born October 13, 1947), also known as The Red Rocker, is an American singer-songwriter, musician, and entrepreneur. Hagar came to prominence in the 1970s with the hard rock band Montrose. He then launched a successful solo career, scoring a hit in 1984 with "I Can't Drive 55". He enjoyed commercial success when he replaced David Lee Roth as the lead singer of Van Halen in 1985, but left in 1996. He returned to the band from 2003 to 2005. On March 12, 2007, Hagar was inducted into the Rock and Roll Hall of Fame as a member of Van Halen. His musical style primarily consists of hard rock, heavy metal, and glam metal.

        Also a businessman, Hagar founded the Cabo Wabo tequila brand and restaurant chain, as well as Sammy's Beach Bar rum. His current musical projects include being the lead singer of Chickenfoot and Sammy Hagar and the Circle. Hagar also is the host of Rock & Roll Road Trip with Sammy Hagar on Mark Cuban's cable network AXS TV.
        </p>
       </body>
   </html> `

    );

})
app.get('/band/3',(req,res,next) => {
    res.send(
       `<html>
       <head>
            <title> Eddie's Tribute Page!</title>
            <link rel="stylesheet" href="/style.css" />
     </head>
       <body>
       ${ nav()}

        <h1> Eddie Van Halen Tribute Page</h1>
        <h2> Alex Van Halen</h2>
        <p>
        Alexander Arthur van Halen (born May 8, 1953) is an American musician, best known for being the drummer and co-founder of the rock band Van Halen. The band was formed in 1972 by Alex Van Halen; his younger brother, Eddie Van Halen; David Lee Roth; and Mark Stone under the name Mammoth before adding Michael Anthony in 1974 and changing their name to Van Halen. Warner Bros. signed the band in 1977, and its debut album was released a year later. Prior to their disbandment in 2020, following Eddie's death, Van Halen released eleven more albums, and the brothers were the only two constant members of the band.
        </p>
       </body>
   </html> `

    );

})
app.get('/band/4',(req,res,next) => {
    res.send(
       `<html>
       <head>
            <title> Eddie's Tribute Page!</title>
            <link rel="stylesheet" href="/style.css" />
     </head>
       <body>
       ${ nav()}

        <h1> Eddie Van Halen Tribute Page</h1>
        <h2> Michael Anthony</h2>
        <p>
        Michael Anthony Sobolewski (born June 20, 1954) is an American musician who was the bassist and backing vocalist for the hard rock band Van Halen from 1974 to 2006. He performed on Van Halen's first 11 albums and was their longest-tenured bassist. Following his 2006 departure, Anthony has collaborated with fellow former Van Halen bandmate Sammy Hagar for the supergroups Chickenfoot and Sammy Hagar and the Circle. In addition to his music career, he markets a line of hot sauces named Mad Anthony and related products. Anthony was inducted to the Rock and Roll Hall of Fame as a member of Van Halen in 2007.
        </p>
       </body>
   </html> `

    );

})

app.get('/discography',(req,res,next) => {
    res.send(
       `<html>
       <head>
            <title> Eddie's Tribute Page!</title>
            <link rel="stylesheet" href="/style.css" />
        </head>

       <body>
            ${ nav()}
           <h1> Eddie Van Halen Tribute Page</h1>
           <h2> Van Halen Discography</h2>
           
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
