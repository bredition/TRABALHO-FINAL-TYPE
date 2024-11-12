# TRABALHO FINAL – CODIGOS

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
   ````bash
   https://github.com/bredition/TRABALHO-FINAL-TYPE.git


### LOGO A BAIXO TEMOS UM CODIGO "INDEX HTML" 
 

````
<!DOCTYPE html>
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
</html>
````


### Login de Administrador:

1- Verifica se o usuário e senha inseridos correspondem aos dados simulados (usuarioAdmin e senhaAdmin). Se correto, redireciona para a tela de cadastro de conveniadas.
Estrutura de Dados:

2- Armazena os dados cadastrados em um objeto dados, com arrays para conveniadas, solicitantes, pacientes e agendamentos.
Alternância entre Telas:

3- A função mostrarTela exibe a tela selecionada e oculta as outras seções.
Máscaras de Entrada:

4- Aplica formatação para CNPJ e telefone com as funções formatarCNPJ e formatarTelefone.
Validação e Cadastro:

5- Cada formulário (conveniadas, solicitantes, pacientes e agendamentos) possui uma função de validação. Quando válido, os dados são adicionados ao respectivo array no objeto dados, e uma mensagem de sucesso é exibida.
Visualização dos Dados:

6- A função visualizarCadastrados exibe as informações cadastradas em listas específicas para cada tipo (conveniadas, solicitantes, pacientes, e agendamentos). Ela limpa as listas antes de preenchê-las para evitar duplicação.
Eventos:

7- O código configura eventos para alternar telas, aplicar máscaras e manipular a submissão dos formulários.###

### LOGO ABAIXO VEJA O CODIGO EM "JAVA SCRIPT":

⇩   ⇩   ⇩   ⇩   ⇩   ⇩   ⇩   ⇩   ⇩


````// Simulando um usuário e senha de administrador
const usuarioAdmin = "admin";
const senhaAdmin = "senha123"; // Altere para uma senha mais segura em um ambiente real

// Estruturas para armazenar os dados cadastrados
const dados = {
  conveniadas: [],
  solicitantes: [],
  pacientes: [],
  agendamentos: []
};

