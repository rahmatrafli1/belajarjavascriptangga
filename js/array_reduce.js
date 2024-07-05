const namaOrang = ["Dudu", "Wawan", "Mamat", "Sule"];

console.log(
  namaOrang.reduce(function (acc, orang, i) {
    acc[orang] = `Orang ke-${i + 1}`;
    return acc;
  }, {})
);
