let iceCreams = localStorage.getItem("iceCreams") ? parseInt(localStorage.getItem("iceCreams")) : 0;
let goonDollars = localStorage.getItem("goonDollars") ? parseInt(localStorage.getItem("goonDollars")) : 0;
let multiplier = localStorage.getItem("multiplier") ? parseFloat(localStorage.getItem("multiplier")) : 1;
let bestPlayer = localStorage.getItem("bestPlayer") || "None";
let username = localStorage.getItem("username") || prompt("Enter your name:");
localStorage.setItem("username", username);

const phrases = [
    `Keep gooning, ${username}!`,
    `${username} is unstoppable!`,
    `Click harder, ${username}!`,
    `You're a gooning machine, ${username}!`
];

const clickSound = new Audio("click.mp3");

document.getElementById("clicker").addEventListener("click", function() {
    iceCreams += 1 * multiplier;
    document.getElementById("iceCreams").textContent = iceCreams;
    document.getElementById("phrase").textContent = phrases[Math.floor(Math.random() * phrases.length)];
    localStorage.setItem("iceCreams", iceCreams);
    clickSound.play();
});

document.getElementById("sell").addEventListener("click", function() {
    goonDollars += iceCreams;
    iceCreams = 0;
    document.getElementById("goonDollars").textContent = goonDollars;
    document.getElementById("iceCreams").textContent = iceCreams;
    localStorage.setItem("goonDollars", goonDollars);
    localStorage.setItem("iceCreams", iceCreams);
    
    if (goonDollars > parseInt(localStorage.getItem("bestScore") || 0)) {
        localStorage.setItem("bestScore", goonDollars);
        bestPlayer = username;
        localStorage.setItem("bestPlayer", username);
        document.getElementById("bestPlayer").textContent = username;
    }
});

document.getElementById("upgrade").addEventListener("click", function() {
    if (goonDollars >= 10) {
        multiplier += 1;
        goonDollars -= 10;
        document.getElementById("multiplier").textContent = multiplier + "x";
        document.getElementById("goonDollars").textContent = goonDollars;
        localStorage.setItem("multiplier", multiplier);
        localStorage.setItem("goonDollars", goonDollars);
    }
});

document.getElementById("rebirth").addEventListener("click", function() {
    if (goonDollars >= 100) {
        multiplier *= 2;
        goonDollars = 0;
        iceCreams = 0;
        localStorage.setItem("multiplier", multiplier);
        localStorage.setItem("goonDollars", goonDollars);
        localStorage.setItem("iceCreams", iceCreams);
        document.getElementById("multiplier").textContent = multiplier + "x";
        document.getElementById("goonDollars").textContent = goonDollars;
        document.getElementById("iceCreams").textContent = iceCreams;
        document.getElementById("achievement").textContent = "🏅 REBIRTH SUCCESS 🏅";
    }
});