document.addEventListener("DOMContentLoaded", () => {
  const forms = {
    conveniadas: document.getElementById("form-conveniadas"),
    solicitantes: document.getElementById("form-solicitantes"),
    pacientes: document.getElementById("form-pacientes"),
    agendamentos: document.getElementById("form-agendamentos"),
    login: document.getElementById("form-login")
  };

  const cnpjInputs = document.querySelectorAll("[id^='cnpj']");
  const telefoneInputs = document.querySelectorAll("[id^='telefone'], #telefone-paciente");

  // Função para alternar telas
  window.mostrarTela = (tela) => {
    document.querySelectorAll(".container").forEach((el) => el.style.display = "none");
    document.getElementById(`tela-${tela}`).style.display = "block";
  };

  // Máscara de CNPJ e telefone
  cnpjInputs.forEach(input => input.addEventListener("input", (e) => e.target.value = formatarCNPJ(e.target.value)));
  telefoneInputs.forEach(input => input.addEventListener("input", (e) => e.target.value = formatarTelefone(e.target.value)));

  function formatarCNPJ(value) {
    return value
      .replace(/\D/g, "")
      .replace(/^(\d{2})(\d)/, "$1.$2")
      .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
      .replace(/\.(\d{3})(\d)/, ".$1/$2")
      .replace(/(\d{4})(\d)/, "$1-$2")
      .slice(0, 18);
  }

  function formatarTelefone(value) {
    return value
      .replace(/\D/g, "")
      .replace(/^(\d{2})(\d)/g, "($1) $2")
      .replace(/(\d{5})(\d)/, "$1-$2")
      .slice(0, 15);
  }

  function validarFormulario(form) {
    return form.checkValidity();
  }

  // Validação e submissão dos formulários
  forms.login.addEventListener("submit", (event) => {
    event.preventDefault();
    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;
    const mensagemErro = document.getElementById("mensagem-erro");

    if (usuario === usuarioAdmin && senha === senhaAdmin) {
      mostrarTela('conveniadas'); // Redireciona para a tela de empresas conveniadas após login
      mensagemErro.style.display = "none";
    } else {
      mensagemErro.style.display = "block";
    }
  });

  forms.conveniadas.addEventListener("submit", (event) => {
    event.preventDefault();
    if (validarFormulario(forms.conveniadas)) {
      const nome = document.getElementById("nome").value;
      const cnpj = document.getElementById("cnpj").value;
      const endereco = document.getElementById("endereco").value;
      const telefone = document.getElementById("telefone").value;
      const email = document.getElementById("email").value;

      // Adiciona os dados à estrutura
      dados.conveniadas.push({ nome, cnpj, endereco, telefone, email });
      alert("Empresa conveniada cadastrada com sucesso!");
      forms.conveniadas.reset();
    }
  });

  forms.solicitantes.addEventListener("submit", (event) => {
    event.preventDefault();
    if (validarFormulario(forms.solicitantes)) {
      const nome = document.getElementById("nome-solicitante").value;
      const cnpj = document.getElementById("cnpj-solicitante").value;
      const contato = document.getElementById("contato").value;
      const telefone = document.getElementById("telefone-solicitante").value;
      const listaExames = document.getElementById("lista-exames").value;

      // Adiciona os dados à estrutura
      dados.solicitantes.push({ nome, cnpj, contato, telefone, listaExames });
      alert("Empresa solicitante cadastrada com sucesso!");
      forms.solicitantes.reset();
    }
  });

  forms.pacientes.addEventListener("submit", (event) => {
    event.preventDefault();
    if (validarFormulario(forms.pacientes)) {
      const nome = document.getElementById("nome-paciente").value;
      const cpf = document.getElementById("cpf").value;
      const dataNascimento = document.getElementById("data-nascimento").value;
      const telefone = document.getElementById("telefone-paciente").value;

      // Adiciona os dados à estrutura
      dados.pacientes.push({ nome, cpf, dataNascimento, telefone });
      alert("Paciente cadastrado com sucesso!");
      forms.pacientes.reset();
    }
  });

  forms.agendamentos.addEventListener("submit", (event) => {
    event.preventDefault();
    if (validarFormulario(forms.agendamentos)) {
      const paciente = document.getElementById("paciente-agendamento").value;
      const empresa = document.getElementById("empresa-agendamento").value;
      const dataExame = document.getElementById("data-exame").value;
      const tipoExame = document.getElementById("tipo-exame").value;

      // Adiciona os dados à estrutura
      dados.agendamentos.push({ paciente, empresa, dataExame, tipoExame });
      alert("Exame agendado com sucesso!");
      forms.agendamentos.reset();
    }
  });

  // Função para visualizar todos os cadastrados
  window.visualizarCadastrados = () => {
    const listaConveniada = document.getElementById("lista-conveniadas");
    const listaSolicitante = document.getElementById("lista-solicitantes");
    const listaPacientes = document.getElementById("lista-pacientes");
    const listaAgendamentos = document.getElementById("lista-agendamentos");

    // Limpa as listas antes de preencher
    listaConveniada.innerHTML = '';
    listaSolicitante.innerHTML = '';
    listaPacientes.innerHTML = '';
    listaAgendamentos.innerHTML = '';

    dados.conveniadas.forEach(item => {
      listaConveniada.innerHTML += `<li>${item.nome} - ${item.cnpj}</li>`;
    });

    dados.solicitantes.forEach(item => {
      listaSolicitante.innerHTML += `<li>${item.nome} - ${item.cnpj}</li>`;
    });

    dados.pacientes.forEach(item => {
      listaPacientes.innerHTML += `<li>${item.nome} - ${item.cpf}</li>`;
    });

    dados.agendamentos.forEach(item => {
      listaAgendamentos.innerHTML += `<li>${item.paciente} - ${item.empresa} - ${item.dataExame}</li>`;
    });
  };

  // Chame a função para mostrar a tela de visualizar cadastrados
  document.getElementById('tela-visualizar').addEventListener('click', visualizarCadastrados);
});
````


### RESUMO DO CODIGO STYLES CSS:
Este código CSS é usado para criar um layout de página simples e limpo com uma barra de navegação no topo e formulários centralizados.

Ele é responsivo, ajustando-se automaticamente para telas menores (como smartphones).

Elementos interativos como botões e campos de entrada têm efeitos de transição suaves para melhorar a experiência do usuário.

### LOGO ABAIXO VEJA O CODIGO EM "STYLES CSS":

⇩   ⇩   ⇩   ⇩   ⇩   ⇩   ⇩   ⇩   ⇩


```CSS
body {
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
  }
```
