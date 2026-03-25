const marketplaceData = {
  categories: [
    {
      id: "electronics",
      name: "Electronics",
      icon: "📱",
      description: "Phones, laptops, audio gear, and everyday tech.",
      subcategories: ["Mobile", "Laptop", "Earphones"],
    },
    {
      id: "clothes",
      name: "Clothes",
      icon: "👕",
      description: "Style-forward fashion picks across daily wear.",
      subcategories: ["T-Shirts", "Jeans", "Jackets"],
    },
    {
      id: "shoes",
      name: "Shoes",
      icon: "👟",
      description: "Running, casual, and premium comfort footwear.",
      subcategories: ["Sneakers", "Running Shoes", "Sandals"],
    },
    {
      id: "home-essentials",
      name: "Home Essentials",
      icon: "🏠",
      description: "Kitchen, decor, and utility products for daily living.",
      subcategories: ["Kitchen", "Storage", "Decor"],
    },
  ],
  budgets: [
    { id: "under-1000", label: "Under ₹1000", min: 0, max: 999 },
    { id: "1000-5000", label: "₹1000–₹5000", min: 1000, max: 5000 },
    { id: "5000-20000", label: "₹5000–₹20000", min: 5001, max: 20000 },
    { id: "20000-plus", label: "₹20000+", min: 20001, max: Number.POSITIVE_INFINITY },
  ],
  products: [
    {
      name: "OnePlus Nord CE 4 Lite",
      price: 18999,
      rating: 4.4,
      category: "Electronics",
      subcategory: "Mobile",
      platform: "Amazon",
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80",
      link: "https://www.amazon.in/",
      tag: "Best Deal",
      trending: true,
      liveDeal: true,
      discount: "32% OFF",
    },
    {
      name: "iQOO Z9 Turbo Edition",
      price: 22999,
      rating: 4.5,
      category: "Electronics",
      subcategory: "Mobile",
      platform: "Flipkart",
      image:
        "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=900&q=80",
      link: "https://www.flipkart.com/",
      tag: "High Performance",
      trending: false,
      liveDeal: true,
      discount: "28% OFF",
    },
    {
      name: "Realme Buds Wireless 3 Neo",
      price: 1799,
      rating: 4.2,
      category: "Electronics",
      subcategory: "Earphones",
      platform: "Amazon",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80",
      link: "https://www.amazon.in/",
      tag: "Budget Pick",
      trending: true,
      liveDeal: false,
      discount: "55% OFF",
    },
    {
      name: "Lenovo IdeaPad Slim 5",
      price: 58990,
      rating: 4.6,
      category: "Electronics",
      subcategory: "Laptop",
      platform: "Flipkart",
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=900&q=80",
      link: "https://www.flipkart.com/",
      tag: "High Performance",
      trending: true,
      liveDeal: true,
      discount: "21% OFF",
    },
    {
      name: "Noise Air Clips",
      price: 999,
      rating: 4.1,
      category: "Electronics",
      subcategory: "Earphones",
      platform: "Amazon",
      image:
        "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?auto=format&fit=crop&w=900&q=80",
      link: "https://www.amazon.in/",
      tag: "Budget Pick",
      trending: false,
      liveDeal: false,
      discount: "47% OFF",
    },
    {
      name: "Oversized Cotton T-Shirt",
      price: 799,
      rating: 4.3,
      category: "Clothes",
      subcategory: "T-Shirts",
      platform: "Myntra",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80",
      link: "https://www.myntra.com/",
      tag: "Budget Pick",
      trending: true,
      liveDeal: false,
      discount: "60% OFF",
    },
    {
      name: "Classic Blue Slim Jeans",
      price: 1499,
      rating: 4.2,
      category: "Clothes",
      subcategory: "Jeans",
      platform: "Flipkart",
      image:
        "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=900&q=80",
      link: "https://www.flipkart.com/",
      tag: "Best Deal",
      trending: false,
      liveDeal: false,
      discount: "40% OFF",
    },
    {
      name: "All-Weather Bomber Jacket",
      price: 3299,
      rating: 4.5,
      category: "Clothes",
      subcategory: "Jackets",
      platform: "Myntra",
      image:
        "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?auto=format&fit=crop&w=900&q=80",
      link: "https://www.myntra.com/",
      tag: "High Performance",
      trending: true,
      liveDeal: true,
      discount: "50% OFF",
    },
    {
      name: "StreetFlex Sneakers",
      price: 2799,
      rating: 4.4,
      category: "Shoes",
      subcategory: "Sneakers",
      platform: "Myntra",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
      link: "https://www.myntra.com/",
      tag: "Best Deal",
      trending: true,
      liveDeal: true,
      discount: "35% OFF",
    },
    {
      name: "Nike Downshifter Run",
      price: 4299,
      rating: 4.6,
      category: "Shoes",
      subcategory: "Running Shoes",
      platform: "Amazon",
      image:
        "https://images.unsplash.com/photo-1543508282-6319a3e2621f?auto=format&fit=crop&w=900&q=80",
      link: "https://www.amazon.in/",
      tag: "High Performance",
      trending: true,
      liveDeal: false,
      discount: "25% OFF",
    },
    {
      name: "Daily Comfort Sandals",
      price: 899,
      rating: 4.0,
      category: "Shoes",
      subcategory: "Sandals",
      platform: "Flipkart",
      image:
        "https://images.unsplash.com/photo-1603487742131-4160ec999306?auto=format&fit=crop&w=900&q=80",
      link: "https://www.flipkart.com/",
      tag: "Budget Pick",
      trending: false,
      liveDeal: false,
      discount: "52% OFF",
    },
    {
      name: "Non-Stick Cookware Set",
      price: 2199,
      rating: 4.3,
      category: "Home Essentials",
      subcategory: "Kitchen",
      platform: "Amazon",
      image:
        "https://images.unsplash.com/photo-1517705008128-361805f42e86?auto=format&fit=crop&w=900&q=80",
      link: "https://www.amazon.in/",
      tag: "Best Deal",
      trending: true,
      liveDeal: true,
      discount: "44% OFF",
    },
    {
      name: "Modular Storage Organizer",
      price: 949,
      rating: 4.1,
      category: "Home Essentials",
      subcategory: "Storage",
      platform: "Flipkart",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
      link: "https://www.flipkart.com/",
      tag: "Budget Pick",
      trending: false,
      liveDeal: false,
      discount: "39% OFF",
    },
    {
      name: "Minimal Table Lamp",
      price: 1299,
      rating: 4.4,
      category: "Home Essentials",
      subcategory: "Decor",
      platform: "AJIO",
      image:
        "https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&w=900&q=80",
      link: "https://www.ajio.com/",
      tag: "High Performance",
      trending: true,
      liveDeal: false,
      discount: "31% OFF",
    },
    {
      name: "HP 15 Ryzen Productivity Laptop",
      price: 47999,
      rating: 4.3,
      category: "Electronics",
      subcategory: "Laptop",
      platform: "Amazon",
      image:
        "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?auto=format&fit=crop&w=900&q=80",
      link: "https://www.amazon.in/",
      tag: "Best Deal",
      trending: false,
      liveDeal: false,
      discount: "19% OFF",
    },
    {
      name: "Campus Sprint Runner",
      price: 1999,
      rating: 4.2,
      category: "Shoes",
      subcategory: "Running Shoes",
      platform: "Flipkart",
      image:
        "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=900&q=80",
      link: "https://www.flipkart.com/",
      tag: "Budget Pick",
      trending: false,
      liveDeal: false,
      discount: "48% OFF",
    },
    {
      name: "Printed Casual Shirt",
      price: 999,
      rating: 4.0,
      category: "Clothes",
      subcategory: "T-Shirts",
      platform: "Myntra",
      image:
        "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=900&q=80",
      link: "https://www.myntra.com/",
      tag: "Best Deal",
      trending: false,
      liveDeal: false,
      discount: "58% OFF",
    },
  ],
};

