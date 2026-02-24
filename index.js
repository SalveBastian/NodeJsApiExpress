const express = require('express');
const app = express();
const port = 3000;



const user = [
{
    "Nombresito" : "Juanchito",
    "Poder" : "tirar fuego",
},
{
    "Nombresito" : "pepito",
    "Poder" : "Tirar hielo"
} 
]


app.use(express.json());

app.get('/sumama/emeplota/apis' , (req , res ) => {
    res.json({ success: true, dato: user})
    
});

app.listen(port, () => {console.log("server esta arriba" + port)})

