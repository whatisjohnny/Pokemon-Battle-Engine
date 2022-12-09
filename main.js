let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 1300;
cnv.height = 400;

let pmonSelected = "none"

let frameCount = 0;
let eHP = 0
let pHP = 0
let eDef = 0
let pDef = 0
let pSpd = 0
let eSpd = 0

let charM = {
  x: 100,
  y: 100,
  w: 200,
  h: 200,
};

let blastM = {
  x: 100,
  y: 100,
  w: 200,
  h: 200,
};

let venusM = {
  x: 100,
  y: 100,
  w: 200,
  h: 200,
};

let eLaxM = {
  x: 1000,
  y: 100,
  w: 200,
  h: 200,
};



let playerChar = document.getElementById("char");
let playerBlast = document.getElementById("blast");
let playerSaur = document.getElementById("venus");
let enemyLax = document.getElementById("lax")
let playHPEl = document.getElementById("truePHP")
let enemyHPEl = document.getElementById("trueEHP")
let pmove1 = document.getElementById("PMoves1")
let pmove2 = document.getElementById("PMoves2")
let pmove3 = document.getElementById("PMoves3")


playerChar.addEventListener("click", drawPChar);
playerBlast.addEventListener("click", drawPBlast);
playerSaur.addEventListener("click", drawPVenus);
enemyLax.addEventListener("click", drawELax)
pmove1.addEventListener("click", attack1)
pmove2.addEventListener("click", attack2)
pmove3.addEventListener("click", attack3)


// Pokemon Functions

function drawPBlast() {
    let pmonSelected = "blast"
    ctx.fillStyle = "white"
    ctx.fillRect(0, 0, 700, cnv.height)
    let pHP = 200
    let move1dmg = 50
    let pBlast = document.getElementById("blastoise");
    ctx.drawImage(pBlast, blastM.x, blastM.y, blastM.w, blastM.h);
    
    playHPEl.innerHTML = pHP
    pmove1.innerHTML = "Water Blast"
    pmove2.innerHTML = "Shell Hide"
    pmove3.innerHTML = "Moist Roar"
  }
  
  function drawPChar() {
    let pmonSelected = "char"
    ctx.fillStyle = "white"
    ctx.fillRect(0, 0, 700, cnv.height)
    let pHP = 150
    let move1dmg = 75
    let pChar = document.getElementById("charizard");
    ctx.drawImage(pChar, charM.x, charM.y, charM.w, charM.h);
    
    playHPEl.innerHTML = pHP
    pmove1.innerHTML = "Flame Burst"
    pmove2.innerHTML = "Wing Cutter"
    pmove3.innerHTML = "Dragon Leer"
  }
  
  function drawPVenus() {
    let pmonSelected = "venus"
    ctx.fillStyle = "white"
    ctx.fillRect(0, 0, 700, cnv.height)
    let pHP = 250
    let move1dmg = 25
    let pVenus = document.getElementById("venusaur");
    ctx.drawImage(pVenus, venusM.x, venusM.y, venusM.w, venusM.h);
    
    playHPEl.innerHTML = pHP
    pmove1.innerHTML = "Grass Blade"
    pmove2.innerHTML = "Sprout Seeds"
    pmove3.innerHTML = "Draining Sight"
  }


  
  function drawELax() {
    let emonSelected = "lax"
    eHP = 200
    eDef = 10
    enemyHPEl.innerHTML = eHP
    let eLax = document.getElementById("snorlax")
    ctx.drawImage(eLax, eLaxM.x, eLaxM.y, eLaxM.w, eLaxM.h)
  }

  // Move Functions
  function attack1() {
    enemyFaint()
     if (pmove1.innerHTML === "Water Blast") {
      eHP += -40 + eDef
      enemyHPEl.innerHTML = eHP
     } else if (pmove1.innerHTML === "Flame Burst") {
      eHP += -50 + eDef
      enemyHPEl.innerHTML = eHP
    } else if (pmove1.innerHTML === "Grass Blade") {
      eHP += -30 + eDef
      enemyHPEl.innerHTML = eHP
    } 
    enemyFaint()
  }
  
  function attack2() {  
    enemyFaint()
    if (pmove2.innerHTML === "Shell Hide") {
      pDef += 10
    } else if (pmove2.innerHTML === "Wing Cutter") {
      eHP += -25
      pSpd += 10
      enemyHPEl.innerHTML = eHP
    } else if (pmove2.innerHTML = "Sprout Seeds") {
      eDef += -10
    }
    enemyFaint()
  }
  
  function attack3() {  
    enemyFaint()
    if (pmove3.innerHTML === "Moist Roar") {
      pSpd += -5
      eDef += -10
    } else if (pmove3.innerHTML === "Dragon Leer") {
      eDef += -5
      eSpd += -5
    } else if (pmove3.innerHTML === "Draining Sight") {
      pDef + 10
      eHP += -30
      enemyHPEl.innerHTML = eHP
      
    }
    enemyFaint()
  }

  function enemyFaint() {
    if (eHP < 1) {
      ctx.fillRect(500, 0, cnv.width, cnv.height)
      eHP = 0
      
    }
  }




  
 
  









