const express = require("express");
const cors = require('cors');
const connectDB = require("./database");
const authRoutes  = require("./routes/authRoutes");

connectDB();

require("dotenv").config();
const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/auth', authRoutes);

app.get('/', (req, res)=>{
    res.send('Hello Blog');

})

app.listen(8000, ()=>{
    console.log('Server is running on port 8000');
})
