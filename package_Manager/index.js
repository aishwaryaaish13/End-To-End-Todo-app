
import boxen from "boxen";

const message = "I am using my first external module!";
const title = "Hurray!!!";

console.log(
  boxen(message, {
    title: title,
    padding: 1,
    margin: 1
  })
);

console.log(
  boxen(message, {
    title: title,
    borderStyle: "singleDouble",
    padding: 1,
    margin: 1
  })
);

console.log(
  boxen(message, {
    title: title,
    borderStyle: "round",
    padding: 1,
    margin: 1
  })
);