const state = {
  selectedCategory: "",
  selectedSubcategory: "",
  selectedBudget: "",
  searchTerm: "",
  currentStep: 1,
  currentSlide: 0,
};

const categoryGrid = document.getElementById("categoryGrid");
const subcategoryGrid = document.getElementById("subcategoryGrid");
const budgetGrid = document.getElementById("budgetGrid");
const resultsGrid = document.getElementById("resultsGrid");
const trendingGrid = document.getElementById("trendingGrid");
const quickDeals = document.getElementById("quickDeals");
const resultCount = document.getElementById("resultCount");
const emptyState = document.getElementById("emptyState");
const globalSearch = document.getElementById("globalSearch");
const backButton = document.getElementById("backButton");
const resetButton = document.getElementById("resetButton");
const stepPanels = document.querySelectorAll(".step-panel");
const stepIndicators = document.querySelectorAll(".step-pill");

const carouselElements = {
  image: document.getElementById("carouselImage"),
  badge: document.getElementById("carouselBadge"),
  title: document.getElementById("carouselTitle"),
  meta: document.getElementById("carouselMeta"),
  link: document.getElementById("carouselLink"),
  dots: document.getElementById("carouselDots"),
};

const liveDeals = marketplaceData.products.filter((product) => product.liveDeal);

