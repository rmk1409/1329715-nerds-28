let buttonWriteToUs = document.querySelector(".button-write-to-us");
let writToUsPopupWindow = document.querySelector(".write-to-us-popup");
let writeToUsCloseButton = writToUsPopupWindow.querySelector(".button-close");

buttonWriteToUs.addEventListener("click", function (evt) {
  evt.preventDefault();
  writToUsPopupWindow.classList.toggle("modal-show");
});
writeToUsCloseButton.addEventListener("click", function () {
  writToUsPopupWindow.classList.toggle("modal-show");
});

writToUsPopupWindow.addEventListener("submit", function (evt) {
  evt.preventDefault();
  let name = document.querySelector("#name-input");
  let email = document.querySelector("#email-input");
  let message = document.querySelector("#message-text-area");
  if (!(name.value && email.value && message.value)) {
    writToUsPopupWindow.classList.remove("modal-error");
    writToUsPopupWindow.offsetWidth = writToUsPopupWindow.offsetWidth;
    writToUsPopupWindow.classList.add("modal-error");
  }
})
