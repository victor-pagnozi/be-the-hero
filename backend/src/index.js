const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors()); //cors serve para limitar/liberar acesso do front end ao back end.
app.use(express.json());
app.use(routes);
/**
 * Rota / Recurso = Rota é o caminho e o recurso está mais relacionado ao bd
 */

 /**
  * Métodos HTTP:
  * 
  * GET: Buscar/Listar uma informação do Back-end
  * POST: Criar uma informação no Back-end
  * PUT: Alterar uma informação no Back-end
  * DELETE:  Deletar uma informação no Back-end
  */

  /**
   * Tipos de parâmetros: 
   * 
   * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
   * Route Params: Parâmetros utilizados para identificar recursos
   * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
   */

   /**
    * SQL: MySQL, SQLite, PostegreSQL, Oracle, Microsoft SQL Server
    * NoSQL: MongoDB, CouchDB, etc...
    */

    /**
     * Driver: SELECT * FROM us(ers
     * Query Builder: table('users').select('*').where()
     */


app.listen(3333);