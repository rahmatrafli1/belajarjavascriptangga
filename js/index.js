const sayaSukaEsKrim = true;
const sayaSukaHamburger = true;

// AND
console.log("AND");
console.log(
  `${sayaSukaEsKrim} and ${sayaSukaHamburger} is ${
    sayaSukaEsKrim && sayaSukaHamburger
  }`
);
console.log(
  `${sayaSukaEsKrim} and ${!sayaSukaHamburger} is ${
    sayaSukaEsKrim && !sayaSukaHamburger
  }`
);
console.log(
  `${!sayaSukaEsKrim} and ${sayaSukaHamburger} is ${
    !sayaSukaEsKrim && sayaSukaHamburger
  }`
);
console.log(
  `${!sayaSukaEsKrim} and ${!sayaSukaHamburger} is ${
    !sayaSukaEsKrim && !sayaSukaHamburger
  }`
);

// OR
console.log("\nOR");
console.log(
  `${sayaSukaEsKrim} or ${sayaSukaHamburger} is ${
    sayaSukaEsKrim || sayaSukaHamburger
  }`
);
console.log(
  `${sayaSukaEsKrim} or ${!sayaSukaHamburger} is ${
    sayaSukaEsKrim || !sayaSukaHamburger
  }`
);
console.log(
  `${!sayaSukaEsKrim} or ${sayaSukaHamburger} is ${
    !sayaSukaEsKrim || sayaSukaHamburger
  }`
);
console.log(
  `${!sayaSukaEsKrim} or ${!sayaSukaHamburger} is ${
    !sayaSukaEsKrim || !sayaSukaHamburger
  }`
);
