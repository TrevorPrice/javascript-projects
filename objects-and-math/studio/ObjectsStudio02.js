// Code your orbitCircumference function here:
function orbitCircumference(radius) {
  return Math.round(2*Math.PI*radius)
}
console.log(orbitCircumference(2000));
// Code your missionDuration function here:
let orbitRadius = 2000;
let orbitalSpeed = 28000;

function missionDuration(numberOfOrbits, orbitRadius, orbitalSpeed) {
  numberOfOrbits = missionTime = Math.round(((orbitRadius/orbitalSpeed)*10)/10);
  return missionTime
}
console.log(missionDuration(5, 2000, 28000));
console.log(`The mission will travel ${orbitalSpeed} km around the planet, and it will take ${missionTime} hours to complete.`)

// Copy/paste your selectRandomEntry function here:
function selectRandomEntry(candidates) {
  const randomIndex = Math.floor(Math.random()*idNumbers.length);
  const randomIdNumber = idNumbers[randomIndex];
  const selectedCandidate = candidates.find(candidate => candidate.astronautID === randomIdNumber);
  return selectedCandidate;
}

// Code your oxygenExpended function here:


// Candidate data & crew array.
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
 
 let crew = [candidateA,candidateC,candidateE];
 