window.addEventListener("keyup", function(e){ if(e.keyCode == 27) history.back(); }, false);

const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
"#ffb56b",
"#fdaf69",
"#f89d63",
"#f59761",
"#ef865e",
"#ec805d",
"#e36e5c",
"#df685c",
"#d5585c",
"#d1525c",
"#c5415d",
"#c03b5d",
"#b22c5e",
"#ac265e",
"#9c155f",
"#950f5f",
"#830060",
"#7c0060",
"#680060",
"#60005f",
"#48005f",
"#3d005e"
];

circles.forEach(function (circle, index) {
circle.x = 0;
circle.y = 0;
circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e){
coords.x = e.clientX;
coords.y = e.clientY;

});

function animateCircles() {

let x = coords.x;
let y = coords.y;

circles.forEach(function (circle, index) {
  circle.style.left = x - 12 + "px";
  circle.style.top = y - 12 + "px";
  
  circle.style.scale = (circles.length - index) / circles.length;
  
  circle.x = x;
  circle.y = y;

  const nextCircle = circles[index + 1] || circles[0];
  x += (nextCircle.x - x) * 0.3;
  y += (nextCircle.y - y) * 0.3;
});

requestAnimationFrame(animateCircles);
}

animateCircles();


const mapData = {
  minX: 0,
  maxX: 34,
  minY: 0,
  maxY: 32,
  blockedSpaces: {
    "0x0": true,
    "0x1": true,
    "0x2": true,
    "0x3": true,
    "0x4": true,
    "0x5": true,
    "0x6": true,
    "0x7": true,
    "0x8": true,
    "0x9": true,
    "0x10": true,

    "1x0": true,
    "1x1": true,
    "1x2": true,
    "1x3": true,
    "1x4": true,
    "1x5": true,
    "1x6": true,
    "1x7": true,
    "1x8": true,
    "1x9": true,
    "1x10": true,

    "2x0": true,
    "2x1": true,
    "2x2": true,
    "2x3": true,
    "2x4": true,
    "2x5": true,
    "2x6": true,
    "2x7": true,
    "2x8": true,
    "2x9": true,
    "2x10": true,

    "3x3": true,
    "3x4": true,
    "3x5": true,
    "3x6": true,
    "3x7": true,
    "3x8": true,
    "3x9": true,
    "3x10": true,

    "5x3": true,
    "5x4": true,
    "5x5": true,
    "5x6": true,
    "5x7": true,
    "5x8": true,
    "5x9": true,
    "5x10": true,

    "11x0": true,
    "11x1": true,
    "11x2": true,
    "11x3": true,
    "12x0": true,
    "12x1": true,
    "12x2": true,
    "12x3": true,
    
    "6x3": true,
    "7x3": true,
    "8x3": true,
    "9x3": true,
    "10x3": true,

    "6x10": true,
    "7x11": true,
    "7x12": true,
    "7x13": true,
    "7x14": true,
    "7x15": true,
    "7x16": true,
    "7x17": true,
    "7x18": true,

    "8x18": true,
    "9x18": true,
    "10x19": true,
    "10x20": true,
    "10x21": true,
    "10x22": true,
    "10x23": true,
    "10x24": true,
    "10x25": true,
    "10x26": true,
    "10x27": true,
    "10x28": true,
    "10x29": true,
    "11x21": true,
    "12x21": true,
    "11x21": true,
    "11x21": true,
    "12x20": true,
    "12x19": true,
    "12x18": true,
    "12x17": true,
    "12x16": true,
    "12x15": true,
    "12x14": true,
    "12x13": true,
    "12x12": true,
    "12x11": true,
    "12x10": true,
    "12x9": true,
    "10x8": true,
    "10x7": true,
    "10x6": true,
    "10x5": true,
    "10x4": true,
    "14x0": true,
    "14x1": true,
    "14x2": true,
    "15x2": true,
    "16x2": true,
    "17x2": true,
    "18x3": true,
    "18x4": true,
    "18x5": true,
    "18x6": true,
    "18x7": true,
    "18x8": true,
    "18x9": true,
    "18x10": true,
    "18x11": true,
    "18x12": true,
    "16x13": true,    
    "16x12": true,
    "16x11": true,
    "16x10": true,
    "16x9": true,
    "15x13": true,
    "14x12": true,
    "14x13": true,
    "14x12": true,
    "14x11": true,
    "14x10": true,
    "14x9": true,
    "15x9": true,
    "19x12": true,
    "19x11": true,
    "19x10": true,
    "19x9": true,
    "19x8": true,
    "19x7": true,
    "19x6": true,
    "19x5": true,
    "19x4": true,
    "19x3": true,
    "19x2": true,
    "19x1": true,
    "19x0": true,
    "21x0": true,
    "21x1": true,
    "21x2": true,
    "21x3": true,
    "21x4": true,
    "22x4": true,
    "23x4": true,
    "24x4": true,
    "25x4": true,
    "26x4": true,
    "27x4": true,
    "27x3": true,
    "27x2": true,
    "27x1": true,
    "27x0": true,
    "29x0": true,
    "30x0": true,
    "31x0": true,
    "32x0": true,
    "33x0": true,
    "29x3": true,
    "29x2": true,
    "30x2": true,
    "31x2": true,
    "32x2": true,
    "33x2": true,
    "29x4": true,
    "29x5": true,
    "29x6": true,
    "29x7": true,
    "29x8": true,
    "29x9": true,
    "30x9": true,
    "31x9": true,
    "32x9": true,
    "33x9": true,
    "33x11": true,
    "32x11": true,
    "31x11": true,
    "31x12": true,
    "31x13": true,
    "31x14": true,
    "31x15": true,
    "31x16": true,
    "31x17": true,
    "32x18": true,
    "33x19": true,
    "33x20": true,
    "33x21": true,
    "33x22": true,
    "33x23": true,
    "33x24": true,
    "33x25": true,
    "33x26": true,
    "33x28": true,
    "32x28": true,
    "32x29": true,
    "32x30": true,
    "32x31": true,
    "27x31": true,
    "26x31": true,
    "26x30": true,
    "26x29": true,
    "26x28": true,
    "27x30": true,
    "27x29": true,
    "27x28": true,
    "28x26": true,
    "28x25": true,
    "28x24": true,
    "28x23": true,
    "28x22": true,
    "28x21": true,
    "28x20": true,
    "28x19": true,
    "27x19": true,
    "26x19": true,
    "25x19": true,
    "24x19": true,
    "23x19": true,
    "22x19": true,
    "21x20": true,
    "20x20": true,
    "19x20": true,
    "19x21": true,
    "19x22": true,
    "19x23": true,
    "19x24": true,
    "19x25": true,
    "19x26": true,
    "19x27": true,
    "20x27": true,
    "20x26": true,
    "21x26": true,
    "22x26": true,
    "23x26": true,
    "24x26": true,
    "25x26": true,
    "26x26": true,
    "27x26": true,
    

    "14x19": true,
    "15x19": true,
    "16x19": true,
    "14x20": true,
    "15x20": true,
    "16x20": true,
    "17x19": true,
    "17x20": true,
    "17x21": true,
    "17x22": true,
    "17x23": true,
    "17x24": true,
    "17x25": true,
    "17x26": true,
    "17x27": true,
    "17x28": true,
    "17x29": true,
    "17x30": true,
    "17x31": true,

    "19x29": true,
    "19x30": true,
    "20x29": true,
    "20x30": true,

    "24x14": true,
    "24x13": true,
    "24x12": true,
    "24x11": true,

    "23x14": true,
    "23x13": true,
    "23x12": true,
    "23x11": true,

    "22x15": true,
    "22x16": true,
    "22x17": true,

    "23x15": true,
    "23x16": true,
    "23x17": true,
    "24x15": true,
    "24x16": true,
    "24x17": true,
   
    "0x17": true,
    "1x17": true,
    "2x17": true,
    "3x17": true,
    "4x17": true,
    "5x17": true,
    "5x18": true,
    "5x19": true,
    "4x19": true,
    "3x19": true,
    "2x19": true,

    "1x20": true,
    "1x21": true,
    "1x22": true,
    "1x23": true,
    "1x24": true,
    "1x25": true,
    "1x26": true,

    "2x27": true,
    "3x27": true,
    "4x27": true,
    "5x27": true,
    "6x27": true,
    "7x27": true,
    "8x27": true,

    "8x27": true,
    "8x28": true,
    "8x29": true,
    "8x30": true,
    "8x31": true,

    "11x9": true,
    
    
   


    


    
    
    
    
    
    
    

    
    
    
    
    


    
    
    
 

    
    
  },
};
console.log(mapData.blockedSpaces)
// Options for Player Colors... these are in the same order as our sprite sheet
const playerColors = ["blue", "red", "orange", "yellow", "green", "purple"];

