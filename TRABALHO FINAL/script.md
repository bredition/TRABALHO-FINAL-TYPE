TRABALHO FINAL – CODIGOS

↳ Resumo das funcionalidades:

1- Menu de navegação: Botões para alternar entre diferentes telas do sistema, como login, cadastro de empresas, pacientes, agendamento de exames, etc.

2- Tela de Login: Formulário para o login do administrador.

3- Cadastro de empresas: Formulários para cadastrar empresas conveniadas e solicitantes.

4- Cadastro de pacientes: Formulário para cadastrar pacientes.

5- Agendamento de exames: Formulário para registrar agendamentos de exames médicos.

6- Visualização dos Cadastrados: Tela para visualizar todos os registros de empresas, pacientes e agendamentos.

LOGO ABAIXO VEJA O CODIGO EM "HTML":

⇩   ⇩   ⇩   ⇩   ⇩   ⇩   ⇩   ⇩   ⇩


```<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sistema de Gerenciamento - Medicina do Trabalho</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="nav">
    <button onclick="mostrarTela('login')">Login Admin</button>
    <button onclick="mostrarTela('conveniadas')">Empresas Conveniadas</button>
    <button onclick="mostrarTela('solicitantes')">Empresas Solicitantes</button>
    <button onclick="mostrarTela('pacientes')">Cadastro de Pacientes</button>
    <button onclick="mostrarTela('agendamentos')">Agendamento de Exames</button>
    <button onclick="mostrarTela('visualizar')">Visualizar Cadastrados</button>
  </div>

  <!-- Tela de Login -->
  <div class="container" id="tela-login">
    <h2>Login de Administrador</h2>
    <form id="form-login">
      <label for="usuario">Usuário:</label>
      <input type="text" id="usuario" name="usuario" required>

      <label for="senha">Senha:</label>
      <input type="password" id="senha" name="senha" required>

      <button type="submit">Login</button>
    </form>
    <p id="mensagem-erro" style="color: red; display: none;">Usuário ou senha incorretos!</p>
  </div>

  <!-- Tela de Cadastro de Empresas Conveniadas -->
  <div class="container" id="tela-conveniadas" style="display: none;">
    <h2>Cadastro de Empresas Conveniadas</h2>
    <form id="form-conveniadas">
      <label for="nome">Nome da Empresa:</label>
      <input type="text" id="nome" name="nome" required>

      <label for="cnpj">CNPJ:</label>
      <input type="text" id="cnpj" name="cnpj" required placeholder="00.000.000/0000-00">

      <label for="endereco">Endereço:</label>
      <input type="text" id="endereco" name="endereco" required>

      <label for="telefone">Telefone:</label>
      <input type="tel" id="telefone" name="telefone" required placeholder="(00) 00000-0000">

      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required>

      <button type="submit">Cadastrar Empresa Conveniada</button>
    </form>
  </div>

  <!-- Tela de Cadastro de Empresas Solicitantes -->
  <div class="container" id="tela-solicitantes" style="display: none;">
    <h2>Cadastro de Empresas Solicitantes de Exames</h2>
    <form id="form-solicitantes">
      <label for="nome-solicitante">Nome da Empresa:</label>
      <input type="text" id="nome-solicitante" name="nome-solicitante" required>

      <label for="cnpj-solicitante">CNPJ:</label>
      <input type="text" id="cnpj-solicitante" name="cnpj-solicitante" required placeholder="00.000.000/0000-00">

      <label for="contato">Nome do Contato:</label>
      <input type="text" id="contato" name="contato" required>

      <label for="telefone-solicitante">Telefone do Contato:</label>
      <input type="tel" id="telefone-solicitante" name="telefone-solicitante" required placeholder="(00) 00000-0000">

      <label for="lista-exames">Lista de Exames Solicitados:</label>
      <textarea id="lista-exames" name="lista-exames" required placeholder="Descreva os exames solicitados"></textarea>

      <button type="submit">Cadastrar Empresa Solicitante</button>
    </form>
  </div>

  <!-- Tela de Cadastro de Pacientes -->
  <div class="container" id="tela-pacientes" style="display: none;">
    <h2>Cadastro de Pacientes</h2>
    <form id="form-pacientes">
      <label for="nome-paciente">Nome do Paciente:</label>
      <input type="text" id="nome-paciente" name="nome-paciente" required>

      <label for="cpf">CPF:</label>
      <input type="text" id="cpf" name="cpf" required placeholder="000.000.000-00">

      <label for="data-nascimento">Data de Nascimento:</label>
      <input type="date" id="data-nascimento" name="data-nascimento" required>

      <label for="telefone-paciente">Telefone:</label>
      <input type="tel" id="telefone-paciente" name="telefone-paciente" required placeholder="(00) 00000-0000">

      <button type="submit">Cadastrar Paciente</button>
    </form>
  </div>

  <!-- Tela de Agendamento de Exames -->
  <div class="container" id="tela-agendamentos" style="display: none;">
    <h2>Agendamento de Exames</h2>
    <form id="form-agendamentos">
      <label for="paciente-agendamento">Nome do Paciente:</label>
      <input type="text" id="paciente-agendamento" name="paciente-agendamento" required>

      <label for="empresa-agendamento">Empresa Solicitante:</label>
      <input type="text" id="empresa-agendamento" name="empresa-agendamento" required>

      <label for="data-exame">Data do Exame:</label>
      <input type="date" id="data-exame" name="data-exame" required>

      <label for="tipo-exame">Tipo de Exame:</label>
      <input type="text" id="tipo-exame" name="tipo-exame" required placeholder="Ex: Admissional, Periódico, etc.">

      <button type="submit">Agendar Exame</button>
    </form>
  </div>

  <!-- Tela de Visualização dos Cadastrados -->
  <div class="container" id="tela-visualizar" style="display: none;">
    <h2>Visualizar Cadastrados</h2>
    <div id="dados-cadastrados">
      <h3>Empresas Conveniadas</h3>
      <ul id="lista-conveniadas"></ul>

      <h3>Empresas Solicitantes</h3>
      <ul id="lista-solicitantes"></ul>

      <h3>Pacientes</h3>
      <ul id="lista-pacientes"></ul>

      <h3>Agendamentos</h3>
      <ul id="lista-agendamentos"></ul>
    </div>
  </div>

  <script src="script.js"></script>
</body>
</html>´´´


2- Resumo:
1- Este código CSS é usado para criar um layout de página simples e limpo com uma barra de navegação no topo e formulários centralizados.

2- Ele é responsivo, ajustando-se automaticamente para telas menores (como smartphones).

3- Elementos interativos como botões e campos de entrada têm efeitos de transição suaves para melhorar a experiência do usuário.





```body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    margin: 0;
    padding: 0;
  }
  
  .nav {
    background-color: #007BFF;
    color: white;
    padding: 10px;
    display: flex;
    justify-content: space-around;
  }
  
  .nav button {
    background-color: #0056b3;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s;
  }
  
  .nav button:hover {
    background-color: #004494;
  }
  
  .container {
    background: white;
    margin: 20px auto;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    max-width: 600px;
  }
  
  h2 {
    color: #333;
  }
  
  form {
    display: flex;
    flex-direction: column;
  }
  
  label {
    margin: 10px 0 5px;
    font-weight: bold;
  }
  
  input[type="text"],
  input[type="tel"],
  input[type="email"],
  input[type="date"],
  textarea {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 15px;
    font-size: 14px;
  }
  
  button {
    background-color: #007BFF;
    color: white;
    border: none;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  
  #dados-cadastrados {
    margin-top: 20px;
  }
  
  #dados-cadastrados h3 {
    color: #333;
  }
  
  #dados-cadastrados ul {
    list-style-type: none;
    padding: 0;
  }
  
  #dados-cadastrados li {
    background: #e9ecef;
    margin: 5px 0;
    padding: 10px;
    border-radius: 5px;
  }
  
  #mensagem-erro {
    color: red;
  }
  
  @media (max-width: 600px) {
    .nav {
      flex-direction: column;
      align-items: center;
    }
  
    .nav button {
      margin: 5px 0;
      width: 100%;
    }
  
    .container {
      width: 90%;
    }
  }´´´
