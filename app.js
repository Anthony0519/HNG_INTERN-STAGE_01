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
        const num = req.query.number
        if(!num || isNaN(Number(num)) || !Number.isInteger(Number(num))){
            return res.status(400).json({
                number: "alphabet",
                error: true
            })
        }
        const number = Number(num)
        const response = {
            number: number,
            is_prime: isPrimeNumber(number),
            is_perfect: isPerfectNumber(number),
            properties: getProperties(number),
            digit_sum: digitSum(number),
            fun_fact: await fun_fact(number)
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