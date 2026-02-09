require('dotenv').config();
const express = require('express');
const router = require('./router/verses.route.js')

const PORT = process.env.PORT || 3000

const app = express();

app.use(express.json());
app.use(router)

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta: ${PORT}`);
});