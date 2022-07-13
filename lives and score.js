const lives = document.getElementById("lives");
const score = document.getElementById("score");
const level = document.getElementById("level");
const container = document.getElementById("container");
const container2 = document.getElementById("container2");
const container3 = document.getElementById("container3");
const gameOver = document.getElementById("gameover");
const bossPosition = document.getElementById("boss");
const bossBallPosition = document.getElementById("bossBall");
const bossMap = document.getElementById("bossmap");
const gameMap = document.getElementById("map");
const winDiv = document.getElementById("win");

let catLives = 7;
let catScore = 0;
let catLevel = Math.floor(catScore / 100 + 1);
let lastLevel = 1;

function displayScore() {
    score.innerHTML = `Score: ${catScore}`;
    catLevel = Math.floor(catScore / 100 + 1);
    if (catLevel != lastLevel) {
        lastLevel = catLevel;
        levelUpdated();
    }
    displayLevel();
}

function displayCatLives() {
    lives.innerHTML = `Lives: ${catLives}`;
}

function displayLevel() {
    level.innerHTML = `Level: ${catLevel}`
}

function gameover() {
    sfx.backgroundMusic.stop();
    sfx.bossMusic.stop();
    sfx.gameoverSound.play();
    container.style.display = 'none';
    gameOver.style.display = 'flex';
    bossPosition.style.display = 'none';
    container3.style.display = 'none';

    let cat = document.getElementById("catvillan1");
    let cat2 = document.getElementById("catvillan2");
    let cat3 = document.getElementById("catvillan3");
    let cat4 = document.getElementById("catvillan4");
    var ball = document.getElementById("fireball");

    clearInterval(gameRunning);

    cat.style.display = 'none';
    cat2.style.display = 'none';
    cat3.style.display = 'none';
    cat4.style.display = 'none';
    ball.style.display = 'none';

    catVillan1.x = 1;
    catVillan2.x = 1;
    catVillan3.x = 1;
    catVillan4.x = 1;

    catVillan1IsMoving = false;
    catVillan2IsMoving = false;
    catVillan3IsMoving = false;
    catVillan4IsMoving = false;

    catVillanDead = false;
    catVillan2Dead = false;
    catVillan3Dead = false;
    catVillan4Dead = false;

    bossShouldMove = false;
}

function start() {
    sfx.gameoverSound.stop();
    sfx.winMusic.stop();
    sfx.backgroundMusic.play();
    var catBall = document.getElementById("fireball");
    container.style.display = 'flex';
    container2.style.display = 'flex';
    gameOver.style.display = 'none';
    bossPosition.style.display = 'none';
    bossMap.style.display = 'none';
    bossBallPosition.style.display = 'none';
    gameMap.style.display = 'flex';
    winDiv.style.display = 'none';
    catBall.style.display = 'none';
    catVillan1.x = 1;
    catVillan2.x = 1;
    catVillan3.x = 1;
    catVillan4.x = 1;
    catLevel = 1;
    catScore = 0;
    catLives = 7;
    catHitted = true;
    bossShouldMove = false;
    bossLivesCount = 5;
    displayMap();
    displayCat();
    displayScore();
    displayCatLives();
    displayfireball();
    clearInterval(gameRunning);
    gameRunning = setInterval(displayEnemies, attackSpeed / catLevel);
}

function levelUpdated() {
    let cat = document.getElementById("catvillan1");
    let cat2 = document.getElementById("catvillan2");
    let cat3 = document.getElementById("catvillan3");
    let cat4 = document.getElementById("catvillan4");

    if (catLevel >= 7) {
        clearInterval(gameRunning);
        startBossBattle();
    } else {
        cat.style.display = 'none';
        cat2.style.display = 'none';
        cat3.style.display = 'none';
        cat4.style.display = 'none';

        catVillan1IsMoving = false;
        catVillan2IsMoving = false;
        catVillan3IsMoving = false;
        catVillan4IsMoving = false;

        catVillanDead = true;
        catVillan2Dead = true;
        catVillan3Dead = true;
        catVillan4Dead = true;

        catVillan1.x = -1;
        catVillan2.x = -1;
        catVillan3.x = -1;
        catVillan4.x = -1;

        clearInterval(gameRunning);
        gameRunning = setInterval(displayEnemies, attackSpeed / catLevel);
    }
}

function startBossBattle() {
    sfx.backgroundMusic.stop();
    sfx.bossMusic.play();
    gameMap.style.display = 'none';
    container2.style.display = 'none';
    container3.style.display = 'flex';
    bossPosition.style.display = 'flex';
    bossMap.style.display = 'flex';

    let cat = document.getElementById("catvillan1");
    let cat2 = document.getElementById("catvillan2");
    let cat3 = document.getElementById("catvillan3");
    let cat4 = document.getElementById("catvillan4");

    catVillan1IsMoving = false;
    catVillan2IsMoving = false;
    catVillan3IsMoving = false;
    catVillan4IsMoving = false;

    catVillanDead = true;
    catVillan2Dead = true;
    catVillan3Dead = true;
    catVillan4Dead = true;

    cat.style.display = 'none';
    cat2.style.display = 'none';
    cat3.style.display = 'none';
    cat4.style.display = 'none';

    catVillan1.x = 1;
    catVillan2.x = 1;
    catVillan3.x = 1;
    catVillan4.x = 1;

    bossLivesCount = 5;
    bossShouldMove = true;
    catHitted = false;
    bossAttacking = false;
    
    clearInterval(gameRunning);
    
    displayBoss();
    callAttack();
    bossMovement();
    displaybossLives();
}


let gameRunning = setInterval(displayEnemies, attackSpeed / catLevel);