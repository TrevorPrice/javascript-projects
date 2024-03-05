//TODO: Add Your Code Below
window.addEventListener("load", () => {
  const container = document.getElementById("container");
  fetch("https://handlers.education.launchcode.org/static/astronauts.json")
    // parse the response as JSON
    .then((res) => res.json())
    .then((astronauts) => {
      astronauts.forEach((astronaut) => {
        const astronautDiv = document.createElement("div");
        astronautDiv.classList.add("astronaut");

        const bioDiv = document.createElement("div");
        bioDiv.classList.add("bio");

        bioDiv.innerHTML = `
            <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
            <ul>
              <li>Hours in space: ${astronaut.hoursInSpace}</li>
              <li>Active: ${astronaut.active ? "Yes" : "No"}</li>
              <li>Skills: ${astronaut.skills.join(", ")}</li>
            </ul>
          `;

        const avatarImg = document.createElement("img");
        avatarImg.classList.add("avatar");
        avatarImg.src = astronaut.picture;

        astronautDiv.appendChild(bioDiv);
        astronautDiv.appendChild(avatarImg);
        container.appendChild(astronautDiv);
      });
    });
});

// window.addEventListener("load", function () {
//   fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function (response) {
//     response.json().then(function (json) {
//       console.log(json);
//       const container = document.getElementById("container");
//       let index = 0;
//       let newTag = document.createElement("div");
//       newTag.className = "astronaut";
//     for (index = 0; index < json.length; index++) {
//       newTag.innerHTML = `
//         <div>
//             <h3>${json[index].firstName} ${json[index].lastName}</h3>
//             <ul>
//             <li>Hours in Space: ${json[index].hoursInSpace}</li>
//             <li>Active: ${json[index].active}</li>
//             <li>Skills: ${json[index].skills}</li>
//             </ul>
//         <div>
//         `;
//       container.appendChild(newTag);
//     //   index = (index + 1) % json.length;
//         }
//     });
//   });
// });

