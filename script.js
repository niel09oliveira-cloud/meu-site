document.addEventListener("DOMContentLoaded", function () {

  // ===== MODO CLARO / ESCURO =====
  const btnTema = document.getElementById("btnTema");

  btnTema.addEventListener("click", function () {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
      btnTema.innerText = "Modo Claro";
    } else {
      btnTema.innerText = "Modo Escuro";
    }
  });

  // ===== FORMULÁRIO → WHATSAPP =====
  const btnEnviar = document.getElementById("btnEnviar");

  btnEnviar.addEventListener("click", function () {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    if (nome === "" || email === "" || mensagem === "") {
      alert("Preencha todos os campos.");
      return;
    }

    const texto =
      "Olá! Meu nome é " + nome +
      "\nEmail: " + email +
      "\nMensagem: " + mensagem;

    const numero = "5543984260540"; 

    const url =
      "https://wa.me/" + numero +
      "?text=" + encodeURIComponent(texto);

    window.open(url, "_blank");
  });

});

// BOTÃO FALAR COMIGO (WHATSAPP DIRETO)
const btnFalar = document.getElementById("falarComigo");

btnFalar.addEventListener("click", function () {
  const numero = "5543984260540"; // troque pelo seu
  const texto = "Olá! Vi seu portfólio e gostaria de conversar com você.";

  const url =
    "https://wa.me/" + numero +
    "?text=" + encodeURIComponent(texto);

  window.open(url, "_blank");
});