(function () {
  "use strict";

  const products = {
    product1: {
      name: "Nova Smartwatch",
      type: "Smartwatch",
      category: "Wearables",
      price: "₹2,499",
      features: [
        { title: "Everyday ready", detail: "Made to go wherever you do" },
        { title: "Comfort first", detail: "Easy to wear all day" },
        { title: "Your style, your way", detail: "A clean, versatile look" }
      ],
      description: [
        { title: "Product introduction", text: "A little clarity for your busy day. Nova keeps your everyday essentials close, with a look that goes wherever you do." },
        { title: "Key features", list: ["Made to go wherever you do", "Easy to wear all day", "A clean, versatile look"] },
        { title: "Design and build", text: "The product is presented with a clean, versatile look." },
        { title: "Usage information", text: "Designed as an everyday companion for your busy day." }
      ]
    },
    product2: {
      name: "Pulse Earbuds",
      type: "Wireless earbuds",
      category: "Audio",
      price: "₹1,799",
      features: [],
      description: [
        { title: "Product introduction", text: "Enjoy your favourite music wherever the day takes you." },
        { title: "Key features", list: ["Wireless everyday audio"] }
      ]
    },
    product3: {
      name: "Boom Speaker",
      type: "Portable Bluetooth speaker",
      category: "Sound",
      price: "₹2,999",
      features: [
        { title: "Take the good vibes", detail: "Made to move with you" },
        { title: "Share the sound", detail: "For your favourite people" },
        { title: "Make a moment", detail: "Press play, be present" }
      ],
      description: [
        { title: "Product introduction", text: "From kitchen dance breaks to sunset catch-ups, Boom brings your favourite sounds along for the good moments." },
        { title: "Key features", list: ["Made to move with you", "For your favourite people", "Press play, be present"] },
        { title: "Product benefits", text: "Give the little moments a soundtrack." },
        { title: "Usage information", text: "An easy companion for slow Sundays, spontaneous plans and every playlist that feels like you." }
      ]
    },
    product4: {
      name: "Volt Power Bank",
      type: "Portable power bank",
      category: "Power",
      price: "₹1,499",
      features: [
        { title: "Plans, uninterrupted", detail: "A little backup goes far" },
        { title: "Ready to roam", detail: "Keep your day moving" },
        { title: "Power on your terms", detail: "Charge when you need it" }
      ],
      description: [
        { title: "Product introduction", text: "Keep your plans moving and your phone ready. Volt brings a little extra peace of mind wherever your day takes you." },
        { title: "Key features", list: ["A little backup goes far", "Keep your day moving", "Charge when you need it"] },
        { title: "Product benefits", text: "Long days, full calendars and spontaneous detours call for a little extra charge." },
        { title: "Usage information", text: "Keep Volt in your bag and stay ready for whatever comes next." }
      ]
    }
  };
  const customerCare = {
    label: "WhatsApp customer care",
    value: "+91 82717 34883",
    href: "https://wa.me/918271734883"
  };

  const createElement = (tagName, className, text) => {
    const element = document.createElement(tagName);
    if (className) element.className = className;
    if (text) element.textContent = text;
    return element;
  };

  const appendSpecItem = (grid, label, value) => {
    if (!value) return;
    const item = createElement("div", "detail-spec-item");
    item.append(createElement("dt", "", label), createElement("dd", "", value));
    grid.append(item);
  };

  const renderSpecifications = (panel, product) => {
    const group = createElement("section", "detail-group");
    group.append(createElement("h3", "", "General"));
    const grid = createElement("dl", "detail-spec-grid");
    appendSpecItem(grid, "Product", product.name);
    appendSpecItem(grid, "Product type", product.type);
    appendSpecItem(grid, "Category", product.category);
    appendSpecItem(grid, "Price", product.price);
    group.append(grid);
    panel.append(group);

    if (!product.features.length) return;
    const featureGroup = createElement("section", "detail-group");
    featureGroup.append(createElement("h3", "", "Features"));
    const featureGrid = createElement("dl", "detail-spec-grid");
    product.features.forEach((feature) => {
      appendSpecItem(featureGrid, feature.title, feature.detail || feature.title);
    });
    featureGroup.append(featureGrid);
    panel.append(featureGroup);
  };

  const renderDescription = (panel, description) => {
    description.forEach((section) => {
      const wrapper = createElement("section", "detail-description-section");
      wrapper.append(createElement("h3", "", section.title));
      if (section.text) wrapper.append(createElement("p", "", section.text));
      if (section.list) {
        const list = createElement("ul");
        section.list.filter(Boolean).forEach((item) => {
          list.append(createElement("li", "", item));
        });
        if (list.childElementCount) wrapper.append(list);
      }
      if (wrapper.childElementCount > 1) panel.append(wrapper);
    });
  };

  const renderManufacturerInfo = (panel, product) => {
    const list = createElement("dl", "detail-info-list");
    const genericName = createElement("div", "detail-info-item");
    genericName.append(
      createElement("dt", "", "Generic name"),
      createElement("dd", "", product.type)
    );
    list.append(genericName);

    if (customerCare.value) {
      const contact = createElement("div", "detail-info-item");
      const value = createElement("dd");
      const link = createElement("a", "", customerCare.value);
      link.href = customerCare.href;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      value.append(link);
      contact.append(createElement("dt", "", customerCare.label), value);
      list.append(contact);
    }

    panel.append(list);
  };

  const section = document.querySelector("[data-all-details]");
  if (!section) return;

  const product = products[document.body.dataset.product];
  if (!product) {
    console.error("Product details are unavailable for this product page.");
    return;
  }

  const toggle = section.querySelector(".all-details-toggle");
  const content = section.querySelector(".all-details-content");
  const tabs = Array.from(section.querySelectorAll("[data-details-tab]"));
  const panels = Array.from(section.querySelectorAll("[data-details-panel]"));
  const specificationsPanel = section.querySelector('[data-details-panel="specifications"]');
  const descriptionPanel = section.querySelector('[data-details-panel="description"]');
  const manufacturerPanel = section.querySelector('[data-details-panel="manufacturer"]');

  renderSpecifications(specificationsPanel, product);
  renderDescription(descriptionPanel, product.description);
  renderManufacturerInfo(manufacturerPanel, product);

  toggle.addEventListener("click", () => {
    const isExpanded = toggle.getAttribute("aria-expanded") !== "true";
    toggle.setAttribute("aria-expanded", String(isExpanded));
    content.setAttribute("aria-hidden", String(!isExpanded));
    content.inert = !isExpanded;
    content.classList.toggle("is-expanded", isExpanded);
  });

  const activateTab = (tab, moveFocus) => {
    const selectedTab = tab.dataset.detailsTab;
    tabs.forEach((item) => {
      const isSelected = item === tab;
      item.classList.toggle("is-active", isSelected);
      item.setAttribute("aria-selected", String(isSelected));
      item.tabIndex = isSelected ? 0 : -1;
    });
    panels.forEach((panel) => {
      const isSelected = panel.dataset.detailsPanel === selectedTab;
      panel.hidden = !isSelected;
      panel.classList.toggle("is-active", isSelected);
    });
    if (moveFocus) tab.focus();
  };

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => activateTab(tab, false));
    tab.addEventListener("keydown", (event) => {
      let nextIndex = index;
      if (event.key === "ArrowRight") nextIndex = (index + 1) % tabs.length;
      else if (event.key === "ArrowLeft") nextIndex = (index - 1 + tabs.length) % tabs.length;
      else if (event.key === "Home") nextIndex = 0;
      else if (event.key === "End") nextIndex = tabs.length - 1;
      else return;
      event.preventDefault();
      activateTab(tabs[nextIndex], true);
    });
  });
})();
