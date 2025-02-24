import express from 'express';
import autenticar from './seguranca/autenticacao.js';
import session from 'express-session';

const porta = 3000;
const localhost = '0.0.0.0'; 
const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(session({
  secret: 'm1nh4Ch4v3S3cr3t4',
  resave: false,
  saveUninitialized: false,
    cookie: { 
        maxAge: 1000 * 60 * 15 
    }   
}));

app.get('/login', (_requisicao, resposta) => {
  resposta.redirect('/login.html');
});

app.post('/login', (requisicao, resposta) => {
    const usuario = requisicao.body.usuario;
    const senha = requisicao.body.senha;
    if (usuario === 'admin' && senha === 'admin') {
        requisicao.session.autenticado = true;
        resposta.redirect('detalhes.html');
    } else {
        resposta.redirect('/login.html');
    }
});

app.use(express.static('./public'));
app.use(autenticar, express.static('./private'));

app.get('/logout', (requisicao, resposta) => {
    requisicao.session.destroy();
    resposta.redirect('/login');
});

app.listen(porta, localhost, () => {
  console.log(`Servidor rodando em http://${localhost}:${porta}`);
});