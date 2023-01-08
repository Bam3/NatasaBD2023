const firstNumber = document.getElementById("input-number-one");
const secondNumber = document.getElementById("input-number-two");
const checkBtn = document.getElementById("check-numbers");
const toastLiveExample = document.getElementById("liveToast");
const innerToast = document.getElementById("toast-text");

checkBtn.addEventListener("click", (e) => {
  const toast = new bootstrap.Toast(toastLiveExample);
  if (
    parseInt(firstNumber.value) === 45905028473841651 &&
    parseInt(secondNumber.value) === 14233937810306355
  ) {
    innerToast.innerText = "Iskani števili sta pravilni BRAVO!!!!";
    toast.show();
  } else {
    innerToast.innerText = "Iskani števili nista pravilni, poskusi ponovno!";
    toast.show();
  }
});
