var boss = {
    x: 1,
    y: 11
}

var bossBall = {
    x: 3,
    y: 12
}

let bossLives = document.getElementById("bosslives");
let bossAttacking = false;
let bossLivesCount = 5;
let catHitted = false;
let bossShouldMove = false;
let bossHitted = false;

function displayBoss() {
    bossPosition.style.left = (boss.y * 25 + 'px');
    bossPosition.style.top = (boss.x * 44 + 'px')
}

function displaybossBall() {
    bossBallPosition.style.left = (bossBall.y * 25 + 'px');
    bossBallPosition.style.top = (bossBall.x * 44 + 'px');
    bossBallPosition.style.display = "flex";
}

function bossMovement() {
    let bossMoving = setInterval(() => {
        if (bossShouldMove == false) {
            clearInterval(bossMoving);
            return;
        }
        let rand = Math.round(Math.floor(Math.random() * 1.9) + (-0.1));
        if (boss.y == 0) {
            boss.y++;
            displayBoss();
        } else if (boss.y == 23) {
            boss.y--;
            displayBoss();
        }
        if (rand == 0 && boss.y > 0) {
            boss.y--;
            displayBoss();
        }
        if (rand == 1 && boss.y < 23) {
            boss.y++;
            displayBoss();
        }
    }, 350)
}


function callAttack() {
    console.log("Attack called")
    console.log("CatHitted = "+ catHitted)
    let callAttack = setInterval(() => {
        if (catHitted == false) {
            console.log("Boss Ball Attack called")
            console.log("bossAttacking should be false: "+ bossAttacking);
            console.log("catHitted should be false "+ catHitted);
            console.log("bossLivesCount should be >= 1 "+ bossLivesCount);
            bossBallAttack();
        }
        if (catHitted == true) clearInterval(callAttack);
    }, 500)
}

function bossBallAttack() {
    if (bossAttacking == false && catHitted == false && bossLivesCount >= 1) {
        let bossBallMoving = setInterval(() => {
            if (catHitted == true) {
                clearInterval(bossBallMoving);
                return;
            }
            if (bossAttacking == false) {
                bossBall.x = boss.x + 2;
                bossBall.y = boss.y + 1;
            }
            if (bossBall.x < 12) {
                bossAttacking = true;
                bossBall.x += 0.2;
                displaybossBall();
                testCollisionBossAttack();
            }
            if (bossBall.x >= 10 || catHitted == true) {
                bossBall.x = boss.x + 2;
                bossBall.y = boss.y + 1;
                bossAttacking = false;
                bossBallPosition.style.display = 'none';
                clearInterval(bossBallMoving);
            }
        }, 25)
    }
}

function testCollisionBossAttack() {
    if ((bossBall.y - cat.y <= 2) && (bossBall.y - cat.y >= -1) && (bossBall.x >= 9.4)) {
        catHitted = true;
        gameover();
    }
}

function displaybossLives() {
    bossLives.innerHTML = "Boss Lives: " + bossLivesCount;
}

function testCollisionCatAttack() {
    let ball = document.getElementById("fireball");
    if ((fireball.y - boss.y >= -4) && (fireball.y - boss.y <= 4) && (fireball.x - boss.x <= 2.8)) {
        sfx.bossHitted.play();
        bossLivesCount--;
        bossLives.innerHTML = ("Boss Lives: " + bossLivesCount);
        ball.style.display = 'none';
        bossHitted = true;
    }
    if (bossLivesCount <= 0) {
        ball.style.display = 'none';
        bossLivesCount = 5;
        win();
    }
}

function win(){
    sfx.bossMusic.stop();
    sfx.winMusic.play();
    container.style.display = 'none';
    container2.style.display = 'none';
    bossPosition.style.display = 'none';
    container3.style.display = 'none';
    bossMap.style.display = 'none';
    winDiv.style.display = 'flex';

    clearInterval(gameRunning);

    bossShouldMove = false;

    let cat = document.getElementById("catvillan1");
    let cat2 = document.getElementById("catvillan2");
    let cat3 = document.getElementById("catvillan3");
    let cat4 = document.getElementById("catvillan4");
    var ball = document.getElementById("fireball");

    cat.style.display = 'none';
    cat2.style.display = 'none';
    cat3.style.display = 'none';
    cat4.style.display = 'none';
    ball.style.display = 'none';

    catVillan1.x = 1;
    catVillan2.x = 1;
    catVillan3.x = 1;
    catVillan4.x = 1;
    fireball.x = 1;

    catVillan1IsMoving = false;
    catVillan2IsMoving = false;
    catVillan3IsMoving = false;
    catVillan4IsMoving = false;

    catVillanDead = false;
    catVillan2Dead = false;
    catVillan3Dead = false;
    catVillan4Dead = false;

    catLevel = 1;
    catScore = 0;
    catLives = 7;

    catHitted = true;
}