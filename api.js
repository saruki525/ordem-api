 const express = require("express")
const { createCanvas } = require("canvas")

const app = express()

app.get("/opficha", (req, res) => {

const forca = req.query.for || 0
const agi = req.query.agi || 0
const inte = req.query.int || 0
const vig = req.query.vig || 0
const pre = req.query.pre || 0

const canvas = createCanvas(500, 500)
const ctx = canvas.getContext("2d")

ctx.fillStyle = "#111"
ctx.fillRect(0,0,500,500)

ctx.fillStyle = "white"
ctx.font = "30px Arial"

ctx.fillText(`FOR: ${forca}`, 50,120)
ctx.fillText(`AGI: ${agi}`, 50,170)
ctx.fillText(`INT: ${inte}`, 50,220)
ctx.fillText(`VIG: ${vig}`, 50,270)
ctx.fillText(`PRE: ${pre}`, 50,320)

res.setHeader("Content-Type","image/png")
canvas.createPNGStream().pipe(res)

})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
console.log("API rodando na porta " + PORT)
})
