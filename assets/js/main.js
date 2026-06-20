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

// ── Admin Modal Logic ──
const adminData = {
  director: {
    name: "Tariq Ali Siddiqui",
    role: "Director",
    photo: "assets/images/tariqsid2.png",
    text: `Education is key industry which feeds all industries. No real progress is possible in any field of life without education. A man without education can be compared to a well furnished house without a lamp. The quality of education determines the quality of a nation. A high quality of life is supposed to raise the economic, social and political status of a country. Hence wise investment in education ensures the all round development of a country.

    TIPS is proud to proclaim that it is maintaining its excellence and ascent under the able guidance of members of managing committee. Our teachers and members of the non-teaching staff are leaving no stone unturned in promoting social and cultural activities along with academics in our students. May the united efforts of our students and teachers continue in achieving the goals and ambitions of every student in today's competitive world.

    I hope for a better tomorrow, So that the future of the nation can be carved in a perfect shape to bring peace and prosperity in this world.`
  },
  principal: {
    name: "Farah Ahmad Siddiqui",
    role: "Principal",
    photo: "assets/images/fasid.png",
    text: `Every child is unique and they learn in their unique style. Growing minds have infinite capacity to understand and grasp various skills. We at TIPS aim to develop knowledge, discipline confidence, excellence and a sense of responsibility amongst them.

    The purpose of our school is to aid and accelerate the process of learning by providing an environment designed to encourage the Child's independent effort. Our primary goals are to build self-confidence and independence, to develop concentration and to nourish the love of learning. What we strive to provide is a solid launching pad upon which a child can propel himself to new heights of glory limited only by the individual's creativity and zest.

    Base of efficient functioning of the school in all spheres lies in the constructive co-operation among our teachers both in curricular and co-curricular activities. From behind the screen this is supplemented by the untiring efforts of the ever vigilant non-teaching staff. Management committee in its role, provides expert supervision and direction needed to regulate the school affair from time to time.

    Enterprising parents have always been a source of inspiration and help. They provide the factual feed back mandatory to fill up the invisible loop holes.

    I pray, we keep getting the co-operation from all quarters to make this institution one of the best in the Jaipur.`
  },
  headmistress: {
    name: "Heena Kaousar",
    role: "Headmistress",
    photo: "assets/images/heenak.png",
    text: `Ms. Heena Kaousar brings over 25 years of rich experience in the field of education and currently serves as the Headmistress of The Indian Public Secondary School. She has dedicated 20 years of her professional journey to the institution, playing a pivotal role in its growth and development. Alongside her administrative leadership, she remains deeply passionate about teaching and actively instructs higher classes in her areas of expertise, Mathematics and Science.

    Her educational philosophy is shaped by a strong academic foundation, including a Bachelor of Computer Science (B.C.S.) and a Bachelor of Education (B.Ed.) with specialization in Mathematics and Science from Savitribai Phule Pune University. To further strengthen her leadership and management capabilities, she pursued advanced professional qualifications, earning a Diploma in Management (DIM), a Post Graduate Diploma in Management (PGDIM), and a Post Graduate Diploma in Operational Management (PGDIM).

    By combining technical expertise, scientific inquiry, and effective management practices, Ms. Heena Kaousar is committed to fostering an environment of academic excellence, discipline, innovation, and holistic development, ensuring that every student receives the guidance and opportunities needed to thrive.`
  }
};

const adminModal = document.getElementById("adminModal");
const mPhoto = document.getElementById("modalPhoto");
const mName = document.getElementById("modalName");
const mRole = document.getElementById("modalDesignation");
const mQuote = document.getElementById("modalQuote");

function openAdminModal(type) {
  const data = adminData[type];
  if (!data) return;

  mPhoto.src = data.photo;
  mPhoto.alt = data.name;
  mName.textContent = data.name;
  mRole.textContent = data.role;
  mQuote.textContent = data.text;

  adminModal.classList.add("active");
  document.body.style.overflow = "hidden"; // Prevent scrolling
}

function closeAdminModal() {
  adminModal.classList.remove("active");
  document.body.style.overflow = "";
}

// Close on outside click
adminModal.addEventListener("click", (e) => {
  if (e.target === adminModal) closeAdminModal();
});
