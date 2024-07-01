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

// Windowsize check, if  a data-attribute is present and if the screen is bigger than 576px, apply of the data-width.If the screen is smaller than 576px, remove of the data-width attribute in order to give a 100% width to the dialog.

Windowsize=window.innerWidth;

if (dialog.hasAttribute("data-width"))

{
if (Windowsize>576)
{
    const DialogWidth = dialog.getAttribute("data-width");
    dialog.style.width = DialogWidth;
}
else
{
    dialog.removeAttribute("data-width");
}



}
