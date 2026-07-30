'use client';

import React, { useState } from 'react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    age: '',
    height: '',
    weight: '',
    goal: 'Kas Kazanımı',
    service: 'Online Eğitim',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission to backend / admin panel
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      // Auto reset success message after 8 seconds
      setTimeout(() => setSubmitted(false), 8000);
    }, 800);
  };

  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 space-y-16">
      
      {/* SECTION HEADER */}
      <div className="space-y-3">
        <span className="font-mono text-sm text-blue-600 font-extrabold tracking-widest uppercase bg-blue-50 px-4 py-1.5 rounded-full border border-blue-200">
          İLETİŞİM &amp; BAŞVURU
        </span>
        <h2 className="font-display text-4xl sm:text-5xl uppercase text-slate-900 tracking-tight">
          HEDEFLERİNE ULAŞMAK İÇİN İLK ADIMI AT
        </h2>
        <p className="text-base sm:text-lg text-slate-600 font-sans leading-relaxed max-w-2xl">
          Kısa formu doldur, en kısa sürede seninle iletişime geçip hedeflerine uygun bilimsel yol haritanı çizelim.
        </p>
      </div>

      {/* MAIN CONTENT GRID (FORM LEFT, INFO CARDS RIGHT) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* LEFT COLUMN: PREMIUM APPLICATION FORM */}
        <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-xl space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="font-mono text-xs text-blue-600 font-extrabold uppercase">ÜCRETSİZ ÖN GÖRÜŞME FORMU</span>
            <h3 className="font-display text-2.5xl text-slate-900 uppercase">KİŞİSEL BAŞVURU FORMU</h3>
          </div>

          {submitted ? (
            <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-2xl text-center space-y-3 animate-fadeIn">
              <span className="text-4xl block">🎉</span>
              <h4 className="font-display text-2xl text-emerald-800 uppercase">BAŞVURUNUZ ALINDI!</h4>
              <p className="text-sm text-emerald-700 font-sans">
                Teşekkürler Sayın <strong>{formData.fullName}</strong>. Bilgileriniz başarıyla kaydedildi. Spor Bilimci Tunahan Keskin en geç 2-4 saat içinde WhatsApp/Telefon aracılığıyla sizinle iletişime geçecektir.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* AD SOYAD */}
              <div>
                <label className="font-mono text-xs font-bold text-slate-700 uppercase block mb-1">Ad Soyad *</label>
                <input
                  type="text"
                  required
                  placeholder="Ahmet Yılmaz"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-blue-600 focus:outline-none font-sans text-slate-900 transition-colors"
                />
              </div>

              {/* TELEFON & E-POSTA GRID */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-mono text-xs font-bold text-slate-700 uppercase block mb-1">Telefon Numarası *</label>
                  <input
                    type="tel"
                    required
                    placeholder="05XX XXX XX XX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-blue-600 focus:outline-none font-sans text-slate-900 transition-colors"
                  />
                </div>

                <div>
                  <label className="font-mono text-xs font-bold text-slate-700 uppercase block mb-1">E-posta Adresi *</label>
                  <input
                    type="email"
                    required
                    placeholder="ornek@gmail.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-blue-600 focus:outline-none font-sans text-slate-900 transition-colors"
                  />
                </div>
              </div>

              {/* YAŞ, BOY, KİLO GRID */}
              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="font-mono text-xs font-bold text-slate-700 uppercase block mb-1">Yaş</label>
                  <input
                    type="number"
                    placeholder="28"
                    value={formData.age}
                    onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                    className="w-full px-3 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-blue-600 focus:outline-none font-sans text-slate-900 transition-colors"
                  />
                </div>

                <div>
                  <label className="font-mono text-xs font-bold text-slate-700 uppercase block mb-1">Boy (cm)</label>
                  <input
                    type="number"
                    placeholder="180"
                    value={formData.height}
                    onChange={(e) => setFormData({ ...formData, height: e.target.value })}
                    className="w-full px-3 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-blue-600 focus:outline-none font-sans text-slate-900 transition-colors"
                  />
                </div>

                <div>
                  <label className="font-mono text-xs font-bold text-slate-700 uppercase block mb-1">Kilo (kg)</label>
                  <input
                    type="number"
                    placeholder="78"
                    value={formData.weight}
                    onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                    className="w-full px-3 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-blue-600 focus:outline-none font-sans text-slate-900 transition-colors"
                  />
                </div>
              </div>

              {/* HEDEF & HİZMET SEÇİMİ GRID */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-mono text-xs font-bold text-slate-700 uppercase block mb-1">Ana Hedefiniz</label>
                  <select
                    value={formData.goal}
                    onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-blue-600 focus:outline-none font-sans text-slate-900 transition-colors"
                  >
                    <option value="Kas Kazanımı">Kas Kazanımı (Hipertrofi)</option>
                    <option value="Yağ Yakımı">Yağ Yakımı &amp; Vücut Şekillendirme</option>
                    <option value="Atletik Performans">Atletik Performans &amp; Hız</option>
                    <option value="Postür ve Sağlık">Postür Düzeltim &amp; Ağrısız Yaşam</option>
                  </select>
                </div>

                <div>
                  <label className="font-mono text-xs font-bold text-slate-700 uppercase block mb-1">Tercih Edilen Hizmet</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-blue-600 focus:outline-none font-sans text-slate-900 transition-colors"
                  >
                    <option value="Online Eğitim">Online Eğitim (2.990 TL/Ay)</option>
                    <option value="Premium Online">Premium Online (4.990 TL/Ay)</option>
                    <option value="Yüz Yüze PT">Yüz Yüze Personal Training</option>
                    <option value="Atletik Performans">Atletik Performans</option>
                    <option value="Pilates">Mat &amp; Reformer Pilates</option>
                    <option value="Medikal Egzersiz">Medikal Egzersiz</option>
                  </select>
                </div>
              </div>

              {/* MESAJ */}
              <div>
                <label className="font-mono text-xs font-bold text-slate-700 uppercase block mb-1">Ek Notlar / Mesajınız</label>
                <textarea
                  rows={3}
                  placeholder="Mevcut antrenman geçmişiniz, varsa sağlık hassasiyetiniz veya sormak istedikleriniz..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-blue-600 focus:outline-none font-sans text-slate-900 transition-colors"
                />
              </div>

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-mono text-base font-extrabold uppercase rounded-xl transition-all shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <span>⏳ Gönderiliyor...</span>
                ) : (
                  <>
                    <span>🚀</span>
                    <span>ÜCRETSİZ ÖN GÖRÜŞME TALEP ET</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>

        {/* RIGHT COLUMN: PREMIUM CONTACT INFO CARDS */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="space-y-2">
            <span className="font-mono text-xs text-blue-600 font-extrabold uppercase bg-blue-50 px-3.5 py-1 rounded-full border border-blue-200 inline-block">
              KURUMSAL İLETİŞİM
            </span>
            <h3 className="font-display text-3xl text-slate-900 uppercase">
              DOĞRUDAN ULAŞIN
            </h3>
          </div>

          <div className="space-y-4">
            
            {/* TELEFON */}
            <a
              href="tel:+905445300481"
              className="premium-card p-5 rounded-2xl bg-white border border-slate-200 flex items-center gap-4 hover:border-blue-400 transition-all shadow-sm group"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 text-2xl flex items-center justify-center shrink-0 border border-blue-100">
                📞
              </div>
              <div>
                <span className="font-mono text-xs text-slate-500 block">TELEFON</span>
                <strong className="font-display text-xl text-slate-900 group-hover:text-blue-600 transition-colors">
                  +90 544 530 04 81
                </strong>
              </div>
            </a>

            {/* WHATSAPP */}
            <a
              href="https://wa.me/905445300481?text=Merhaba%20Tunahan%20Hocam,%20bilgi%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="premium-card p-5 rounded-2xl bg-emerald-50/50 border border-emerald-200 flex items-center gap-4 hover:bg-emerald-50 transition-all shadow-sm group"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white text-2xl flex items-center justify-center shrink-0 shadow-sm">
                💬
              </div>
              <div>
                <span className="font-mono text-xs text-emerald-800 font-bold block">WHATSAPP ANLIK İLETİŞİM</span>
                <strong className="font-display text-xl text-emerald-900">
                  +90 544 530 04 81
                </strong>
              </div>
            </a>

            {/* E-POSTA */}
            <a
              href="mailto:pt.tuna61@gmail.com"
              className="premium-card p-5 rounded-2xl bg-white border border-slate-200 flex items-center gap-4 hover:border-blue-400 transition-all shadow-sm group"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 text-2xl flex items-center justify-center shrink-0 border border-blue-100">
                ✉️
              </div>
              <div>
                <span className="font-mono text-xs text-slate-500 block">E-POSTA</span>
                <strong className="font-display text-lg text-slate-900 group-hover:text-blue-600 transition-colors">
                  pt.tuna61@gmail.com
                </strong>
              </div>
            </a>

            {/* INSTAGRAM */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="premium-card p-5 rounded-2xl bg-white border border-slate-200 flex items-center gap-4 hover:border-pink-400 transition-all shadow-sm group"
            >
              <div className="w-12 h-12 rounded-xl bg-pink-50 text-pink-600 text-2xl flex items-center justify-center shrink-0 border border-pink-100">
                📸
              </div>
              <div>
                <span className="font-mono text-xs text-slate-500 block">INSTAGRAM</span>
                <strong className="font-display text-lg text-slate-900 group-hover:text-pink-600 transition-colors">
                  @tunahan.keskin.pt
                </strong>
              </div>
            </a>

            {/* KONUM & SAATLER GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="premium-card p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                <span className="font-mono text-xs text-slate-500 block">📍 LOKASYON</span>
                <strong className="font-display text-lg text-slate-900 block">Trabzon, Türkiye</strong>
              </div>

              <div className="premium-card p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                <span className="font-mono text-xs text-slate-500 block">⏰ ÇALIŞMA SAATLERİ</span>
                <strong className="font-mono text-xs text-slate-900 font-bold block">Pzt - Cmt: 08:00 - 21:30</strong>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* GOOGLE MAPS AREA */}
      <div className="space-y-4">
        <h3 className="font-display text-2.5xl text-slate-900 uppercase border-l-4 border-blue-600 pl-4">
          LOKASYON HARİTASI
        </h3>
        
        <div className="w-full h-80 rounded-3xl overflow-hidden border border-slate-200 shadow-md bg-slate-100 relative">
          <iframe
            title="TK Performance Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96336.87979679169!2d39.66442654716796!3d41.00269784360662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40643c1626242337%3A0xb30fb7d32c525f05!2sTrabzon%2C%20Ortahisar%2FTrabzon!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      {/* SIK SORULAN KISA SORULAR (4 INFO BOXES) */}
      <div className="space-y-6">
        <h3 className="font-display text-2.5xl text-slate-900 uppercase border-l-4 border-amber-500 pl-4">
          BAŞVURU SÜRECİ HAKKINDA SIK SORULANLAR
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="premium-card p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
            <span className="font-mono text-xs text-blue-600 font-extrabold uppercase block">❓ ÜCRETSİZ Mİ?</span>
            <h4 className="font-display text-xl text-slate-900 uppercase">İlk görüşme ücretli mi?</h4>
            <p className="text-sm text-slate-600 font-sans">Hayır. İlk tanışma, ihtiyaç analizi ve ön görüşmemiz %100 ücretsizdir.</p>
          </div>

          <div className="premium-card p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
            <span className="font-mono text-xs text-blue-600 font-extrabold uppercase block">⚙️ SİSTEM</span>
            <h4 className="font-display text-xl text-slate-900 uppercase">Online program nasıl işliyor?</h4>
            <p className="text-sm text-slate-600 font-sans">Form alındıktan sonra hedefleriniz analiz edilir ve özel antrenman paneliniz kurulur.</p>
          </div>

          <div className="premium-card p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
            <span className="font-mono text-xs text-blue-600 font-extrabold uppercase block">⏱️ DÖNÜŞ SÜRESİ</span>
            <h4 className="font-display text-xl text-slate-900 uppercase">Ne kadar sürede dönüş yapılır?</h4>
            <p className="text-sm text-slate-600 font-sans">Başvurunuz bize ulaştıktan sonra maksimum 2-4 saat içinde dönüş yapılır.</p>
          </div>

          <div className="premium-card p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
            <span className="font-mono text-xs text-blue-600 font-extrabold uppercase block">👥 KAPSAM</span>
            <h4 className="font-display text-xl text-slate-900 uppercase">Kimler başvurabilir?</h4>
            <p className="text-sm text-slate-600 font-sans">Yeni başlayanlardan profesyonel sporculara kadar tüm seviyedeki bireyler başvurabilir.</p>
          </div>
        </div>
      </div>

      {/* BOTTOM CTA BANNER */}
      <div className="premium-card rounded-3xl p-10 sm:p-14 text-center space-y-6 bg-slate-900 text-white border border-slate-800 shadow-2xl">
        <span className="font-mono text-xs text-emerald-400 font-extrabold tracking-widest uppercase bg-emerald-950 px-4 py-1.5 rounded-full border border-emerald-800 inline-block">
          ANINDA İLETİŞİM
        </span>

        <h3 className="font-display text-4xl sm:text-6xl text-white uppercase tracking-tight">
          Bugün Başla, Değişimini Erteleme.
        </h3>

        <p className="text-base sm:text-lg text-slate-300 font-sans max-w-xl mx-auto leading-relaxed">
          Bilimsel planlama, düzenli takip ve kişiye özel programlarla hedeflerine güvenle ilerle.
        </p>

        <div className="flex flex-wrap justify-center gap-4 pt-2 font-mono text-base">
          <a
            href="https://wa.me/905445300481?text=Merhaba%20Tunahan%20Hocam,%20hemen%20ba%C5%9Flamak%20istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold px-9 py-4.5 rounded-xl shadow-xl shadow-emerald-500/25 hover:scale-105 transition-all flex items-center gap-2"
          >
            <span>💬</span>
            <span>WhatsApp'tan Hemen Yaz</span>
          </a>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4.5 rounded-xl transition-all"
          >
            🚀 Başvuru Formunu Gönder
          </a>
        </div>
      </div>

    </section>
  );
};
