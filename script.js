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
  console.log("Prêmios Individuais",
        "Resultado do dado: " + d100,
        "Quantidade de cada prêmio:",
        "Peças de Cobre: " + pc,
        "Peças de Prata: " + pp,
        "Peças de Eletrum: " + pe,
        "Peças de Ouro: " + po,
        "Peças de Platina: " + pl
      );
      
      document.getElementById("dado_resultado").textContent = "Resultado do dado: " + d100;
      document.getElementById("pc_quantidade").textContent = "Peças de Cobre: " + pc;
      document.getElementById("pp_quantidade").textContent = "Peças de Prata: " + pp;
      document.getElementById("pe_quantidade").textContent = "Peças de Eletrum: " + pe;
      document.getElementById("po_quantidade").textContent = "Peças de Ouro: " + po;
      document.getElementById("pl_quantidade").textContent = "Peças de Platina: " + pl;
    }

    function gerar_loot(nivel_desafio) {
      let loot_demas = "";
      let loot_obras_de_arte = "";
      let loot_itens = "";
      let d100 = Math.floor(Math.random() * 100) + 1;
      if (nivel_desafio < 0 || nivel_desafio > 20) {
          console.log("Erro: Insira um valor de nível válido (1 a 20).");
          return;
      }
  
      let pc = "";
      let pp = "";
      let pe = "";
      let po = "";
      let pl = "";
      let lista_gemas_10_po = ["Azurita (azul escuro mosqueado opaco)", "Ágata malhada (marrom, azul, branca ou vermelho translúcido e listrado)", "Quartzo azul (azul claro transparente)", "Ágata ocular (círculos translúcidos de cinza, branco, marrom, azul ou verde)", "Hematita (cinza escuro opaco)", "Lápis lazúli (azul claro e escuro opaco com manchas amarelas)", "Malaquita (opaco estriado com verde claro e escuro)", "Ágata musgo (rosa translúcido ou amarelo claro com cinza musgo ou marcas verdes)", "Obsidiana (preto opaco)", "Rodocrosita (azul claro opaco)", "Olho de tigre (marrom translúcido com centro dourado)", "Turquesa (azul esverdeado claro opaco)"];
      let lista_gemas_50_po = ["Pedra de sangue (cinza escuro opaco com manchas vermelhas)", "Cornalina (de laranja a vermelho amarronzado opaco)", "Calcedônia (branco opaco)", "Crisoprásio (verde translúcido)", "Citrina (amarelo claro amarronzado transparente)", "Jaspe (azul, preto ou marrom opaco)", "Pedra lunar (branco translúcido com azul claro brilhante)", "Ônix (faixas opacas de preto e branco, ou preto ou branco puro)", "Quartzo (branco transparente, cinza ou amarelo esfumaçado)", "Sardônica (faixas opacas de vermelho e branco)", "Quartzo rosa estrela (pedra rosa translúcida com centro branco em forma de estrela)", "Zircônio (azul esverdeado claro transparente)"];
      let lista_gemas_100_po = ["Ambar (transparente entre ouro aquoso e ouro vívido)", "Ametista (púrpura profundo transparente)", "Crisoberilo (transparente entre amarelo esverdeado e verde claro)", "Coral (carmesim opaco)", "Granada (vermelho, marrom esverdeado ou branco transparente)", "Jade (verde claro, verde escuro ou branco translúcido)", "Jato (preto profundo opaco)", "Pérola (branco, amarelo ou rosa opaco e lustroso)", "Espinela (vermelho, vermelho amarronzado ou verde escuro transparente)", "Turmalina (verde, azul, marrom ou vermelho claro transparente)"];
      let lista_gemas_500_po = ["Alexandrita (verde escuro transparente)", "Água-marinha (azul esverdeado claro transparente)", "Pérola negra (preto puro opaco)", "Espinela azul (azul escuro transparente)", "Peridoto (verde oliva vívido transparente)", "Topázio (amarelo-ouro transparente)"];
      let lista_gemas_1000_po = ["Opala negra (verde escuro translúcido com preto mosqueado e manchas douradas)", "Safira azul (de azul claro a azul médio transparente)", "Esmeralda (verde escuro brilhante transparente)", "Opala de fogo (vermelho fogo translúcido)", "Opala (azul claro translúcido mosqueado de verde e dourado)", "Rubi estrela (rubi translucido com centro branco em forma de estrela)", "Safira estrela (safira azul translúcida com centro branco em forma de estrela)", "Safira amarela (amarelo fogo ou amarelo esverdeado transparente)"];
      let lista_gemas_5000_po = ["Safira negra (preto lustroso transparente com destaques brilhantes)", "Diamante (azul claro, canário, rosa, marrom ou azul transparente)", "Jacinto (laranja fogo transparente)", "Rubi (de vermelho claro a carmesim escuro transparente)"];
      let lista_objetos_arte_25_po = ["Jarro de prata", "Estatueta esculpida em osso", "Bracelete de ouro pequeno", "Vestimenta de tecido dourado", "Máscara de veludo negra costurada com fios de prata", "Cálice de cobre com filigrana prateada", "Par de dados de osso com gravuras", "Pequeno espelho numa moldura de madeira pintada", "Lenço de seda bordado", "Broche de ouro com um retrato pintado dentro"];
      let lista_objetos_arte_250_po = ["Anel de ouro cravejado com pedras de sangue", "Estatueta esculpida em marfim", "Bracelete de ouro largo", "Gargantilha de prata com um pingente de pedra preciosa", "Coroa de bronze", "Robe de seda com adornos de ouro", "Grande tapeçaria elegante", "Caneca de bronze com jades incrustadas", "Caixa de miniaturas de animais em turquesa", "Gaiola de pássaro de ouro com filigrana de electro"];
      let lista_objetos_arte_750_po = ["Cálice de prata cravejado com pedras da lua", "Espada longa de lâmina prateada com conjunto de jatos no cabo", "Harpa de madeira exótica com marfim incrustado e gemas de zircónio", "Pequeno ídolo de ouro", "Pente de ouro em formato de dragão cravejada com granadas vermelhas nos olhos", "Rolha de garrafa gravada com folhas de ouro e cravejada com ametistas", "Adaga de electro cerimonial com uma pérola negra no pomo", "Broche de prata e ouro", "Estatueta de obsidiana com detalhes e incrustações de ouro", "Máscara de guerra de ouro pintada"];
      let lista_objetos_arte_2500_po = ["Corrente de ouro elegante cravejada com uma opala de fogo", "Antiga pintura obra-prima", "Manto de seda e veludo bordado com diversas pedras da lua cravejadas", "Bracelete de platina cravejado com uma safira", "Luvas bordadas com lascas de joias", "Peúga cheia de joias", "Caixa de música de ouro", "Argola de ouro cravejada com quatro águas-marinhas", "Tapa-olho com um olho falso cravejado em uma safira azul e uma pedra da lua", "Um colar de pequenas pérolas rosas"];
      let lista_objetos_arte_7500_po = ["Coroa de ouro cheia de joias", "Anel de platina cheio de joias", "Pequena estatueta de ouro cravejada com rubis", "Taça de ouro cravejada com esmeraldas", "Caixa de joias de ouro com filigrana de platina", "Sarcófago infantil de ouro pintado", "Jogo de tabuleiro de jade com peças de ouro maciço", "Chifre de marfim adornado com filigrana de ouro"];
      let tabela_itens_A = ["Poção de cura", "Pergaminho de magia (truque)", "Poção de escalar", "Pergaminho de magia (1° nível)", "Pergaminho de magia (2° nível)", "Poção de cura maior", "Mochila de carga", "Globo de fluxo"];
      let pesos_itens_A = [50, 10, 10, 20, 4, 4, 1, 1];
      let tabela_itens_B = ["Poção de cura maior", "Poção de sopro de fogo", "Poção de resistência", "Munição +1", "Poção de amizade animal", "Poção de força do gigante da colina", "Poção de aumentar", "Poção de respirar na água", "Pergaminho de magia (2° nível)", "Pergaminho de magia (3° nível)", "Mochila de carga", "Unguento de Keoghtom", "Óleo escorregadio", "Pó do desaparecimento", "Pó da seca", "Pó de espirrar e tossir", "Gema elemental", "Filtro do amor", "Jarro de alquimia", "Capa de respirar na água", "Manto da arraia", "Globo de fluxo", "Óculos noturnos", "Elmo de compreensão de idiomas", "Bastão imóvel", "Lanterna de revelação", "Armadura do marinheiro", "Armadura de mitral", "Poção de envenenamento", "Anel de natação", "Robe dos itens úteis", "Corda de escalada", "Sela do cavaleiro", "Varinha de detectar magia", "Varinha de segredos"];
      let pesos_itens_B = [15, 7, 7, 5, 5, 5, 5, 5, 5, 5, 3, 3, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
      let tabela_itens_C = ["Poção de cura maior", "Pergaminho de magia (4° nível)", "Munição +2", "Poção de clarividência", "Poção de encolher", "Poção de forma gasosa", "Poção de força do gigante do gelo", "Poção de força do gigante de pedra", "Poção de heroísmo", "Poção de invulnerabilidade", "Poção de ler mentes", "Pergaminho de magia (5° nível)", "Elixir de saúde", "Óleo de forma etérea", "Poção de força do gigante do fogo", "Pena de Quaal", "Pergaminho de proteção", "Saco de feijões", "Contas de força", "Carrilhão de abertura", "Decantador de água infinita", "Olhos de visão momentânea", "Barco dobrável", "Sacola prestativa de Heward", "Ferraduras da velocidade", "Colar de bolas de fogo", "Periapto de saúde", "Pedras de mensagem"];
      let pesos_itens_C = [15, 7, 5, 7, 5, 7, 5, 5, 5, 5, 5, 3, 3, 3, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1];
      let tabela_itens_D = ["Poção de cura suprema", "Poção de invisibilidade", "Poção de velocidade", "Pergaminho de magia (6° nível)", "Pergaminho de magia (7° nível)", "Munição +3", "Óleo de precisão", "Poção de voo", "Poção de força do gigante das nuvens", "Poção de longevidade", "Poção de vitalidade", "Pergaminho de magia (8° nível)", "Ferraduras de zéfiro", "Pigmentos maravilhosos de Nolzur", "Bolsa devoradora", "Buraco portátil"];
      let pesos_itens_D = [20, 10, 10, 10, 7, 5, 5, 5, 5, 5, 5, 5, 3, 3, 1, 1];
      let tabela_itens_E = ["Pergaminho de magia (8° nível)", "Poção de força do gigante da tempestade", "Poção de cura suprema", "Pergaminho de magia (9° nível)", "Solvente universal", "Flecha assassina", "Cola soberana"];
      let pesos_itens_E = [30, 25, 15, 15, 8, 5, 2];
      let tabela_itens_F = ["Arma +1", "Escudo +1", "Escudo sentinela", "Amuleto de proteção contra detecção e localização", "Botas élficas", "Botas de caminhar e saltar", "Braçadeiras de arquearia", "Broche do escudo", "Vassoura voadora", "Manto élfico", "Manto de proteção", "Manoplas de força do ogro", "Chapéu de disfarce", "Azagaia de relâmpago", "Pérola do poder", "Bastão guardião de pactos +1", "Sandálias de patas de aranha", "Cajado da víbora", "Cajado da píton", "Espada da vingança", "Tridente de comandar peixes", "Varinha de misseis mágicos", "Varinha do arcano de guerra +1", "Varinha de teia", "Arma de alerta", "Armadura de adamante (cota de malha)", "Armadura de adamante (camisão de malha)", "Armadura de adamante (brunea)", "Bolsa de truques (cinza)", "Bolsa de truques (ferrugem)", "Bolsa de truques (bronze)", "Botas do inverno", "Diadema da destruição", "Baralho das ilusões", "Garrafa da fumaça eterna", "Olhos do encantamento", "Olhos de águia", "Estátua de poderes incríveis (corvo de prata)", "Gema da luminosidade", "Luvas de apanhar projeteis", "Luvas de nadar e escalar", "Luvas do ladrão", "Tiara do intelecto", "Elmo de telepatia", "Instrumento dos bardos (alaúde de Doss)", "Instrumento dos bardos (bandolim de Fochlucan)", "Instrumento dos bardos (citara de Mac-Fuimidh)", "Medalhão de pensamentos", "Colar de adaptação", "Periapto da cicatrização", "Flauta assombrada", "Flauta dos esgotos", "Anel de saltar", "Anel de escudo mental", "Anel de calor", "Anel de andar na água", "Aljava de Ehlonna", "Pedra da boa sorte", "Leque do vento", "Botas aladas"];
      let pesos_itens_F = [15, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
      let tabela_itens_G = ["Arma +2", "Estátua de poderes incríveis (role um d8)", "Armadura de adamante (peitoral)", "Armadura de adamante (cota de talas)", "Amuleto de saúde", "Armadura de vulnerabilidade", "Escudo apanhador de flechas", "Cinto dos anões", "Cinturão de força do gigante da colina", "Machado furioso", "Botas de levitação", "Botas de velocidade", "Bacia de comandar elementais da água", "Braceletes de defesa", "Braseiro de comandar elementais do fogo", "Capa do saltimbanco", "Incensório de comandar elementais do ar", "Cota de malha +1", "Armadura da resistência (cota de malha)", "Camisão de malha +1", "Armadura da resistência (camisão de malha)", "Manto de deslocamento", "Manto do morcego", "Cubo de força", "Fortaleza instantânea de Daern", "Adaga de envenenamento", "Algemas dimensionais", "Matadora de dragões", "Malha élfica", "Língua flamejante", "Gema de visão", "Matador de gigantes", "Couro batido encantador", "Elmo de teletransporte", "Trombeta da destruição", "Trombeta do Valhalla (prata e latão)", "Instrumento dos bardos (mandolim de Canaith)", "Instrumento dos bardos (lira de Cli)", "Pedra iônica (prontidão)", "Pedra iônica (proteção)", "Pedra iônica (armazenamento)", "Pedra iônica (sustento)", "Faixas de ferro de Bilarro", "Armadura de couro +1", "Armadura de resistência (couro)", "Maça do rompimento", "Maça de destruição", "Maça do terror", "Manto de resistência à magia", "Corrente de contas de oração", "Periapto de proteção contra veneno", "Anel de cativar animais", "Anel de evasão", "Anel de queda suave", "Anel de ação livre", "Anel de proteção", "Anel de resistência", "Anel de armazenar magia", "Anel do aríete", "Anel de visão de raio-X", "Robe dos olhos", "Bastão da obediência", "Bastão guardião de pactos +2", "Corda de estrangulamento", "Brunea +1", "Armadura de resistência (brunea)", "Escudo +2", "Escudo de atração de projeteis", "Cajado de enfeitiçar", "Cajado de cura", "Cajado de enxame de insetos", "Cajado das florestas", "Cajado do definhamento", "Pedra de comandar elementais da terra", "Lâmina do sol", "Espada do furto de vidas", "Espada do sangramento", "Bastão do tentáculo", "Arma viciosa", "Varinha de obrigação", "Varinha de detecção de inimigos", "Varinha de medo", "Varinha de bolas de fogo", "Varinhas de relâmpagos", "Varinha de paralisia", "Varinha do arcano de guerra +2", "Varinha das maravilhas", "Asas voadoras"];
      let pesos_itens_G = [11, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
      let tabela_itens_H = ["Arma +3", "Amuleto dos planos", "Tapete voador", "Bola de cristal (versão muito rara)", "Anel de regeneração", "Anel de estrelas cadentes", "Anel de telecinésia", "Robe das cores cintilantes", "Robe das estrelas", "Bastão de absorção", "Bastão de prontidão", "Bastão de segurança", "Bastão guardião de pactos +3", "Cimitarra da velocidade", "Escudo +3", "Cajado do fogo", "Cajado do frio", "Cajado do poder", "Cajado de ataque", "Cajado de trovão e relâmpago", "Espada decepadora", "Varinha de metamorfose", "Varinha do arcano de guerra +3", "Armadura de adamante (meia-armadura)", "Armadura de adamante (placas)", "Escudo animado", "Cinturão de força do gigante do fogo", "Cinturão de força do gigante do frio (ou de pedra)", "Peitoral +1", "Armadura de resistência (peitoral)", "Vela da invocação", "Cota de malha +2", "Camisão de malha +2", "Manto da aranha", "Espada dançarina", "Armadura demoníaca", "Brunea de escamas de dragão", "Armadura anã", "Arremessador anão", "Garrafa do efreeti", "Estátua de poderes incríveis (corcel de obsidiana)", "Marca congelante", "Elmo brilhante", "Trombeta do Valhalla (bronze)", "Instrumento dos bardos (harpa de Anstruth)", "Pedra iônica (absorção)", "Pedra iônica (agilidade)", "Pedra iônica (fortitude)", "Pedra iônica (intuição)", "Pedra iônica (intelecto)", "Pedra iônica (liderança)", "Pedra iônica (força)", "Armadura de couro +2", "Manual da saúde corporal", "Manual do bom exercício", "Manual dos golens", "Manual da rapidez de movimentos", "Espelho do aprisionamento", "Ladra das nove vidas", "Arco do juramento", "Brunea +2", "Escudo de proteção contra magia", "Cota de talas +1", "Armadura de resistência (cota de talas)", "Armadura de couro batido +1", "Armadura de resistência (couro batido)", "Tomo dos grandes pensamentos", "Tomo de liderança e influência", "Tomo da compreensão"];
      let pesos_itens_H = [10,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
      let tabela_itens_I = ["Defensora", "Martelo dos trovões", "Lâmina da sorte", "Espada de retaliação", "Vingadora sagrada", "Anel de invocação de djinni", "Anel de invisibilidade", "Anel de refletir magias", "Bastão do grande poder", "Cajado do arcano", "Espada vorpal", "Cinturão de força do gigante das nuvens", "Peitoral +2", "Cota de malha +3", "Camisão de malha +3", "Manto de invisibilidade", "Bola de cristal (versão lendária)", "Meia-armadura +1", "Frasco de ferro", "Armadura de couro +3", "Armadura de placas +1", "Robe do arquimago", "Bastão de ressurreição", "Brunea +1", "Escaravelho da proteção", "Cota de talas +2", "Armadura de couro batido +2", "Poço dos muitos mundos", "Armadura mágica (role um d12)", "Dispositivo de Kwalish", "Armadura de invulnerabilidade", "Cinturão de força do gigante da tempestade", "Cubo do portal", "Baralho das surpresas", "Malha do efreeti", "Armadura de resistência (meia-armadura)", "Trombeta do Valhalla (ferro)", "Instrumento dos bardos (harpa de Ollamh)", "Pedra iônica (absorção maior)", "Pedra iônica (maestria)", "Pedra iônica (regeneração)", "Armadura de placas da forma etérea", "Armadura de placas da resistência", "Anel de comandar elementais do ar", "Anel de comandar elementais da terra", "Anel de comandar elementais do fogo", "Anel dos três desejos", "Anel de comandar elementais da água", "Esfera da aniquilação", "Talismã da bondade pura", "Talismã da esfera", "Talismã do mal absoluto", "Tomo da língua quieta"];
      let pesos_itens_I = [5, 5, 5, 5, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
      if (nivel_desafio >= 0 && nivel_desafio <= 4 && d100 >= 1 && d100 <= 6) {
        pc = String(getSumOfDice(6) * 100);
        pp = String(getSumOfDice(3) * 100);
        pe = '';
        po = String(getSumOfDice(2) * 10);
    } else if (nivel_desafio >= 0 && nivel_desafio <= 4 && d100 >= 7 && d100 <= 16) {
        let quantidade_de_gemas = getRandomInt(2, 12);
        let gemas_aleatorias = [];
        for (let i = 0; i < quantidade_de_gemas; i++) {
            gemas_aleatorias.push(lista_gemas_10_po[Math.floor(Math.random() * lista_gemas_10_po.length)]);
        }
        loot_gemas = gemas_aleatorias.join(", ");
        pc = String(getSumOfDice(6) * 100);
        pp = String(getSumOfDice(3) * 100);
        pe = '';
        po = String(getSumOfDice(2) * 10);
    } else if (nivel_desafio >= 0 && nivel_desafio <= 4 && d100 >= 17 && d100 <= 26) {
        loot_gemas = "";
        let quantidade_obras_de_arte = getRandomInt(2, 8);
        let obras_de_arte_aleatorias = [];
        for (let i = 0; i < quantidade_obras_de_arte; i++) {
            obras_de_arte_aleatorias.push(lista_objetos_arte_25_po[Math.floor(Math.random() * lista_objetos_arte_25_po.length)]);
        }
        loot_obras_de_arte = obras_de_arte_aleatorias.join(", ");
        pc = String(getSumOfDice(6) * 100);
        pp = String(getSumOfDice(3) * 100);
        pe = '';
        po = String(getSumOfDice(2) * 10);
    } else if (nivel_desafio >= 0 && nivel_desafio <= 4 && d100 >= 27 && d100 <= 36) {
        let quantidade_de_gemas = getRandomInt(2, 12);
        let gemas_aleatorias = [];
        for (let i = 0; i < quantidade_de_gemas; i++) {
            gemas_aleatorias.push(lista_gemas_50_po[Math.floor(Math.random() * lista_gemas_50_po.length)]);
        }
        loot_gemas = gemas_aleatorias.join(", ");
        pc = String(getSumOfDice(6) * 100);
        pp = String(getSumOfDice(3) * 100);
        pe = '';
        po = String(getSumOfDice(2) * 10);
    } else if (nivel_desafio >= 0 && nivel_desafio <= 4 && d100 >= 37 && d100 <= 44) {
        let quantidade_de_gemas = getRandomInt(2, 12);
        let gemas_aleatorias = [];
        for (let i = 0; i < quantidade_de_gemas; i++) {
            gemas_aleatorias.push(lista_gemas_10_po[Math.floor(Math.random() * lista_gemas_10_po.length)]);
        }
        loot_gemas = gemas_aleatorias.join(", ");
        loot_obras_de_arte = "";
        let quantidade_de_itens = getRandomInt(1, 6);
        let itens_aleatorios = randomChoices(tabela_itens_A, pesos_itens_A, quantidade_de_itens);
        loot_itens = itens_aleatorios.join(", ");
        pc = String(getSumOfDice(6) * 100);
        pp = String(getSumOfDice(3) * 100);
        pe = '';
        po = String(getSumOfDice(2) * 10);
    } else if (nivel_desafio >= 0 && nivel_desafio <= 4 && d100 >= 45 && d100 <= 52) {
        loot_gemas = "";
        let quantidade_obras_de_arte = getRandomInt(2, 8);
        let obras_de_arte_aleatorias = [];
        for (let i = 0; i < quantidade_obras_de_arte; i++) {
            obras_de_arte_aleatorias.push(lista_objetos_arte_25_po[Math.floor(Math.random() * lista_objetos_arte_25_po.length)]);
        }
        loot_obras_de_arte = obras_de_arte_aleatorias.join(", ");
        let quantidade_de_itens = getRandomInt(1, 6);
        let itens_aleatorios = randomChoices(tabela_itens_A, pesos_itens_A, quantidade_de_itens);
        loot_itens = itens_aleatorios.join(", ");
        pc = String(getSumOfDice(6) * 100);
        pp = String(getSumOfDice(3) * 100);
        pe = '';
        po = String(getSumOfDice(2) * 10);
    } else if (nivel_desafio >= 0 && nivel_desafio <= 4 && d100 >= 53 && d100 <= 60) {
        let quantidade_de_gemas = getRandomInt(2, 12);
        let gemas_aleatorias = [];
        for (let i = 0; i < quantidade_de_gemas; i++) {
            gemas_aleatorias.push(lista_gemas_50_po[Math.floor(Math.random() * lista_gemas_50_po.length)]);
        }
        loot_gemas = gemas_aleatorias.join(", ");
        let quantidade_de_itens = getRandomInt(1, 6);
        let itens_aleatorios = randomChoices(tabela_itens_A, pesos_itens_A, quantidade_de_itens);
        loot_itens = itens_aleatorios.join(", ");
        pc = String(getSumOfDice(6) * 100);
        pp = String(getSumOfDice(3) * 100);
        pe = '';
        po = String(getSumOfDice(2) * 10);
    } else if (nivel_desafio >= 0 && nivel_desafio <= 4 && d100 >= 61 && d100 <= 65) {
        let quantidade_de_gemas = getRandomInt(2, 12);
        let gemas_aleatorias = [];
        for (let i = 0; i < quantidade_de_gemas; i++) {
            gemas_aleatorias.push(lista_gemas_10_po[Math.floor(Math.random() * lista_gemas_10_po.length)]);
        }
        loot_gemas = gemas_aleatorias.join(", ");
        loot_obras_de_arte = "";
        let quantidade_de_itens = getRandomInt(1, 4);
        let itens_aleatorios = randomChoices(tabela_itens_B, pesos_itens_B, quantidade_de_itens);
        loot_itens = itens_aleatorios.join(", ");
        pc = String(getSumOfDice(6) * 100);
        pp = String(getSumOfDice(3) * 100);
        pe = '';
        po = String(getSumOfDice(2) * 10);
    } else if (nivel_desafio >= 0 && nivel_desafio <= 4 && d100 >= 66 && d100 <= 70) {
        loot_gemas = "";
        let quantidade_obras_de_arte = getRandomInt(2, 8);
        let obras_de_arte_aleatorias = [];
        for (let i = 0; i < quantidade_obras_de_arte; i++) {
            obras_de_arte_aleatorias.push(lista_objetos_arte_25_po[Math.floor(Math.random() * lista_objetos_arte_25_po.length)]);
        }
        loot_obras_de_arte = obras_de_arte_aleatorias.join(", ");
        let quantidade_de_itens = getRandomInt(1, 4);
        let itens_aleatorios = randomChoices(tabela_itens_B, pesos_itens_B, quantidade_de_itens);
        loot_itens = itens_aleatorios.join(", ");
        pc = String(getSumOfDice(6) * 100);
        pp = String(getSumOfDice(3) * 100);
        pe = '';
        po = String(getSumOfDice(2) * 10);
    } else if (nivel_desafio >= 0 && nivel_desafio <= 4 && d100 >= 71 && d100 <= 75) {
        let quantidade_de_gemas = getRandomInt(2, 12);
        let gemas_aleatorias = [];
        for (let i = 0; i < quantidade_de_gemas; i++) {
            gemas_aleatorias.push(lista_gemas_50_po[Math.floor(Math.random() * lista_gemas_50_po.length)]);
        }
        loot_gemas = gemas_aleatorias.join(", ");
        let quantidade_de_itens = getRandomInt(1, 4);
        let itens_aleatorios = randomChoices(tabela_itens_B, pesos_itens_B, quantidade_de_itens);
        loot_itens = itens_aleatorios.join(", ");
        pc = String(getSumOfDice(6) * 100);
        pp = String(getSumOfDice(3) * 100);
        pe = '';
        po = String(getSumOfDice(2) * 10);
    } else if (nivel_desafio >= 0 && nivel_desafio <= 4 && d100 >= 76 && d100 <= 78) {
        let quantidade_de_gemas = getRandomInt(2, 12);
        let gemas_aleatorias = [];
        for (let i = 0; i < quantidade_de_gemas; i++) {
            gemas_aleatorias.push(lista_gemas_10_po[Math.floor(Math.random() * lista_gemas_10_po.length)]);
        }
        loot_gemas = gemas_aleatorias.join(", ");
        loot_obras_de_arte = "";
        let quantidade_de_itens = getRandomInt(1, 4);
        let itens_aleatorios = randomChoices(tabela_itens_C, pesos_itens_C, quantidade_de_itens);
        loot_itens = itens_aleatorios.join(", ");
        pc = String(getSumOfDice(6) * 100);
        pp = String(getSumOfDice(3) * 100);
        pe = '';
        po = String(getSumOfDice(2) * 10);
    } else if (nivel_desafio >= 0 && nivel_desafio <= 4 && d100 >= 79 && d100 <= 80) {
        loot_gemas = "";
        let quantidade_obras_de_arte = getRandomInt(2, 8);
        let obras_de_arte_aleatorias = [];
        for (let i = 0; i < quantidade_obras_de_arte; i++) {
            obras_de_arte_aleatorias.push(lista_objetos_arte_25_po[Math.floor(Math.random() * lista_objetos_arte_25_po.length)]);
        }
        loot_obras_de_arte = obras_de_arte_aleatorias.join(", ");
        let quantidade_de_itens = getRandomInt(1, 4);
        let itens_aleatorios = randomChoices(tabela_itens_C, pesos_itens_C, quantidade_de_itens);
        loot_itens = itens_aleatorios.join(", ");
        pc = String(getSumOfDice(6) * 100);
        pp = String(getSumOfDice(3) * 100);
        pe = '';
        po = String(getSumOfDice(2) * 10);
    } else if (nivel_desafio >= 0 && nivel_desafio <= 4 && d100 >= 81 && d100 <= 85) {
        let quantidade_de_gemas = getRandomInt(2, 12);
        let gemas_aleatorias = [];
        for (let i = 0; i < quantidade_de_gemas; i++) {
            gemas_aleatorias.push(lista_gemas_50_po[Math.floor(Math.random() * lista_gemas_50_po.length)]);
        }
        loot_gemas = gemas_aleatorias.join(", ");
        let quantidade_de_itens = getRandomInt(1, 4);
        let itens_aleatorios = randomChoices(tabela_itens_C, pesos_itens_C, quantidade_de_itens);
        loot_itens = itens_aleatorios.join(", ");
        pc = String(getSumOfDice(6) * 100);
        pp = String(getSumOfDice(3) * 100);
        pe = '';
        po = String(getSumOfDice(2) * 10);
    } else if (nivel_desafio >= 0 && nivel_desafio <= 4 && d100 >= 86 && d100 <= 92) {
        loot_gemas = "";
        let quantidade_obras_de_arte = getRandomInt(2, 8);
        let obras_de_arte_aleatorias = [];
        for (let i = 0; i < quantidade_obras_de_arte; i++) {
            obras_de_arte_aleatorias.push(lista_objetos_arte_25_po[Math.floor(Math.random() * lista_objetos_arte_25_po.length)]);
        }
        loot_obras_de_arte = obras_de_arte_aleatorias.join(", ");
        let quantidade_de_itens = getRandomInt(1, 4);
        let itens_aleatorios = randomChoices(tabela_itens_F, pesos_itens_F, quantidade_de_itens);
        loot_itens = itens_aleatorios.join(", ");
        pc = String(getSumOfDice(6) * 100);
        pp = String(getSumOfDice(3) * 100);
        pe = '';
        po = String(getSumOfDice(2) * 10);
    } else if (nivel_desafio >= 0 && nivel_desafio <= 4 && d100 >= 93 && d100 <= 97) {
        let quantidade_de_gemas = getRandomInt(2, 12);
        let gemas_aleatorias = [];
        for (let i = 0; i < quantidade_de_gemas; i++) {
            gemas_aleatorias.push(lista_gemas_50_po[Math.floor(Math.random() * lista_gemas_50_po.length)]);
        }
        loot_gemas = gemas_aleatorias.join(", ");
        loot_obras_de_arte = "";
        let quantidade_de_itens = getRandomInt(1, 4);
        let itens_aleatorios = randomChoices(tabela_itens_F, pesos_itens_F, quantidade_de_itens);
        loot_itens = itens_aleatorios.join(", ");
        pc = String(getSumOfDice(6) * 100);
        pp = String(getSumOfDice(3) * 100);
        pe = '';
        po = String(getSumOfDice(2) * 10);
    } else if (nivel_desafio >= 0 && nivel_desafio <= 4 && d100 >= 98 && d100 <= 99) {
        loot_gemas = "";
        let quantidade_obras_de_arte = getRandomInt(2, 8);
        let obras_de_arte_aleatorias = [];
        for (let i = 0; i < quantidade_obras_de_arte; i++) {
            obras_de_arte_aleatorias.push(lista_objetos_arte_25_po[Math.floor(Math.random() * lista_objetos_arte_25_po.length)]);
        }
        loot_obras_de_arte = obras_de_arte_aleatorias.join(", ");
        let quantidade_de_itens = 1;
        let itens_aleatorios = randomChoices(tabela_itens_G, pesos_itens_G, quantidade_de_itens);
        loot_itens = itens_aleatorios.join(", ");
        pc = String(getSumOfDice(6) * 100);
        pp = String(getSumOfDice(3) * 100);
        pe = '';
        po = String(getSumOfDice(2) * 10);
    } else if (nivel_desafio >= 0 && nivel_desafio <= 4 && d100 === 100) {
        let quantidade_de_gemas = getRandomInt(2, 12);
        let gemas_aleatorias = [];
        for (let i = 0; i < quantidade_de_gemas; i++) {
            gemas_aleatorias.push(lista_gemas_50_po[Math.floor(Math.random() * lista_gemas_50_po.length)]);
        }
        loot_gemas = gemas_aleatorias.join(", ");
        quantidade_obras_de_arte = "";
        obras_de_arte_aleatorias = "";
        loot_obras_de_arte = "";
        let quantidade_de_itens = 1;
        let itens_aleatorios = randomChoices(tabela_itens_G, pesos_itens_G, quantidade_de_itens);
        loot_itens = itens_aleatorios.join(", ");
        pc = String(getSumOfDice(6) * 100);
        pp = String(getSumOfDice(3) * 100);
        pe = '';
        po = String(getSumOfDice(2) * 10);
    }
    
    function getSumOfDice(numDice) {
        let sum = 0;
        for (let i = 0; i < numDice; i++) {
            sum += getRandomInt(1, 6);
        }
        return sum;
    }
    
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    function randomChoices(array, weights, numChoices) {
        let choices = [];
        for (let i = 0; i < numChoices; i++) {
            choices.push(randomChoice(array, weights));
        }
        return choices;
    }
    
    function randomChoice(array, weights) {
        let totalWeight = weights.reduce((sum, weight) => sum + weight, 0);
        let randomNum = Math.random() * totalWeight;
        let weightSum = 0;
        for (let i = 0; i < array.length; i++) {
            weightSum += weights[i];
            if (randomNum <= weightSum) {
                return array[i];
            }
        }
        return array[array.length - 1];
    }
  }
