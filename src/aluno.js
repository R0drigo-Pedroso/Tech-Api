import conexao from './banco.js'

// função quer fazez a leitura do banco de dado
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

export {ler};