// Select all "Show dialog" buttons
const showDialogButtons = document.querySelectorAll(".show-dialog");

// Iterate over each button
showDialogButtons.forEach((button) => {
  button.addEventListener("click", function () {
    // Get the dialog ID from the button's data-dialog attribute
    const dialogId = this.getAttribute("data-dialog");
    console.log(dialogId);
    const dialog = document.getElementById(dialogId);
    console.log(dialog);

    // Show the dialog
    dialog.showModal();
  });
});

// Close buttons inside dialogs
const closeButtons = document.querySelectorAll("dialog button");

// Add event listeners to close buttons
closeButtons.forEach((button) => {
  button.addEventListener("click", function () {
    // Find the closest dialog parent and close it
    this.closest("dialog").close();
  });
});
