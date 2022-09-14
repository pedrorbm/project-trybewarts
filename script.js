const formLogin = document.querySelector('.trybewarts-login');
const formEmail = document.querySelector('#email');
const formSenha = document.querySelector('#password');
const btnSubmit = document.querySelector('#submit-btn');
const checkAgree = document.querySelector('#agreement');

formLogin.lastElementChild.addEventListener('click', () => {
  if (formEmail.value === 'tryber@teste.com' && formSenha.value === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
});

checkAgree.addEventListener('click', () => {
  if (checkAgree.checked) {
    btnSubmit.disabled = false;
  } else {
    btnSubmit.disabled = true;
  }
});
