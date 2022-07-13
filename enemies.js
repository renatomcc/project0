var catVillan1 = {
    x: 1,
    y: 1
}

var catVillan2 = {
    x: 1,
    y: 1
}

var catVillan3 = {
    x: 1,
    y: 1
}

var catVillan4 = {
    x: 1,
    y: 1
}

let catVillan1IsMoving = false;
let catVillan2IsMoving = false;
let catVillan3IsMoving = false;
let catVillan4IsMoving = false;

let catVillanDead = false;
let catVillan2Dead = false;
let catVillan3Dead = false;
let catVillan4Dead = false;

let hit = false;
let catSpeed = 300;
let attackSpeed = 5000;

let backgroundMusicPlaying = false;

function displayEnemies() {
    let catRand = Math.round(Math.floor(Math.random() * 3.5) + (-0.5));
    catVillanDead = false;
    catVillan2Dead = false;
    catVillan3Dead = false;
    catVillan4Dead = false;
    if (backgroundMusicPlaying == false) {
        sfx.backgroundMusic.play();
        backgroundMusicPlaying = true;
    }
    switch (catRand) {
        case 0:
            if (catVillan1IsMoving == false){
                catVillan1.x = 1;
                displayCatVillan1();
            }
            break;
        case 1:
            if (catVillan2IsMoving == false){
                catVillan2.x = 1;
                displayCatVillan2();
            }
            break;
        case 2:
            if (catVillan3IsMoving == false){
                catVillan3.x = 1;
                displayCatVillan3();
            }
            break;
        case 3:
            if (catVillan4IsMoving == false){
                catVillan4.x = 1;
                displayCatVillan4();
            }
            break;
    }
}

function displayCatVillan1() {
    var catVillan = document.getElementById("catvillan1");
    if (catVillan1IsMoving == false) {
        let yRand = Math.round(Math.floor(Math.random() * 21.5) + (-0.5));
        catVillan1.y = yRand;
    }
    catVillan.style.left = (catVillan1.y * 25 + 'px');
    catVillan.style.top = (catVillan1.x * 44 + 'px');
    catVillan.style.display = "flex";
    if (catVillan1IsMoving == false) {
        catVillanWalk1();
    }
}

function displayCatVillan2() {
    var catVillan = document.getElementById("catvillan2");
    if (catVillan2IsMoving == false) {
        let yRand = Math.round(Math.floor(Math.random() * 21.5) + (-0.5));
        catVillan2.y = yRand;
    }
    catVillan.style.left = (catVillan2.y * 25 + 'px');
    catVillan.style.top = (catVillan2.x * 44 + 'px');
    catVillan.style.display = "flex";
    if (catVillan2IsMoving == false) {
        catVillanWalk2();
    }
}

function displayCatVillan3() {
    var catVillan = document.getElementById("catvillan3");
    if (catVillan3IsMoving == false) {
        let yRand = Math.round(Math.floor(Math.random() * 21.5) + (-0.5));
        catVillan3.y = yRand;
    }
    catVillan.style.left = (catVillan3.y * 25 + 'px');
    catVillan.style.top = (catVillan3.x * 44 + 'px');
    catVillan.style.display = "flex";
    if (catVillan3IsMoving == false) {
        catVillanWalk3();
    }
}

function displayCatVillan4() {
    var catVillan = document.getElementById("catvillan4");
    if (catVillan4IsMoving == false) {
        let yRand = Math.round(Math.floor(Math.random() * 21.5) + (-0.5));
        catVillan4.y = yRand;
    }
    catVillan.style.left = (catVillan4.y * 25 + 'px');
    catVillan.style.top = (catVillan4.x * 44 + 'px');
    catVillan.style.display = "flex";
    if (catVillan4IsMoving == false) {
        catVillanWalk4();
    }
}

//CatVillan 1 attack and movment
function catVillanWalk1() {
    catVillan1IsMoving = true;
    var catVillan = document.getElementById("catvillan1");
    let catVillan1Attacking = setInterval(() => {
        if (catVillan1.x < 10) {
            if (catLives <= 0) {
                gameover();
                catVillan1IsMoving = false;
                clearInterval(catVillan1Attacking);
                return;
            }
            if (catVillanDead == true) {
                catVillan1IsMoving = false;
                clearInterval(catVillan1Attacking);
                return;
            }
            catVillan1.x += 0.2;
            displayCatVillan1();
        }
        if (catVillan1.x >= 10) {
            catLives--;
            clearInterval(catVillan1Attacking);
            if (catLives <= 0) {
                gameover();
                catVillan1IsMoving = false;
                clearInterval(catVillan1Attacking);
            }
            displayCatLives();
            catVillan1.x = 1;
            catVillan.style.display = 'none';
            catVillan1IsMoving = false;
        }
        if (catVillanDead == true) {
            catVillan1IsMoving = false;
            clearInterval(catVillan1Attacking);
        }
    }, catSpeed/catLevel)
}



