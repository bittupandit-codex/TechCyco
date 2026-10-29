(function () {
  "use strict";

  const products = {
    product1: { name: "Nova Smartwatch", price: 2499 },
    product2: { name: "Pulse Earbuds", price: 1799 },
    product3: { name: "Boom Speaker", price: 2999 },
    product4: { name: "Volt Power Bank", price: 1499 }
  };
  const whatsappNumber = "918271734883";

  const heroSlides = [
    { image: "images/indeximg2.jpeg", name: "Meet Nova", description: "Your day, in sync.", alt: "Nova smartwatch", product: "product1" },
    { image: "images/psun106_1.jpeg", name: "Meet Pulse", description: "Your soundtrack, untangled.", alt: "Pulse wireless earbuds", product: "product2" },
    { image: "images/indeximg2.jpeg", name: "Meet Boom", description: "Bring your own atmosphere.", alt: "Boom portable speaker", product: "product3" },
    { image: "images/psun106_2.jpeg", name: "Meet Volt", description: "Stay out. Stay charged.", alt: "Volt power bank", product: "product4" }
  ];
  const heroImage = document.querySelector(".hero-art img");
  if (heroImage && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const heroName = document.querySelector(".hero-product-tag strong");
    const heroDescription = document.querySelector(".hero-product-tag small");
    const heroLink = document.querySelector(".hero-product-tag>a");
    let activeSlide = 0;
    window.setInterval(() => {
      activeSlide = (activeSlide + 1) % heroSlides.length;
      const slide = heroSlides[activeSlide];
      heroImage.src = slide.image;
      heroImage.alt = slide.alt;
      if (heroName) heroName.textContent = slide.name;
      if (heroDescription) heroDescription.textContent = slide.description;
      if (heroLink) {
        heroLink.href = `products/${slide.product}/index.html`;
        heroLink.setAttribute("aria-label", `Shop ${slide.alt}`);
      }
    }, 2000);
  }

  document.querySelectorAll("[data-order-form]").forEach((form) => {
    const error = form.querySelector("[data-form-error]");
    const checkboxes = Array.from(form.querySelectorAll('input[name="product"]'));
    const pageProduct = document.body.dataset.product;

    checkboxes.forEach((checkbox) => {
      const quantity = form.elements["qty-" + checkbox.value];
      checkbox.addEventListener("change", () => {
        quantity.disabled = !checkbox.checked;
        if (checkbox.checked && (!quantity.value || Number(quantity.value) < 1)) quantity.value = "1";
        if (error) error.hidden = true;
      });
    });

    if (pageProduct && products[pageProduct]) {
      const current = checkboxes.find((checkbox) => checkbox.value === pageProduct);
      if (current) {
        current.checked = true;
        const quantity = form.elements["qty-" + pageProduct];
        quantity.disabled = false;
      }
    }

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (error) error.hidden = true;
      if (!form.reportValidity()) return;

      const selected = checkboxes.filter((checkbox) => checkbox.checked);
      if (selected.length === 0) {
        if (error) {
          error.textContent = "Please select at least one product to continue.";
          error.hidden = false;
        }
        const picker = form.querySelector(".product-picker");
        picker.scrollIntoView({ behavior: "smooth", block: "center" });
        return;
      }

      const items = [];
      for (const checkbox of selected) {
        const product = products[checkbox.value];
        const quantity = Number(form.elements["qty-" + checkbox.value].value);
        if (!Number.isInteger(quantity) || quantity < 1 || quantity > 99) {
          if (error) {
            error.textContent = "Please enter a quantity between 1 and 99 for each selected product.";
            error.hidden = false;
          }
          form.elements["qty-" + checkbox.value].focus();
          return;
        }
        items.push({ ...product, quantity });
      }

      const data = new FormData(form);
      const orderLines = items.map((item, index) =>
        `${index + 1}. ${item.name} — Qty: ${item.quantity} — ₹${item.price.toLocaleString("en-IN")} each`
      );
      const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
      const message = [
        "Hello Techcyco! I'd like to place an order.",
        "",
        "CUSTOMER DETAILS",
        `Name: ${data.get("customerName").trim()}`,
        `Mobile: ${data.get("mobile").trim()}`,
        `Address: ${data.get("address").trim()}`,
        `City: ${data.get("city").trim()}`,
        `State: ${data.get("state").trim()}`,
        `PIN Code: ${data.get("pin").trim()}`,
        "",
        "ORDER",
        ...orderLines,
        `Order total: ₹${total.toLocaleString("en-IN")}`
      ].join("\n");

      window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    });
  });

  document.querySelectorAll("[data-buy-product]").forEach((button) => {
    button.addEventListener("click", () => {
      const productId = button.dataset.buyProduct;
      const checkbox = document.querySelector(`[data-order-form] input[name="product"][value="${productId}"]`);
      if (checkbox) {
        checkbox.checked = true;
        checkbox.dispatchEvent(new Event("change", { bubbles: true }));
      }
      document.querySelector("#order")?.scrollIntoView({ behavior: "smooth" });
    });
  });
})();
