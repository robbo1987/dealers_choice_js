
const express = require('express');

const app = express();

app.get('/',(req,res,next) => {
    res.send(
       ` <html>
            <body>
            <nav>
                <a href='/'>Home</a>
                <a href='/aboutEddie'> Biography</a>
                <a href='/discography'>Discography</a>
                <a href='/testimonials'>Testimonials</a>
            </nav>
                <h1> Eddie Van Halen</h1>
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
           <a href='/testimonials'>Testimonials</a>
       </nav>
           <h1> A Little Bit About Eddie!</h1>
       </body>
   </html> `

    );

})

app.get('/discography',(req,res,next) => {
    res.send(
       `<html>
       <body>
           <nav>
               <a href='/'>Home</a>
               <a href='/aboutEddie'> Biography</a>
               <a href='/discography'>Discography</a>
               <a href='/testimonials'>Testimonials</a>
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

app.get('/testimonials',(req,res,next) => {
    res.send(
       `<html>
       <body>
       <nav>
           <a href='/'>Home</a>
           <a href='/aboutEddie'> Biography</a>
           <a href='/discography'>Discography</a>
           <a href='/testimonials'>Testimonials</a>
       </nav>
           <h1> Testimonials </h1>
       </body>
   </html>
`

    );

})

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening on port ${port}`))