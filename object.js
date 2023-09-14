/* const person = {
  name: "John",
  age: 20,
  pet: {
    kind: "Rabbit",
    age: 2,
  },
}; */

//console.log("Name:", person.name); //* Access using dot nation
//console.log("Name:", person["name"]); //*Access using bracket notation

const data = [
  {
    name: "John",
    age: 22,
    job: "software engineer",
  },
  {
    name: "Johny",
    age: 26,
    job: "web designer",
  },
  {
    name: "Watson",
    age: 36,
    job: "marketing",
  },
];

data.forEach(({ name, age, job }, idx) => {
  console.log(
    `Person ${
      idx + 1
    } \n Name ${name} \n Age ${age} \n job ${job} \n -----------`
  );
});

data.forEach((person, idx) => {
  console.log("Person", idx + 1);
  console.log("Name:", person.name);
  console.log("age:", person.age);
  console.log("Job:", person.job);
  console.log("--------------");
});
