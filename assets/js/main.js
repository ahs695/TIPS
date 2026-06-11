// URL of your Google Apps Script Web App
const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbx9RBQKbl0v7HyzIZ52tddFQ4ouigi52St3cjutJr1nrzLK39LnVKgZ75uHXNuHRfWx/exec";

const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () =>
  navbar.classList.toggle("scrolled", window.scrollY > 40),
);
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
menuBtn.addEventListener("click", () => mobileMenu.classList.toggle("open"));
function closeMobile() {
  mobileMenu.classList.remove("open");
}

const reveals = document.querySelectorAll("[data-reveal]");
const obs = new IntersectionObserver(
  (entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add("revealed"), i * 80);
        obs.unobserve(e.target);
      }
    });
  },
  { threshold: 0.12 },
);
reveals.forEach((el) => obs.observe(el));

function showToast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 4200);
}

function resetForm() {
  ["parentName", "phone", "childName", "message"].forEach(
    (id) => (document.getElementById(id).value = ""),
  );
  document.getElementById("classApply").value = "";
}

function submitForm() {
  const p = document.getElementById("parentName").value.trim();
  const ph = document.getElementById("phone").value.trim();
  const c = document.getElementById("childName").value.trim();
  const cl = document.getElementById("classApply").value;
  const msg = document.getElementById("message").value.trim();

  if (!p || !ph || !c || !cl) {
    showToast("⚠️ Please fill in all required fields.");
    return;
  }

  const submitBtn = document.querySelector(".form-submit");
  const originalBtnText = submitBtn.textContent;
  submitBtn.disabled = true;
  submitBtn.textContent = "Sending...";

  if (SCRIPT_URL === "YOUR_GOOGLE_SCRIPT_URL_HERE") {
    setTimeout(() => {
      showToast(`✅ (Demo) Thank you, ${p}! We'll contact you at ${ph} shortly.`);
      resetForm();
      submitBtn.disabled = false;
      submitBtn.textContent = originalBtnText;
    }, 1000);
    return;
  }

  const payload = { parentName: p, phone: ph, childName: c, classApply: cl, message: msg };

  fetch(SCRIPT_URL, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "text/plain" },
    body: JSON.stringify(payload),
  })
    .then(() => {
      showToast(`✅ Thank you, ${p}! We'll contact you at ${ph} shortly.`);
      resetForm();
    })
    .catch((error) => {
      console.error("Error submitting form:", error);
      showToast("❌ Something went wrong. Please try again or call us directly.");
    })
    .finally(() => {
      submitBtn.disabled = false;
      submitBtn.textContent = originalBtnText;
    });
}

// Gallery tab & dropdown switching
const galleryTabs = document.querySelectorAll(".gallery-tab");
const galleryPanels = document.querySelectorAll(".gallery-panel");
const gallerySelect = document.getElementById("gallerySelect");

function switchGalleryTab(tabId) {
  galleryTabs.forEach((b) => b.classList.toggle("active", b.dataset.tab === tabId));
  galleryPanels.forEach((p) => p.classList.toggle("active", p.id === "tab-" + tabId));
  if (gallerySelect) gallerySelect.value = tabId;
}

galleryTabs.forEach((btn) => {
  btn.addEventListener("click", () => switchGalleryTab(btn.dataset.tab));
});

if (gallerySelect) {
  gallerySelect.addEventListener("change", (e) => switchGalleryTab(e.target.value));
}
