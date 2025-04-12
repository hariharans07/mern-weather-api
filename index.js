const express = require('express')
const app = express()
const axios = require('axios')
app.get('/test', (req, res) => {
    res.send('Hello World!')
  })
const port = 3000

async function getProducts (id){
    const API_DOMAIN = 'https://fakestoreapi.com/'
    const response = axios.get(API_DOMAIN+'products'+ (id ? '/' + id : ''))
    return (await response).data
    
}

app.get('/products', async (req, res) => {
    const products = await getProducts();
    res.send(products);
})

app.get('/products/:id', async (req, res) => {
    console.log(req.params.id);
    const products = await getProducts(req.params.id);
    res.send(products);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})