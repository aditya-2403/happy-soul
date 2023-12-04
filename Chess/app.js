window.addEventListener("keyup", function(e){ if(e.keyCode == 27) history.back(); }, false);

const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
  "#31005c", 
  "#53005f", 
  "#6f0060", 
  "#890b60", 
  "#a01f5f", 
  "#b5325e", 
  "#c7475d", 
  "#d75c5c", 
  "#e4715d", 
  "#ef885f", 
  "#f89e64", 
  "#ffb56b"
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
  maxX: 16,
  minY: 0,
  maxY: 16,
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
    "0x11": true,
    "0x12": true,
    "0x13": true,
    "0x14": true,
    "0x15": true,
    
    "0x0": true,
    "1x0": true,
    "2x0": true,
    "3x0": true,
    "4x0": true,
    "5x0": true,
    "6x0": true,
    "7x0": true,
    "8x0": true,
    "9x0": true,
    "10x0": true,
    "11x0": true,
    "12x0": true,
    "13x0": true,
    "14x0": true,
    "15x0": true,

    "15x0": true,
    "15x1": true,
    "15x2": true,
    "15x3": true,
    "15x4": true,
    "15x5": true,
    "15x6": true,
    "15x7": true,
    "15x8": true,
    "15x9": true,
    "15x10": true,
    "15x11": true,
    "15x12": true,
    "15x13": true,
    "15x14": true,
    "15x15": true,

    "0x15": true,
    "1x15": true,
    "2x15": true,
    "3x15": true,
    "4x15": true,
    "5x15": true,
    "6x15": true,
    "7x15": true,
    "8x15": true,
    "9x15": true,
    "10x15": true,
    "11x15": true,
    "12x15": true,
    "13x15": true,
    "14x15": true,
    "15x15": true,

    "1x4": true,
    "5x3": true,
    "6x3": true,
    "12x3": true,
    "12x6": true,
    "11x6": true,
    "10x8": true,
    "4x8": true,
    "6x11": true,
    "7x11": true,
    "1x10": true,
    "14x13": true,
    
  },
};

// Function to check if the player is at 14x14 position on the map
function isPlayerAtNextMap(x, y) {
  return x === 14 && y === 14;
}

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
    { x: 2, y: 2 },
    { x: 2, y: 4 },
    { x: 1, y: 5 },
    { x: 2, y: 6 },
    { x: 2, y: 8 },
    { x: 2, y: 9 },
    { x: 5, y: 5 },
    { x: 5, y: 8 },
    { x: 5, y: 10 },
    { x: 5, y: 11 },
    { x: 11, y: 7 },
    { x: 12, y: 7 },
    { x: 13, y: 7 },
    { x: 13, y: 6 },
    { x: 13, y: 8 },
    { x: 7, y: 6 },
    { x: 7, y: 7 },
    { x: 7, y: 8 },
    { x: 8, y: 8 },
    { x: 8, y: 8 },
    { x: 11, y: 4 },
    { x: 4, y: 13 },
    { x: 7, y: 1 },
    { x: 14, y: 1 },
    { x: 14, y: 14 },
    { x: 6, y: 14 },
    { x: 6, y: 12 },
  ]);
}


