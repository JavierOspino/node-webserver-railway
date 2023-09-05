require('dotenv').config();
const express = require('express')
const hbs = require('hbs');

const app = express()
const PORT = process.env.PORT;

//handlebars;
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Servir contenido estático
app.use(express.static('public', {extensions: ['html']}));

app.get('/', (req, res) => {
  res.render('home', {
    name: 'Javier Ospino',
    rol: 'Student'
  });
});

app.get('/generic', (req, res) => {
  res.render('generic', {
    name: 'Javier Ospino',
    rol: 'Student'
  });
});

app.get('/elements', (req, res) => {
  res.render('elements', {
    name: 'Javier Ospino',
    rol: 'Student'
  });
});

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/404.html')
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})