import mysql2 from 'mysql2'

const conexao = mysql2.createConnection({
    // acesso remoto
    host: 'ns204.hostgator.com.br',
    user: 'aspect86_esc01',
    password: 'W?yPWm21kKGN',
    database: 'aspect86_escola01'


    // Local - acesso
    // host: 'localhost',
    // user: 'root',
    // password: '',
    // database: 'escolinha'
});

// Conexão ao banco de dados
// conexao.connect();
conexao.connect(erro => {
    if (erro){
        console.error(`Erro ao Conectar: ${erro.message}`);
    } else{
        console.log(`Banco de dados conectado em: ${conexao.config.host}`);
    }
});

export default conexao;