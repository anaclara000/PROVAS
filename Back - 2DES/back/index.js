const Express = require('express');
const cors = require('cors');



const Alunos = require('./src/routes/alunos.routes');
const Cursados = require('./src/routes/cursados.routes');
const Cursos = require('./src/routes/cursos.routes');
const Geral = require('./src/routes/vwGeral.routes');

const app = Express();
    app.use(Express.json());
    app.use(cors());
    app.use(Alunos);
    app.use(Cursados);
    app.use(Cursos);
    app.use(Geral);

app.listen(3000, () => {
    console.log("App ON");
});