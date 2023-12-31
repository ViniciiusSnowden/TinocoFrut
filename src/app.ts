import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as logger from 'morgan';

import { conexaoDB } from './config/db';
import { routerUsuario } from './route/usuario';
import { routerEstoque } from './route/estoque';
import { routerProduto } from './route/produto';
import { routerFinanceiro} from './route/financeiro';

/**
 * Cria a aplicação
 */
export const app = express();

/**
 * Libera o acesso aos serviços
 */
app.use(cors());

/**
 * Permite receber e enviar JSON
 */
app.use(bodyParser.json());

/**
 * Configura os logs
 */
app.use(logger('dev'));


/**
 * Conecta no BD
 */
conexaoDB();

/**
 * Configuração de rotas
 */
app.use('/financeiro', routerFinanceiro)
app.use('/produto', routerProduto);
app.use('/usuario', routerUsuario);
app.use('/estoque', routerEstoque);
app.use('/', (req, res) => res.send('API do app TinocoAPI'));

