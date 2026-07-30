# Tunahan Keskin Performance — Koçluk ve Program Satış Platformu

Bu proje, **Spor Bilimci ve Beden Eğitimi Öğretmeni Tunahan Keskin** için geliştirilmiş premium fitness, online koçluk, dijital antrenman programı satışı ve egzersiz kütüphanesi platformudur.

---

## ⚡ Kurulum ve Çalıştırma

### Bağımlılıkları Yükleme
```bash
npm install
```

### Geliştirme Sunucusunu Başlatma
```bash
npm run dev
```

### Production Build Alması
```bash
npm run build
npm start
```

---

## 🛠️ Teknoloji Yığını

- **Framework:** Next.js 15 / App Router & Node.js Express Server
- **Language:** TypeScript
- **Styling:** Tailwind CSS / Glassmorphism / Dark Palette (`#0B1220`, `#070B12`, `#111827`, `#1E90FF`, `#FFC857`)
- **Typography:** Bebas Neue, Inter, JetBrains Mono
- **State & Local Storage:** React Hooks, localStorage kalıcılığı, Zod validation
- **APIs:** iyzico, PayTR, OpenAI ChatGPT / Gemini AI Chatbot proxy

---

## 📁 Oluşturulan Sayfalar & Rotalar

1. **`/` (Ana Sayfa)** — Hero, Güven Şeridi, Hizmetler, Öne Çıkanlar, Sonuçlar, Yorumlar, SSS, CTA.
2. **`/online-kocluk`** — Birebir koçluk paketleri (1, 3, 6 ay), karşılaştırma tablosu, sorumluluk reddi.
3. **`/basvuru`** — 7 adımlı koçluk başvuru sihirbazı.
4. **`/programlar`** — Dijital program kataloğu & arama/filtreleme.
5. **`/programlar/[slug]`** — Program detay sayfası & örnek antrenman planı.
6. **`/sepet`** — Sepet yönetimi, kupon kodu ve toplam hesaplama.
7. **`/odeme`** — Demo ödeme altyapısı & fatura adımları.
8. **`/siparis-basarili`** — Sipariş onay ve teslimat bilgisi.
9. **`/egzersizler`** — 18+ hareketlik anatomik egzersiz rehberi.
10. **`/egzersizler/[slug]`** — Egzersiz detay, adımlar, tempo, hatalar, alternatifler.
11. **`/blog`** — Spor bilimi makale kütüphanesi & arama.
12. **`/blog/[slug]`** — Makale detay & bilimsel kaynaklar.
13. **`/hesaplayicilar`** — TDEE, 1RM Epley, BMI hesaplayıcıları.
14. **`/hakkimda`** — Tunahan Keskin biyografisi & akademik unvanları.
15. **`/iletisim`** — İletişim formu, WhatsApp & sosyal kanallar.
16. **Yasal Sayfalar:** `/gizlilik-politikasi`, `/kvkk`, `/cerez-politikasi`, `/mesafeli-satis-sozlesmesi`, `/on-bilgilendirme`, `/iade-politikasi`, `/kullanim-kosullari`, `/saglik-sorumluluk-reddi`.

---

## ⚙️ Marka Bilgilerini ve İçeriği Değiştirme

Tüm marka ayarları `src/config/site.ts` dosyası ve `data/content.json` içerisinden tek noktadan kolayca değiştirilebilir.
