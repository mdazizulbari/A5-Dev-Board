document.getElementById("task1-btn").addEventListener("click", function () {
  alert("Board Updated Successfully");
  //   calculations
  let assignedTaskNumber = getInnerTextByID("assigned-task-number");
  let completedTasksNumber = getInnerTextByID("completed-task-number");
  assignedTaskNumber -= 1;
  completedTasksNumber += 1;
  setInnerTextByIDandValue("assigned-task-number", assignedTaskNumber);
  setInnerTextByIDandValue("completed-task-number", completedTasksNumber);
  //   disable the button
  const clickedButton = document.getElementById("task1-btn");
  clickedButton.disabled = true;
  clickedButton.classList.add("opacity-50", "cursor-not-allowed");
  clickedButton.classList.remove("cursor-pointer");
  //   current time
  function currentTime() {
    const now = new Date();
    const options = {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    };
    const formattedTime = now.toLocaleTimeString("en-US", options);
    return formattedTime;
  }
  //   add log message
  const logMessageContainer = document.getElementById("log-message-container");
  const logMessage = document.createElement("p");
  logMessage.innerHTML = `
        <p class="mx-5 mt-5 px-3 py-2 text-gray-500 rounded-xl bg-blue-50">
          You have Complete The Task Add Dark Mode at ${currentTime()}
        </p>
  `;
  logMessageContainer.appendChild(logMessage);
});
