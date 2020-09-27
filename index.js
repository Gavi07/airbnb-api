const express = require('express');
// const { json } = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(cors());
// app.use(json());
const port = 3001;

// Mongo connection
require('./connection/connectionDb');

// Routes
const experiencesRoutes = require('./routes/experiences');
// const bookingRoutes = require('./routes/booking');

app.use('/experiences', experiencesRoutes)
// app.use('/booking', bookingRoutes);
/*
    - localhost:3001/experiences
    - localhost:3001/experiences/top5
    - localhost:3001/experiences/detail/1
*/

app.listen(port, () => {
    console.log(`Server running ${port}`);
});



// EXAMPLE:
// http://localhost:3001/saludar?nombre=Yuri
// http://localhost:3001/saludar?nombre=Yuri&edad=30

// app.get('/', (req, res) => {
//     res.send('Hello world');
// })

// app.get('/saludar', (req, res) => {
//     const { nombre, edad=0 } = req.query;
//     res.send(`saludos :D ${nombre} tienes ${edad} años.`);
// })

// app.put('/', (req, res) => {
//     res.send('Put request')
// });

// app.delete('/', (req, res) => {
//     res.send('Delete request')
// });

// app.post('/', (req, res) => {
//     const {numero1, numero2, persona} = req.body;
//     const {nombre, edad} = persona;
//     res.send(`Post -> numero1: ${numero1} numero2: ${numero2}, Persona: ${nombre}`);
// });
