// capture of the several css  elements  and stock them in variables
    const dialog = document.querySelector("dialog");
    const showButton = document.querySelector("dialog + button");
    const closeButton = document.querySelector("dialog button");


// additon of a JS event by click  wich will call the showModal function to open the dialog
    showButton.addEventListener("click", () => {
            dialog.showModal();
        });
// same  schema but to close the  dialog
 closeButton.addEventListener("click", () => {
 dialog.close();
        });
// closing the dialog by clicking outside it
dialog.addEventListener('click', function (event) {
    var rect = dialog.getBoundingClientRect();
    var isInDialog=(rect.top <= event.clientY && event.clientY <= rect.top + rect.height
        && rect.left <= event.clientX && event.clientX <= rect.left + rect.width);
    if (!isInDialog) {
        dialog.close();
    }
});
// setting of a data attribute in order to manage the width of the dialog easely
const DialogWidht=dialog.getAttribute("data-width");
dialog.style.width=DialogWidht;