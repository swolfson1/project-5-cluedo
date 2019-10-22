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

const professorPlum = {
  FirsttName: "Victor",
  lastName: "Plum",
  color: "pulm",
  description: "He is quite and stick to himself",
  age: 35,
  image: "assets/plum.png",
  occupation: "Entrepreneur"

}

const MissScarlet = {
  firstName: "Cassandra",
  lastName: "Scarlet",
  color: "Scarlet",
  description: "She is sexy lady",
  age: 75,
  image: "asset/scarlet.png",
  occupation: "Actress"
}


const mrsPeacock = {
  firstName: "Eleanor",
  lastName: "Peacock",
  color: "PeacockGreen",
  description: "she is a hermet lives along in the countryside",
  age: 60,
  image: "assets/peacock.png",
  occupation: "Entrepreneur"
}

const colonelMustard = {
  FirstName: "jack",
  lastName: "Mustard",
  color: "Mustard",
  description: "he is a likable guy with lots of friends, everyone loves him",
  age: 45,
  image: "assets/green.png",
  occupation: "colonel"
}

const mrsWhite = {
  firstName = "Mrs",
  lastName = "White",
  color: "white",
  description: "a good guy",
  age: 45,
  image: "assets/white.png",
  occupation: "Farmer"
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

const Trophy = {
  name: "Trophy",
  weight: 2

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
  Rope,
  Knife,
  Candlestick,
  Dumbbell,
  Poison,
  Axe,
  Bat,
  Trophy,
  Pistol
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

// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FOR THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
}

// CREATE AN OBJECT THAT KEEPS THE MYSTERY.
// With a killer, a weapon and a room.
// The values will be set later.

// FINISH THIS FUNCTION TO SHOW ALL INFORMATION ABOUT THE KILLER.
// This function will be invoked when you click on the killer card.
const pickKiller = () => {
  // This will randomly select a killer from the suspects. And add that to the mystery object.
  mystery.killer = randomSelector(suspects)

  // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer.
  const theKiller = document.getElementById("killer")
  const theKillerName = document.getElementById("killerName")

  theKiller.style.background = mystery.killer.color
  theKillerName.innerHTML =
    mystery.killer.firstName + " " + mystery.killer.lastName
}

// CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.

// CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'