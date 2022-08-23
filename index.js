import express from "express";

const app = express();
const porta = 3000;


// Configurando servidor
app.listen(porta, () => {
    console.log('Servidor express em funcionamento');
});

// Inicio das Configurações GET
    // criando rodas
    // primeira rota é para a raiz da aplicação
    // Rota (endpoint)
app.get('/', (req, res) => {
    res.send(`Vamos juntos aprender sobre API`);
});

// Rota (endpoint) para exibir todos os alunos
app.get('/alunos', (req, res) => {
    res.send(`Exibir todos os alunos`);
});

// Rota (endpoint) para exibir apenas um aluno
app.get('/alunos/:id', (req, res) => {
    res.send(`Exibir apenas um aluno`);
});
// Final das configurações do GET


// Inicio das Configurações dos POST
// Rota (endpoint) para inserir alunos
app.post('/alunos', (req, res) => {
    res.send(`exibir todos`);
});
// Final das Configurações do POST


// Inicio das Configurações PUT
// Rotas (endpoint) Atualizar todos alunos
app.put('/alunos/:id', (req, res) => {
    res.send(`Atuliazar todos alunos`);
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
    res.send(`Excluir aluno`)
});
// Final das Configurações do DELETE