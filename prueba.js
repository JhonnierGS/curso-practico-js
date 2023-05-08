const person = {
  name: "Juan",
  age: 30,
  city: "Madrid",
  job: "Developer"
};

for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}


