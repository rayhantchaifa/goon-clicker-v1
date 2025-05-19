let iceCreams = 0;
let goonDollars = 0;
let multiplier = 1;
let bestPlayer = localStorage.getItem("bestPlayer") || "None";
let upgradeCost = 10;
let username = "";

document.getElementById("startGame").addEventListener("click", function() {
    username = document.getElementById("usernameInput").value || "Player";
    document.getElementById("gameContent").style.display = "block";
    document.getElementById("phrase").textContent = `Let's go, ${username}!`;
});

document.getElementById("clicker").addEventListener("click", function() {
    iceCreams += 1 * multiplier;
    document.getElementById("iceCreams").textContent = iceCreams;
});

document.getElementById("sell").addEventListener("click", function() {
    goonDollars += iceCreams;
    iceCreams = 0;
    document.getElementById("goonDollars").textContent = goonDollars;
    document.getElementById("iceCreams").textContent = iceCreams;
});

document.getElementById("upgrade").addEventListener("click", function() {
    if (goonDollars >= upgradeCost) {
        multiplier += 1;
        goonDollars -= upgradeCost;
        upgradeCost = Math.ceil(upgradeCost * 1.5);
        document.getElementById("multiplier").textContent = multiplier + "x";
        document.getElementById("goonDollars").textContent = goonDollars;
        document.getElementById("upgradeCost").textContent = upgradeCost;
    }
});

document.getElementById("reset").addEventListener("click", function() {
    iceCreams = 0;
    goonDollars = 0;
    multiplier = 1;
    upgradeCost = 10;
    document.getElementById("iceCreams").textContent = iceCreams;
    document.getElementById("goonDollars").textContent = goonDollars;
    document.getElementById("multiplier").textContent = multiplier + "x";
    document.getElementById("upgradeCost").textContent = upgradeCost;
});

setInterval(() => {
    if (Math.random() < 0.2) {
        document.getElementById("popupContainer").style.display = "block";
        document.getElementById("popupMessage").textContent = "DO YOU LIKE ICE CREAM?";
    }
}, 10000);

document.getElementById("popupYes").addEventListener("click", function() {
    goonDollars += 10;
    document.getElementById("popupContainer").style.display = "none";
});

document.getElementById("popupNo").addEventListener("click", function() {
    document.getElementById("popupContainer").style.display = "none";
});
