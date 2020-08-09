<h1 align="center">
    <img src="https://ik.imagekit.io/ur6xo9m70i/logo_1_yxatry_Hi.png" width="250">
</h1>

## 📔 Sobre

O Proffy é um projeto construído durante a Next Level Week #2, evento promovido pela Rocketseat;

Neste projeto, foi desenvolvido um sistema para homenagear o Dia Internacional do Profissional de Educação, coemorado no dia 6 de Agosto!

A ideia foi desenvolver uma aplicação de estudos, onde alunos poderiam encontrar professores disponíveis nas matérias que o aluno desejava e marcar uma aula com ele. E os professores poderiam se cadastrar informando a matéria que eles dão aula, horários e dia da semana!

---

## 🚀 O Projeto

O projeto foi dividido em 3 partes(Omnistack):

- API REST em NodeJS
- Ambiente Web desenvolvido em ReactJS
- App mobile desenvolvido em React Native

---

## 🌎 API (Server)

Foi criado uma API REST utilizando tecnologias como:

- Node JS
- Typescript
- SQLite
- Express
- Knex
- Cors

No Back End foram criadas algumas rotas que se realizam algumas operações no banco de dados, como inserir os dados de alunos ou professores, verificação de horários das aulas, exibição de professores disponíveis de acordo com o filtro desejado pelo aluno (Disciplina, Dia da Semana e Horário);

Foi adicionado ao projeto o "Cors" para que o Front End e o Mobile da aplicação possa consumir os dados da nossa API desenvolvida em um endereço diferente da mesma.

---

## 💻 Web

<h1 align="center">
    <img src="https://ik.imagekit.io/ur6xo9m70i/1_I6a48HEgu.png" width="650">
</h1>

Para a criação do Front End, foram utilizadas as seguintes tecnologias e componentes:

- React JS
- Typescript
- React Router Dom
- Axios
- Hooks
- Whatsapp API
- Padrão Mobile First

O Front End também consome dados da API REST e é dividido basicamente em três partes principais, que são:

- Landing Page: Página inicial da aplicação, com opção de selecionar entre: dar aulas ou estudar.
- Listagem de Professores: Lista com todos os professores cadastrados pelo site, é possível também filtrar os professores por: matéria, dia da semana desejado e horário.
- Cadastro de Professores: É possível se cadastrar na plataforma, informando dados básicos, como matéria, dia da semana, preço cobrado por hora/aula e os horários disponíveis para dar aula.

---

## 📱 App Mobile

<h1 align="center">
    <img src="https://ik.imagekit.io/ur6xo9m70i/Proffy1_NvrpHZixXd.jpeg" width="250">
</h1>

Para a criação deste app mobile, foram utilizadas as seguintes tecnologias e componentes:

- Typescript
- React Native
- Expo
- Async Storage
- Axios
- Deep Linking
- Whatsapp API
- Hooks

O app mobile consome dados de uma API REST e é dividido basicamente em três partes principais, que são:

- Landing Page: Página inicial da aplicação.
- Listagem de Professores: Lista com todos os professores cadastrados pelo site(web), em breve disponível no app, além de visualizar os dados do professor e entrar em contato com eles via whatsapp ou também é possível favoritar um professor, para que ele fique disponível na aba de favoritos para ser visualizado posteriormente.

## 📂 Acessando o Projeto:

Para ter acesso ao Proffy, execute os seguintes comandos em seu terminal:

<h2>Clonando o repositório:</h2>

```bash
    $ git clone https://github.com/maicongunner/nlw-app-proffy.git
```

<h2>Acessando o repositório</h2>

```bash
    $ cd server (API)
    $ cd web (Web)
    $ cd mobile (App)
```

<h2>Instalando as dependências</h2>

```bash
    $ yarn / yarn install (API/Web/App)
```

<h2>Iniciando o projeto</h2>

```bash
    $ yarn start (API/Web/App)
```

<h2>App mobile (dispositivo físico)</h2>

Caso queira rodar a aplicação em um dispositivo físico, baixe o aplicativo "Expo" na sua loja de aplicativos, abra-o e escaneie o qr code apresentado na página aberta;

---

<h3 align="center">💻 Desenvolvido Por: Maicon Domingues</h3> 