// Save data to localStorage and provide feedback
var saveData = () => {
  const inputTitle = document.getElementById("inputTitle").value.trim();
  const inputDescription = document.getElementById("inputDesc").value.trim();
  const notesTitleData = document.getElementById("notesIitle");
  const noteDescData = document.getElementById("noteDesc");

  if (!inputTitle) {
    notesTitleData.innerHTML = "Enter notes title";
  } else if (!inputDescription) {
    noteDescData.innerHTML = "Enter notes description";
  } else {
    // Save data to localStorage
    localStorage.setItem("inputTitle", inputTitle);
    localStorage.setItem("inputDesc", inputDescription);

    // Provide success feedback
    document.getElementById("feedback").innerHTML = "Data saved successfully!";
    notesTitleData.innerHTML = "";
    noteDescData.innerHTML = "";

    // Clear input fields
    document.getElementById("inputTitle").value = "";
    document.getElementById("inputDesc").value = "";
  }
  document.getElementById("allItems").innerHTML = "";
};

// Display total saved data from localStorage
var totalsavedData = () => {
  const itemNameData = localStorage.getItem("inputTitle") || null;
  const itemAboutData = localStorage.getItem("inputDesc") || null;
  const allItems = document.getElementById("allItems");

  document.getElementById("feedback").innerHTML = "";

  if (!itemNameData || !itemAboutData) {
    allItems.innerHTML = `<p class="text-danger">Data is empty</p>`;
  } else {
    allItems.innerHTML = `
        <ul class="text-white m-0">
          <li>
          Product: <span id="itemNames">${itemNameData}</span><br>
          Description: <span id="itemAbouts">${itemAboutData}</span>
        </ul>`;
  }
};

// Reset input fields
const resetItemName = () => {
  document.getElementById("inputTitle").value = "";
  document.getElementById("inputDesc").value = "";
};

// Clear all saved data and reset the UI
const clearItemName = () => {
  document.getElementById("allItems").innerHTML = "";
  document.getElementById("inputTitle").value = "";
  document.getElementById("inputDesc").value = "";
};

// Update displayed data based on localStorage
var changeItemName = () => {
  const itemNameData = localStorage.getItem("inputTitle") || "";
  const itemAboutData = localStorage.getItem("inputDesc") || "";

  document.getElementById("allItems").innerHTML = `
      <ul class="text-white m-0">
        <li>
        Product: <span id="itemNames">${itemNameData}</span><br>
        Description: <span id="itemAbouts">${itemAboutData}</span>
        </li>
      </ul>`;

  document.getElementById("inputTitle").value = itemNameData;
  document.getElementById("inputDesc").value = itemAboutData;
};

