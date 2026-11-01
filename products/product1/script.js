document.body.dataset.product = "product1";

const gallery = document.querySelector("[data-product-gallery]");

if (gallery) {
  const stage = gallery.querySelector("[data-gallery-stage]");
  const mainImage = gallery.querySelector("[data-gallery-main]");
  const thumbnails = [...gallery.querySelectorAll("[data-gallery-index]")];
  const status = gallery.querySelector("[data-gallery-status]");
  let activeIndex = 0;
  let pointerStartX = null;

  const showImage = (index) => {
    activeIndex = (index + thumbnails.length) % thumbnails.length;
    const activeThumbnail = thumbnails[activeIndex];
    mainImage.src = activeThumbnail.dataset.imageSrc;
    mainImage.alt = activeThumbnail.dataset.imageAlt;
    status.textContent = `Image ${activeIndex + 1} of ${thumbnails.length}`;

    thumbnails.forEach((thumbnail, thumbnailIndex) => {
      const isActive = thumbnailIndex === activeIndex;
      thumbnail.classList.toggle("is-active", isActive);
      thumbnail.setAttribute("aria-pressed", String(isActive));
    });
  };

  thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener("click", () => showImage(index));
  });

  gallery.querySelector("[data-gallery-previous]").addEventListener("click", () => {
    showImage(activeIndex - 1);
  });
  gallery.querySelector("[data-gallery-next]").addEventListener("click", () => {
    showImage(activeIndex + 1);
  });

  stage.addEventListener("pointerdown", (event) => {
    if (event.target.closest("button")) return;
    pointerStartX = event.clientX;
    stage.setPointerCapture(event.pointerId);
  });
  stage.addEventListener("pointerup", (event) => {
    if (pointerStartX === null) return;
    const distance = event.clientX - pointerStartX;
    pointerStartX = null;
    if (Math.abs(distance) < 40) return;
    showImage(activeIndex + (distance < 0 ? 1 : -1));
  });
  stage.addEventListener("pointercancel", () => {
    pointerStartX = null;
  });
  stage.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      showImage(activeIndex - 1);
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      showImage(activeIndex + 1);
    }
  });
}
