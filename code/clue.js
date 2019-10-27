// CREATE OBJECTS FOR ALL THE SUSPECTS, SOMETHING LIKE THIS:

const mrGreen = {
  firstName: "Jacob",
  lastName: "Green",
  color: "green",
  description: "He has a lot of connections",
  age: 45,
  image: "assets/green.png",
  occupation: "Entrepreneur"
}

const profPlum = {
  firstName: "Victor",
  lastName: "Plum",
  color: "purple",
  description: "He is quite and stick to himself",
  age: 35,
  image: "assets/plum.png",
  occupation: "Entrepreneur"

}

const missScarlet = {
  firstName: "Cassandra",
  lastName: "Scarlet",
  color: "red",
  description: "She is sexy lady",
  age: 75,
  image: "assets/scarlet.png",
  occupation: "Actress"
}


const mrsPeacock = {
  firstName: "Eleanor",
  lastName: "Peacock",
  color: "Green",
  description: "she is a hermet lives along in the countryside",
  age: 60,
  image: "assets/peacock.png",
  occupation: "Entrepreneur"
}

const mrMustard = {
  firstName: "jack",
  lastName: "Mustard",
  color: "yellow",
  description: "he is a likable guy with lots of friends, everyone loves him",
  age: 45,
  image: "assets/green.png",
  occupation: "colonel"
}

const mrsWhite = {
  firstName: "Mrs",
  lastName: "White",
  color: "white",
  description: "she makes a great Martini",
  age: 45,
  image: "assets/white.png",
  occupation: "housewife"
}


// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS THE THE WEAPONS IF YOU LIKE.

const rope = {
  name: "rope",
  weight: 3
}

const knife = {
  name: "Knife",
  weight: 2
}

const candlestick = {
  name: "Candelstick",
  weight: 5

}
const dumbbell = {
  name: "Dumbell",
  weight: 12

}

const poison = {
  name: "Poison",
  weight: 1

}

const axe = {
  name: "Axe",
  weight: 10

}

const bat = {
  name: "Bat",
  weight: 10

}

const trophy = {
  name: "Trophy",
  weight: 2

}

const pistol = {
  name: "Pistol",
  weight: 4
}

// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE.


// NOW GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS.

const suspects = [
  mrGreen,
  mrsWhite,
  profPlum,
  missScarlet,
  mrsPeacock,
  mrMustard

]

const weapons = [
  rope,
  knife,
  candlestick,
  dumbbell,
  poison,
  axe,
  bat,
  trophy,
  pistol
]

const rooms = [
  "Dinning Room",
  "Conservatory",
  "Kitchen",
  "Study",
  "Library",
  "Billiard Room",
  "Lounge",
  "Ballroom",
  "Hall",
  "Spa",
  "Living Room",
  "Observatory",
  "Theater",
  "Guest House",
  "Patio"
]

console.log(rooms, weapons, suspects)

// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FOR THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
const randomSelector = mystery => {
  return mystery[Math.floor(Math.random() * mystery.length)]
}

// CREATE AN OBJECT THAT KEEPS THE MYSTERY.
// With a killer, a weapon and a room.
// The values will be set later.
const mystery = {
  killer: "",
  weapon: "",
  room: ""

}
// CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.
// FINISH THIS FUNCTION TO SHOW ALL INFORMATION ABOUT THE KILLER.
// This function will be invoked when you click on the killer card.
const pickKiller = () => {
  // This will randomly select a killer from the suspects. And add that to the mystery object.
  mystery.killer = randomSelector(suspects)

  // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer.
  const theKiller = document.getElementById("killer")
  const killerName = document.getElementById("killerName")
  const killerAge = document.getElementById("killerAge")
  const killerOccupation = document.getElementById("killerName")
  const killerImage = document.getElementById("killerImage")
  const killerDescription = document.getElementById("killerDescription")
  theKiller.style.background = mystery.killer.color

  killerName.innerHTML = mystery.killer.firstName + " " + mystery.killer.lastName
  killerAge.innerHTML = mystery.killer.age
  killerOccupation.innerHTML = mystery.killer.occupation
  killerImage.src = mystery.killer.image
  killerDescription.innerHTML = mystery.killer.description
}



const pickWeapon = () => {
  mystery.weapon = randomSelector(weapons)

  const weaponName = document.getElementById("weaponName")
  const weaponWeight = document.getElementById("weaponWeight")

  weaponName.innerHTML = mystery.weapon.name
  weaponWeight.innerHTML = mystery.weapon.weight
}

const pickRoom = () => {
  mystery.room = randomSelector(rooms)
  const roomName = document.getElementById("roomName")
  roomName.innerHTML = mystery.room
}


const revealMystery = () => {
  if (mystery.kill || mystery.weapon || mystery.room === onclick) {
    document.getElementById("mystery").innerHTML = `The murder was commited by ${mystery.killer.firstName + " " + mystery.killer.lastName} in the ${mystery.room} with a ${mystery.weapon.name}`
    document.getElementById("allCards").style.display = "none"
    document.getElementById("alert").style.display = "none"


  } else {
    document.getElementById("alert").innerText = "You have to pick the cards to reveal the mystery"
  }
  mystery.weapons = randomSelector(weapons);
  mystery.suspects = randomSelector(suspects);
  mystery.rooms = randomSelector(rooms);
}


const reloadPage = () => {
  location.reload()
}