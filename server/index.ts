import express from "express"
import rootRouter from "./routes/root" 
import cors from "cors" 

const PORT = process.env.PORT;
const JWT_SECRET = process.env.JWT_SECRET;

const router = express.Router();
const app = express()

app.use(express.json())
app.use(cors())

router.use("/api/v1", rootRouter)


app.listen(PORT, () => {
    console.log("Server is listening on port: " + PORT)
})


export default router