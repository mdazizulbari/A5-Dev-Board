// document.getElementById("task1-btn").addEventListener("click", function () {
//   alert("Board Updated Successfully");

//   //   calculations
//   let assignedTaskNumber = getInnerTextByID("assigned-task-number");
//   let completedTasksNumber = getInnerTextByID("completed-task-number");
//   assignedTaskNumber -= 1;
//   completedTasksNumber += 1;
//   setInnerTextByIDandValue("assigned-task-number", assignedTaskNumber);
//   setInnerTextByIDandValue("completed-task-number", completedTasksNumber);

//   //   disable the button
//   const clickedButton = document.getElementById("task1-btn");
//   clickedButton.disabled = true;
//   clickedButton.classList.add("opacity-50", "cursor-not-allowed");
//   clickedButton.classList.remove("cursor-pointer");

//   //   current time
//   function currentTime() {
//     const now = new Date();
//     const options = {
//       hour: "2-digit",
//       minute: "2-digit",
//       second: "2-digit",
//       hour12: true,
//     };
//     const formattedTime = now.toLocaleTimeString("en-US", options);
//     return formattedTime;
//   }

//   //   add log message
//   const clickedHeading = document.getElementById("task1-heading").innerText
//   const logMessageContainer = document.getElementById("log-message-container");
//   logMessageContainer.innerHTML += `
//   <p class="mx-5 mt-5 px-3 py-2 text-gray-500 rounded-xl bg-blue-50">
//     You have Completed the Task: ${clickedHeading} at ${currentTime()}
//   </p>
// `;
// });
document.querySelectorAll(".task-btn").forEach((button) => {
  button.addEventListener("click", function () {
    alert("Board Updated Successfully");

    // Get the task ID dynamically from the clicked button
    const taskId = this.getAttribute("data-task-id");

    // Perform calculations
    let assignedTaskNumber = getInnerTextByID("assigned-task-number");
    let completedTasksNumber = getInnerTextByID("completed-task-number");
    assignedTaskNumber -= 1;
    completedTasksNumber += 1;
    setInnerTextByIDandValue("assigned-task-number", assignedTaskNumber);
    setInnerTextByIDandValue("completed-task-number", completedTasksNumber);

    // Disable the button
    this.disabled = true;
    this.classList.add("opacity-50", "cursor-not-allowed");
    this.classList.remove("cursor-pointer");

    // Get the current time
    function currentTime() {
      const now = new Date();
      return now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
    }

    // Get task heading dynamically
    const clickedHeading = document.getElementById(
      `task${taskId}-heading`
    ).innerText;

    // Add log message
    const logMessageContainer = document.getElementById(
      "log-message-container"
    );
    logMessageContainer.innerHTML += `
      <p class="mx-5 mt-5 px-3 py-2 text-gray-500 rounded-xl bg-blue-50">
        You have Completed the Task: ${clickedHeading} at ${currentTime()}
      </p>
    `;
  });
});

// clear history button logic
document
  .getElementById("clear-history-button")
  .addEventListener("click", function () {
    const logMessageContainer = document.getElementById(
      "log-message-container"
    );
    logMessageContainer.innerHTML = ` `;
  });

//   generate random background colors
document.getElementById("theme-btn").addEventListener("click", function () {
  const randomColor = Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0");
  document.body.style.backgroundColor = `#${randomColor}`;
});
