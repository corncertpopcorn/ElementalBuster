let searchText = "오늘 뭐 먹지?";
let counter = 1;

// Function to update the text
function updateText() {
  // Increment the period
  let periods = ".".repeat(counter);
  // Update the text with the period(s)
  document.getElementById("searchingText").innerText = searchText + periods;
  // Increment counter (reset to 1 after 4 periods)
  counter = (counter % 4) + 1;
}

// Initial update
updateText();

// Update the text every second
setInterval(updateText, 700);