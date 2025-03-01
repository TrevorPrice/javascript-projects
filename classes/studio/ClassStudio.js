//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate {
  constructor(name, mass, scores = []) {
    this.name = name;
    this.mass = mass;
    this.scores = scores;
  }
  addScore(newScore) {
    this.scores.push(newScore);
  }
  average() {
    let sum = 0;
    for (let score of this.scores) {
        sum += Number(score);
    }
    return (sum/this.scores.length).toFixed(1);
  }
  status(average) {

  }
}

let bubbaBear = new CrewCandidate("Bubba Bear", "135 kg", [88, 85, 90]);
let merryMaltese = new CrewCandidate("Merry Maltese", "1.5 kg", [93, 88, 97]);
let gladGator = new CrewCandidate("Glad Gator", "225 kg", [75, 78, 62]);

// console.log(bubbaBear);
// console.log(merryMaltese);
// console.log(gladGator);

//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.
bubbaBear.addScore(83);
console.log(bubbaBear);

console.log(merryMaltese.average());

//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.
