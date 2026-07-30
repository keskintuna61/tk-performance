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

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 8000);
    }, 800);
  };

  return (
    <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12 sm:space-y-16 w-full max-w-full min-w-0 box-border overflow-hidden">
      
      {/* SECTION HEADER */}
      <div className="space-y-3">
        <span className="font-mono text-xs sm:text-sm text-blue-600 font-extrabold tracking-widest uppercase bg-blue-50 px-3.5 sm:px-4 py-1.5 rounded-full border border-blue-200 inline-block">
          İLETİŞİM &amp; BAŞVURU
        </span>
        <h2 className="font-display text-3xl sm:text-5xl uppercase text-slate-900 tracking-tight">
          HEDEFLERİNE ULAŞMAK İÇİN İLK ADIMI AT
        </h2>
        <p className="text-sm sm:text-lg text-slate-600 font-sans leading-relaxed max-w-2xl">
          Kısa formu doldur, en kısa sürede seninle iletişime geçip hedeflerine uygun bilimsel yol haritanı çizelim.
        </p>
      </div>

      {/* MAIN CONTENT LAYOUT CONTAINER */}
      <div className="contact-grid-container grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start w-full min-w-0">
        
        {/* LEFT COLUMN: APPLICATION FORM CARD */}
        <div className="contact-form-card lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-xl space-y-6 w-full max-w-full min-w-0 box-border relative">
          <div className="border-b border-slate-100 pb-4">
            <span className="font-mono text-xs text-blue-600 font-extrabold uppercase">ÜCRETSİZ ÖN GÖRÜŞME FORMU</span>
            <h3 className="font-display text-2xl sm:text-2.5xl text-slate-900 uppercase">KİŞİSEL BAŞVURU FORMU</h3>
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
            <form onSubmit={handleSubmit} className="space-y-4 w-full min-w-0">
              
              {/* AD SOYAD */}
              <div className="w-full min-w-0">
                <label className="font-mono text-xs font-bold text-slate-700 uppercase block mb-1">Ad Soyad *</label>
                <input
                  type="text"
                  required
                  placeholder="Ahmet Yılmaz"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full min-h-[56px] px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-blue-600 focus:outline-none font-sans text-base text-slate-900 transition-colors box-border"
                />
              </div>

              {/* TELEFON & E-POSTA GRID */}
              <div className="contact-form-row-2 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full min-w-0">
                <div className="w-full min-w-0">
                  <label className="font-mono text-xs font-bold text-slate-700 uppercase block mb-1">Telefon Numarası *</label>
                  <input
                    type="tel"
                    required
                    placeholder="05XX XXX XX XX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full min-h-[56px] px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-blue-600 focus:outline-none font-sans text-base text-slate-900 transition-colors box-border"
                  />
                </div>

                <div className="w-full min-w-0">
                  <label className="font-mono text-xs font-bold text-slate-700 uppercase block mb-1">E-posta Adresi *</label>
                  <input
                    type="email"
                    required
                    placeholder="ornek@gmail.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full min-h-[56px] px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-blue-600 focus:outline-none font-sans text-base text-slate-900 transition-colors box-border"
                  />
                </div>
              </div>

              {/* YAŞ, BOY, KİLO GRID */}
              <div className="contact-form-row-3 grid grid-cols-1 sm:grid-cols-3 gap-3 w-full min-w-0">
                <div className="w-full min-w-0">
                  <label className="font-mono text-xs font-bold text-slate-700 uppercase block mb-1">Yaş</label>
                  <input
                    type="number"
                    placeholder="28"
                    value={formData.age}
                    onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                    className="w-full min-h-[56px] px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-blue-600 focus:outline-none font-sans text-base text-slate-900 transition-colors box-border"
                  />
                </div>

                <div className="w-full min-w-0">
                  <label className="font-mono text-xs font-bold text-slate-700 uppercase block mb-1">Boy (cm)</label>
                  <input
                    type="number"
                    placeholder="180"
                    value={formData.height}
                    onChange={(e) => setFormData({ ...formData, height: e.target.value })}
                    className="w-full min-h-[56px] px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-blue-600 focus:outline-none font-sans text-base text-slate-900 transition-colors box-border"
                  />
                </div>

                <div className="w-full min-w-0">
                  <label className="font-mono text-xs font-bold text-slate-700 uppercase block mb-1">Kilo (kg)</label>
                  <input
                    type="number"
                    placeholder="78"
                    value={formData.weight}
                    onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                    className="w-full min-h-[56px] px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-blue-600 focus:outline-none font-sans text-base text-slate-900 transition-colors box-border"
                  />
                </div>
              </div>

              {/* HEDEF & HİZMET SEÇİMİ GRID */}
              <div className="contact-form-row-2 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full min-w-0">
                <div className="w-full min-w-0">
                  <label className="font-mono text-xs font-bold text-slate-700 uppercase block mb-1">Ana Hedefiniz</label>
                  <select
                    value={formData.goal}
                    onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                    className="w-full min-h-[56px] px-4 pr-12 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-blue-600 focus:outline-none font-sans text-base text-slate-900 transition-colors box-border appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2024%2024%22%20stroke%3D%22%232563EB%22%3E%3Cpath%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%222%22%20d%3D%22M19%209l-7%207-7-7%22%2F%3E%3C%2Fsvg%3E')] bg-[length:20px_20px] bg-[right_16px_center] bg-no-repeat"
                  >
                    <option value="Kas Kazanımı">Kas Kazanımı (Hipertrofi)</option>
                    <option value="Yağ Yakımı">Yağ Yakımı &amp; Vücut Şekillendirme</option>
                    <option value="Atletik Performans">Atletik Performans &amp; Hız</option>
                    <option value="Postür ve Sağlık">Postür Düzeltim &amp; Ağrısız Yaşam</option>
                  </select>
                </div>

                <div className="w-full min-w-0">
                  <label className="font-mono text-xs font-bold text-slate-700 uppercase block mb-1">Tercih Edilen Hizmet</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full min-h-[56px] px-4 pr-12 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-blue-600 focus:outline-none font-sans text-base text-slate-900 transition-colors box-border appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2024%2024%22%20stroke%3D%22%232563EB%22%3E%3Cpath%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%222%22%20d%3D%22M19%209l-7%207-7-7%22%2F%3E%3C%2Fsvg%3E')] bg-[length:20px_20px] bg-[right_16px_center] bg-no-repeat"
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
              <div className="w-full min-w-0">
                <label className="font-mono text-xs font-bold text-slate-700 uppercase block mb-1">Ek Notlar / Mesajınız</label>
                <textarea
                  rows={4}
                  placeholder="Mevcut antrenman geçmişiniz, varsa sağlık hassasiyetiniz veya sormak istedikleriniz..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full min-h-[140px] px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-blue-600 focus:outline-none font-sans text-base text-slate-900 transition-colors box-border resize-y"
                />
              </div>

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                disabled={loading}
                className="w-full min-h-[54px] py-4 bg-blue-600 hover:bg-blue-700 text-white font-mono text-base font-extrabold uppercase rounded-xl transition-all shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 text-center whitespace-normal box-border"
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

        {/* RIGHT COLUMN: CONTACT INFO & WHATSAPP CARD */}
        <div className="lg:col-span-5 space-y-6 w-full max-w-full min-w-0 box-border">
          
          <div className="space-y-2">
            <span className="font-mono text-xs text-blue-600 font-extrabold uppercase bg-blue-50 px-3.5 py-1 rounded-full border border-blue-200 inline-block">
              KURUMSAL İLETİŞİM
            </span>
            <h3 className="font-display text-2.5xl sm:text-3xl text-slate-900 uppercase">
              DOĞRUDAN ULAŞIN
            </h3>
          </div>

          <div className="space-y-4 w-full min-w-0">
            
            {/* TELEFON */}
            <a
              href="tel:+905445300481"
              className="premium-card p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 flex items-center gap-4 hover:border-blue-400 transition-all shadow-sm group w-full min-w-0 box-border"
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-blue-50 text-blue-600 text-2xl flex items-center justify-center shrink-0 border border-blue-100">
                📞
              </div>
              <div className="min-w-0 overflow-hidden">
                <span className="font-mono text-xs text-slate-500 block">TELEFON</span>
                <strong className="font-display text-lg sm:text-xl text-slate-900 group-hover:text-blue-600 transition-colors truncate block">
                  +90 544 530 04 81
                </strong>
              </div>
            </a>

            {/* WHATSAPP GREEN CARD */}
            <a
              href="https://wa.me/905445300481?text=Merhaba%20Tunahan%20Hocam,%20bilgi%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="premium-card p-4 sm:p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200 flex items-center gap-4 hover:bg-emerald-50 transition-all shadow-sm group w-full min-w-0 box-border"
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-emerald-600 text-white text-2xl flex items-center justify-center shrink-0 shadow-sm">
                💬
              </div>
              <div className="min-w-0 overflow-hidden">
                <span className="font-mono text-xs text-emerald-800 font-bold block">WHATSAPP ANLIK İLETİŞİM</span>
                <strong className="font-display text-lg sm:text-xl text-emerald-900 truncate block">
                  +90 544 530 04 81
                </strong>
              </div>
            </a>

            {/* E-POSTA */}
            <a
              href="mailto:pt.tuna61@gmail.com"
              className="premium-card p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 flex items-center gap-4 hover:border-blue-400 transition-all shadow-sm group w-full min-w-0 box-border"
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-blue-50 text-blue-600 text-2xl flex items-center justify-center shrink-0 border border-blue-100">
                ✉️
              </div>
              <div className="min-w-0 overflow-hidden">
                <span className="font-mono text-xs text-slate-500 block">E-POSTA</span>
                <strong className="font-display text-base sm:text-lg text-slate-900 group-hover:text-blue-600 transition-colors truncate block">
                  pt.tuna61@gmail.com
                </strong>
              </div>
            </a>

            {/* INSTAGRAM */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="premium-card p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 flex items-center gap-4 hover:border-pink-400 transition-all shadow-sm group w-full min-w-0 box-border"
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-pink-50 text-pink-600 text-2xl flex items-center justify-center shrink-0 border border-pink-100">
                📸
              </div>
              <div className="min-w-0 overflow-hidden">
                <span className="font-mono text-xs text-slate-500 block">INSTAGRAM</span>
                <strong className="font-display text-base sm:text-lg text-slate-900 group-hover:text-pink-600 transition-colors truncate block">
                  @tunahan.keskin.pt
                </strong>
              </div>
            </a>

            {/* KONUM & SAATLER GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full min-w-0">
              <div className="premium-card p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1 w-full min-w-0 box-border">
                <span className="font-mono text-xs text-slate-500 block">📍 LOKASYON</span>
                <strong className="font-display text-base text-slate-900 block truncate">Trabzon, Türkiye</strong>
              </div>

              <div className="premium-card p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1 w-full min-w-0 box-border">
                <span className="font-mono text-xs text-slate-500 block">⏰ ÇALIŞMA SAATLERİ</span>
                <strong className="font-mono text-xs text-slate-900 font-bold block truncate">Pzt - Cmt: 08:00 - 21:30</strong>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* GOOGLE MAPS AREA */}
      <div className="space-y-4 w-full min-w-0">
        <h3 className="font-display text-2xl sm:text-2.5xl text-slate-900 uppercase border-l-4 border-blue-600 pl-4">
          LOKASYON HARİTASI
        </h3>
        
        <div className="w-full h-72 sm:h-80 rounded-3xl overflow-hidden border border-slate-200 shadow-md bg-slate-100 relative">
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

      {/* SIK SORULAN KISA SORULAR */}
      <div className="space-y-6 w-full min-w-0">
        <h3 className="font-display text-2xl sm:text-2.5xl text-slate-900 uppercase border-l-4 border-amber-500 pl-4">
          BAŞVURU SÜRECİ HAKKINDA SIK SORULANLAR
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full min-w-0">
          <div className="premium-card p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 w-full min-w-0 box-border">
            <span className="font-mono text-xs text-blue-600 font-extrabold uppercase block">❓ ÜCRETSİZ Mİ?</span>
            <h4 className="font-display text-lg sm:text-xl text-slate-900 uppercase">İlk görüşme ücretli mi?</h4>
            <p className="text-sm text-slate-600 font-sans">Hayır. İlk tanışma, ihtiyaç analizi ve ön görüşmemiz %100 ücretsizdir.</p>
          </div>

          <div className="premium-card p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 w-full min-w-0 box-border">
            <span className="font-mono text-xs text-blue-600 font-extrabold uppercase block">⚙️ SİSTEM</span>
            <h4 className="font-display text-lg sm:text-xl text-slate-900 uppercase">Online program nasıl işliyor?</h4>
            <p className="text-sm text-slate-600 font-sans">Form alındıktan sonra hedefleriniz analiz edilir ve takip paneliniz kurulur.</p>
          </div>

          <div className="premium-card p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 w-full min-w-0 box-border">
            <span className="font-mono text-xs text-blue-600 font-extrabold uppercase block">⏱️ DÖNÜŞ SÜRESİ</span>
            <h4 className="font-display text-lg sm:text-xl text-slate-900 uppercase">Ne kadar sürede dönüş yapılır?</h4>
            <p className="text-sm text-slate-600 font-sans">Başvurunuz bize ulaştıktan sonra maksimum 2-4 saat içinde dönüş yapılır.</p>
          </div>

          <div className="premium-card p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 w-full min-w-0 box-border">
            <span className="font-mono text-xs text-blue-600 font-extrabold uppercase block">👥 KAPSAM</span>
            <h4 className="font-display text-lg sm:text-xl text-slate-900 uppercase">Kimler başvurabilir?</h4>
            <p className="text-sm text-slate-600 font-sans">Yeni başlayanlardan profesyonel sporculara kadar tüm seviyedeki bireyler başvurabilir.</p>
          </div>
        </div>
      </div>

      {/* BOTTOM CTA BANNER */}
      <div className="premium-card rounded-3xl p-8 sm:p-14 text-center space-y-6 bg-slate-900 text-white border border-slate-800 shadow-2xl w-full min-w-0 box-border">
        <span className="font-mono text-xs text-emerald-400 font-extrabold tracking-widest uppercase bg-emerald-950 px-4 py-1.5 rounded-full border border-emerald-800 inline-block">
          ANINDA İLETİŞİM
        </span>

        <h3 className="font-display text-3xl sm:text-6xl text-white uppercase tracking-tight">
          Bugün Başla, Değişimini Erteleme.
        </h3>

        <p className="text-sm sm:text-lg text-slate-300 font-sans max-w-xl mx-auto leading-relaxed">
          Bilimsel planlama, düzenli takip ve kişiye özel programlarla hedeflerine güvenle ilerle.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2 font-mono text-base w-full">
          <a
            href="https://wa.me/905445300481?text=Merhaba%20Tunahan%20Hocam,%20hemen%20ba%C5%9Flamak%20istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold px-8 py-4 rounded-xl shadow-xl shadow-emerald-500/25 hover:scale-105 transition-all flex items-center justify-center gap-2 min-h-[48px]"
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
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-xl transition-all flex items-center justify-center min-h-[48px]"
          >
            🚀 Başvuru Formunu Gönder
          </a>
        </div>
      </div>

    </section>
  );
};
