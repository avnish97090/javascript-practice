
let users = [
    { firstname: "akshay" , lastname: " saini ", age :26},
    { firstname: "donald" , lastname: " trump ", age :75},
    { firstname: "elon" , lastname: " musk", age :58},
    { firstname: "deepika" , lastname: " padukone ", age :26},
]  

// const output = users.filter(x=> x.age<30).map((x) => x.firstname);
const output = users.filter(x=> x.age<30).map((x) => x.firstname = "deepika");

console.log(output);

