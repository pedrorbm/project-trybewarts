const formLogin = document.querySelector('.trybewarts-login');
const formEmail = document.querySelector('#email');
const formSenha = document.querySelector('#password');

formLogin.lastElementChild.addEventListener('click', () => {
  if (formEmail.value === 'tryber@teste.com' && formSenha.value === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
});