//Misc Helpers
function randomFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}
function getKeyString(x, y) {
  return `${x}x${y}`;
}

function createName() {
  const prefix = randomFromArray([
    "COOL",
    "SUPER",
    "HIP",
    "SMUG",
    "COOL",
    "SILKY",
    "GOOD",
    "SAFE",
    "DEAR",
    "DAMP",
    "WARM",
    "RICH",
    "LONG",
    "DARK",
    "SOFT",
    "BUFF",
    "DOPE",
  ]);
  const animal = randomFromArray([
    "BEAR",
    "DOG",
    "CAT",
    "FOX",
    "LAMB",
    "LION",
    "BOAR",
    "GOAT",
    "VOLE",
    "SEAL",
    "PUMA",
    "MULE",
    "BULL",
    "BIRD",
    "BUG",
  ]);
  return `${prefix} ${animal}`;
}

function isSolid(x,y) {

  const blockedNextSpace = mapData.blockedSpaces[getKeyString(x, y)];
  return (
    blockedNextSpace ||
    x >= mapData.maxX ||
    x < mapData.minX ||
    y >= mapData.maxY ||
    y < mapData.minY
  )
}

function getRandomSafeSpot() {
  //We don't look things up by key here, so just return an x/y
  return randomFromArray([
    { x: 0, y: 16},

   
     { x: 14, y: 14 },
     { x: 13, y: 8 },
     { x: 13, y: 7},
     { x: 13, y: 6 },
     { x: 12, y: 7 },
     { x: 11, y: 7 },
     { x: 11, y: 4 },
     { x: 30, y: 30 },
     { x: 31, y: 29 },
     { x: 30, y: 29 },
     { x: 30, y: 26 },
     { x: 31, y: 23 },
     { x: 31, y: 24 },
     { x: 31, y: 22 },
     { x: 30, y: 23 },
     { x: 31, y: 20 },
     { x: 28, y: 15 },
     { x: 27, y: 15 },
     { x: 27, y: 14 },
     { x: 27, y: 13 },
     { x: 29, y: 12 },
     { x: 28, y: 4 },
     { x: 28, y: 3 },
     { x: 28, y: 2 },
     { x: 28, y: 1 },
     { x: 29, y: 1 },
     { x: 30, y: 1 },
     { x: 31, y: 1 },
     { x: 23, y: 18 },
     { x: 19, y: 17 },
     { x: 19, y: 16 },
     { x: 18, y: 15 },
     { x: 18, y: 16 },
     { x: 17, y: 13 },
     { x: 17, y: 11 },
     { x: 14, y: 22 },
     { x: 14, y: 23 },
     { x: 16, y: 24 },
     { x: 16, y: 25 },
     { x: 16, y: 26 },
     { x: 16, y: 27 },
     { x: 16, y: 28 },
     { x: 14, y: 26 },
     { x: 13, y: 26 },
     { x: 12, y: 26 },
     { x: 11, y: 26 },
     { x: 10, y: 31 },
     { x: 14, y: 26 },
     { x: 13, y: 20 },
   
     { x: 2, y: 26 },
     { x: 3, y: 26 },
    
     { x: 3, y: 25 },
     { x: 5, y: 26 },
    
  
     { x: 6, y: 23 },
     { x: 5, y: 22 },
     { x: 6, y: 17 },
     { x: 9, y: 19 },
     { x: 5, y: 23 },
     { x: 5, y: 24 },
     { x: 6, y: 25 },
     { x: 7, y: 19 },
     { x: 5, y: 20 },
     { x: 3, y: 15 },
     { x: 4, y: 14 },
     { x: 4, y: 13 },
     { x: 3, y: 13 },
     { x: 2, y: 13 },
     { x: 2, y: 12 },
     { x: 4, y: 10 },
     { x: 4, y: 8 },
     { x: 4, y: 6 },
     { x: 4, y: 4 },
     { x: 4, y: 1 },
     { x: 5, y: 2 },
     { x: 6, y: 1 },
     { x: 6, y: 0 },
     { x: 11, y: 27 },
     { x: 12, y: 28 },
     { x: 21, y: 8 },
     { x: 21, y: 9 },
     { x: 21, y: 7 },
     { x: 22, y: 8 },
     { x: 23, y: 8 },
     { x: 25, y: 6 },
     { x: 25, y: 27 },
     { x: 23, y: 29 },
     { x: 20, y: 31 },
     { x: 19, y: 31 },
     { x: 22, y: 29 },
     { x: 32, y: 10 },
     { x: 33, y: 10 },

  ]);
}


