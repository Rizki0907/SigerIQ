const REGENCY_DATA = [
  { name: "Tulang Bawang", count: 285, risk: 36.73, literacy: 50.39, lowNet: 48.77, cashOnly: 13.68, tier: "Prioritas utama" },
  { name: "Mesuji", count: 170, risk: 36.51, literacy: 49.39, lowNet: 42.94, cashOnly: 16.47, tier: "Prioritas utama" },
  { name: "Pesisir Barat", count: 177, risk: 35.74, literacy: 49.60, lowNet: 53.67, cashOnly: 12.43, tier: "Prioritas utama" },
  { name: "Lampung Barat", count: 258, risk: 35.71, literacy: 50.26, lowNet: 53.10, cashOnly: 17.83, tier: "Prioritas utama" },
  { name: "Tanggamus", count: 352, risk: 34.26, literacy: 49.86, lowNet: 41.19, cashOnly: 11.93, tier: "Prioritas utama" },
  { name: "Tulang Bawang Barat", count: 224, risk: 33.96, literacy: 50.12, lowNet: 46.88, cashOnly: 11.16, tier: "Prioritas utama" },
  { name: "Lampung Utara", count: 409, risk: 33.30, literacy: 50.87, lowNet: 39.36, cashOnly: 13.20, tier: "Prioritas utama" },
  { name: "Way Kanan", count: 298, risk: 32.02, literacy: 49.29, lowNet: 38.59, cashOnly: 14.77, tier: "Prioritas utama" },
  { name: "Lampung Tengah", count: 538, risk: 31.20, literacy: 52.44, lowNet: 41.26, cashOnly: 14.13, tier: "Pantauan aktif" },
  { name: "Lampung Timur", count: 534, risk: 29.37, literacy: 51.47, lowNet: 39.70, cashOnly: 13.30, tier: "Pantauan aktif" },
  { name: "Pesawaran", count: 362, risk: 28.38, literacy: 50.60, lowNet: 30.66, cashOnly: 11.88, tier: "Pantauan aktif" },
  { name: "Lampung Selatan", count: 548, risk: 27.96, literacy: 52.56, lowNet: 32.85, cashOnly: 11.50, tier: "Pantauan aktif" },
  { name: "Pringsewu", count: 323, risk: 17.58, literacy: 59.51, lowNet: 30.65, cashOnly: 12.07, tier: "Hub tumbuh" },
  { name: "Metro", count: 323, risk: 13.92, literacy: 61.00, lowNet: 12.07, cashOnly: 9.29, tier: "Hub tumbuh" },
  { name: "Bandar Lampung", count: 799, risk: 9.25, literacy: 63.18, lowNet: 8.64, cashOnly: 5.88, tier: "Hub tumbuh" }
];

const POLICY_SCENARIOS = [
  {
    id: 0,
    title: "Migrasi pembayaran tunai ke QRIS",
    naikKelas: 15.21,
    langsungTumbuh: 0.00,
    turunRisiko: 2.20,
    summary: "Memindahkan UMKM bertransaksi tunai saja ke QRIS menurunkan hambatan transaksi ritel dan langsung mengangkat 15,21% kohort berisiko keluar dari zona penurunan."
  },
  {
    id: 1,
    title: "Onboarding minimal 2 platform digital",
    naikKelas: 21.68,
    langsungTumbuh: 0.00,
    turunRisiko: 6.97,
    summary: "Koefisien Ordinal Probit menunjukkan lonjakan non-linear kuat saat UMKM melewati ambang 2 platform aktif (+0,2771), mengangkat 21,68% UMKM berisiko ke zona stabil."
  },
  {
    id: 2,
    title: "Upgrade kualitas internet rendah ke sedang",
    naikKelas: 38.06,
    langsungTumbuh: 0.00,
    turunRisiko: 14.24,
    summary: "Konektivitas rendah adalah penghambat terberat (-0,6167). Pemerataan sinyal di Pesisir Barat dan Lampung Barat memangkas risiko penurunan rata-rata sebesar 14,24 poin persentase."
  },
  {
    id: 3,
    title: "Pelatihan digital dan literasi +15 poin",
    naikKelas: 70.68,
    langsungTumbuh: 0.07,
    turunRisiko: 33.78,
    summary: "Intervensi tunggal paling efektif: menggabungkan pelatihan resmi dan peningkatan literasi digital (+0,8231/SD) menyelamatkan 70,68% UMKM dari status menurun."
  },
  {
    id: 4,
    title: "Paket terpadu Lampung Digital Boost",
    naikKelas: 93.67,
    langsungTumbuh: 11.29,
    turunRisiko: 54.51,
    summary: "Sinergi penuh (literasi +15 poin, pelatihan, upgrade internet, minimal 2 platform, dan QRIS/multi-kanal) mengangkat 93,67% UMKM berisiko naik kelas dan mendorong 11,29% langsung ke status Tumbuh."
  }
];

