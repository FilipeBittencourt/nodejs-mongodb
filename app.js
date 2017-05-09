const app = require('./config/server');
const rotaNoticias = require('./app/routes/noticias');
const rotaHome = require('./app/routes/home');
const rotaFormInclusaoNoticia = require('./app/routes/formulario');

rotaNoticias(app);
rotaHome(app);
rotaFormInclusaoNoticia(app);

app.listen(3000, () => {
    console.log('Servidor rodando na porta... 3000');
});





