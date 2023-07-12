function exibir_premios_individuais() {
  var nivel_desafio = parseInt(document.getElementById("nivel-desafio").value);
  var errorMessage = document.getElementById("error-message");
  
  if (isNaN(nivel_desafio) || nivel_desafio < 1 || nivel_desafio > 20) {
    errorMessage.textContent = "Erro: Insira um valor de nível válido (1 a 20).";
    errorMessage.style.display = "block";
    return;
  }
      
      var d100 = Math.floor(Math.random() * 100) + 1;
      var pc = '', pp = '', pe = '', po = '', pl = '';
      
      function somaRandom(n) {
        var total = 0;
        for (var i = 0; i < n; i++) {
          total += Math.floor(Math.random() * 6) + 1;
        }
        return total;
      }
      
      if (nivel_desafio >= 1 && nivel_desafio <= 4) {
        if (d100 >= 1 && d100 <= 30) {
          pc = somaRandom(5).toString();
        } else if (d100 >= 31 && d100 <= 60) {
          pp = somaRandom(4).toString();
        } else if (d100 >= 61 && d100 <= 70) {
          pe = somaRandom(3).toString();
        } else if (d100 >= 71 && d100 <= 95) {
          po = somaRandom(3).toString();
        } else if (d100 >= 96 && d100 <= 100) {
          pl = (Math.floor(Math.random() * 6) + 1).toString();
        }
      } else if (nivel_desafio >= 5 && nivel_desafio <= 10) {
        if (d100 >= 1 && d100 <= 30) {
          pc = (somaRandom(4) * 100).toString();
          pe = (somaRandom(1) * 10).toString();
        } else if (d100 >= 31 && d100 <= 60) {
          pp = (somaRandom(6) * 10).toString();
          po = (somaRandom(2) * 10).toString();
        } else if (d100 >= 61 && d100 <= 70) {
          pe = (somaRandom(3) * 10).toString();
          po = (somaRandom(2) * 10).toString();
        } else if (d100 >= 71 && d100 <= 95) {
          po = (somaRandom(4) * 10).toString();
        } else if (d100 >= 96 && d100 <= 100) {
          po = (somaRandom(2) * 10).toString();
          pl = somaRandom(3).toString();
        }
      } else if (nivel_desafio >= 11 && nivel_desafio <= 16) {
        if (d100 >= 1 && d100 <= 20) {
          pc = (somaRandom(4) * 100).toString();
        } else if (d100 >= 21 && d100 <= 35) {
          pe = (somaRandom(1) * 100).toString();
          po = (somaRandom(1) * 100).toString();
        } else if (d100 >= 36 && d100 <= 75) {
          po = (somaRandom(2) * 100).toString();
          pl = (somaRandom(1) * 10).toString();
        } else if (d100 >= 76 && d100 <= 100) {
          po = (somaRandom(2) * 100).toString();
          pl = (somaRandom(2) * 10).toString();
        }
      } else if (nivel_desafio >= 17 && nivel_desafio <= 20) {
        if (d100 >= 1 && d100 <= 15) {
          pe = (somaRandom(2) * 1000).toString();
          po = (somaRandom(8) * 100).toString();
        } else if (d100 >= 16 && d100 <= 55) {
          po = (somaRandom(1) * 1000).toString();
          pl = (somaRandom(1) * 100).toString();
        } else if (d100 >= 56 && d100 <= 100) {
          po = (somaRandom(1) * 1000).toString();
          pl = (somaRandom(2) * 100).toString();
        }
      }
