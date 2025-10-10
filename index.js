document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("fbdyModal");
  const modalTitle = modal.querySelector(".fbdy_mdl__title");
  const modalSubtitle = modal.querySelector(".fbdy_mdl__subtitle");
  const modalContent = modal.querySelector(".fbdy_mdl__content");
  const closeBtn = modal.querySelector(".fbdy_mdl__close");

  document.querySelectorAll(".fbdy_mor").forEach((btn) => {
    btn.addEventListener("click", () => {
      modal.classList.add("mdlactive");
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.classList.remove("mdlactive");
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("mdlactive");
    }
  });
});

/* Modal Accordion*/

document.addEventListener("DOMContentLoaded", function () {
  const headers = document.querySelectorAll(
    ".fbdy_test_dtl_item:not(.no_expand) .fbdy_test_dtl_header"
  );

  headers.forEach(function (header) {
    header.addEventListener("click", function () {
      const item = this.parentElement;
      const content = item.querySelector(".fbdy_test_dtl_content");
      const isActive = item.classList.contains("active");

      // Close all other items (remove this block if you want multiple open)
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
