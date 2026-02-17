require('dotenv').config();
const express = require('express');
const router = require('./routes/verses.route.js');
const errorMiddleware = require('./middlewares/errorMiddleware.js');


const PORT = process.env.PORT || 3000

const app = express();

app.use(express.json());
app.use(router)

app.use(errorMiddleware)

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta: ${PORT}`);
});