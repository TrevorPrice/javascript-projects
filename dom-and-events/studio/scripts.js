// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init() {
  const takeOff = document.getElementById("takeoff");
  const flightStatus = document.getElementById("flightStatus");
  const shuttleBackground = document.getElementById("shuttleBackground");
  const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
  const rocket = document.getElementById("rocket");
  const rocketLanding = document.getElementById("landing");
  const abortMission = document.getElementById("missionAbort");
  const upButton = document.getElementById("up");
  const downButton = document.getElementById("down");
  const rightButton = document.getElementById("right");
  const leftButton = document.getElementById("left");

  rocket.style.left = shuttleBackground.offsetWidth / 2 - rocket.offsetWidth / 2 + "px";

  takeOff.addEventListener("click", (event) => {
    if (window.confirm("Confirm that the shuttle is ready for takeoff.")) {
      flightStatus.innerHTML = "Shuttle in flight.";
      shuttleBackground.style.backgroundColor = "blue";
      spaceShuttleHeight.innerHTML =
        parseInt(spaceShuttleHeight.innerHTML) + 10000;
      //   rocket.style.bottom = rocketHeight.style.bottom += "20px";
    }
  });

  rocketLanding.addEventListener("click", (event) => {
    window.alert("The shuttle is landing. Landing gear engaged.");
    flightStatus.innerHTML = "The shuttle has landed.";
    shuttleBackground.style.backgroundColor = "";
    spaceShuttleHeight.innerHTML = "0";
  });

  abortMission.addEventListener("click", (event) => {
    if (window.confirm("Confirm that you want to abort the mission.")) {
      flightStatus.innerHTML = "Mission aborted.";
      shuttleBackground.style.backgroundColor = "";
      spaceShuttleHeight.innerHTML = "0";
    }
  });

  upButton.addEventListener("click", (event) => {
    spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML) + 10000;
    let currentPosition = parseFloat(rocket.style.bottom) || 0;
    currentPosition += 10;
    rocket.style.bottom = currentPosition + "px";
  });

  downButton.addEventListener("click", (event) => {
    spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML) - 10000;
    let currentPosition = parseFloat(rocket.style.bottom) || 0;
    currentPosition -= 10;
    rocket.style.bottom = currentPosition + "px";
  });

  rightButton.addEventListener("click", (event) => {
    let currentPosition = parseFloat(rocket.style.left) || 0;
    currentPosition += 10;
    rocket.style.left = currentPosition + "px";
  });

  leftButton.addEventListener("click", (event) => {
    let currentPosition = parseFloat(rocket.style.left) || 0;
    currentPosition -= 10;
    rocket.style.left = currentPosition + "px";
  });
}

window.addEventListener("load", init);
