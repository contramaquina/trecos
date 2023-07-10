function pergaminhoAleatorio() {
    const dicionarioMagias = {
      magias_nivel_0: [
        "Amizade",
        "Ataque Certeiro",
        "Chama Sagrada",
        "Bordão Místico",
        "Chicote de Espinhos",
        "Consertar",
        "Druidismo",
        "Criar Chamas",
        "Espirro Ácido",
        "Estabilizar",
        "Globos de Luz",
        "Orientação",
        "Ilusão Menor",
        "Luz",
        "Mãos Mágicas",
        "Mensagem",
        "Prestidigitação",
        "Proteção contra Lâminas",
        "Raio de Fogo",
        "Raio de Gelo",
        "Rajada de Veneno",
        "Rajada Mística",
        "Resistência",
        "Toque Arrepiante",
        "Taumaturgia",
        "Toque Chocante",
        "Zombaria Viciosa",
      ],
      magias_nivel_1: [
        "Alarme",
        "Amizade Animal",
        "Armadura Arcana",
        "Área Escorregadia",
        "Armadura de Agathys",
        "Auxílio Divino",
        "Bênção",
        "Bom Fruto",
        "Braços de Hadar",
        "Bruxaria",
        "Comando",
        "Compreender Idiomas",
        "Constrição",
        "Curar Ferimentos",
        "Convocar Familiar",
        "Criar ou Destruir Água",
        "Destruição Colérica",
        "Destruição Lancinante",
        "Destruição Trovejante",
        "Detectar o Bem e Mal",
        "Detectar Magia",
        "Falar com Animais",
        "Escudo Arcano",
        "Detectar Veneno e Doença",
        "Disco Flutuante de Tenser",
        "Disfarçar-se",
        "Duelo Compelido",
        "Enfeitiçar Pessoa",
        "Escrita Ilusória",
        "Escudo da Fé",
        "Fogo das Fadas",
        "Infligir Ferimentos",
        "Falar com Plantas",
        "Golpe Constritor",
        "Heroísmo",
        "Identificação",
        "Imagem Silenciosa",
        "Leque Cromático",
        "Mãos Flamejantes",
        "Mísseis Mágicos",
        "Marca do Caçador",
        "Névoa Obscurecente",
        "Onda Trovejante",
        "Orbe Cromática",
        "Passos Longos",
        "Palavra Curativa",
        "Perdição",
        "Proteção contra o Bem e Mal",
        "Purificar Alimentos",
        "Queda suave",
        "Raio Adoecente",
        "Raio de Bruxa",
        "Raio Guiador",
        "Recuo Acelerado",
        "Repreensão Infernal",
        "Riso Histérico de Tasha",
        "Salto",
        "Saraivada de Espinhos",
        "Santuário",
        "Sussurros Dissonantes",
        "Servo Invisível",
        "Sono",
        "Vitalidade Falsa",
      ],
      magias_nivel_2: [
        "Ajuda",
        "Acalmar Emoções",
        "Alterar-se",
        "Aprimorar Habilidade",
        "Arma Mágica",
        "Arma Espiritual",
        "Arrombar",
        "Aumentar/Reduzir",
        "Augúrio",
        "Cativar",
        "Aura Mágica e Nystul",
        "Chama Contínua",
        "Boca Encantada",
        "Cegueira/Surdez",
        "Convocar Montaria",
        "Coroa da Loucura",
        "Cordão de Flechas",
        "Crescer Espinhos",
        "Despedaçar",
        "Detectar Pensamentos",
        "Encontrar Armadilhas",
        "Escuridão",
        "Esfera Flamejante",
        "Esquentar Metal",
        "Flecha ácida de Melf",
        "Força Fantasmagórica",
        "Imobilizar Pessoa",
        "Invisibilidade",
        "Lâmina Flamejante",
        "Levitação",
        "Localizar Animais ou Plantas",
        "Passo Nebuloso",
        "Localizar Objeto",
        "Lufada de Vento",
        "Marca da Punição",
        "Mensageiro Animal",
        "Nublar",
        "Nuvem de Adagas",
        "Oração Curativa",
        "Patas de Aranha",
        "Passos sem Pegadas",
        "Restauração Menor",
        "Pele de Árvore",
        "Proteção contra Veneno",
        "Raio Ardente",
        "Raio do Enfraquecimento",
        "Raio Lunar",
        "Reflexos",
        "Repouso Tranquilo",
        "Sentido Bestial",
        "Silêncio",
        "Ver o Invisível",
        "Sugestão",
        "Teia",
        "Truque de Corda",
        "Tranca Arcana",
        "Vìnculo Protetor",
        "Visão no Escuro",
        "Zona da Verdade",
      ],
      magias_nivel_3: [
        "Ampliar Plantas",
        "Andar na Água",
        "Animar Mortos",
        "Arma Elemental",
        "Aura da Vitalidade",
        "Bola de Fogo",
        "Círculo Mágico",
        "Conjurar Rajada",
        "Conjurar Animais",
        "Clarividência",
        "Contramágica",
        "Convocar Relâmpagos",
        "Destruição Cegante",
        "Criar Alimentos",
        "Dificultar Detecção",
        "Dissipar Magia",
        "Enviar Mensagem",
        "Espíritos Guardiões",
        "Falar com os Mortos",
        "Flecha Relampejante",
        "Fome de Hadar",
        "Forjar Morte",
        "Idiomas",
        "Forma Gasosa",
        "Glifo de Vigilância",
        "Luz do Dia",
        "Manto do Cruzado",
        "Imagem Maior",
        "Lentidão",
        "Medo",
        "Mesclar-se às Rochas",
        "Montaria Fantasmagórica",
        "Padrão Hipnótico",
        "Palavra Curativa em Massa",
        "Muralha de Vento",
        "Nevasca",
        "Pequena Cabana de Leomund",
        "Névoa Fétida",
        "Piscar",
        "Proteção contra Energia",
        "Remover Maldição",
        "Relâmpago",
        "Respirar na Água",
        "Revivificar",
        "Rogar Maldição",
        "Sinal de Esperança",
        "Toque Vampírico",
        "Velocidade",
        "Voo",
      ],
      magias_nivel_4: [
        "Adivinhação",
        "Arca Secreta de Leomund",
        "Assassino Fantasmagórico",
        "Aura de Pureza",
        "Aura de Vida",
        "Banimento",
        "Cão Fiel de Mordenkainen",
        "Confusão",
        "Compulsão",
        "Conjurar Elementais Menores",
        "Destruição Estonteante",
        "Conjurar Seres da Floresta",
        "Controlar a Água",
        "Escudo de Fogo",
        "Guardião da Fé",
        "Dominar Besta",
        "Esfera Resiliente de Otiluke",
        "Fabricar",
        "Inseto Gigante",
        "Invisibilidade Maior",
        "Localizar Criatura",
        "Malogro",
        "Metamorfose",
        "Moldar Rochas",
        "Movimentação Livre",
        "Olho Arcano",
        "Muralha de Fogo",
        "Pele de Pedra",
        "Proteção contra a Morte",
        "Porta Dimensional",
        "Santuário Particular de Mordenkainen",
        "Tempestade de Gelo",
        "Tentáculos Negros de Evard",
        "Terreno Alucinógeno",
        "Vinha Esmagadora",
      ],
      magias_nivel_5: [
        "Animar Objetos",
        "Aljava Veloz",
        "Ancora Planar",
        "Caminhar em Árvores",
        "Círculo de Poder",
        "Círculo de Teletransporte",
        "Coluna de Chamas",
        "Comunhão",
        "Cone de Frio",
        "Comunhão com a Natureza",
        "Conhecimento Lendário",
        "Conjurar Saraivada",
        "Conjurar Elemental",
        "Contrato Extraplanar",
        "Criação",
        "Criar Passagem",
        "Consagrar",
        "Cúpula Antivida",
        "Curar Ferimentos em Massa",
        "Despertar",
        "Despistar",
        "Destruição Banidora",
        "Dissipar o Bem e Mal",
        "Dominar Pessoa",
        "Imobilizar Monstro",
        "Ligação Telepática de Rary",
        "Mão de Bigby",
        "Missão",
        "Modificar Memória",
        "Muralha de Energia",
        "Névoa Mortal",
        "Onda Destrutiva",
        "Reencarnação",
        "Muralha de Pedra",
        "Praga",
        "Restauração Maior",
        "Praga de Insetos",
        "Reviver os Mortos",
        "Similaridade",
        "Sonho",
        "Telecinésia",
        "Vidência",
      ],
      magias_nivel_6: [
        "Aliado Planar",
        "Ataque Visual",
        "Banquete dos Heróis",
        "Caminhar no Vento",
        "Barreira de Lâminas",
        "Carne para Pedra",
        "Círculo da Morte",
        "Cura Completa",
        "Conjurar Fada",
        "Contingência",
        "Corrente de Relâmpagos",
        "Criar Mortos-Vivos",
        "Dança Irresistível de Otto",
        "Doença Plena",
        "Desintegrar",
        "Encontrar o Caminho",
        "Esfera Congelante de Otiluke",
        "Globo de Invulnerabilidade",
        "Ilusão Programada",
        "Invocação Instantânea de Drawmij",
        "Mover Terra",
        "Muralha de Espinhos",
        "Palavra de Recordação",
        "Muralha de Gelo",
        "Portal Arcano",
        "Proibição",
        "Raio Solar",
        "Proteger Fortaleza",
        "Teletransporte por Árvores",
        "Visão da Verdade",
        "Recipiente Arcano",
        "Sugestão em Massa",
      ],
      magias_nivel_7: [
        "Bola de Fogo Controlável",
        "Conjurar Celestial",
        "Dedo da Morte",
        "Espada de Mordenkainen",
        "Forma Etérea",
        "Inverter a Gravidade",
        "Isolamento",
        "Mansão Magnífica de Mordenkainen",
        "Palavra Divina",
        "Miragem",
        "Prisão de Energia",
        "Projetar Imagem",
        "Rajada Prismática",
        "Regeneração",
        "Ressurreição",
        "Símbolo",
        "Simulacro",
        "Teletransporte",
        "Tempestade de Fogo",
        "Viagem Planar",
      ],
      magias_nivel_8: [
        "Antipatia/Simpatia",
        "Aura Sagrada",
        "Campo Antimagia",
        "Clone",
        "Controlar o Clima",
        "Enfraquecer Intelecto",
        "Dominar o Monstro",
        "Explosão Solar",
        "Formas Animais",
        "Limpar a Mente",
        "Labirinto",
        "Loquacidade",
        "Nuvem Incendiária",
        "Palavra de Poder Atordoar",
        "Semiplano",
        "Telepatia",
        "Tsunami",
        "Terremoto",
      ],
      magias_nivel_9: [
        "Alterar Forma",
        "Aprisionamento",
        "Chuva de Meteoros",
        "Cura Completa em Massa",
        "Encarnação Fantasmagórica",
        "Desejo",
        "Metamorfose Verdadeira",
        "Palavra de Poder Curar",
        "Palavra de Poder Matar",
        "Muralha Prismática",
        "Parar o Tempo",
        "Portal",
        "Ressurreição Verdadeira",
        "Projeção Astral",
        "Sexto Sentido",
        "Tempestade da Vingança",
      ],
    };
  
  try {
    const nivel = parseInt(document.getElementById("nivel_entrada").value);
    const quantidade = parseInt(document.getElementById("quantidade_entrada").value);
    let pergaminhosEscolhidos = [];

    if (nivel < 1 || nivel > 9 || quantidade <= 0) {
      alert("Erro de entrada: Insira valores positivos para o nível e quantidade.");
      return;
    }

    if (nivel >= 1 && nivel <= 9) {
      const magiasNivel = dicionarioMagias[`magias_nivel_${nivel}`];
      const numMagias = magiasNivel.length;

      for (let i = 0; i < quantidade; i++) {
        const indiceMagia = Math.floor(Math.random() * numMagias);
        const magiaEscolhida = magiasNivel[indiceMagia];
        pergaminhosEscolhidos.push(`- ${magiaEscolhida}`);
      }

      const mensagem = `Pergaminhos de ${nivel}° nível gerados:\n\n${pergaminhosEscolhidos.join("\n")}`;
      alert(mensagem);
    } else {
      alert("Erro de entrada: Insira um nível de 1 a 9.");
    }
  } catch (error) {
    alert("Erro de entrada: Por favor, insira números inteiros válidos.");
  }
}