function formatPrice(price) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price);
}

function getStars(rating) {
  const rounded = Math.round(rating);
  return "★".repeat(rounded) + "☆".repeat(5 - rounded);
}

function createSelectionCard({ title, description, icon, selected, onClick }) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = `select-card${selected ? " selected" : ""}`;
  button.innerHTML = `
    <div class="icon-wrap">${icon}</div>
    <h4>${title}</h4>
    <p>${description}</p>
  `;
  button.addEventListener("click", onClick);
  return button;
}

function renderCategories() {
  categoryGrid.innerHTML = "";

  marketplaceData.categories.forEach((category) => {
    categoryGrid.appendChild(
      createSelectionCard({
        title: category.name,
        description: category.description,
        icon: category.icon,
        selected: state.selectedCategory === category.name,
        onClick: () => {
          state.selectedCategory = category.name;
          state.selectedSubcategory = "";
          state.selectedBudget = "";
          state.currentStep = 2;
          renderAll();
        },
      })
    );
  });
}

function renderSubcategories() {
  subcategoryGrid.innerHTML = "";
  const category = marketplaceData.categories.find((item) => item.name === state.selectedCategory);

  if (!category) {
    subcategoryGrid.innerHTML =
      '<div class="empty-state"><h3>Select a category first</h3><p>Your subcategories will appear here.</p></div>';
    return;
  }

  category.subcategories.forEach((subcategory) => {
    subcategoryGrid.appendChild(
      createSelectionCard({
        title: subcategory,
        description: `Focused recommendations for ${subcategory.toLowerCase()} shoppers.`,
        icon: "✨",
        selected: state.selectedSubcategory === subcategory,
        onClick: () => {
          state.selectedSubcategory = subcategory;
          state.selectedBudget = "";
          state.currentStep = 3;
          renderAll();
        },
      })
    );
  });
}

function renderBudgets() {
  budgetGrid.innerHTML = "";

  marketplaceData.budgets.forEach((budget) => {
    budgetGrid.appendChild(
      createSelectionCard({
        title: budget.label,
        description: "Smart filtering by price range.",
        icon: "₹",
        selected: state.selectedBudget === budget.id,
        onClick: () => {
          state.selectedBudget = budget.id;
          renderAll();
          document.getElementById("results").scrollIntoView({ behavior: "smooth", block: "start" });
        },
      })
    );
  });
}

function filterProducts() {
  return marketplaceData.products
    .filter((product) => {
      const matchesCategory = state.selectedCategory ? product.category === state.selectedCategory : true;
      const matchesSubcategory = state.selectedSubcategory
        ? product.subcategory === state.selectedSubcategory
        : true;
      const selectedBudget = marketplaceData.budgets.find((budget) => budget.id === state.selectedBudget);
      const matchesBudget = selectedBudget
        ? product.price >= selectedBudget.min && product.price <= selectedBudget.max
        : true;
      const keyword = state.searchTerm.trim().toLowerCase();
      const matchesSearch = keyword
        ? [product.name, product.platform, product.category, product.subcategory].some((field) =>
            field.toLowerCase().includes(keyword)
          )
        : true;

      return matchesCategory && matchesSubcategory && matchesBudget && matchesSearch;
    })
    .sort((left, right) => {
      const ratingScore = right.rating - left.rating;
      if (ratingScore !== 0) {
        return ratingScore;
      }
      return left.price - right.price;
    })
    .slice(0, 5);
}

function renderResults() {
  const filtered = filterProducts();
  resultsGrid.innerHTML = "";

  if (!state.selectedCategory && !state.searchTerm) {
    resultCount.textContent = "Pick a path to see curated products";
    emptyState.classList.add("hidden");
    return;
  }

  resultCount.textContent = `${filtered.length} smart recommendation${filtered.length === 1 ? "" : "s"}`;

  if (!filtered.length) {
    emptyState.classList.remove("hidden");
    return;
  }

  emptyState.classList.add("hidden");

  filtered.forEach((product) => {
    const article = document.createElement("article");
    article.className = "result-card";
    article.innerHTML = `
      <div class="result-image">
        <img src="${product.image}" alt="${product.name}" />
      </div>
      <div class="result-body">
        <div class="result-topline">
          <span class="tag">${product.tag}</span>
          <span class="platform-badge">${product.platform}</span>
        </div>
        <h3>${product.name}</h3>
        <p class="result-meta">${product.category} • ${product.subcategory}</p>
        <div class="result-price">${formatPrice(product.price)}</div>
        <p class="result-meta"><span class="stars">${getStars(product.rating)}</span> ${product.rating}/5 rating</p>
        <div class="result-footer">
          <span class="price-badge">${product.discount}</span>
          <a class="result-link" href="${product.link}" target="_blank" rel="noreferrer">Buy Now</a>
        </div>
      </div>
    `;
    resultsGrid.appendChild(article);
  });
}

