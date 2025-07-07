# API Produtos e Categorias

API REST simples para gerenciar produtos e categorias, usando Node.js, Express, Sequelize e MariaDB.

## Tecnologias usadas

- Node.js
- Express
- Sequelize (ORM)
- MariaDB
- dotenv (configurações de ambiente)
- bcryptjs (hash de senhas)
- jsonwebtoken (autenticação)

## Como rodar

1. Clone o repo:

```bash
git clone <seu-repo-url>
Instale as dependências:

bash
npm install
Configure seu .env (crie na raiz do projeto) com:

env
DATABASE_HOST=localhost
DATABASE_PORT=3306
DATABASE_USERNAME=seu_usuario
DATABASE_PASSWORD=sua_senha
DATABASE=nome_do_banco
JWT_SECRET=sua_chave_secreta
Rode as migrations:

bash
npx sequelize-cli db:migrate
Inicie o servidor:


npm start


Endpoints principais
GET /categorias - Lista categorias com produtos

POST /categorias - Cria categoria

GET /categorias/:id - Detalha categoria

PUT /categorias/:id - Atualiza categoria

DELETE /categorias/:id - Deleta categoria

GET /produtos - Lista produtos

POST /produtos - Cria produto

GET /produtos/:id - Detalha produto

PUT /produtos/:id - Atualiza produto

DELETE /produtos/:id - Deleta produto

Observações
A API usa autenticação JWT.