const MODEL_BENCHMARKS = [
  { model: "Hybrid Ensemble (Ordinal 2-Threshold)", f1: 0.67562, ll: 0.70029, acc: 0.6684, qwk: 0.6894, highlight: true },
  { model: "Multiclass CatBoost (Regularized)", f1: 0.67563, ll: 0.71123, acc: 0.6707, qwk: 0.6809 },
  { model: "Ordinal Probit (Enriched FE)", f1: 0.67343, ll: 0.70140, acc: 0.6686, qwk: 0.6803 },
  { model: "Ordinal Probit (Base)", f1: 0.67328, ll: 0.70082, acc: 0.6684, qwk: 0.6795 },
  { model: "Multiclass LightGBM (Regularized)", f1: 0.67314, ll: 0.71671, acc: 0.6680, qwk: 0.6785 },
  { model: "Ordinal Logit (Base)", f1: 0.67271, ll: 0.70237, acc: 0.6679, qwk: 0.6791 },
  { model: "Ordinal Binary LightGBM", f1: 0.67254, ll: 0.71578, acc: 0.6671, qwk: 0.6794 },
  { model: "Multinomial Logistic Regression (L2)", f1: 0.67246, ll: 0.70417, acc: 0.6670, qwk: 0.6802 },
  { model: "Ordinal Binary XGBoost", f1: 0.67230, ll: 0.71633, acc: 0.6666, qwk: 0.6795 },
  { model: "Ordinal Binary CatBoost", f1: 0.67118, ll: 0.71422, acc: 0.6661, qwk: 0.6775 },
  { model: "Regularized Bagged MLP", f1: 0.67073, ll: 0.72298, acc: 0.6655, qwk: 0.6779 },
  { model: "Multiclass HistGBDT (Regularized)", f1: 0.66771, ll: 0.72695, acc: 0.6625, qwk: 0.6718 },
  { model: "Dummy Majority Baseline", f1: 0.20047, ll: 20.5449, acc: 0.4300, qwk: 0.0000 }
];

const ABLATION_STAGES = [
  { stage: "1. Default HistGBDT (Raw)", f1: 0.64742, ll: 0.79175, note: "Baseline mentah sebelum pembersihan" },
  { stage: "2. LogReg Baseline (Raw + Median)", f1: 0.66224, ll: 0.72091, note: "Sinyal linear aditif lebih stabil" },
  { stage: "3. Pembersihan 37 omzet korup ke NaN", f1: 0.66480, ll: 0.71918, note: "Menghapus noise desimal panjang" },
  { stage: "4. Transformasi log1p fitur miring", f1: 0.67125, ll: 0.71279, note: "Lonjakan terbesar F1 (+0,0065)" },
  { stage: "5. MICE + Soft Categorical Imputation", f1: 0.67332, ll: 0.70919, note: "Memulihkan literasi R2 +0,4935" },
  { stage: "6. Model Ordinal Probit (Gaussian)", f1: 0.67096, ll: 0.70543, note: "Kalibrasi urutan kelas membaik" },
  { stage: "7. Non-Linear Platform + Domain FE", f1: 0.67282, ll: 0.70148, note: "LogLoss terendah sebelum ensemble", highlight: true }
];

