# SigerIQ — Intelijen Pertumbuhan UMKM Digital Provinsi Lampung

Dasbor web interaktif dan artefak resmi Babak Final **Kompetisi Nasional GEMATIK VI 2026 — Cabang Data Science** (Universitas Teknokrat Indonesia).

- **Tim:** ditantang habib (Rizki Piji Fathoni & Rahmawati Dian Pratiwi)
- **Institusi:** Program Studi S1 Sains Data, FMIPA, Universitas Negeri Surabaya (UNESA)
- **Metrik Utama:** 10-Fold Nested-CV Macro F1 = **0.67562** (LogLoss = **0.70029**) | Holdout Macro F1 (1.400 baris) = **0.66194** (QWK = **0.66727**, 97,72% error bertetangga)

## Fitur Dasbor
1. **Simulator Prediksi Status UMKM Langsung** berbasis koefisien 10-Fold Ordinal Probit dan ambang batas ordinal (`c0=0.6038, c1=1.4005`).
2. **Simulasi Kebijakan What-If** pada 1.453 UMKM berisiko (`Menurun`), termasuk *Paket Terpadu Lampung Digital Boost* (93,67% naik kelas, penurunan risiko -54,51 pp).
3. **Peta Prioritas 15 Kabupaten/Kota Lampung** dengan pencarian dan filter kategori prioritas.
4. **Benchmark 12 Model & Studi Ablasi 7 Tahap** bebas kebocoran data.
5. **Galeri 8 Figur Publikasi 300 DPI** dengan tampilan zoom *lightbox*.
