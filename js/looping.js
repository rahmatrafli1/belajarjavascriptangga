const namaOrang = ["Dudu", "Wawan", "Mamat"];

for (let index = 0; index < namaOrang.length; index++) {
  const element = namaOrang[index];
  console.log(element);
}

let index = 0;

while (index < namaOrang.length) {
  const element = namaOrang[index];
  console.log(element);
  index++;
}

console.log(
  namaOrang
    .filter(function (item, index) {
      return item == "Dudu";
    })
    .map(function (item, index) {
      return `${item} ini orang ke-${index + 1}`;
    })
);

console.log(
  namaOrang.reduce(function (item, index) {
    return item + ";" + index;
  })
);
