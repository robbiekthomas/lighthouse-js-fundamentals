const vegetables = [
  {
    submitter: "Old Man Franklin",
    redness: 10,
    plumpness: 5,
  },
  {
    submitter: "Sally Tomato-Grower",
    redness: 2,
    plumpness: 8,
  },
  {
    submitter: "Hamid Hamidson",
    redness: 4,
    plumpness: 3,
  },
];

const metric = "plumpness";

const judgeVegetable = function (vegetables, metric) {
  let array = [];

  for (let vegetable of vegetables) {
    array.push(vegetable[metric]);
  }

  return vegetables[array.indexOf(Math.max(...array))].submitter;
};

console.log(judgeVegetable(vegetables, metric));
