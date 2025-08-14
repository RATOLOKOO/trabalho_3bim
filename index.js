import express from 'express'

const app = express();
const PORT = 3000;

let usuarios = [];
let contador =1;

app.use(express.json());

app.get("/status",(req, res) =>{
    res.json({message: "ALEXANDRE DE MORAES"})
});

//ROTA GET listar todos os usuarios
app.get("/usuarios", (req, res) =>{
    res.json(usuarios)
});

//ROTA POSTA Criar novo usuario
app.post("/usuarios", (req, res) =>{
    const {nome} = req.body

    const novoUsuario = {
        id: contador++,
        nome
    };

    usuarios.push(novoUsuario);
    res.status(201).json(novoUsuario);
});

//ROTA PUT Atualiza usuario por ID
app.put("/usuarios/:id", (req, res) =>{
    const id = parseInt(req.params.id)
    const {nome} = req.body

    const usuario = usuarios.flind((i) => i.id === id)

    if(!usuario){
        return res.status(404).json({ erro: "Usuário não encontrado"});

    }

    usuario.nome = nome;
    res.json(usuario);
})

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
});