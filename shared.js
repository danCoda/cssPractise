const backdrop = document.querySelectorAll(".backdrop");
const modal = document.querySelector(".modal");
const selectPlanButtons = document.querySelectorAll(".plan button");

selectPlanButtons.forEach(button => {
    button.addEventListener("click", () => {
        modal.style.display = "block";
        backdrop[0].style.display = "block";
    })
})