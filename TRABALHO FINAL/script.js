// Simulando um usuário e senha de administrador
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

