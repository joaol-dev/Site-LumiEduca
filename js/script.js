document.addEventListener("DOMContentLoaded", function () {
  const linhas = document.querySelectorAll("table tbody tr");
  const painel = document.getElementById("painel-ticket");
  const botaoFechar = document.getElementById("fecharPainel");


  linhas.forEach(linha => {
    linha.addEventListener("click", () => {
      painel.classList.add("ativo");
    });
  });

  // Função para fechar o painel
  botaoFechar.addEventListener("click", () => {
    painel.classList.remove("ativo");
  });
});