//CatVillan 2 attack and movment
function catVillanWalk2() {
    catVillan2IsMoving = true;
    var catVillan = document.getElementById("catvillan2");
    let catVillan2Attacking = setInterval(() => {
        if (catVillan2.x < 10) {
            if (catLives <= 0) {
                gameover();
                catVillan2IsMoving = false;
                clearInterval(catVillan2Attacking);
                return;
            }
            if (catVillan2Dead == true) {
                catVillan2IsMoving = false;
                clearInterval(catVillan2Attacking);
                return;
            }
            catVillan2.x += 0.2;
            displayCatVillan2();
        }
        if (catVillan2.x >= 10) {
            catLives--;
            clearInterval(catVillan2Attacking);
            if (catLives <= 0) {
                gameover();
                catVillan2IsMoving = false;
                clearInterval(catVillan2Attacking);
            }
            displayCatLives();
            catVillan2.x = 1;
            catVillan.style.display = 'none';
            catVillan2IsMoving = false;
        }
        if (catVillan2Dead == true) {
            catVillan2IsMoving = false;
            clearInterval(catVillan2Attacking);
        }
    }, catSpeed/catLevel)
}

//CatVillan 3 attack and movment
function catVillanWalk3() {
    catVillan3IsMoving = true;
    var catVillan = document.getElementById("catvillan3");
    let catVillan3Attacking = setInterval(() => {
        if (catVillan3.x < 10) {
            if (catLives <= 0) {
                gameover();
                catVillan3IsMoving = false;
                clearInterval(catVillan3Attacking);
                return;
            }
            if (catVillan3Dead == true) {
                catVillan3IsMoving = false;
                clearInterval(catVillan3Attacking);
                return;
            }
            catVillan3.x += 0.2;
            displayCatVillan3();
        }
        if (catVillan3.x >= 10) {
            catLives--;
            clearInterval(catVillan3Attacking);
            if (catLives <= 0) {
                gameover();
                catVillan3IsMoving = false;
                clearInterval(catVillan3Attacking);
            }
            displayCatLives();
            catVillan3.x = 1;
            catVillan.style.display = 'none';
            catVillan3IsMoving = false;
        }
        if (catVillan3Dead == true) {
            catVillan3IsMoving = false;
            clearInterval(catVillan3Attacking);
        }
    }, catSpeed/catLevel)
}

//CatVillan 4 attack and movment
function catVillanWalk4() {
    catVillan4IsMoving = true;
    var catVillan = document.getElementById("catvillan4");
    let catVillan4Attacking = setInterval(() => {
        if (catVillan4.x < 10) {
            if (catLives <= 0) {
                gameover();
                catVillan4IsMoving = false;
                clearInterval(catVillan4Attacking);
                return;
            }
            if (catVillan4Dead == true) {
                catVillan4IsMoving = false;
                clearInterval(catVillan4Attacking);
                return;
            }
            catVillan4.x += 0.2;
            displayCatVillan4();
        }
        if (catVillan4.x >= 10) {
            catLives--;
            clearInterval(catVillan4Attacking);
            if (catLives <= 0) {
                gameover();
                catVillan4IsMoving = false;
                clearInterval(catVillan4Attacking);
            }
            displayCatLives();
            catVillan4.x = 1;
            catVillan.style.display = 'none';
            catVillan4IsMoving = false;
        }
        if (catVillan4Dead == true) {
            catVillan4IsMoving = false;
            clearInterval(catVillan4Attacking);
        }
    }, catSpeed/catLevel)
}

function testCollision1() {
    let cat = document.getElementById("catvillan1");
    var ball = document.getElementById("fireball");
    if ((catVillan1.y - fireball.y >= -2) && (catVillan1.y - fireball.y <= 1) && (fireball.x - catVillan1.x < 1.8)) {
        sfx.catVillanDeath.play();
        cat.style.display = 'none';
        catVillan1IsMoving = false;
        catVillan1.x = -5;
        catVillan1.y = -5;
        catVillanDead = true;
        hit = true;
    }
}

function testCollision2() {
    let cat = document.getElementById("catvillan2");
    var ball = document.getElementById("fireball");
    if ((catVillan2.y - fireball.y >= -2) && (catVillan2.y - fireball.y <= 1) && (fireball.x - catVillan2.x < 1.8)) {
        sfx.catVillanDeath.play();
        cat.style.display = 'none';
        catVillan2IsMoving = false;
        catVillan2.x = -5;
        catVillan2.y = -5;
        catVillan2Dead = true;
        hit = true;
    }
}

function testCollision3() {
    let cat = document.getElementById("catvillan3");
    var ball = document.getElementById("fireball");
    if ((catVillan3.y - fireball.y >= -2) && (catVillan3.y - fireball.y <= 1) && (fireball.x - catVillan3.x < 1.8)) {
        sfx.catVillanDeath.play();
        cat.style.display = 'none';
        catVillan3IsMoving = false;
        catVillan3.x = -5;
        catVillan3.y = -5;
        catVillan3Dead = true;
        hit = true;
    }
}

function testCollision4() {
    let cat = document.getElementById("catvillan4");
    var ball = document.getElementById("fireball");
    if ((catVillan4.y - fireball.y >= -2) && (catVillan4.y - fireball.y <= 1) && (fireball.x - catVillan4.x < 1.8)) {
        sfx.catVillanDeath.play();
        cat.style.display = 'none';
        catVillan4IsMoving = false;
        catVillan4.x = -5;
        catVillan4.y = -5;
        catVillan4Dead = true;
        hit = true;
    }
}