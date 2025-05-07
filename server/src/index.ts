import express from "express"
import rootRouter from "./routes/rootRouter" 
import cors from "cors" 
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT;

const app = express()

app.use(express.json())
app.use(cors())

app.use("/api/v1", rootRouter)


app.listen(PORT, () => {
    console.log("Server is listening on port: " + PORT)
})

