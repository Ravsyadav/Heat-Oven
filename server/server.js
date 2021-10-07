const express = require('express');
const Pizza = require('./models/pizzaModel')

const app = express();
const db = require("./db.js")
app.use(express.json());

const pizzasRoute = require('./routes/pizzasRoute')
const userRoute = require('./routes/userRoute')
const ordersRoute = require('./routes/ordersRoute')

app.use('/api/pizzas/', pizzasRoute)
app.use('/api/users/', userRoute)
app.use('/api/orders/', ordersRoute)

app.get("/", (req,res) =>{
    res.send("server working with port number in "+port);
});

const port = process.env.PORT || 5000;

app.listen(port, () => 'server running on port');