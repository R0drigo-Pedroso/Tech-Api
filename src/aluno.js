import conexao from './banco.js'

// função que faz a leitura do banco de dado
function ler (res) {

    // Criando CRUD
    const sql = 'SELECT * FROM alunos ORDER BY nome';

    // Conectar o Banco de Dado
    conexao.query(sql, (erro, resultados) => {
        if(resultados.length === 0) {
            res.status(204).end(); // 204 = é resultado de SEM CONTEUDO // o método .end() para qualquer comunicação
            return;
        }

        if (erro){
            res.status(400).json(erro.code); // 400 = é resultado de BAD RESQUEST -  requisição inválida.
        } else {
            res.status(200).json(resultados); // deu certo? - Exibir os resultados
        }
    });
}


// Inserindo alunos

function inserir(aluno, res){
    
    // Criando conexao sql, através do SET ? são para receber todos os dados atribuido. Essa função é do MYSQL2.
    const sql = "INSERT INTO alunos SET ?";  // proteção contra Injection e tratamento de string vindos do módulo MYSQL2.

    conexao.query(sql, aluno, (erro) => {
        if (erro){
            res.status(400).json(erro.code);
            // 400 - requisição inválida e informa o código do erro.
        }else{
            res.status(201).json({"status": "Aluno inserido!"});
            //  201 - criado e apreseta a mensagem Aluno inserido
        }
    });
 

}

// Função quer exibe UM aluno
function lerUm(id, res) {
    // chamando a função sql para ler apenas um aluno atraves do id
    const sql = "SELECT * FROM alunos WHERE id = ?";

    conexao.query(sql, id, (erro, resultados) => {
        if (resultados.length === 0){
            res.status(204).end();
            return;
        } else if(erro) {
            res.status(400).json(erro.code);
        }else {
            res.status(200).json(resultados[0]);
        }
    });
}

// Atualizar alunos
// Essa função vai receber um ID, os dados do aluno e res.
function atualizar (id, aluno, res) {
    const sql = "UPDATE alunos SET ? WHERE id = ?"

    // A ordem dos parametros dentro do [] tem que se igual a do SQL
    conexao.query(sql, [aluno,id], (erro, resultados) => {
        if(erro){
            res.status(400).json(erro.code);
        }else{
            // res.status(200).json({"status":"atualizar com Sucesso!"})
            
            res.status(200).json({...aluno, id}); // spread operator (operador de "espalhamento" de objetos)
        }    
    }); 
}

// Excluir um aluno
function excluir (id, res) {
    const sql = "DELETE FROM alunos WHERE id = ?";
    
    conexao.query(sql, id, (erro, resultados) => {
        if(erro){
            res.status(400).json(erro.code);
        }else {
            res.status(200).json({
                "status" : "Aluno Deletado", id
            });
        }
    });
}

export {ler, inserir, lerUm, atualizar, excluir};
