"use strict"
// DOM Elements
const openModelBtns =
  document.querySelectorAll(".show-modal")
const closeModelBtn = document.querySelector(".close-modal")
const overlay = document.querySelector(".overlay")
const modal = document.querySelector(".modal")

function openModal() {
  modal.classList.toggle("hidden")
  overlay.classList.toggle("hidden")
}

function closeModal() {
  modal.classList.toggle("hidden")
  overlay.classList.toggle("hidden")
}

for (let i = 0; i < openModelBtns.length; i++) {
  openModelBtns[i].addEventListener("click", openModal)
}

overlay.addEventListener("click", closeModal)
closeModelBtn.addEventListener("click", closeModal)

document.addEventListener("keydown", function (e) {
  if (
    e.key === "Escape" &&
    !modal.classList.contains("hidden")
  ) {
    closeModal()
  }
})