(function () {

  let playerId;
  let playerRef;
  let players = {};
  let playerElements = {};
  let coins = {};
  let coinElements = {};
  let isFrozen = false;

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

    const coinTimeouts = [150, 300, 450];
    setTimeout(() => {
      placeCoin();
    }, randomFromArray(coinTimeouts));
  }

  function attemptGrabCoin(x, y) {
    const key = getKeyString(x, y);
    if (coins[key]) {
      // Remove this key from data, then uptick Player's coin count
      firebase.database().ref(`coins/${key}`).remove();
      const randomChance = Math.random(); // Random value between 0 and 1
      console.log(isFrozen);
      const randomChance2 = Math.random(); // Random value between 0 and 1
      if (randomChance2 <0.3){
      if (randomChance < 0.2) { // 20% chance of freezing the player
        // Freeze the player for 10 seconds
        const popup = document.createElement("div");
        popup.innerText = "FROZEN";
        popup.style.position = "fixed";
        popup.style.bottom = "20px"; // Adjust as needed
        popup.style.left = "50%";
        popup.style.transform = "translateX(-50%)";
        popup.style.backgroundColor = "rgba(255, 255, 255, 0.7)";
        popup.style.padding = "20px";
        document.body.appendChild(popup);
        isFrozen = true;
        // Display a message or perform an action indicating the player is frozen
  
        // After 5 seconds, unfreeze the player
        setTimeout(() => {
          document.body.removeChild(popup);
          isFrozen = false;
          // Optionally, remove the message or reset any visual indicator of being frozen
        }, 5000); // 5 seconds in milliseconds
      }
  
      if (randomChance > 0.8) { // 30% chance
        playerRef.update({
          coins: players[playerId].coins + 30, // Update player's score by 30
        });
        {
          // Show a popup encouraging the player to gather at least 40 points
          const popup = document.createElement("div");
      popup.innerText = "+30 COINS";
      popup.style.position = "fixed";
      popup.style.bottom = "20px"; // Adjust as needed
      popup.style.left = "50%";
      popup.style.transform = "translateX(-50%)";
      popup.style.backgroundColor = "rgba(255, 255, 255, 0.7)";
      popup.style.padding = "20px";
      document.body.appendChild(popup);
  
          // Hide the popup after 4 seconds
          setTimeout(() => {
            document.body.removeChild(popup);
          }, 1000);
        }
      }      
    }
      else {
        
        playerRef.update({
          coins: players[playerId].coins + 1, // Update player's score by 1 normally
        });
      }
    }
  }


  function handleArrowPress(xChange=0, yChange=0) {
    const newX = players[playerId].x + xChange;
    const newY = players[playerId].y + yChange;

     if (isFrozen) {
       // Player is frozen, don't allow movement
       return;
     }

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

    

    if (isPlayerAtNextMap(newX, newY)) {
      // Player reached 14x14, navigate to the next map
      if (players[playerId].coins >= 80) {
        // Player has over 40 points, navigate to the next map
        window.location.href = "../Jungle/index.html"; // Change "next_map.html" to the desired next map URL
      } else {
        // Show a popup encouraging the player to gather at least 40 points
        const popup = document.createElement("div");
        popup.innerText = "Gather at least 80 points to proceed!";
        popup.style.position = "fixed";
        popup.style.bottom = "20px"; // Adjust as needed
        popup.style.left = "50%";
        popup.style.transform = "translateX(-50%)";
        popup.style.backgroundColor = "rgba(255, 255, 255, 0.7)";
        popup.style.padding = "20px";
        document.body.appendChild(popup);

        // Hide the popup after 4 seconds
        setTimeout(() => {
          document.body.removeChild(popup);
        }, 4000);
      } }
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
        const left = 16 * characterState.x + "px";
        const top = 16 * characterState.y - 4 + "px";
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
          some.style.transform = "scaleX(1)"
        }
       else if (event.key === "ArrowRight") {
          const some = document.querySelector(".Character_sprite");
          some.style.transform = "scaleX(-1)"
        }
      });
      //Fill in some initial state
      characterElement.querySelector(".Character_name").innerText = addedPlayer.name;
      characterElement.querySelector(".Character_coins").innerText = addedPlayer.coins;
      characterElement.setAttribute("data-color", addedPlayer.color);
      characterElement.setAttribute("data-direction", addedPlayer.direction);
      const left = 16 * addedPlayer.x + "px";
      const top = 16 * addedPlayer.y - 4 + "px";
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
      const left = 16 * coin.x + "px";
      const top = 16 * coin.y - 4 + "px";
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



