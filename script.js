const formLogin = document.querySelector('.trybewarts-login');
const formEmail = document.querySelector('#email');
const formSenha = document.querySelector('#password');
const btnSubmit = document.querySelector('#submit-btn');
const checkAgree = document.querySelector('#agreement');
const txtArea = document.querySelector('#textarea');
const countChar = document.querySelector('#counter');
const evalForm = document.querySelector('#evaluation-form');
const hiddenForm = document.querySelector('#form-data');

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

txtArea.addEventListener('input', (input) => {
  const target = input.currentTarget;
  const maxLength = target.getAttribute('maxlength');
  const currentLength = target.value.length;
  countChar.innerHTML = `${maxLength - currentLength}`;
});

function styleForm(data) {
  evalForm.style.display = 'none';
  hiddenForm.style.flexDirection = 'column';
  hiddenForm.style.display = 'flex';
  for (let index = 0; index < hiddenForm.children.length; index += 1) {
    hiddenForm.children[index].innerHTML += data[index];
  }
}

styleForm('data');
