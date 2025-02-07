📋 Todo List - React

Este é um projeto simples de To-Do List criado com React, ideal para aprendizado de conceitos como componentes, estado (useState), eventos e manipulação da interface do usuário.

🚀 Tecnologias Utilizadas

React

Vite (para inicialização rápida do projeto)

JavaScript (ES6+)

CSS (para estilização básica)

📂 Estrutura do Projeto

my-todo-app/
├── src/
│   ├── components/
│   │   ├── TaskInput.jsx  # Componente de entrada de nova tarefa
│   │   ├── TaskList.jsx   # Componente para listar tarefas
│   │   ├── TaskItem.jsx   # Componente para cada tarefa individual
│   ├── App.jsx            # Componente principal
│   ├── main.jsx           # Ponto de entrada do React
├── public/
├── package.json           # Configurações do projeto e dependências
└── README.md              # Documentação do projeto

🛠️ Instalação e Execução

1️⃣ Clone este repositório

git clone https://github.com/Lucassml-boop/Todo-list-react.git
cd Todo-list-react

2️⃣ Instale as dependências

npm install

3️⃣ Inicie o servidor de desenvolvimento

npm run dev

Abra o navegador e acesse http://localhost:5173 para ver o projeto em execução.

🏗️ Componentização

O projeto é dividido em três componentes principais:

🔹 TaskInput.jsx

Componente responsável por capturar e adicionar novas tarefas.

🔹 TaskList.jsx

Renderiza a lista de tarefas e repassa cada uma delas para TaskItem.

🔹 TaskItem.jsx

Componente individual para cada tarefa, com opção de remoção ao clicar.

📌 Funcionalidades

✅ Adicionar tarefas✅ Listar tarefas✅ Remover tarefas ao clicar✅ Estado gerenciado com useState