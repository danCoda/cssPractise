const backdrop = document.querySelectorAll(".backdrop");
const modal = document.querySelector(".modal");
const selectPlanButtons = document.querySelectorAll(".plan button");
const modalNoButton = document.querySelector(".modal__action--negative");
const toggleButton = document.querySelector(".toggle-button");
const mobileNav = document.querySelector(".mobile-nav");

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

backdrop[0].addEventListener("click", () => {
    mobileNav.style.display = "none";
    closeModal();
});

modalNoButton.addEventListener("click", closeModal);

toggleButton.addEventListener("click", () => {
    mobileNav.style.display = "block";
    backdrop[0].style.display = "block";
})