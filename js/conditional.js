const Person = {
  firstName: "Rahmat",
  lastName: "Rafli",
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
  weight: 100,
  height: 195,
  isWeightIdeal: function () {
    const heightMinus = this.height - 100;
    return heightMinus - (heightMinus * 10) / 100;
  },
  goodEnough: function () {
    const WeightIdeal = "you are weight ideal";
    const WeightNeedProtein = `you need more protein ${
      this.isWeightIdeal() - this.weight
    } kg to weight ideal`;
    const WeightNotIdeal = `you are not weight ideal more reduce weight ${this.isWeightIdeal()} Kg to weight ideal`;
    if (this.isWeightIdeal() - 5 > this.weight) {
      return WeightNeedProtein;
    } else if (this.isWeightIdeal() + 5 < this.weight) {
      return WeightNotIdeal;
    } else {
      return WeightIdeal;
    }
  },
};

console.log(Person.goodEnough());