function renderTrending() {
  trendingGrid.innerHTML = "";

  marketplaceData.products
    .filter((product) => product.trending)
    .slice(0, 8)
    .forEach((product) => {
      const card = document.createElement("article");
      card.className = "trending-card";
      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" />
        <div class="trending-topline">
          <span class="platform-badge">${product.platform}</span>
          <span class="price-badge">${product.discount}</span>
        </div>
        <h3>${product.name}</h3>
        <p>${product.tag} • ${formatPrice(product.price)}</p>
      `;
      trendingGrid.appendChild(card);
    });
}

function renderQuickDeals() {
  quickDeals.innerHTML = "";

  marketplaceData.products
    .filter((product) => product.price <= 999)
    .slice(0, 4)
    .forEach((product) => {
      const card = document.createElement("a");
      card.className = "mini-deal";
      card.href = product.link;
      card.target = "_blank";
      card.rel = "noreferrer";
      card.innerHTML = `
        <div class="mini-deal-header">
          <h4>${product.name}</h4>
          <span class="price-badge">${formatPrice(product.price)}</span>
        </div>
        <p>${product.platform} • ${product.tag}</p>
      `;
      quickDeals.appendChild(card);
    });
}

function updateStepPanels() {
  stepPanels.forEach((panel) => {
    panel.classList.toggle("active", Number(panel.dataset.step) === state.currentStep);
  });

  stepIndicators.forEach((indicator) => {
    indicator.classList.toggle("active", Number(indicator.dataset.stepIndicator) === state.currentStep);
  });

  backButton.disabled = state.currentStep === 1;
}

function renderCarousel() {
  carouselElements.dots.innerHTML = "";

  liveDeals.forEach((product, index) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = index === state.currentSlide ? "active" : "";
    dot.setAttribute("aria-label", `Go to slide ${index + 1}`);
    dot.addEventListener("click", () => {
      state.currentSlide = index;
      updateCarouselSlide();
    });
    carouselElements.dots.appendChild(dot);
  });

  updateCarouselSlide();
}

function updateCarouselSlide() {
  const slide = liveDeals[state.currentSlide];
  if (!slide) {
    return;
  }

  carouselElements.image.src = slide.image;
  carouselElements.image.alt = slide.name;
  carouselElements.badge.textContent = slide.discount;
  carouselElements.title.textContent = slide.name;
  carouselElements.meta.textContent = `${slide.platform} • ${slide.tag} • ${formatPrice(slide.price)}`;
  carouselElements.link.href = slide.link;

  [...carouselElements.dots.children].forEach((dot, index) => {
    dot.classList.toggle("active", index === state.currentSlide);
  });
}

function nextSlide() {
  state.currentSlide = (state.currentSlide + 1) % liveDeals.length;
  updateCarouselSlide();
}

function previousSlide() {
  state.currentSlide = (state.currentSlide - 1 + liveDeals.length) % liveDeals.length;
  updateCarouselSlide();
}

function renderAll() {
  renderCategories();
  renderSubcategories();
  renderBudgets();
  renderResults();
  updateStepPanels();
}

document.getElementById("nextSlide").addEventListener("click", nextSlide);
document.getElementById("prevSlide").addEventListener("click", previousSlide);

globalSearch.addEventListener("input", (event) => {
  state.searchTerm = event.target.value;
  renderResults();
});

backButton.addEventListener("click", () => {
  if (state.currentStep > 1) {
    state.currentStep -= 1;
    renderAll();
  }
});

resetButton.addEventListener("click", () => {
  state.selectedCategory = "";
  state.selectedSubcategory = "";
  state.selectedBudget = "";
  state.searchTerm = "";
  state.currentStep = 1;
  globalSearch.value = "";
  renderAll();
});

renderCarousel();
renderTrending();
renderQuickDeals();
renderAll();

setInterval(nextSlide, 5000);
