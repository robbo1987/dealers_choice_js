
const express = require('express');

const app = express();

app.use(express.static('Public'))



app.get('/',(req,res,next) => {
    res.send(
       ` <html>
            <body>
            <style>
            h1{
                display:flex;
                justify-content:center;
            }
                img {
                    width:500px;
                    height:500px;
                    margin-left: 10rem;
                }
                nav{
                    display:flex;
                    justify-content: space-between;

                }
            </style>
            <nav>
                <a href='/'>Home</a>
                <a href='/aboutEddie'> Biography</a>
                <a href='/discography'>Discography</a>
                <a href='/quotes'>Quotes</a>
            </nav>
                <h1> Eddie Van Halen</h1>
                <div> 
                    <img src ="./Eddie-Van-Halen.jpeg" />
                </div>
            </body>
        </html>`

    );

})

app.get('/aboutEddie',(req,res,next) => {
    res.send(
       `<html>
       <body>
       <nav>
           <a href='/'>Home</a>
           <a href='/aboutEddie'> Biography</a>
           <a href='/discography'>Discography</a>
           <a href='/quotes'>Quotes</a>
       </nav>
           <h1> A Little Bit About Eddie!</h1>
       </body>
   </html> `

    );

})

app.get('/discography',(req,res,next) => {
    res.send(
       `<html>
       <style>
       li {
           padding:10px;
       }

       </style>

       <body>
           <nav>
               <a href='/'>Home</a>
               <a href='/aboutEddie'> Biography</a>
               <a href='/discography'>Discography</a>
               <a href='/quotes'>Quotes</a>
           </nav>
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
   </html>   `

    );

})

app.get('/quotes',(req,res,next) => {
    res.send(
       `<html>
       <style>
       li {
           padding: 10px;
            line-height: 2;
       }       </style>
       <body>
       <nav>
           <a href='/'>Home</a>
           <a href='/aboutEddie'> Biography</a>
           <a href='/discography'>Discography</a>
           <a href='/quotes'>Quotes</a>
       </nav>
           <h1> Some of Eddie's Best Quotes!! </h1>
           <ul>
            <li> You only have 12 notes. Do what you want with them.</li>
            <li> If you want to be a rock star or just be famous, then run down the street naked, you'll make the news or something. But if you want music to be your livelihood, then play, play, play and play! And eventually you'll get to where you want to be.</li>
            <li> It's always about the music, never about anything else.</li>
            <li> If I can help a kid discover a liking, or even a passion for music in their life, then that’s a wonderful thing.</li>
            <li> Here is a <a href=https://www.brainyquote.com/authors/eddie-van-halen-quotes crossOrigin="anonymous">link</a> to some more of Eddie's best quotes! </li>
           </ul>
       </body>
   </html>
`

    );

})

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening on port ${port}`))