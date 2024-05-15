const user = {
  name: "Mofique Ahmed",
  age: 21,
  profession: "Web Developer",
  hobbies: ["Coding", "Gaming", "Travelling"],
};

const { name, age, profession, hobbies } = user;
const [firstHobby, ...otherHobbies] = hobbies;

console.log(
  `Meet ${name} - a ${age}-year-old ${profession} with a passion for ${firstHobby} and more! 🚀`
);
console.log(`Other hobbies include: ${otherHobbies.join(" , ")} 🎨📚✈️`);

//output :-
// Meet Mofique Ahmed - a 21-year-old Web Developer with a passion for Coding and more! 🚀
// Other hobbies include: Gaming , Travelling 🎨📚✈️


