import mysql2 from 'mysql2'

const conexao = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'escolinha'
});

// Conexão ao banco de dados
// conexao.connect();
conexao.connect(erro => {
    if (erro){
        console.error(`Erro ao Conectar: ${erro.message}`);
    } else{
        console.log(`Banco de dados conectado com sucesso!`);
    }
});

export default conexao;