function interfacePergaminhos() {
  let nivelEntrada, quantidadeEntrada;

  const interface = tk.Toplevel(window);
  interface.title("Gerador de Pergaminho de Magia");
  interface.geometry("300x200");

  const windowWidth = 300;
  const windowHeight = 200;

  // Calculando a posição para centralizar a janela na tela
  const screenWidth = interface.winfo_screenwidth();
  const screenHeight = interface.winfo_screenheight();

  const xCoordinate = parseInt((screenWidth / 2) - (windowWidth / 2));
  const yCoordinate = parseInt((screenHeight / 2) - (windowHeight / 2));

  interface.geometry(`${windowWidth}x${windowHeight}+${xCoordinate}+${yCoordinate}`);

  const levelLabel = document.createElement("label");
  levelLabel.textContent = "Nível da Magia:";
  interface.appendChild(levelLabel);

  nivelEntrada = document.createElement("input");
  nivelEntrada.type = "number";
  interface.appendChild(nivelEntrada);

  const quantityLabel = document.createElement("label");
  quantityLabel.textContent = "Quantidade de Pergaminhos:";
  interface.appendChild(quantityLabel);

  quantidadeEntrada = document.createElement("input");
  quantidadeEntrada.type = "number";
  interface.appendChild(quantidadeEntrada);

  const calculateButton = document.createElement("button");
  calculateButton.textContent = "Gerar";
  calculateButton.addEventListener("click", () => pergaminhoAleatorio());
  interface.appendChild(calculateButton);

  calculateButton.style.position = "absolute";
  calculateButton.style.left = "50%";
  calculateButton.style.top = "50%";
  calculateButton.style.transform = "translate(-50%, -50%)";
}

const generateButton = document.createElement("button");
generateButton.textContent = "Gerador de Pergaminhos";
generateButton.addEventListener("click", () => interfacePergaminhos());
window.appendChild(generateButton);
