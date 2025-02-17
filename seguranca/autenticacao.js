export default function autenticar(requisicao, resposta, next) {  
  if (requisicao.session.autenticado === true) {
    next();
  } else {
  resposta.redirect('/login');
    }
}