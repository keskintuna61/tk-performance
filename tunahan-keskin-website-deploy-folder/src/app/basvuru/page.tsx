'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export default function BasvuruPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: '',
    age: '',
    height: '',
    weight: '',
    goal: 'Kas Kazanımı',
    experienceLevel: 'Orta',
    daysPerWeek: '4 Gün',
    gymAccess: 'Evet (Gym)',
    injuries: '',
    medicalConditions: '',
    medications: '',
    nutritionPreference: 'Esnek Beslenme',
    contactPreference: 'WhatsApp',
    budgetRange: '2.000 - 3.000 TL',
    startDate: 'Hemen',
    notes: '',
    kvkkConsent: false
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleNext = () => {
    setStep(prev => Math.min(prev + 1, 7));
  };

  const handlePrev = () => {
    setStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.kvkkConsent) {
      alert("Lütfen KVKK ve Bilgilendirme Onayını işaretleyiniz.");
      return;
    }
    // Save to localStorage & log for demo
    localStorage.setItem('tk_coaching_application', JSON.stringify(formData));
    console.log('Başvuru Gönderildi:', formData);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#070B12] text-[#F8FAFC]">
      <Navbar />

      <main className="flex-1 py-16 px-6 max-w-3xl mx-auto w-full">
        
        {/* TIBBİ SORUMLULUK UYARISI */}
        <div className="bg-[#111827] border border-amber-400/30 text-amber-300 text-xs font-mono p-4 rounded-xl mb-8 flex items-center gap-3">
          <span className="text-xl">⚠️</span>
          <div>
            <strong>Tıbbi Uyarı:</strong> Bu başvuru formu tıbbi teşhis, tedavi veya klinik diyetisyenlik amacı taşımaz.
          </div>
        </div>

        {!submitted ? (
          <div className="bg-[#111827] border border-white/10 rounded-2xl p-8 shadow-2xl">
            
            {/* WIZARD HEADER & PROGRESS */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-3">
                <span className="font-mono text-xs text-[#1E90FF] font-bold uppercase tracking-widest">
                  ADIM {step} / 7
                </span>
                <span className="font-mono text-xs text-[#94A3B8]">
                  %{Math.round((step / 7) * 100)} Tamamlandı
                </span>
              </div>
              <div className="w-full bg-[#070B12] h-2 rounded-full overflow-hidden border border-white/5">
                <div 
                  className="bg-[#1E90FF] h-full transition-all duration-300"
                  style={{ width: `${(step / 7) * 100}%` }}
                />
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              
              {/* STEP 1: KİŞİSEL BİLGİLER */}
              {step === 1 && (
                <div className="space-y-4">
                  <h2 className="font-display text-3xl text-white uppercase tracking-wide mb-4">1. ADIM: KİŞİSEL BİLGİLER</h2>
                  <div>
                    <label className="block font-mono text-xs text-[#94A3B8] uppercase mb-1">Ad Soyad *</label>
                    <input 
                      type="text" 
                      name="fullName" 
                      value={formData.fullName} 
                      onChange={handleChange}
                      required
                      placeholder="Ahmet Yılmaz"
                      className="w-full bg-[#070B12] border border-white/10 rounded-lg p-3 text-sm text-white focus:border-[#1E90FF] outline-none"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block font-mono text-xs text-[#94A3B8] uppercase mb-1">Yaş *</label>
                      <input 
                        type="number" 
                        name="age" 
                        value={formData.age} 
                        onChange={handleChange}
                        required
                        placeholder="24"
                        className="w-full bg-[#070B12] border border-white/10 rounded-lg p-3 text-sm text-white focus:border-[#1E90FF] outline-none"
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-xs text-[#94A3B8] uppercase mb-1">Şehir *</label>
                      <input 
                        type="text" 
                        name="city" 
                        value={formData.city} 
                        onChange={handleChange}
                        required
                        placeholder="Trabzon"
                        className="w-full bg-[#070B12] border border-white/10 rounded-lg p-3 text-sm text-white focus:border-[#1E90FF] outline-none"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block font-mono text-xs text-[#94A3B8] uppercase mb-1">Boy (cm) *</label>
                      <input 
                        type="number" 
                        name="height" 
                        value={formData.height} 
                        onChange={handleChange}
                        required
                        placeholder="178"
                        className="w-full bg-[#070B12] border border-white/10 rounded-lg p-3 text-sm text-white focus:border-[#1E90FF] outline-none"
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-xs text-[#94A3B8] uppercase mb-1">Kilo (kg) *</label>
                      <input 
                        type="number" 
                        name="weight" 
                        value={formData.weight} 
                        onChange={handleChange}
                        required
                        placeholder="75"
                        className="w-full bg-[#070B12] border border-white/10 rounded-lg p-3 text-sm text-white focus:border-[#1E90FF] outline-none"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 2: HEDEF */}
              {step === 2 && (
                <div className="space-y-4">
                  <h2 className="font-display text-3xl text-white uppercase tracking-wide mb-4">2. ADIM: HEDEFİNİZ</h2>
                  <div>
                    <label className="block font-mono text-xs text-[#94A3B8] uppercase mb-1">Ana Hedefiniz</label>
                    <select 
                      name="goal" 
                      value={formData.goal} 
                      onChange={handleChange}
                      className="w-full bg-[#070B12] border border-white/10 rounded-lg p-3 text-sm text-white focus:border-[#1E90FF] outline-none"
                    >
                      <option value="Kas Kazanımı">🏋️‍♂️ Maksimum Kas Kazanımı (Hipertrofi)</option>
                      <option value="Yağ Yakımı">🔥 Hızlı Yağ Yakımı (Definasyon)</option>
                      <option value="Güç & 1RM">⚡ Güç &amp; 1RM Rekoru Artırma</option>
                      <option value="Atletik Performans">🏃‍♂️ Atletik Performans &amp; Çeviklik</option>
                      <option value="Postür & Duruş">🧘‍♂️ Postür &amp; Duruş Düzeltme</option>
                    </select>
                  </div>
                </div>
              )}

              {/* STEP 3: ANTRENMAN GEÇMİŞİ */}
              {step === 3 && (
                <div className="space-y-4">
                  <h2 className="font-display text-3xl text-white uppercase tracking-wide mb-4">3. ADIM: ANTRENMAN GEÇMİŞİ</h2>
                  <div>
                    <label className="block font-mono text-xs text-[#94A3B8] uppercase mb-1">Deneyim Seviyesi</label>
                    <select 
                      name="experienceLevel" 
                      value={formData.experienceLevel} 
                      onChange={handleChange}
                      className="w-full bg-[#070B12] border border-white/10 rounded-lg p-3 text-sm text-white focus:border-[#1E90FF] outline-none"
                    >
                      <option value="Başlangıç">Sıfırdan Başlıyorum (&lt; 6 ay)</option>
                      <option value="Orta">Orta Seviye (6 ay - 2 yıl)</option>
                      <option value="İleri">İleri Seviye (2 yıldan fazla)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-mono text-xs text-[#94A3B8] uppercase mb-1">Haftalık Ayırabileceğiniz Gün</label>
                    <select 
                      name="daysPerWeek" 
                      value={formData.daysPerWeek} 
                      onChange={handleChange}
                      className="w-full bg-[#070B12] border border-white/10 rounded-lg p-3 text-sm text-white focus:border-[#1E90FF] outline-none"
                    >
                      <option value="3 Gün">Haftada 3 Gün</option>
                      <option value="4 Gün">Haftada 4 Gün</option>
                      <option value="5 Gün">Haftada 5 Gün</option>
                      <option value="6 Gün">Haftada 6 Gün</option>
                    </select>
                  </div>
                </div>
              )}

              {/* STEP 4: SAĞLIK VE SAKATLIK */}
              {step === 4 && (
                <div className="space-y-4">
                  <h2 className="font-display text-3xl text-white uppercase tracking-wide mb-4">4. ADIM: SAĞLIK VE SAKATLIK</h2>
                  <div>
                    <label className="block font-mono text-xs text-[#94A3B8] uppercase mb-1">Geçmiş veya Mevcut Sakatlıklar</label>
                    <input 
                      type="text" 
                      name="injuries" 
                      value={formData.injuries} 
                      onChange={handleChange}
                      placeholder="Örn. Sol omuz incinmesi, bel fıtığı yok"
                      className="w-full bg-[#070B12] border border-white/10 rounded-lg p-3 text-sm text-white focus:border-[#1E90FF] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-xs text-[#94A3B8] uppercase mb-1">Kronik Rahatsızlık veya Düzenli İlaç</label>
                    <input 
                      type="text" 
                      name="medications" 
                      value={formData.medications} 
                      onChange={handleChange}
                      placeholder="Yok veya belirtiniz"
                      className="w-full bg-[#070B12] border border-white/10 rounded-lg p-3 text-sm text-white focus:border-[#1E90FF] outline-none"
                    />
                  </div>
                </div>
              )}

              {/* STEP 5: PROGRAM TERCİHLERİ */}
              {step === 5 && (
                <div className="space-y-4">
                  <h2 className="font-display text-3xl text-white uppercase tracking-wide mb-4">5. ADIM: İMKAN VE TERCİHLER</h2>
                  <div>
                    <label className="block font-mono text-xs text-[#94A3B8] uppercase mb-1">Spor Salonu Erişimi</label>
                    <select 
                      name="gymAccess" 
                      value={formData.gymAccess} 
                      onChange={handleChange}
                      className="w-full bg-[#070B12] border border-white/10 rounded-lg p-3 text-sm text-white focus:border-[#1E90FF] outline-none"
                    >
                      <option value="Evet (Gym)">Evet, Tam Donanımlı Spor Salonu</option>
                      <option value="Ev (Ekipmanlı)">Evde (Dumbbell, Band vb.)</option>
                      <option value="Ev (Ekipmansız)">Evde (Ekipmansız Vücut Ağırlığı)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-mono text-xs text-[#94A3B8] uppercase mb-1">Beslenme Tercihi</label>
                    <select 
                      name="nutritionPreference" 
                      value={formData.nutritionPreference} 
                      onChange={handleChange}
                      className="w-full bg-[#070B12] border border-white/10 rounded-lg p-3 text-sm text-white focus:border-[#1E90FF] outline-none"
                    >
                      <option value="Esnek Beslenme">Esnek Beslenme (IIFYM &amp; Makro Taktik)</option>
                      <option value="Standart Fit">Standart Sporcu Beslenmesi</option>
                      <option value="Vejetaryen / Özel">Vejetaryen / Özel Hassasiyet</option>
                    </select>
                  </div>
                </div>
              )}

              {/* STEP 6: İLETİŞİM VE ONAY */}
              {step === 6 && (
                <div className="space-y-4">
                  <h2 className="font-display text-3xl text-white uppercase tracking-wide mb-4">6. ADIM: İLETİŞİM DETAYLARI</h2>
                  <div>
                    <label className="block font-mono text-xs text-[#94A3B8] uppercase mb-1">E-posta Adresi *</label>
                    <input 
                      type="email" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleChange}
                      required
                      placeholder="ahmet@example.com"
                      className="w-full bg-[#070B12] border border-white/10 rounded-lg p-3 text-sm text-white focus:border-[#1E90FF] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-xs text-[#94A3B8] uppercase mb-1">Telefon / WhatsApp *</label>
                    <input 
                      type="tel" 
                      name="phone" 
                      value={formData.phone} 
                      onChange={handleChange}
                      required
                      placeholder="0555 123 45 67"
                      className="w-full bg-[#070B12] border border-white/10 rounded-lg p-3 text-sm text-white focus:border-[#1E90FF] outline-none"
                    />
                  </div>
                </div>
              )}

              {/* STEP 7: ÖZET VE GÖNDER */}
              {step === 7 && (
                <div className="space-y-4">
                  <h2 className="font-display text-3xl text-white uppercase tracking-wide mb-4">7. ADIM: BAŞVURU ÖZETİ</h2>
                  <div className="bg-[#070B12] p-4 rounded-xl border border-white/10 space-y-2 text-xs font-mono">
                    <div><span className="text-[#94A3B8]">AD SOYAD:</span> {formData.fullName}</div>
                    <div><span className="text-[#94A3B8]">E-POSTA:</span> {formData.email}</div>
                    <div><span className="text-[#94A3B8]">TELEFON:</span> {formData.phone}</div>
                    <div><span className="text-[#94A3B8]">HEDEF:</span> {formData.goal}</div>
                    <div><span className="text-[#94A3B8]">SEVİYE:</span> {formData.experienceLevel} ({formData.daysPerWeek})</div>
                  </div>

                  <div className="pt-4">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input 
                        type="checkbox" 
                        name="kvkkConsent" 
                        checked={formData.kvkkConsent} 
                        onChange={handleChange}
                        className="mt-1"
                      />
                      <span className="text-xs text-[#94A3B8]">
                        KVKK Aydınlatma Metnini okudum. Sağlık verilerimin koçluk değerlendirmesi amacıyla işlenmesini onaylıyorum.
                      </span>
                    </label>
                  </div>
                </div>
              )}

              {/* WIZARD NAVIGATION BUTTONS */}
              <div className="flex justify-between items-center mt-8 pt-6 border-t border-white/10">
                {step > 1 ? (
                  <button 
                    type="button" 
                    onClick={handlePrev}
                    className="bg-[#070B12] hover:bg-white/5 border border-white/10 text-white font-mono text-xs font-bold px-6 py-3 rounded-lg"
                  >
                    &larr; GERİ
                  </button>
                ) : <div />}

                {step < 7 ? (
                  <button 
                    type="button" 
                    onClick={handleNext}
                    className="bg-[#1E90FF] hover:bg-blue-600 text-white font-mono text-xs font-black uppercase tracking-wider px-8 py-3 rounded-lg shadow-lg"
                  >
                    DEVAM ET &rarr;
                  </button>
                ) : (
                  <button 
                    type="submit"
                    className="bg-emerald-500 hover:bg-emerald-600 text-white font-mono text-xs font-black uppercase tracking-wider px-8 py-3 rounded-lg shadow-lg shadow-emerald-500/20"
                  >
                    🔥 BAŞVURUYU GÖNDER
                  </button>
                )}
              </div>

            </form>
          </div>
        ) : (
          /* BAŞARI EKRANI */
          <div className="bg-[#111827] border border-emerald-500/40 rounded-2xl p-12 text-center shadow-2xl">
            <div className="text-6xl mb-4">🎉</div>
            <h2 className="font-display text-4xl text-white mb-2">BAŞVURUNUZ BAŞARIYLA ALINDI!</h2>
            <p className="text-sm text-[#94A3B8] max-w-md mx-auto mb-8">
              Tunahan Keskin başvurunuzu 24 saat içinde inceleyecek ve belirttiğiniz WhatsApp numarası üzerinden sizinle iletişime geçecektir.
            </p>
            <Link 
              href="/"
              className="inline-block bg-[#1E90FF] text-white font-mono text-xs font-bold uppercase tracking-wider px-8 py-3 rounded-lg"
            >
              Ana Sayfaya Dön &rarr;
            </Link>
          </div>
        )}

      </main>

      <Footer />
    </div>
  );
}
