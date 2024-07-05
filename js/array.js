const namaOrang = ["Dudu", "Wawan", "Mamat"];

namaOrang.forEach(function (item, index, array) {
  console.log(item, index, array);
});

namaOrang.push("Adit");
console.log(namaOrang);

namaOrang.pop();
console.log(namaOrang);

namaOrang.shift();
console.log(namaOrang);

namaOrang.push("Udin");
console.log(namaOrang.indexOf("Wawan"));

console.log(namaOrang);

namaOrang.splice(namaOrang.indexOf("Wawan"), 1);
console.log(namaOrang);

namaOrang.slice();
console.log(namaOrang);

namaOrang.push("Maliki");
console.log(namaOrang);
