# Bible verses API

API REST desenvolvida em Node.js e Express que retorna um versículo bíblico aleatório em espanhol, com foco no estudo do idioma aliado a reflexões bíblicas.

O projeto foi estruturado seguindo boas práticas de arquitetura backend, com separação de responsabilidades, tratamento global de erros e versionamento de rotas.

🚀 **Próxima feature planejada:** 
Disponibilizar a definição das palavras presentes no versículo retornado, auxiliando ainda mais no aprendizado do idioma.

🔗 **API em produção:**  
https://bible-api-jrdu.onrender.com/api/v1/verses/random

## Tecnologias
- Node.js
- Express
- JavaScript

## Estrutura do projeto
```text
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

### Camadas:
- **Controllers** → Responsável por lidar com requisições e respostas
- **Services** → Contém a regra de negócio
- **Data** → Fonte de dados estática
- **Middlewares** → Tratamento global de erros
- **Utils** → Padronização das respostas da API

## 📋 Pré-requisitos

Antes de executar o projeto, certifique-se de ter instalado:

- **Node.js 18+** (recomendado)
- Uma chave de API da [API.Bible](https://scripture.api.bible)

### 🔑 Obtendo a chave da API

1. Acesse: https://scripture.api.bible  
2. Crie uma conta  
3. Gere sua chave de API  
4. Adicione a chave no arquivo `.env`

## Instalação
```bash
npm install
```

## Variáveis de ambiente
Crie um arquivo `.env` na raiz do projeto:

```env
PORT=3000
API_KEY=sua_chave_api_bible
```

## Como executar
Ambiente de desenvolvimento (com nodemon):
```bash
npm run dev
```

Produção:
```bash
npm start
```

Servidor padrão: `http://localhost:3000`

## 📌 Endpoint
### `GET /api/v1/verses/random`
Retorna um versículo aleatório de um capítulo aleatório da Bíblia.

#### Exemplo de resposta de sucesso
```json
{
  "success": true,
  "data": {
    "livro": "João",
    "capitulo": 3,
    "versiculo": 15,
    "texto": "..."
  }
}
```

#### Exemplo de erro
```json
{
  "success": false,
  "error": {
    "message": "Internal server error",
    "statusCode": 500
  }
}
```

## Observações
- A API depende do serviço externo do API.Bible.
- Em caso de falha no serviço externo, a API retorna erro `502`.
- O middleware de erro trata erros operacionais e inesperados.

## Scripts disponíveis
- `npm run dev`: inicia com nodemon
- `npm start`: inicia com node

## 🛣 Roadmap

- [x] Estrutura modular
- [x] Tratamento global de erros
- [x] Versionamento de rotas
- [ ] Definição das palavras do versículo
- [ ] Cache diário do versículo
