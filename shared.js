const backdrop = document.querySelectorAll(".backdrop");
const modal = document.querySelector(".modal");
const selectPlanButtons = document.querySelectorAll(".plan button");
const modalNoButton = document.querySelector(".modal__action--negative");

selectPlanButtons.forEach(button => {
    button.addEventListener("click", () => {
        modal.style.display = "block";
        backdrop[0].style.display = "block";
    })
})

const closeModal = () => {
    modal.style.display = "none";
    backdrop[0].style.display = "none";
}

backdrop[0].addEventListener("click", closeModal);

modalNoButton.addEventListener("click", closeModal);