const Person = {
  firstName: "Rahmat",
  lastName: "Rafli",
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
  weight: 101,
  height: 175,
  isWeightIdeal: function () {
    const heightMinus = this.height - 100;
    return heightMinus - (heightMinus * 10) / 100;
  },
};

console.log(
  `${Person.fullName()} weight is ${Person.weight} kg and height is ${
    Person.height
  } cm. Weight Ideal is ${Person.isWeightIdeal()} kg`
);
