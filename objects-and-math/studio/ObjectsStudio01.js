// Code your selectRandomEntry function here:
function selectRandomEntry(candidates) {
  const randomIndex = Math.floor(Math.random()*idNumbers.length);
  const randomIdNumber = idNumbers[randomIndex];
  const selectedCandidate = candidates.find(candidate => candidate.astronautID === randomIdNumber);
  return selectedCandidate;
}

// Code your buildCrewArray function here:
function buildCrewArray(candidates, numEntries) {
  const crewArray = [];
  while (crewArray.length < numEntries) {
    const selectedCandidate = selectRandomEntry(candidates);
    if (!crewArray.some(member => member.astronautID === selectedCandidate.astronautID)) {
      crewArray.push(selectedCandidate);
    }
  }
  return crewArray;
}

let idNumbers = [291, 414, 503, 599, 796, 890];

// Here are the candidates and the 'animals' array:
let candidateA = {
  'name':'Gordon Shumway',
  'species':'alf',
  'mass':90,
  'o2Used':function(hrs){return 0.035*hrs},
  'astronautID':414
};
let candidateB = {
  'name':'Lassie',
  'species':'dog',
  'mass':19.1,
  'o2Used':function(hrs){return 0.030*hrs},
  'astronautID':503
};
let candidateC = {
  'name':'Jonsey',
  'species':'cat',
  'mass':3.6,
  'o2Used':function(hrs){return 0.022*hrs},
  'astronautID':796
};
let candidateD = {
  'name':'Paddington',
  'species':'bear',
  'mass':31.8,
  'o2Used':function(hrs){return 0.047*hrs},
  'astronautID':291
};
let candidateE = {
  'name':'Pete',
  'species':'tortoise',
  'mass':417,
  'o2Used':function(hrs){return 0.010*hrs},
  'astronautID':599
};
let candidateF = {
  'name':'Hugs',
  'species':'ball python',
  'mass':2.3,
  'o2Used':function(hrs){return 0.018*hrs},
  'astronautID':890
};

let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];
let crew = buildCrewArray(animals, 3);
console.log(crew);

// Code your template literal and console.log statements:
console.log(`${crew[0].name}, ${crew[1].name} and ${crew[2].name} are going to space!`);