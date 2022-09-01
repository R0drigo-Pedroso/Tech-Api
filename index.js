import express, { json } from "express";
import { ler, inserir, lerUm, atualizar, excluir } from "./src/aluno.js";

const app = express();
const porta = process.env.PORT || 3000;

// Configurações suporte ao formato JSON
app.use(express.json());

// Configurações suporte a dados de inputs de fomulario
app.use(express.urlencoded({extended: true}));


// Esse dois são importante para validar o funcionamento da aplicação
    // Configurando servidor
    app.listen(porta, () => {
        console.log('Servidor express em funcionamento');
    });

    // Inicio das Configurações GET
        // criando rodas
        // primeira rota é para a raiz da aplicação
        // Rota (endpoint)
    app.get('/', (req, res) => {
        res.send(`Insomnia funcionamento prefeitamente`);
    });
    // Final das Configurações GET
// Final - Esse dois são importante para validar o funcionamento da aplicação


// Rota (endpoint) para exibir todos os alunos
app.get('/alunos', (req, res) => {
    // res.send(`Exibir todos os alunos`);
    ler(res);
});

// Rota (endpoint) para exibir apenas um aluno
app.get('/alunos/:id', (req, res) => {
    //res.send(`Exibir apenas um aluno`);
    // Estou buscando apenas um usuario.
    const id = parseInt (req.params.id);
    lerUm(id, res);
});
// Final das configurações do GET


// Inicio das Configurações dos POST
// Rota (endpoint) para inserir alunos
app.post('/alunos', (req, res) => {
    // res.send(`exibir todos`);
    const novoAluno = req.body; // Capturando os dados a partir do corpo da requisição
    inserir(novoAluno, res); // executando a função inserir e passando os parâmentros 
});
// Final das Configurações do POST


// Inicio das Configurações PUT
// Rotas (endpoint) Atualizar todos alunos
app.put('/alunos/:id', (req, res) => {
    //res.send(`Atuliazar todos alunos`);

    // Capturando ID
    const id = parseInt (req.params.id);

    // dados do aluno
    const aluno = req.body;

    atualizar(id, aluno, res);
});
// Final das Configurações PUT


// Inicio das configurações PATCH
// Rota (endpoint) para atualizar um ou todos alunos
app.patch('/alunos/:id', (req, res) => {
    res.send(`Atualizar todos os dados ou apenas um alunos`);
});
// Final das Configurações PATCH


// Inicio das configurações DELETE
// Rota (endpoint) para Excluir aluno
app.delete('/alunos/:id', (req, res) => {
    //res.send(`Excluir aluno`)
    const id = parseInt(req.params.id);
    excluir(id, res);
});
// Final das Configurações do DELETE