//Code Your Solution Below
// function init() {
//     const runSimulation = document.getElementById("run");

//     runSimulation.addEventListener("click", (event) => {
//         let form = document.querySelector("form");
//         form.addEventListener("submit", (event) => {
            
//         })
//     });

// }

// window.addEventListener("load", init);

window.addEventListener("load", function () {
    let form = document.querySelector("form");
    form.addEventListener("submit", (event) => {
        let testNameInput = document.querySelector("input[name=testName]");
        let testDateInput = document.querySelector("input[name=testDate]");
        if (
            testNameInput.value === ""
            && testDateInput.value === ""
            
            ) {
            alert("All fields are required!");
            event.preventDefault();
        }
    });
});
