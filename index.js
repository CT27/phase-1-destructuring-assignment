const farmAnimals = "cow horse sheep pig chicken";

const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

const muppet = {
  muppetName: "Miss Piggy",
  color: "pink",
  song: "Never Before, Never Again",
  job: "Cast member of The Muppet Show",
  partner: "Kermit",
};

const nestedMuppet = {
  nestedName: "Kermit",
  nestedColor: "green",
  album: {
    theMuppetMovie: {
      song1: "Rainbow Connection",
      song2: "Moving Right Along",
      song3: "Never Before, Never Again",
      song4: "I Hope That Something Better Comes Along",
    },
  },
  nestedJob: "Host of The Muppet Show",
  nestedPartner: "Miss Piggy",
};

// Strings

// 1. Use destructuring to assign appropriate variables based on the sounds animals make.
const splitAnimals = farmAnimals.split(" ");

const [moo, neigh, baa, oink, cluck] = splitAnimals;
console.log(splitAnimals);

// 2. Bolt the horse wandered off, so just give us four animals, and let's name them bessie, dolly, babe, and little.
const animalNames = splitAnimals.filter(
  (splitAnimals) => splitAnimals !== "horse"
);
const [bessie, dolly, babe, little] = animalNames;
console.log(animalNames);

// 3. Little the chicken had to go back to the coop, so now we're left with three. Let's use color variables of blackAndWhite, black, and pink.
const animalColours = splitAnimals.filter(
  (splitAnimals) => splitAnimals !== "horse" && splitAnimals !== "chicken"
);

const [blackAndWhite, black, pink] = animalColours;
console.log(animalColours);

// Arrays

// 4. Use destructuring to assign appropriate variables using the color names.
// const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
const [red, orange, yellow, green, blue, indigo, violet] = colors;
const [r, o, y, g, b, i, v] = colors;
console.log(colors);

// 5. Some people have a really hard time picking out indigo, so let's leave that one out, using the first letter of each color as the variable names.

const initialsMap = colors.map((colors) => colors.charAt(0));
const noIndigo = initialsMap.filter((initialsMap) => initialsMap !== "i");

console.log(initialsMap);
console.log(noIndigo);

// 6. But wait! Indigo is now feeling *super* left out. Let's only assign indigo using indg.
const indg = "indigo";
console.log(indg);

// Objectss

// 7. Use destructuring to assign all variables using the keys as the variable names
const { muppetName, color, song, job, partner } = muppet;
console.log(muppet);

// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner
// onst nestedMuppet = {
//   nestedName: "Kermit",
//   nestedColor: "green",
//   album: {
//     theMuppetMovie: {
//       song1: "Rainbow Connection",
//       song2: "Moving Right Along",
//       song3: "Never Before, Never Again",
//       song4: "I Hope That Something Better Comes Along",
//     },
//   },
//   nestedJob: "Host of The Muppet Show",
//   nestedPartner: "Miss Piggy",
// };
const {
  album: {
    theMuppetMovie: { song2, song4 },
  },
  nestedJob,
  nestedPartner,
} = nestedMuppet;
