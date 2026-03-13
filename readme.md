# Bible Verses API

API REST desenvolvida em Node.js e Express que retorna um versículo bíblico aleatório em espanhol, com foco no estudo do idioma aliado a reflexões bíblicas.

O projeto foi estruturado seguindo boas práticas de arquitetura backend, com separação de responsabilidades, tratamento global de erros e versionamento de rotas.

Além do versículo, a API também pode retornar o significado das palavras presentes no texto, auxiliando no aprendizado de vocabulário em espanhol.

API em produção:  
https://bible-api-jrdu.onrender.com/api/v1/verses/random

---

# Tecnologias

- Node.js  
- Express  
- JavaScript  
- API.Bible  
- Lexicala API  

---

# Estrutura do projeto

```
src/
  app.js
  server.js
  controllers/
  data/
  errors/
  middlewares/
  routes/
  services/
  utils/
```

## Camadas

Controllers  
Responsável por lidar com requisições e respostas HTTP.

Services  
Contém a regra de negócio da aplicação.

Data  
Fonte de dados estática utilizada pela aplicação.

Middlewares  
Tratamento global de erros e interceptação de requisições.

Utils  
Funções auxiliares para padronização de respostas e manipulação de dados.

---

# Pré-requisitos

Antes de executar o projeto, certifique-se de ter instalado:

- Node.js 18 ou superior
- Uma chave de API da API.Bible
- Uma chave da Lexicala API (RapidAPI)

---

# Obtendo as chaves de API

API.Bible

1. Acesse: https://scripture.api.bible  
2. Crie uma conta  
3. Gere sua chave de API  

Lexicala

1. Acesse https://rapidapi.com  
2. Procure pela Lexicala API  
3. Gere sua chave de acesso  

---

# Instalação

```
npm install
```

---

# Variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```
PORT=3000
API_KEY=sua_chave_api_bible
RAPID_API_KEY=sua_chave_lexicala
```

---

# Como executar

Ambiente de desenvolvimento (com nodemon)

```
npm run dev
```

Produção

```
npm start
```

Servidor padrão:

```
http://localhost:3000
```

---

# Endpoints

## GET /api/v1/verses/random

Retorna um versículo aleatório de um capítulo aleatório da Bíblia.

### Exemplo de resposta

```json
{
  "success": true,
  "data": {
    "livro": "Juan",
    "capitulo": 3,
    "versiculo": 15,
    "texto": "...",
    "palabras": [
      {
        "word": "vida",
        "meanings": [
          "existencia",
          "estado de un ser vivo"
        ]
      }
    ]
  }
}
```

---

# Exemplo de erro

```json
{
  "success": false,
  "error": {
    "message": "Internal server error",
    "statusCode": 500
  }
}
```

---

# Observações

A API depende de serviços externos.

- Falhas na API.Bible podem gerar erro 502.
- Definições de palavras dependem da Lexicala API.
- O middleware global de erros trata falhas operacionais e erros inesperados.

---

# Scripts disponíveis

```
npm run dev
```

Inicia o servidor em modo desenvolvimento utilizando nodemon.

```
npm start
```

Inicia o servidor em modo produção.

---

# Roadmap

- [X] Estrutura modular
- [X] Tratamento global de erros
- [X] Versionamento de rotas
- [X] Definição das palavras do versículo
- Melhor filtragem das definições retornadas pela API de dicionário
- Interface web simples para visualização dos versículos
- Cache diário do versículo
