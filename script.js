var cat = {
    x: 10,
    y: 12
}

var fireball = {
    x: 10,
    y: 12
}

var sfx = {
    backgroundMusic: new Howl({
        src: [
            './sounds/backgroundmusic.mp3'
        ],
        loop: true,
    }),
    catAttack: new Howl({
        src: [
            './sounds/catShot.mp3'
        ],
    }),
    bossAttack: new Howl({
        src: [
            './sounds/backgroundmusic.mp3'
        ],
    }),
    catVillanDeath: new Howl({
        src: [
            './sounds/catVillandeath.mp3'
        ],

    }),
    gameoverSound: new Howl({
        src: [
            './sounds/gameover.mp3'
        ],
    }),
    bossMusic: new Howl({
        src: [
            './sounds/bossmusic.mp3'
        ],
    }),
    bossHitted: new Howl({
        src: [
            './sounds/bosshitted.mp3'
        ],
    }),
    winMusic: new Howl({
        src: [
            './sounds/win.mp3'
        ],
    }),
}

var map = [
    ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'], // 0
    ['-', '0', '0', '0', '0', '0', '0', '0', '0', '0', '-', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '-'], // 1
    ['-', '0', '-', '-', '-', '0', '-', '-', '-', '0', '-', '0', '-', '-', '-', '0', '-', '-', '-', '0', '0', '-'], // 2
    ['-', '0', '-', '-', '-', '0', '-', '-', '-', '0', '-', '0', '-', '-', '-', '0', '-', '-', '-', '0', '0', '-'], // 3
    ['-', '0', '-', '-', '-', '0', '-', '-', '-', '0', '0', '0', '-', '-', '-', '0', '-', '-', '-', '0', '0', '-'], // 4
    ['-', '0', '0', '0', '0', '0', '0', '0', '0', '0', '-', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '-'], // 5
    ['-', '0', '-', '-', '-', '0', '-', '0', '0', '-', '-', '-', '0', '0', '-', '0', '-', '-', '-', '0', '0', '-'], // 6
    ['-', '0', '-', '-', '-', '0', '-', '0', '0', '0', '-', '0', '0', '0', '-', '0', '-', '-', '-', '0', '0', '-'], // 7
    ['-', '0', '0', '0', '0', '0', '-', '-', '-', '0', '0', '0', '-', '-', '-', '0', '0', '0', '0', '0', '0', '-'], // 8
    ['-', '0', '-', '-', '-', '0', '-', '0', '0', '0', '-', '0', '0', '0', '-', '0', '-', '-', '-', '0', '0', '-'], // 9
    ['-', '0', '0', '0', '-', '0', '-', '0', '-', '-', '-', '-', '-', '0', '-', '0', '-', '0', '0', '0', '0', '-'], // 10
    ['-', '0', '-', '0', '-', '0', '0', '0', '0', '0', '-', '0', '0', '0', '0', '0', '-', '0', '-', '0', '0', '-'], // 11
    ['-', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '-'], // 12
    ['-', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '-'], // 13
    ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-']  // 14
    //  0    1    2    3    4    5    6    7    8    9    10   11   12   13   14   15   16   17   18   19   20   21  
]

function displayMap() {
    var output = '';
    for (var i = 0; i < map.length; i++) {
        output += "\n<div class='row'>\n"
        for (var j = 0; j < map[i].length; j++) {
            if (map[i][j] == '-') {
                output += "<div class='blue'></div>";
            }
            else if (map[i][j] == '0') {
                output += "<div class='red'></div>";
            }
            else if (map[i][j] == 'C') {
                output += "<div class='catvillan1'></div>";
            }
        }
    }
    document.getElementById("map").innerHTML = output;
}

function displayCat() {
    var position = document.getElementById("cat");
    position.style.left = (cat.y * 25 + 'px');
    position.style.top = (cat.x * 44 + 'px')
}

function displayfireball() {
    var position = document.getElementById("fireball");
    position.style.left = (fireball.y * 25 + 'px');
    position.style.top = (fireball.x * 44 + 'px');
}

let isAttacking = false;
window.addEventListener("keydown", event => {
    if (event.key == 'a' && cat.y > 0) {
        cat.y--;
    }
    if (event.key == 'd' && cat.y < 25) {
        cat.y++;
    }
    if (event.key == ' ' && isAttacking == false) {
        isAttacking = true;
        fireBallAttack();
    }
    displayCat();
})


function fireBallAttack() {
    var ball = document.getElementById("fireball");
    fireball.x = cat.x;
    fireball.y = cat.y;
    sfx.catAttack.play();
    let ballMoving = setInterval(() => {
        if (bossShouldMove == true) {
            testCollisionCatAttack();
        }
        if (fireball.x > 0.8) {
            ball.style.display = 'flex';
            fireball.x -= 0.2;
            testCollision1();
            testCollision2();
            testCollision3();
            testCollision4();
            displayfireball();
            if (hit == true) {
                catScore += 10;
                displayScore();
                ball.style.display = 'none';
                isAttacking = false;
                clearInterval(ballMoving);
                hit = false;
            }
        }
        if (bossHitted == true) {
            isAttacking = false;
            ball.style.display = 'none';
            clearInterval(ballMoving);
            bossHitted = false;
        }
        if (fireball.x <= 0.8) {
            ball.style.display = 'none';
            isAttacking = false;
            clearInterval(ballMoving);
        }
    }, 20)
}

displayMap()
displayCat()