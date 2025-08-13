import express from 'express'

const app = express();
const PORT = 3000;

app.get("/status",(req, res) =>{
    res.json({message: "ALEXANDRE DE MORAES"})
})

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})