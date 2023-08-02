const express = require('express');
const bodyParser=require('body-parser');
const app = express();
const port = 3000; // You can use any port number you prefer

 app.use(bodyParser.urlencoded({extended:false}))


// Set the 'views' directory as the location for Pug templates
app.set('views', './views');
app.set('view engine', 'pug');

// Define a route to render the Pug template
app.get('/', (req, res) => {
  res.render('index', { title: 'Simple Pug Template' });
});

// Define a route to render the Pug template with a form
app.get('/form', (req, res) => {
    res.render('form', { title: 'Form Example' });
  });
  
  // Define a route to handle form submission
  app.post('/submit', (req, res) => {
    const name = req.body.name;
    res.send(`Hello, ${name}! Your form was submitted successfully.`);
  });
  
  // Define a route to render the Pug template with dynamic data
app.get('/data', (req, res) => {
    const data = {
      title: 'Dynamic Data Example',
      message: 'This data is coming from the backend.',
      items: ['Item 1', 'Item 2', 'Item 3'],
    };
    res.render('data', data);
  });
  
// Start the server
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});