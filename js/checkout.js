(function() {
  let cui = document.querySelector(".CUI");
  let forMail = document.querySelector(".for_mail");
  let cuiBtn = document.querySelector(".CUI_btn");
  let forMailBtn = document.querySelector(".for_mail_btn");
  cuiBtn.addEventListener("click", () => {
    forMailBtn.classList.remove("check");
    cuiBtn.classList.add("check");
    cui.classList.remove("hidden");
    forMail.classList.add("hidden");
  });
  forMailBtn.addEventListener("click", () => {
    forMailBtn.classList.add("check");
    cuiBtn.classList.remove("check");
    forMail.classList.remove("hidden");
    cui.classList.add("hidden");
  });
})();
