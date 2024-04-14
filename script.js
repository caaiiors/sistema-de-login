// Simulando um banco de dados de usuários
const users = [];

// Função para registro de usuário
function registerUser(name, email, password) {
  users.push({ name, email, password });
}

// Função para autenticação do usuário
function loginUser(email, password) {
  return users.find(user => user.email === email && user.password === password);
}

document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');

  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const user = loginUser(email, password);
    if (user) {
      alert(`Login bem sucedido! Bem-vindo, ${user.name}`);
      window.location.href = 'https://google.com'; // Redireciona o usuario para o google apos efetuar o login
    } else {
      alert('Email ou senha incorretos. Por favor, tente novamente.');
    }
  });

  registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    // Verifica se o email já está cadastrado
    if (users.some(user => user.email === email)) {
      alert('Este email já está cadastrado. Por favor, use outro.');
    } else {
      registerUser(name, email, password);
      alert('Registro bem sucedido! Por favor, faça o login.');
      // Limpa os campos de registro após o registro bem sucedido
      registerForm.reset();
    }
  });
});
