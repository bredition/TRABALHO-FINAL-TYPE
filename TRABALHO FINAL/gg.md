# Sistema de Gerenciamento - Medicina do Trabalho

Este projeto é uma aplicação web para o gerenciamento de dados relacionados à medicina do trabalho. Ele permite a interação com as seguintes funcionalidades:

### Funcionalidades

1. **Login de Administrador**:
   - Tela de login onde o administrador pode inserir usuário e senha para acessar o sistema.

2. **Cadastro de Empresas Conveniadas**:
   - Permite o cadastro de empresas conveniadas, com informações como nome, CNPJ, endereço, telefone e email.

3. **Cadastro de Empresas Solicitantes de Exames**:
   - Permite o cadastro de empresas solicitantes de exames, incluindo informações como nome da empresa, CNPJ, contato, telefone e lista de exames solicitados.

4. **Cadastro de Pacientes**:
   - Cadastro de pacientes com informações como nome, CPF, data de nascimento e telefone.

5. **Agendamento de Exames**:
   - Permite o agendamento de exames para os pacientes, com dados como nome do paciente, empresa solicitante, data do exame e tipo de exame.

6. **Visualização dos Cadastrados**:
   - Exibe as informações cadastradas em listas de empresas conveniadas, empresas solicitantes, pacientes e agendamentos.

### Estrutura do Código

- **HTML**: Estrutura principal da página, com diferentes seções para cada funcionalidade (login, cadastro e visualização).
- **CSS**: Arquivo externo (`style.css`) que define o estilo da página.
- **JavaScript**: Arquivo externo (`script.js`) que controla a interação entre as telas e exibe/oculta as seções conforme as ações do usuário.

### Como usar

1. Clone o repositório em sua máquina local:
   ```b<html lang="pt-BR">
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
</html>
```