const FIGURES = [
  {
    src: "assets/figures/01_target_and_data_quality.png",
    title: "Distribusi target dan audit kualitas data",
    caption: "Proporsi target (Stabil 43%, Tumbuh 30%, Menurun 27%), pola nilai kosong 8 kolom, dan 37 pencilan korup omzet.",
    group: "eda"
  },
  {
    src: "assets/figures/02_eda_digital_drivers.png",
    title: "Pendorong digital pertumbuhan UMKM",
    caption: "Gradien monotonik pada literasi digital, metode pembayaran, kualitas internet, dan keikutsertaan pelatihan.",
    group: "eda"
  },
  {
    src: "assets/figures/03_eda_spatial_sector_lampung.png",
    title: "Disparitas 15 kabupaten/kota dan sektor usaha",
    caption: "Kesenjangan pertumbuhan Bandar Lampung dan Metro terhadap kabupaten periferal serta perbandingan 6 sektor.",
    group: "eda"
  },
  {
    src: "assets/figures/04_preprocessing_ablation.png",
    title: "Studi ablasi 7 tahap prapemrosesan",
    caption: "Penurunan LogLoss bertahap dari 0,79175 menjadi 0,70148 dan peningkatan Macro F1 secara konsisten.",
    group: "model"
  },
  {
    src: "assets/figures/05_model_comparison_cv.png",
    title: "Benchmark 12 model pada 10-Fold CV",
    caption: "Perbandingan Macro F1, LogLoss, dan Quadratic Weighted Kappa hingga Hybrid Ensemble 0,67562.",
    group: "model"
  },
  {
    src: "assets/figures/06_evaluation_confusion_error.png",
    title: "Evaluasi holdout 1.400 baris dan error analysis",
    caption: "Holdout Macro F1 0,66194 dengan 97,72% kesalahan terbatas pada kelas bertetangga (hanya 0,79% ekstrem).",
    group: "xai"
  },
  {
    src: "assets/figures/07_interpretability_shap_probit.png",
    title: "Interpretabilitas 10-Fold Ordinal Probit dan SHAP",
    caption: "Literasi digital (+0,8231) dan kualitas internet (-0,6167 vs +0,4632) terbukti menjadi tuas paling dominan.",
    group: "xai"
  },
  {
    src: "assets/figures/08_policy_priority_matrix.png",
    title: "Matriks prioritas wilayah dan simulasi What-If",
    caption: "Pemetaan 8 kabupaten prioritas utama dan dampak Paket Lampung Digital Boost pada 1.453 UMKM berisiko.",
    group: "xai"
  }
];

function normalCdf(z) {
  const t = 1 / (1 + 0.2316419 * Math.abs(z));
  const d = 0.3989422804014327 * Math.exp((-z * z) / 2);
  const p = d * t * (0.31938153 + t * (-0.356563782 + t * (1.781477937 + t * (-1.821255978 + t * 1.330274429))));
  return z > 0 ? 1 - p : p;
}

function updateSimulator() {
  const lit = parseFloat(document.getElementById("sim-literasi").value);
  const net = document.getElementById("sim-internet").value;
  const pay = document.getElementById("sim-bayar").value;
  const train = document.getElementById("sim-pelatihan").value;
  const plat = parseInt(document.getElementById("sim-platform").value, 10);
  const rating = parseFloat(document.getElementById("sim-rating").value);

  document.getElementById("val-literasi").textContent = lit.toFixed(0) + " / 100";
  document.getElementById("val-platform").textContent = plat + " platform";
  document.getElementById("val-rating").textContent = rating.toFixed(1) + " / 5.0";

  const zLit = (lit - 53.7) / 17.5;
  const zRat = (rating - 4.08) / 0.49;

  let latent = 0.8231 * zLit + 0.2944 * zRat;
  if (net === "Rendah") latent -= 0.6167;
  else if (net === "Sedang") latent += 0.1539;
  else latent += 0.4632;

  if (pay === "Tunai saja") latent -= 0.2639;
  else if (pay === "Multi-kanal") latent += 0.2900;

  latent += train === "Ya" ? 0.2197 : -0.2193;
  latent += plat >= 2 ? 0.2771 : -0.22;

  const tau1 = -0.68;
  const tau2 = 0.62;
  const p0 = normalCdf(tau1 - latent);
  const p1 = Math.max(0.001, normalCdf(tau2 - latent) - p0);
  const p2 = Math.max(0.001, 1 - normalCdf(tau2 - latent));
  const sum = p0 + p1 + p2;
  const pr0 = p0 / sum;
  const pr1 = p1 / sum;
  const pr2 = p2 / sum;

  const expectedClass = pr1 + 2 * pr2;
  let label = "Stabil";
  let badgeClass = "verdict-stabil";
  if (expectedClass < 0.6038) {
    label = "Menurun";
    badgeClass = "verdict-menurun";
  } else if (expectedClass >= 1.4005) {
    label = "Tumbuh";
    badgeClass = "verdict-tumbuh";
  }

  const badge = document.getElementById("sim-verdict");
  badge.textContent = label;
  badge.className = "verdict-badge " + badgeClass;

  document.getElementById("bar-menurun").style.transform = "scaleX(" + pr0.toFixed(3) + ")";
  document.getElementById("bar-stabil").style.transform = "scaleX(" + pr1.toFixed(3) + ")";
  document.getElementById("bar-tumbuh").style.transform = "scaleX(" + pr2.toFixed(3) + ")";

  document.getElementById("pct-menurun").textContent = (pr0 * 100).toFixed(1) + "%";
  document.getElementById("pct-stabil").textContent = (pr1 * 100).toFixed(1) + "%";
  document.getElementById("pct-tumbuh").textContent = (pr2 * 100).toFixed(1) + "%";
}

