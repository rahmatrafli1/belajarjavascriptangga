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
    return heightMinus - (heightMinus * 10) / 100 < this.weight;
  },
};

console.log(Person.fullName());
console.log(Person.isWeightIdeal());

const countries = {
  ID: {
    province: [
      "Bali",
      "DKI Jakarta",
      "West Sumatra",
      "West Java",
      "East Java",
      "Central Java",
    ],
    city: ["Badung", "Jakarta", "Padang", "Bandung", "Surabaya", "Semarang"],
  },
  MY: {
    province: [
      "Johor",
      "Kedah",
      "Kelantan",
      "Melaka",
      "Negeri Sembilan",
      "Pahang",
    ],
    city: [
      "Kuala Lumpur",
      "Putrajaya",
      "Shah Alam",
      "Johor Bahru",
      "Kota Damas",
      "Seremban",
    ],
  },
  TH: {
    province: [
      "Bangkok",
      "Nonthaburi",
      "Chiang Mai",
      "Songkhla",
      "Chon Buri",
      "Nakhon Ratchasima",
    ],
    city: [
      "Bangkok",
      "Nonthaburi",
      "Chiang Mai",
      "Songkhla",
      "Chon Buri",
      "Nakhon Ratchasima",
    ],
  },
  SG: {
    province: ["Singapore"],
    city: ["Singapore"],
  },
  VN: {
    province: [
      "An Giang",
      "Bac Giang",
      "Bac Kan",
      "Bac Lieu",
      "Bac Ninh",
      "Ben Tre",
      "Binh Dinh",
      "Binh Phuoc",
      "Binh Thuan",
      "Ca Mau",
      "Can Tho",
      "Cao Bang",
      "Da Nang",
      "Dac Lak",
      "Dien Bien",
      "Dong Nai",
      "Dong Thap",
      "Gia Lai",
      "Ha Giang",
      "Ha Nam",
      "Ha Tinh",
      "Hai Phong",
      "Hanoi",
      "Hung Yen",
      "Khanh Hoa",
      "Kieng Nam",
      "Kon Tum",
      "Lai Chau",
      "Lam Dong",
      "Lang Son",
      "Lao Cai",
      "Long An",
      "Nam Dinh",
      "Nghe An",
      "Ninh Binh",
      "Ninh Thuan",
    ],
    city: [
      "Hanoi",
      "Ho Chi Minh City",
      "Da Nang",
      "Can Tho",
      "Hue",
      "Vinh",
      "Phan Thiep",
      "Quang Ninh",
      "Quang Tri",
      "Soc Trang",
      "Thai Nguyen",
      "Vung Tau",
      "Yen Bai",
    ],
  },
};

console.log(countries?.ID?.province ?? "Not Found");
