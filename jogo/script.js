
let levels = [
    {
        question: "Qual número completa a sequência: 2, 4, 8, 16, ?",
        answers: ["18", "20", "32", "24"],
        correct: 2
    },
    {
        question: "Se João tem 3 maçãs e come 1, com quantas ele fica?",
        answers: ["1", "2", "3", "4"],
        correct: 1
    },
    {
        question: "Qual é a próxima letra: A, C, E, G, ?",
        answers: ["H", "I", "J", "K"],
        correct: 1
    },
    {
        question: "Quantos lados tem um hexágono?",
        answers: ["5", "6", "7", "8"],
        correct: 1
    },
    {
        question: "Se 5 + 3 = 53, 4 + 2 = 42, então 6 + 1 = ?",
        answers: ["61", "7", "16", "8"],
        correct: 0
    }
];

let currentLevel = 0;
let questionEl = document.getElementById("question");
let answersEl = document.getElementById("answers");
let resultEl = document.getElementById("result");
let nextBtn = document.getElementById("next-btn");

function loadLevel() {
    let level = levels[currentLevel];
    questionEl.textContent = level.question;
    answersEl.innerHTML = "";
    resultEl.textContent = "";
    nextBtn.style.display = "none";

    level.answers.forEach((answer, index) => {
        let btn = document.createElement("button");
        btn.textContent = answer;
        btn.onclick = () => checkAnswer(index);
        answersEl.appendChild(btn);
    });
}

function checkAnswer(index) {
    let correct = levels[currentLevel].correct;
    if (index === correct) {
        resultEl.textContent = "✅ Correto!";
    } else {
        resultEl.textContent = "❌ Errado!";
    }
    nextBtn.style.display = "inline-block";
}

function nextLevel() {
    currentLevel++;
    if (currentLevel < levels.length) {
        loadLevel();
    } else {
        endGame();
    }
}

function endGame() {
    questionEl.textContent = "Parabéns! Você desbloqueou o cofre! 🎉";
    answersEl.innerHTML = "";
    resultEl.textContent = "";
    nextBtn.style.display = "none";
}

window.onload = loadLevel;

let soundCorrect = document.getElementById("sound-correct");
let soundWrong = document.getElementById("sound-wrong");
let shareBtn = document.getElementById("share-btn");

function checkAnswer(index) {
    let correct = levels[currentLevel].correct;
    if (index === correct) {
        resultEl.textContent = "✅ Correto!";
        soundCorrect.play();
    } else {
        resultEl.textContent = "❌ Errado!";
        soundWrong.play();
    }
    nextBtn.style.display = "inline-block";
}

function endGame() {
    questionEl.textContent = "Parabéns! Você desbloqueou o cofre! 🎉";
    answersEl.innerHTML = "";
    resultEl.textContent = "";
    nextBtn.style.display = "none";
    shareBtn.style.display = "inline-block";
}

function compartilhar() {
    const texto = encodeURIComponent("Acabei de desbloquear o cofre no jogo de lógica da Mobielo! 🔐 Tente você também: [coloque o link aqui]");
    window.open(`https://wa.me/?text=${texto}`, "_blank");
}
