const express =  require('express');
const app = express();
const cors = require("cors");

require("dotenv").config();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

require("./config/database").connect()

// route import 
const routes = require("./routes/routes");
app.use("/api/v1",routes);

// Activate 
app.listen(PORT,() => {
    console.log("Server Run at ",PORT);
})
