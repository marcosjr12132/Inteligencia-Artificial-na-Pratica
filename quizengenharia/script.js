function startQuiz() {
  const audio = document.getElementById("startSound");
  audio.play();
  document.getElementById("intro").style.display = "none";
  document.getElementById("quiz-container").style.display = "block";
  showQuestion();
}

const questions = [
  {
    question: "O que mais te chama atenção em um projeto?",
    icon: "🏗️",
    options: {
      A: "Estrutura e segurança",
      B: "Soluções tecnológicas",
      C: "Processos empresariais",
      D: "Produtos sustentáveis",
      E: "Energia e automação"
    }
  },
  {
    question: "Como você se vê no futuro?",
    icon: "🔮",
    options: {
      A: "Grandes obras",
      B: "Criando sistemas inteligentes",
      C: "Liderando uma fábrica",
      D: "Pesquisando em um laboratório",
      E: "Operando redes e energia"
    }
  },
  {
    question: "Qual dessas matérias você mais gosta?",
    icon: "📘",
    options: {
      A: "Física aplicada",
      B: "Programação",
      C: "Logística e gestão",
      D: "Química e meio ambiente",
      E: "Circuitos e eletrônica"
    }
  },
  {
    question: "Qual dessas frases mais combina com você?",
    icon: "💬",
    options: {
      A: "Gosto de ver tudo funcionando",
      B: "Adoro resolver problemas complexos",
      C: "Quero ser eficiente e organizado",
      D: "Me importo com o planeta",
      E: "Tecnologia e energia me fascinam"
    }
  },
  {
    question: "Qual cenário te interessa mais?",
    icon: "🌍",
    options: {
      A: "Canteiro de obras",
      B: "Laboratório de IA",
      C: "Linha de produção",
      D: "Centro de pesquisa ecológica",
      E: "Sala de controle industrial"
    }
  },
  {
    question: "Você prefere trabalhar com...",
    icon: "🛠️",
    options: {
      A: "Projetos físicos e concretos",
      B: "Dados e software",
      C: "Planejamento e controle",
      D: "Soluções ambientais",
      E: "Sistemas automatizados"
    }
  },
  {
    question: "O que mais te motiva?",
    icon: "🚀",
    options: {
      A: "Ver construções sendo finalizadas",
      B: "Criar novas tecnologias",
      C: "Melhorar o desempenho de equipes",
      D: "Cuidar do planeta",
      E: "Inovar com energia e máquinas"
    }
  }
];

const results = {
  A: "<strong>Engenharia Civil:</strong> você tem perfil prático e gosta de construir e ver resultados físicos. Sua carreira pode estar em obras e infraestrutura.",
  B: "<strong>Engenharia da Computação:</strong> sua mente lógica e criativa é ideal para desenvolver sistemas, inteligência artificial e soluções digitais.",
  C: "<strong>Engenharia de Produção:</strong> você gosta de gerenciar, otimizar e liderar processos em ambientes industriais ou empresariais.",
  D: "<strong>Engenharia Ambiental:</strong> seu foco em sustentabilidade e inovação pode transformar o mundo com responsabilidade ecológica.",
  E: "<strong>Engenharia Elétrica/Mecatrônica:</strong> você tem paixão por energia, automação e tecnologia de ponta em ambientes industriais."
};

let currentQuestion = 0;
const score = { A: 0, B: 0, C: 0, D: 0, E: 0 };

function showQuestion() {
  const q = questions[currentQuestion];
  const quizDiv = document.getElementById("quiz");
  quizDiv.style.opacity = 0;

  setTimeout(() => {
    quizDiv.innerHTML = `<div class='question'><div class='icon'>${q.icon}</div><p>${q.question}</p></div>`;
    for (const key in q.options) {
      quizDiv.innerHTML += `<label><input type='radio' name='option' value='${key}'> ${q.options[key]}</label>`;
    }
    quizDiv.innerHTML += `<button onclick='nextQuestion()'>Próxima</button>`;
    quizDiv.style.opacity = 1;
  }, 300);
}

function nextQuestion() {
  const selected = document.querySelector("input[name='option']:checked");
  if (!selected) return alert("Escolha uma opção antes de continuar.");
  score[selected.value]++;
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("quiz-title").innerText = "Resultado do Quiz";
  document.getElementById("quiz").style.display = "none";
  const resultDiv = document.getElementById("result");
  const sorted = Object.entries(score).sort((a, b) => b[1] - a[1]);
  const top = sorted[0][0];
  resultDiv.style.display = "block";
  resultDiv.innerHTML = `<h2>${results[top]}</h2>`;
}
