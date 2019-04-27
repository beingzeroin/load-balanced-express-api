const express = require('express')
const app1 = express()
const app2 = express()
const app3 = express()

const port1 = 3000
const port2 = 3001
const port3 = 3002

app1.get('/', (req, res) => res.send('Hello World 1!'))
app2.get('/', (req, res) => res.send('Hello World 2!'))
app3.get('/', (req, res) => res.send('Hello World 3!'))

app1.get('/api/hello', function(req, res){
    
    // Get the URL

    // Download the Contents

    // Extract words

    // Add to Index

    res.send('hello world 1');
});

app2.get('/api/hello', function(req, res){
    
    // Get the URL

    // Download the Contents

    // Extract words

    // Add to Index

    res.send('hello world 2');
});


app1.listen(port1, () => console.log(`Example app listening on port ${port1}!`))
app2.listen(port2, () => console.log(`Example app listening on port ${port2}!`))
app3.listen(port3, () => console.log(`Example app listening on port ${port3}!`))