function renderPolicyScenarios(activeId) {
  const listEl = document.getElementById("scenario-list");
  listEl.innerHTML = "";
  POLICY_SCENARIOS.forEach((sc) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "scenario-btn";
    btn.setAttribute("aria-pressed", String(sc.id === activeId));
    btn.innerHTML =
      '<span class="scenario-name">' + sc.title + "</span>" +
      '<span class="scenario-metric">+' + sc.naikKelas.toFixed(1) + "% naik</span>";
    btn.addEventListener("click", () => renderPolicyScenarios(sc.id));
    listEl.appendChild(btn);
  });

  const cur = POLICY_SCENARIOS[activeId];
  document.getElementById("policy-title").textContent = cur.title;
  document.getElementById("policy-summary").textContent = cur.summary;
  document.getElementById("policy-naik").textContent = cur.naikKelas.toFixed(2) + "%";
  document.getElementById("policy-tumbuh").textContent = cur.langsungTumbuh.toFixed(2) + "%";
  document.getElementById("policy-turun").textContent = "-" + cur.turunRisiko.toFixed(2) + " pp";
}

function renderRegencyTable(filterTier, searchText) {
  const tbody = document.getElementById("regency-tbody");
  tbody.innerHTML = "";
  const query = searchText.trim().toLowerCase();

  REGENCY_DATA.filter((row) => {
    const tierOk = filterTier === "all" || row.tier === filterTier;
    const textOk = !query || row.name.toLowerCase().includes(query);
    return tierOk && textOk;
  }).forEach((row) => {
    const tierCls =
      row.tier === "Prioritas utama"
        ? "tier-high"
        : row.tier === "Pantauan aktif"
        ? "tier-mid"
        : "tier-urban";
    const tr = document.createElement("tr");
    tr.innerHTML =
      "<td><strong>" + row.name + "</strong></td>" +
      '<td><span class="tier-tag ' + tierCls + '">' + row.tier + "</span></td>" +
      '<td class="num-cell">' + row.count + "</td>" +
      '<td><div class="inline-bar-cell"><div class="inline-track"><div class="inline-fill inline-fill-risk" style="width:' + Math.min(100, row.risk * 2.4).toFixed(1) + '%"></div></div><span class="num-cell">' + row.risk.toFixed(1) + "%</span></div></td>" +
      '<td class="num-cell">' + row.literacy.toFixed(1) + "</td>" +
      '<td class="num-cell">' + row.lowNet.toFixed(1) + "%</td>" +
      '<td class="num-cell">' + row.cashOnly.toFixed(1) + "%</td>";
    tbody.appendChild(tr);
  });
}

