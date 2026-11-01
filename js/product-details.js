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
      highlights: [
        { label: "Product", value: "Nova Smartwatch" },
        { label: "Product type", value: "Smartwatch" },
        { label: "Category", value: "Wearables" },
        { label: "Price", value: "₹2,499" },
        { label: "Key features", value: "Everyday ready — Made to go wherever you do; Comfort first — Easy to wear all day; Your style, your way — A clean, versatile look" },
        { label: "Usage / purpose", value: "An everyday companion for your busy day." }
      ],
      faqs: [
        { question: "What are the main features of the Nova Smartwatch?", answer: "It is presented as an everyday smartwatch with a versatile look and a comfortable design." },
        { question: "Is this smartwatch suitable for everyday use?", answer: "Yes. Nova is described as an everyday companion for your busy day." },
        { question: "What is the battery backup?", answer: "Battery life is not specified in the product information. Please contact support to confirm before ordering.", linkText: "Contact support", href: "support" },
        { question: "Is it compatible with Android and iOS?", answer: "Phone compatibility is not specified in the product information. Please contact support to confirm before ordering.", linkText: "Contact support", href: "support" },
        { question: "What is included in the package?", answer: "The package contents are not listed. Please contact support to confirm what is included.", linkText: "Contact support", href: "support" },
        { question: "Does this product come with a warranty?", answer: "Warranty information is not specified. Please confirm the applicable seller terms before purchase or contact support.", linkText: "Contact support", href: "support" },
        { question: "What is the estimated delivery time?", answer: "The delivery estimate depends on the product, seller and destination. Check the estimate shown or confirmed before purchase.", linkText: "Read the shipping policy", href: "shipping" },
        { question: "Can I return or replace this product?", answer: "Eligibility and time limits depend on the product and seller. Check the applicable seller terms; a refund or replacement is not guaranteed.", linkText: "Read the return policy", href: "returns" },
        { question: "How can I contact customer support?", answer: "Message Techcyco on WhatsApp for help with product or order questions.", linkText: "WhatsApp: +91 82717 34883", href: "support" }
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
      highlights: [
        { label: "Product", value: "Pulse Earbuds" },
        { label: "Product type", value: "Wireless earbuds" },
        { label: "Category", value: "Audio" },
        { label: "Price", value: "₹1,799" },
        { label: "Key feature", value: "Wireless everyday audio" },
        { label: "Usage / purpose", value: "Enjoy your favourite music wherever the day takes you." }
      ],
      faqs: [
        { question: "What are the main features of Pulse Earbuds?", answer: "Pulse is described as wireless everyday audio for enjoying music wherever the day takes you." },
        { question: "Does it have a built-in microphone?", answer: "A microphone is not specified in the product information. Please contact support to confirm before ordering.", linkText: "Contact support", href: "support" },
        { question: "What is the battery backup?", answer: "Battery life is not specified in the product information. Please contact support to confirm before ordering.", linkText: "Contact support", href: "support" },
        { question: "Is a charging case included?", answer: "The package contents are not listed. Please contact support to confirm whether a charging case is included.", linkText: "Contact support", href: "support" },
        { question: "What Bluetooth version does it support?", answer: "The Bluetooth version is not specified in the product information. Please contact support to confirm before ordering.", linkText: "Contact support", href: "support" },
        { question: "Does this product come with a warranty?", answer: "Warranty information is not specified. Please confirm the applicable seller terms before purchase or contact support.", linkText: "Contact support", href: "support" },
        { question: "What is the estimated delivery time?", answer: "The delivery estimate depends on the product, seller and destination. Check the estimate shown or confirmed before purchase.", linkText: "Read the shipping policy", href: "shipping" },
        { question: "Can I return or replace this product?", answer: "Eligibility and time limits depend on the product and seller. Check the applicable seller terms; a refund or replacement is not guaranteed.", linkText: "Read the return policy", href: "returns" },
        { question: "How can I contact customer support?", answer: "Message Techcyco on WhatsApp for help with product or order questions.", linkText: "WhatsApp: +91 82717 34883", href: "support" }
      ],
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
      highlights: [
        { label: "Product", value: "Boom Speaker" },
        { label: "Product type", value: "Portable Bluetooth speaker" },
        { label: "Category", value: "Sound" },
        { label: "Price", value: "₹2,999" },
        { label: "Key features", value: "Take the good vibes — Made to move with you; Share the sound — For your favourite people; Make a moment — Press play, be present" },
        { label: "Usage / purpose", value: "An easy companion for slow Sundays, spontaneous plans and every playlist that feels like you." }
      ],
      faqs: [
        { question: "What are the main features of Boom Speaker?", answer: "It is described as a portable Bluetooth speaker made to move with you and share music with others." },
        { question: "Is this speaker suitable for everyday use?", answer: "The product description presents Boom as a portable companion for everyday plans and listening moments." },
        { question: "Does it support Bluetooth connectivity?", answer: "The product type is listed as a portable Bluetooth speaker. The Bluetooth version is not specified." },
        { question: "What is the battery backup?", answer: "Battery life is not specified in the product information. Please contact support to confirm before ordering.", linkText: "Contact support", href: "support" },
        { question: "What is included in the package?", answer: "The package contents are not listed. Please contact support to confirm what is included.", linkText: "Contact support", href: "support" },
        { question: "Does this product come with a warranty?", answer: "Warranty information is not specified. Please confirm the applicable seller terms before purchase or contact support.", linkText: "Contact support", href: "support" },
        { question: "What is the estimated delivery time?", answer: "The delivery estimate depends on the product, seller and destination. Check the estimate shown or confirmed before purchase.", linkText: "Read the shipping policy", href: "shipping" },
        { question: "Can I return or replace this product?", answer: "Eligibility and time limits depend on the product and seller. Check the applicable seller terms; a refund or replacement is not guaranteed.", linkText: "Read the return policy", href: "returns" },
        { question: "How can I contact customer support?", answer: "Message Techcyco on WhatsApp for help with product or order questions.", linkText: "WhatsApp: +91 82717 34883", href: "support" }
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
      highlights: [
        { label: "Product", value: "Volt Power Bank" },
        { label: "Product type", value: "Portable power bank" },
        { label: "Category", value: "Power" },
        { label: "Price", value: "₹1,499" },
        { label: "Key features", value: "Plans, uninterrupted — A little backup goes far; Ready to roam — Keep your day moving; Power on your terms — Charge when you need it" },
        { label: "Usage / purpose", value: "Keep your plans moving and your phone ready." }
      ],
      faqs: [
        { question: "What are the main features of Volt Power Bank?", answer: "Volt is described as portable backup power to help keep your phone ready while you are out." },
        { question: "What is its battery capacity?", answer: "Battery capacity is not specified in the product information. Please contact support to confirm before ordering.", linkText: "Contact support", href: "support" },
        { question: "Does it support fast charging?", answer: "Fast-charging support is not specified. Please contact support to confirm before ordering.", linkText: "Contact support", href: "support" },
        { question: "Which charging ports are available?", answer: "The available input and output ports are not specified. Please contact support to confirm before ordering.", linkText: "Contact support", href: "support" },
        { question: "How many devices can it charge?", answer: "The number of supported devices is not specified. Please contact support to confirm before ordering.", linkText: "Contact support", href: "support" },
        { question: "What is included in the package?", answer: "The package contents are not listed. Please contact support to confirm what is included.", linkText: "Contact support", href: "support" },
        { question: "Does this product come with a warranty?", answer: "Warranty information is not specified. Please confirm the applicable seller terms before purchase or contact support.", linkText: "Contact support", href: "support" },
        { question: "What is the estimated delivery time?", answer: "The delivery estimate depends on the product, seller and destination. Check the estimate shown or confirmed before purchase.", linkText: "Read the shipping policy", href: "shipping" },
        { question: "Can I return or replace this product?", answer: "Eligibility and time limits depend on the product and seller. Check the applicable seller terms; a refund or replacement is not guaranteed.", linkText: "Read the return policy", href: "returns" },
        { question: "How can I contact customer support?", answer: "Message Techcyco on WhatsApp for help with product or order questions.", linkText: "WhatsApp: +91 82717 34883", href: "support" }
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

  const renderProductHighlights = (panel, highlights) => {
    highlights.forEach(({ label, value }) => {
      if (typeof value !== "string" || !value.trim()) return;
      const item = createElement("div", "product-highlight-item");
      item.append(
        createElement("dt", "", label),
        createElement("dd", "", value)
      );
      panel.append(item);
    });
  };

  const renderFaqs = (list, faqs) => {
    faqs.forEach((faq, index) => {
      const item = createElement("article", "product-faq-item");
      const questionId = `product-faq-question-${index + 1}`;
      const answerId = `product-faq-answer-${index + 1}`;
      const question = createElement("button", "product-faq-question", faq.question);
      question.type = "button";
      question.id = questionId;
      question.setAttribute("aria-expanded", "false");
      question.setAttribute("aria-controls", answerId);
      const chevron = createElement("svg", "product-faq-chevron");
      chevron.setAttribute("viewBox", "0 0 24 24");
      chevron.setAttribute("aria-hidden", "true");
      chevron.append(createElement("path"));
      chevron.firstElementChild.setAttribute("d", "m6 9 6 6 6-6");
      question.append(chevron);

      const answer = createElement("div", "product-faq-answer");
      answer.id = answerId;
      answer.setAttribute("role", "region");
      answer.setAttribute("aria-labelledby", questionId);
      answer.setAttribute("aria-hidden", "true");
      answer.inert = true;
      const answerInner = createElement("div", "product-faq-answer-inner");
      answerInner.append(createElement("p", "", faq.answer));

      if (faq.linkText && faq.href) {
        const link = createElement("a", "product-faq-link", faq.linkText);
        if (faq.href === "support") {
          link.href = customerCare.href;
          link.target = "_blank";
          link.rel = "noopener noreferrer";
        } else {
          link.href = faq.href === "shipping"
            ? "../../pages/shipping-policy/index.html"
            : "../../pages/return-refund/index.html";
        }
        answerInner.append(link);
      }

      answer.append(answerInner);
      question.addEventListener("click", () => {
        const isExpanded = question.getAttribute("aria-expanded") !== "true";
        question.setAttribute("aria-expanded", String(isExpanded));
        answer.setAttribute("aria-hidden", String(!isExpanded));
        answer.inert = !isExpanded;
        answer.classList.toggle("is-expanded", isExpanded);
      });
      item.append(question, answer);
      list.append(item);
    });
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

  const highlightsSection = document.querySelector("[data-product-highlights]");
  const highlightsToggle = highlightsSection?.querySelector("[data-product-highlights-toggle]");
  const highlightsContent = highlightsSection?.querySelector("[data-product-highlights-content]");
  const highlightsList = highlightsSection?.querySelector("[data-product-highlights-list]");
  if (!highlightsSection || !highlightsToggle || !highlightsContent || !highlightsList) {
    console.error("Product highlights are unavailable on this product page.");
  } else {
    renderProductHighlights(highlightsList, product.highlights);
    highlightsToggle.addEventListener("click", () => {
      const isExpanded = highlightsToggle.getAttribute("aria-expanded") !== "true";
      highlightsToggle.setAttribute("aria-expanded", String(isExpanded));
      highlightsContent.setAttribute("aria-hidden", String(!isExpanded));
      highlightsContent.inert = !isExpanded;
      highlightsContent.classList.toggle("is-expanded", isExpanded);
    });
  }

  const faqSection = document.querySelector("[data-product-faq]");
  const faqToggle = faqSection?.querySelector("[data-product-faq-toggle]");
  const faqContent = faqSection?.querySelector("[data-product-faq-content]");
  const faqList = faqSection?.querySelector("[data-product-faq-list]");
  if (!faqSection || !faqToggle || !faqContent || !faqList) {
    console.error("Product FAQs are unavailable on this product page.");
  } else {
    renderFaqs(faqList, product.faqs);
    faqToggle.addEventListener("click", () => {
      const isExpanded = faqToggle.getAttribute("aria-expanded") !== "true";
      faqToggle.setAttribute("aria-expanded", String(isExpanded));
      faqContent.setAttribute("aria-hidden", String(!isExpanded));
      faqContent.inert = !isExpanded;
      faqContent.classList.toggle("is-expanded", isExpanded);
    });
  }

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
