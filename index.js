const express = require('express');

const app = express();
const port = 3000;

// definir uma página public para as páginas estáticas
app.use(express.static('public'));
''
app.get('/', (requisicao, resposta) => {
    resposta.sendFile(__dirname + '/index.html');
});

app.get('/contato', (requisicao, resposta) => {
    resposta.sendFile(__dirname + '/public/contato.html');
});

app.get('/sobre', (requisicao, resposta) => {
    resposta.sendFile(__dirname + '/public/sobre.html');
});


app.get('/sofia', (requisicao, resposta) => {
    resposta.send('Olá, Sofia!');
})

app.get('/cardapio', (requisicao, resposta) => {
    // const google_drive_url = 'https://drive.google.com/drive/folders/12tEEDOWApdB6E7jscCncuCHvQ7jPSUrr?usp=drive_link';
    // baixar o arquivo do Google Drive, sem redirect
    resposta.sendFile(__dirname + '/uploads/cardapioteste.pdf');


    


});


app.use((req, res) => {
    console.log('Rota não encontrada:', req.url);
    res.status(404).send('404');
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});