function renderBenchmarkTab(mode) {
  const headEl = document.getElementById("bench-thead");
  const bodyEl = document.getElementById("bench-tbody");
  bodyEl.innerHTML = "";

  if (mode === "models") {
    headEl.innerHTML =
      "<tr><th>Arsitektur model (10-Fold CV)</th><th>OOF Macro F1</th><th>OOF LogLoss</th><th>Akurasi</th><th>QWK</th></tr>";
    MODEL_BENCHMARKS.forEach((m) => {
      const tr = document.createElement("tr");
      if (m.highlight) tr.className = "row-highlight";
      tr.innerHTML =
        "<td>" + (m.highlight ? "<strong>" + m.model + "</strong>" : m.model) + "</td>" +
        '<td class="num-cell">' + m.f1.toFixed(5) + "</td>" +
        '<td class="num-cell">' + m.ll.toFixed(5) + "</td>" +
        '<td class="num-cell">' + (m.acc * 100).toFixed(2) + "%</td>" +
        '<td class="num-cell">' + m.qwk.toFixed(4) + "</td>";
      bodyEl.appendChild(tr);
    });
  } else {
    headEl.innerHTML =
      "<tr><th>Tahap ablasi (5-Fold CV)</th><th>OOF Macro F1</th><th>OOF LogLoss</th><th>Temuan dampak</th></tr>";
    ABLATION_STAGES.forEach((s) => {
      const tr = document.createElement("tr");
      if (s.highlight) tr.className = "row-highlight";
      tr.innerHTML =
        "<td>" + (s.highlight ? "<strong>" + s.stage + "</strong>" : s.stage) + "</td>" +
        '<td class="num-cell">' + s.f1.toFixed(5) + "</td>" +
        '<td class="num-cell">' + s.ll.toFixed(5) + "</td>" +
        "<td>" + s.note + "</td>";
      bodyEl.appendChild(tr);
    });
  }
}

function renderFigures(groupFilter) {
  const grid = document.getElementById("figure-grid");
  grid.innerHTML = "";
  FIGURES.filter((f) => groupFilter === "all" || f.group === groupFilter).forEach((fig) => {
    const item = document.createElement("figure");
    item.className = "figure-item";
    item.innerHTML =
      '<button type="button" class="figure-btn" aria-label="Perbesar grafik ' + fig.title + '">' +
      '<img src="' + fig.src + '" alt="' + fig.title + '" loading="lazy">' +
      "</button>" +
      '<figcaption class="figure-caption"><strong>' + fig.title + "</strong><span>" + fig.caption + "</span></figcaption>";
    item.querySelector(".figure-btn").addEventListener("click", () => openLightbox(fig));
    grid.appendChild(item);
  });
}

function openLightbox(fig) {
  const lb = document.getElementById("lightbox");
  document.getElementById("lightbox-title").textContent = fig.title;
  document.getElementById("lightbox-img").src = fig.src;
  document.getElementById("lightbox-img").alt = fig.title;
  lb.hidden = false;
  document.getElementById("lightbox-close").focus();
}

function closeLightbox() {
  document.getElementById("lightbox").hidden = true;
}

document.addEventListener("DOMContentLoaded", () => {
  ["sim-literasi", "sim-internet", "sim-bayar", "sim-pelatihan", "sim-platform", "sim-rating"].forEach((id) => {
    document.getElementById(id).addEventListener("input", updateSimulator);
  });
  updateSimulator();

  renderPolicyScenarios(4);

  let currentTier = "all";
  const searchInput = document.getElementById("regency-search");
  renderRegencyTable(currentTier, "");

  document.querySelectorAll("[data-tier]").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("[data-tier]").forEach((b) => b.setAttribute("aria-selected", "false"));
      btn.setAttribute("aria-selected", "true");
      currentTier = btn.getAttribute("data-tier");
      renderRegencyTable(currentTier, searchInput.value);
    });
  });

  searchInput.addEventListener("input", () => renderRegencyTable(currentTier, searchInput.value));

  renderBenchmarkTab("models");
  document.querySelectorAll("[data-bench]").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("[data-bench]").forEach((b) => b.setAttribute("aria-selected", "false"));
      btn.setAttribute("aria-selected", "true");
      renderBenchmarkTab(btn.getAttribute("data-bench"));
    });
  });

  renderFigures("all");
  document.querySelectorAll("[data-fig]").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("[data-fig]").forEach((b) => b.setAttribute("aria-selected", "false"));
      btn.setAttribute("aria-selected", "true");
      renderFigures(btn.getAttribute("data-fig"));
    });
  });

  document.getElementById("lightbox-close").addEventListener("click", closeLightbox);
  document.getElementById("lightbox").addEventListener("click", (e) => {
    if (e.target.id === "lightbox") closeLightbox();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLightbox();
  });
});
