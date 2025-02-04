const express = require("express")
const cors = require("cors")
const { isPrimeNumber, isPerfectNumber, getProperties, digitSum, fun_fact } = require("./mathsOperation")
require("dotenv").config()

const PORT = process.env.port

const app = express()
app.use(express.json())
app.use(cors({origin: "*"}))

app.get("/api/classify-number",  async (req, res) => {
    try {
        const num = Number(req.query.num)
        if(!num || isNaN(num)){
            return res.status(400).json({
                number: "alphabet or special character",
                error: true
            })
        }
        const response = {
            number: num,
            is_prime: isPrimeNumber(num),
            is_perfect: isPerfectNumber(num),
            properties: getProperties(num),
            digit_sum: digitSum(num),
            fun_fact: await fun_fact(num)
        }
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
});


app.listen(PORT,()=>{
    console.log(`SERVER ON PORT: ${PORT}`);
})