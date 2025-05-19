let points = localStorage.getItem("points") ? parseInt(localStorage.getItem("points")) : 0;
let multiplier = localStorage.getItem("multiplier") ? parseFloat(localStorage.getItem("multiplier")) : 1;
let username = localStorage.getItem("username") || prompt("Enter your name:");
localStorage.setItem("username", username);

const phrases = [
    `Keep gooning, ${username}!`,
    `${username} is unstoppable!`,
    `Click harder, ${username}!`,
    `You're a gooning machine, ${username}!`
];

document.getElementById("clicker").addEventListener("click", function() {
    points += 1 * multiplier;
    document.getElementById("points").textContent = points;
    document.getElementById("phrase").textContent = phrases[Math.floor(Math.random() * phrases.length)];
    localStorage.setItem("points", points);
});

document.getElementById("upgrade").addEventListener("click", function() {
    multiplier += 1;
    document.getElementById("multiplier").textContent = multiplier + "x";
    localStorage.setItem("multiplier", multiplier);
});

document.getElementById("rebirth").addEventListener("click", function() {
    points = 0;
    multiplier = 1;
    localStorage.setItem("points", points);
    localStorage.setItem("multiplier", multiplier);
    document.getElementById("points").textContent = points;
    document.getElementById("multiplier").textContent = multiplier + "x";
});
