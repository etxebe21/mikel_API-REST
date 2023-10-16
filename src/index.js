const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const mongodbRoute = "mongodb+srv://etxebe:Kimitalimon_21@cluster0.hsrbhgc.mongodb.net/?retryWrites=true&w=majority";
const workoutRouter = require("./routes/workoutRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

//Use bodyparser
app.use(bodyParser.json());

app.use("/api/workouts", workoutRouter);

async function start() {
    try
    {
        await mongoose.connect(mongodbRoute);
        app.listen(PORT, () => {
            console.log(`API is listening on port ${PORT}`);
        });
        console.log('Conexion con Mongo correcta')
    }
    catch(error)
    {
        console.log(`Error al conectar a la base de datos: ${error.message}`);
    }
}
start();