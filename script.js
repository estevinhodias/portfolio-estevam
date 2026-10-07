// ==============================
// JAVASCRIPT DO PORTFÓLIO
// Menu responsivo, tema e validação do formulário.
// ==============================

// Menu responsivo para dispositivos menores.
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
        mainNav.classList.toggle("open");
    });

    // Fecha o menu depois que o usuário escolhe uma página.
    mainNav.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => mainNav.classList.remove("open"));
    });
}

// Alternância entre tema claro e escuro.
const themeToggle = document.getElementById("themeToggle");
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark");
}

function updateThemeButton() {
    if (themeToggle) {
        themeToggle.textContent = document.body.classList.contains("dark") ? "☀" : "☾";
    }
}

updateThemeButton();

if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark");
        const theme = document.body.classList.contains("dark") ? "dark" : "light";
        localStorage.setItem("theme", theme);
        updateThemeButton();
    });
}

// Validação do formulário de contato.
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const nome = document.getElementById("nome");
        const email = document.getElementById("email");
        const mensagem = document.getElementById("mensagem");

        const nomeError = document.getElementById("nomeError");
        const emailError = document.getElementById("emailError");
        const mensagemError = document.getElementById("mensagemError");
        const formSuccess = document.getElementById("formSuccess");

        // Limpa mensagens anteriores.
        nomeError.textContent = "";
        emailError.textContent = "";
        mensagemError.textContent = "";
        formSuccess.textContent = "";

        let valido = true;

        if (nome.value.trim() === "") {
            nomeError.textContent = "Informe seu nome.";
            valido = false;
        }

        // Expressão regular simples para verificar o formato do e-mail.
        const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email.value.trim() === "") {
            emailError.textContent = "Informe seu e-mail.";
            valido = false;
        } else if (!emailValido.test(email.value.trim())) {
            emailError.textContent = "Informe um e-mail válido.";
            valido = false;
        }

        if (mensagem.value.trim() === "") {
            mensagemError.textContent = "Digite uma mensagem.";
            valido = false;
        }

        if (valido) {
            // A atividade pede uma simulação de envio; nenhum servidor é utilizado.
            contactForm.reset();
            formSuccess.textContent = "Mensagem enviada com sucesso! (Simulação)";
        }
    });
}
