const loginBtn = document.getElementById('loginBtn');
const registerBtn = document.getElementById('registerBtn');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');

loginBtn.addEventListener('click', () => {
  loginBtn.classList.add('active');
  registerBtn.classList.remove('active');
  loginForm.classList.remove('hidden');
  registerForm.classList.add('hidden');
});

registerBtn.addEventListener('click', () => {
  registerBtn.classList.add('active');
  loginBtn.classList.remove('active');
  registerForm.classList.remove('hidden');
  loginForm.classList.add('hidden');
});

// 🌙 Dark mode toggle with icon change + hover effect
const themeToggle = document.getElementById('themeToggle');

// Switch theme
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  
  // Change button icon
  if (document.body.classList.contains('dark')) {
    themeToggle.textContent = '☀️'; // Light mode icon
    localStorage.setItem('theme', 'dark');
  } else {
    themeToggle.textContent = '🌙'; // Dark mode icon
    localStorage.setItem('theme', 'light');
  }
});

// Load saved theme on refresh
window.addEventListener('load', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark');
    themeToggle.textContent = '☀️';
  } else {
    themeToggle.textContent = '🌙';
  }
});

// 🔑 Show/Hide Password Feature
const togglePasswordBtns = document.querySelectorAll('.toggle-password');

togglePasswordBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const targetId = btn.getAttribute('data-target');
    const passwordInput = document.getElementById(targetId);

    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      btn.textContent = '🙈'; // Change icon when visible
    } else {
      passwordInput.type = 'password';
      btn.textContent = '👁'; // Change icon back
    }
  });
});