(function () {

  let playerId;
  let playerRef;
  let players = {};
  let playerElements = {};
  let coins = {};
  let coinElements = {};

  const gameContainer = document.querySelector(".game-container");
  const playerNameInput = document.querySelector("#player-name");
  const playerColorButton = document.querySelector("#player-color");


  function placeCoin() {
    const { x, y } = getRandomSafeSpot();
    const coinRef = firebase.database().ref(`coins/${getKeyString(x, y)}`);
    coinRef.set({
      x,
      y,
    })

    const coinTimeouts = [300,450,150];
    setTimeout(() => {
      placeCoin();
    }, randomFromArray(coinTimeouts));
  }

  function attemptGrabCoin(x, y) {
    const key = getKeyString(x, y);
    if (coins[key]) {
      // Remove this key from data, then uptick Player's coin count
      firebase.database().ref(`coins/${key}`).remove();
      playerRef.update({
        coins: players[playerId].coins + 1,
      })
    }
  }


  function handleArrowPress(xChange=0, yChange=0) {
    const newX = players[playerId].x + xChange;
    const newY = players[playerId].y + yChange;
    if (!isSolid(newX, newY)) {
      //move to the next space
      players[playerId].x = newX;
      players[playerId].y = newY;
      if (xChange === 1) {
        players[playerId].direction = "right";
      }
      if (xChange === -1) {
        players[playerId].direction = "left";
      }
      playerRef.set(players[playerId]);
      attemptGrabCoin(newX, newY);
    }
  }

  function initGame() {

    new KeyPressListener("ArrowUp", () => handleArrowPress(0, -1))
    new KeyPressListener("ArrowDown", () => handleArrowPress(0, 1))
    new KeyPressListener("ArrowLeft", () => handleArrowPress(-1, 0))
    new KeyPressListener("ArrowRight", () => handleArrowPress(1, 0))

    const allPlayersRef = firebase.database().ref(`players`);
    const allCoinsRef = firebase.database().ref(`coins`);

    allPlayersRef.on("value", (snapshot) => {
      //Fires whenever a change occurs
      players = snapshot.val() || {};
      Object.keys(players).forEach((key) => {
        const characterState = players[key];
        let el = playerElements[key];
        // Now update the DOM
        el.querySelector(".Character_name").innerText = characterState.name;
        el.querySelector(".Character_coins").innerText = characterState.coins;
        el.setAttribute("data-color", characterState.color);
        el.setAttribute("data-direction", characterState.direction);
        const left = 24.0294 * characterState.x + "px";
        const top = 23.84375 * characterState.y - 4 + "px";
        el.style.transform = `translate3d(${left}, ${top}, 0)`;

        const messagePop = () => {
          let charC = document.querySelector(".Character_coins");
          

          if(charC.innerText == 15) {
            let textAr = document.createElement("p");
            textAr.className = "messageBox";
            textAr.innerText = "Only 15!! go for more"
            document.body.appendChild(textAr);
          }
          else if(charC.innerText == 30) {
            let textAr1 = document.createElement("p");
            textAr1.className = "messageBox1";
            textAr1.innerText = "Good Progress! but you can do better"
            document.body.appendChild(textAr1);
          }
          else if(charC.innerText == 45) {
            let textAr2 = document.createElement("p");
            textAr2.className = "messageBox2";
            textAr2.innerText = "Okay! thats some Capstone worthy performance"
            document.body.appendChild(textAr2);
          }
        }
       
        messagePop();
      })
    })
    allPlayersRef.on("child_added", (snapshot) => {
      //Fires whenever a new node is added the tree
      const addedPlayer = snapshot.val();
      const characterElement = document.createElement("div");
      characterElement.classList.add("Character", "grid-cell");
      if (addedPlayer.id === playerId) {
        characterElement.classList.add("you");
      }
      characterElement.innerHTML = (`
        <div class="Character_shadow grid-cell"></div>
        <div class="Character_sprite grid-cell"></div>
        <div class="Character_name-container">
          <span class="Character_name"></span>
          <span class="Character_coins">0</span>
        </div>
        <div class="Character_you-arrow"></div>
      `);
      playerElements[addedPlayer.id] = characterElement;

      document.addEventListener("keydown", function(event) {
        if (event.key === "ArrowLeft") {
          const some = document.querySelector(".Character_sprite");
          some.style.transform = "scaleX(-1)"
        }
       else if (event.key === "ArrowRight") {
          const some = document.querySelector(".Character_sprite");
          some.style.transform = "scaleX(1)"
        }
      });
      //Fill in some initial state
      characterElement.querySelector(".Character_name").innerText = addedPlayer.name;
      characterElement.querySelector(".Character_coins").innerText = addedPlayer.coins;
      characterElement.setAttribute("data-color", addedPlayer.color);
      characterElement.setAttribute("data-direction", addedPlayer.direction);
      const left = 24.0294 * addedPlayer.x + "px";
      const top = 23.84375 * addedPlayer.y - 4 + "px";
      characterElement.style.transform = `translate3d(${left}, ${top}, 0)`;
      gameContainer.appendChild(characterElement);
    })


    //Remove character DOM element after they leave
    allPlayersRef.on("child_removed", (snapshot) => {
      const removedKey = snapshot.val().id;
      gameContainer.removeChild(playerElements[removedKey]);
      delete playerElements[removedKey];
    })


    //New - not in the video!
    //This block will remove coins from local state when Firebase `coins` value updates
    allCoinsRef.on("value", (snapshot) => {
      coins = snapshot.val() || {};
    });
    //

    allCoinsRef.on("child_added", (snapshot) => {
      const coin = snapshot.val();
      const key = getKeyString(coin.x, coin.y);
      coins[key] = true;

      // Create the DOM Element
      const coinElement = document.createElement("div");
      coinElement.classList.add("Coin", "grid-cell");
      coinElement.innerHTML = `
        <div class="Coin_shadow grid-cell"></div>
        <div class="Coin_sprite grid-cell"></div>
      `;

      // Position the Element
      const left = 24.0294 * coin.x + "px";
      const top = 23.84375 * coin.y  + "px";
      coinElement.style.transform = `translate3d(${left}, ${top}, 0)`;

      // Keep a reference for removal later and add to DOM
      coinElements[key] = coinElement;
      gameContainer.appendChild(coinElement);
    })
    allCoinsRef.on("child_removed", (snapshot) => {
      const {x,y} = snapshot.val();
      const keyToRemove = getKeyString(x,y);
      gameContainer.removeChild( coinElements[keyToRemove] );
      delete coinElements[keyToRemove];
    })


    //Updates player name with text input
    playerNameInput.addEventListener("change", (e) => {
      const newName = e.target.value || createName();
      playerNameInput.value = newName;
      playerRef.update({
        name: newName
      })
    })

    //Update player color on button click
    playerColorButton.addEventListener("click", () => {
      const mySkinIndex = playerColors.indexOf(players[playerId].color);
      const nextColor = playerColors[mySkinIndex + 1] || playerColors[0];
      playerRef.update({
        color: nextColor
      })
    })

    //Place my first coin
    placeCoin();

  }

  firebase.auth().onAuthStateChanged((user) => {
    console.log(user)
    if (user) {
      //You're logged in!
      playerId = user.uid;
      playerRef = firebase.database().ref(`players/${playerId}`);

      const name = createName();
      playerNameInput.value = name;

      const {x, y} = getRandomSafeSpot();


      playerRef.set({
        id: playerId,
        name,
        direction: "right",
        color: randomFromArray(playerColors),
        x,
        y,
        coins: 0,
      })

      //Remove me from Firebase when I diconnect
      playerRef.onDisconnect().remove();

      //Begin the game now that we are signed in
      initGame();
    } else {
      //You're logged out.
    }
  })

  firebase.auth().signInAnonymously().catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
    console.log(errorCode, errorMessage);
  });


})();


document.addEventListener("keydown", function(event) {
  console.log(event.key);
});