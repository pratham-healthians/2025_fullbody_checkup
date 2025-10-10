document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("fbdyModal");
  const modalTitle = modal.querySelector(".fbdy_mdl__title");
  const modalSubtitle = modal.querySelector(".fbdy_mdl__subtitle");
  const modalContent = modal.querySelector(".fbdy_mdl__content");
  const closeBtn = modal.querySelector(".fbdy_mdl__close");

  // Create and add overlay
  const overlay = document.createElement("div");
  overlay.className = "fbdy_mdl-overlay";
  modal.parentNode.insertBefore(overlay, modal);

  // Open modal
  document.querySelectorAll(".fbdy_mor").forEach((btn) => {
    btn.addEventListener("click", () => {
      modal.classList.add("mdlactive");
      overlay.classList.add("mdlactive");
      document.body.style.overflow = "hidden";
    });
  });

  // Close modal function
  function closeModal() {
    modal.classList.remove("mdlactive");
    overlay.classList.remove("mdlactive");
    document.body.style.overflow = "";
  }

  // Close button
  closeBtn.addEventListener("click", closeModal);

  // Close on overlay click
  overlay.addEventListener("click", closeModal);

  // Close when clicking outside modal (on modal wrapper itself)
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Close on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("mdlactive")) {
      closeModal();
    }
  });
});

/* Modal Accordion */
document.addEventListener("DOMContentLoaded", function () {
  const headers = document.querySelectorAll(
    ".fbdy_test_dtl_item:not(.no_expand) .fbdy_test_dtl_header"
  );

  headers.forEach(function (header) {
    header.addEventListener("click", function () {
      const item = this.parentElement;
      const content = item.querySelector(".fbdy_test_dtl_content");
      const isActive = item.classList.contains("active");

      // Close all other items
      document
        .querySelectorAll(".fbdy_test_dtl_item.active")
        .forEach(function (activeItem) {
          if (activeItem !== item) {
            activeItem.classList.remove("active");
            activeItem.querySelector(".fbdy_test_dtl_content").style.maxHeight =
              null;
          }
        });

      // Toggle current item
      if (isActive) {
        item.classList.remove("active");
        content.style.maxHeight = null;
      } else {
        item.classList.add("active");
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });
});
/* Modal Accordion end */
