const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const saudacao = require('./saudacoes')

app.use(bodyParser.text())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))
app.use(saudacao('Eduardo Czpla'))

app.get('/clientes/relatorio', (req, res) =>{
    res.send(`Cliente relatorio: Completo: ${req.query.completo} ano: ${req.query.ano}.`)
})

app.post('/corpo', (req, res) => {
    res.send(req.body)
})

// app.post('/corpo', (req, res) => {
//     let corpo = ''

//     req.on('data', function(parte) {
//         corpo += parte
//     })

//     req.on('end', function() {
//         res.send(corpo)
//     })

// })

app.get('/clientes/:id', (req, res) => {
    res.send(`Cliente ${req.params.id} selecionado!`)
})

app.get("/teste", (req, res) => {
    res.json({
        data: [
            {id: 1, name: "Eduardo", estado: "PR", idade: 22},
            {id: 2, name: "Pedro", estado: "SP", idade: 21},
            {id: 3, name: "Jose", estado: "SC", idade: 32}
        ]
    })
})

app.listen(3000, () => {
    console.log("backend aqui...")
})