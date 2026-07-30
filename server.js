const express = require('express');
const fs = require('fs');
const path = require('path');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const https = require('https');
require('dotenv').config();

let Iyzipay;
try {
  Iyzipay = require('iyzipay');
} catch (e) {
  console.warn('iyzipay opsiyonel paket.');
}

const app = express();
const PORT = process.env.PORT || 8080;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'Tunahan2026';
const JWT_SECRET = process.env.JWT_SECRET || 'tunahan_keskin_secret_jwt_key_2026';

const DATA_FILE = path.join(__dirname, 'data', 'content.json');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/', (req, res) => {
  if (fs.existsSync(path.join(__dirname, 'index.html'))) {
    return res.sendFile(path.join(__dirname, 'index.html'));
  }
  return res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// SPRINT 4 — DYNAMIC EXERCISE DETAIL PAGE ROUTE
app.get('/egzersizler/:slug', (req, res) => {
  const slug = req.params.slug;
  const exercises = [
    { id: 'chest-press-machine', slug: 'chest-press-machine', nameTr: 'Chest Press Machine (Göğüs İtiş Makinesi)', nameEn: 'Chest Press Machine', category: 'Göğüs', equipment: 'Makine', difficulty: 'Başlangıç', movementType: 'Bileşik (Compound)', movementPattern: 'Yatay İtiş', image: '/images/exercise-covers/chest-press.png', target: 'Pectoralis Major', synergist: 'Anterior Deltoid, Triceps Brachii', desc: 'Göğüs kası liflerini omurgaya aşırı yük bindirmeden hedefleyen temel itiş hareketi.', startPos: 'Koltuk yüksekliğini tutamaklar alt/orta göğüs hizanıza gelecek şekilde ayarlayın. Sırtınızı ve kalçanızı sehpadan ayırmayın.', steps: ['Nefes vererek tutamakları ileriye doğru ittirin.', 'Dirsekler kilitlenmeden hemen önce durun.', '3 saniyelik negatif tempoyla başlangıç noktasına dönün.'], breathing: 'İtişte nefes verin, indirirken nefes alın.', tips: ['Kürek kemiklerini arkada ve aşağıda sabitleyin.', 'Bilekleri geriye bükmeyin.'], mistakes: ['Omuzları yukarı kaldırmak', 'Göğüs kafesini kapatmak'], warnings: ['Dirsekleri tam kilitlemeyin.'], rom: 'Tutamaklar göğüs hizasından 170 derece kol açıklığına kadar.' },
    { id: 'incline-chest-press', slug: 'incline-chest-press', nameTr: 'Incline Chest Press (Üst Göğüs İtiş)', nameEn: 'Incline Chest Press', category: 'Göğüs', equipment: 'Dumbbell / Makine', difficulty: 'Orta', movementType: 'Bileşik (Compound)', movementPattern: 'Açılı Dikey İtiş', image: '/images/exercise-covers/incline-press.png', target: 'Pectoralis Major (Clavicular)', synergist: 'Anterior Deltoid, Triceps', desc: 'Üst göğüs kas liflerini maksimum biyomekanik açıyla uyararak klaviküler başı belirginleştiren temel itiş egzersizi.', startPos: 'Bench açısını 30 derecede ayarlayın. Ayak tabanlarınızı yere sabitleyin, göğüs kafesinizi kabartın.', steps: ['Ağırlığı üst göğüs çizginize indirin.', 'Üst göğüs kaslarınızı kasarak ağırlığı yukarı itin.', 'Tepe noktada kasılmayı hissettiğiniz an 1 saniye bekleyin.'], breathing: 'İtişte nefes verin, indirirken nefes alın.', tips: ['Bench açısını 45 dereceden fazla yapmayın.'], mistakes: ['Açıyı çok dik yapmak', 'Dirsekleri fazla dışa açmak'], warnings: ['Omuz ağrısında açıyı düşürün.'], rom: 'Üst göğüse değene kadar esneme ve tepe noktaya kadar itiş.' },
    { id: 'decline-chest-press', slug: 'decline-chest-press', nameTr: 'Decline Chest Press (Alt Göğüs İtiş)', nameEn: 'Decline Chest Press', category: 'Göğüs', equipment: 'Serbest Ağırlık', difficulty: 'Orta', movementType: 'Bileşik (Compound)', movementPattern: 'Alt Açılı İtiş', image: '/images/exercise-covers/decline-press.png', target: 'Pectoralis Major (Lower Head)', synergist: 'Triceps Brachii', desc: 'Alt göğüs kas hattını belirginleştiren ve kürek kemiği stabilitesini artıran spesifik itiş egzersizi.', startPos: 'Eğimli alt göğüs sehpasına yatarak ayaklarınızı sabitleyin.', steps: ['Ağırlığı alt göğüs hizanıza yavaşça indirin.', 'Alt göğüs liflerinizi katarak yukarı itin.', 'Kontrollü bir şekilde başlangıç konumuna dönün.'], breathing: 'İtişte nefes verin, indirirken nefes alın.', tips: ['Ayak sabitleyicilerini kilitli tutun.'], mistakes: ['Barı göğse çarptırmak'], warnings: ['Baş dönmesi hissedilirse durun.'], rom: 'Alt göğüste esneme ve tepe noktada kasılma.' },
    { id: 'chest-fly', slug: 'chest-fly', nameTr: 'Chest Fly (Göğüs Açış)', nameEn: 'Chest Fly Machine / Cable', category: 'Göğüs', equipment: 'Kablo / Makine', difficulty: 'Başlangıç', movementType: 'İzolasyon', movementPattern: 'Yatay Açış / Kapatış', image: '/images/exercise-covers/chest-fly.png', target: 'Pectoralis Major (Sternal)', synergist: 'Anterior Deltoid', desc: 'Göğüs kaslarını yatay addüksiyon ekseninde izole ederek tepe noktada sıkışma sağlayan açış.', startPos: 'Tutamakları kavrayın, dirsekleri sabit hafif bükülü tutun.', steps: ['Kolları dev bir ağaca sarılır gibi önde birleştirin.', 'Ortada 1 saniye göğsünüzü sıkın.', 'Yavaş tempo ile kolları açın.'], breathing: 'Kapatırken nefes verin, açarken nefes alın.', tips: ['Dirsekleri birbirine yaklaştırmaya odaklanın.'], mistakes: ['Dirsekleri tam kilitlemek'], warnings: ['Kolları geriye aşırı açmayın.'], rom: 'Omuz hizasından önde birleşmeye kadar.' },
    { id: 'lat-pulldown', slug: 'lat-pulldown', nameTr: 'Lat Pulldown (Geniş Üst Çekiş)', nameEn: 'Lat Pulldown', category: 'Sırt', equipment: 'Kablo', difficulty: 'Başlangıç', movementType: 'Bileşik (Compound)', movementPattern: 'Dikey Çekiş', image: '/images/exercise-covers/lat-pulldown.png', target: 'Latissimus Dorsi, Teres Major', synergist: 'Biceps Brachii, Rhomboids', desc: 'Sırt genişliğini ve V-taper postürünü geliştiren en etkili dikey çekiş.', startPos: 'Barı omuz genişliğinden biraz geniş tutun, dizleri pede sabitleyin.', steps: ['Dirsekleri geriye yönlendirerek barı üst göğse çekin.', 'Kürek kemiklerini sıkarak 1 saniye durun.', 'Barı yavaşça yukarı uzatıp esnetin.'], breathing: 'Çekerken nefes verin, bırakırken nefes alın.', tips: ['Dirseklerle çekiş yapmaya odaklanın.'], mistakes: ['Ensenin arkasına çekmek'], warnings: ['Barı fırlatmayın.'], rom: 'Tam uzalı koldan üst göğse temas noktasına.' },
    { id: 'seated-row', slug: 'seated-row', nameTr: 'Seated Cable Row (Oturarak Çekiş)', nameEn: 'Seated Cable Row', category: 'Sırt', equipment: 'Kablo', difficulty: 'Başlangıç', movementType: 'Bileşik (Compound)', movementPattern: 'Yatay Çekiş', image: '/images/exercise-covers/seated-row.png', target: 'Latissimus Dorsi, Rhomboids', synergist: 'Biceps Brachii, Rear Deltoid', desc: 'Sırt kalınlığı ve postür düzeltme sağlayan yatay çekiş egzersizi.', startPos: 'Ayakları platforma dayayın, göğsü dikleştirin.', steps: ['Tutamağı karna doğru çekin.', 'Kürek kemiklerini birleştirip sıkın.', 'Kolları yavaşça öne uzatın.'], breathing: 'Çekerken nefes verin, öne uzatırken nefes alın.', tips: ['Çekişi dirseklerle yapın.'], mistakes: ['Gövdeyi aşırı sallamak'], warnings: ['Beli bükmeyin.'], rom: 'Tam öne uzamadan karna kaburga temas noktasına.' },
    { id: 'lateral-raise', slug: 'lateral-raise', nameTr: 'Dumbbell Lateral Raise (Yan Omuz)', nameEn: 'Dumbbell Lateral Raise', category: 'Omuz', equipment: 'Dumbbell', difficulty: 'Başlangıç', movementType: 'İzolasyon', movementPattern: 'Yan Kaldırış', image: '/images/exercise-covers/lateral-raise.png', target: 'Lateral Deltoid (Yan Omuz)', synergist: 'Supraspinatus, Trapezius', desc: 'Omuz genişliği kazandıran en etkili yan omuz izole hareketi.', startPos: 'Ayakta dik durun, dambılları yanınızda tutun.', steps: ['Dambılları omuz yüksekliğine kaldırın.', 'Tepe noktada 1 saniye durun.', 'Kontrollü şekilde aşağı indirin.'], breathing: 'Kaldırırken nefes verin, indirirken nefes alın.', tips: ['Trapezleri kasmayın.'], mistakes: ['Vücudu sallamak'], warnings: ['Aşırı ağır dambıl kullanmayın.'], rom: 'Kalça hizasından omuz hizasına 90 derece.' },
    { id: 'shoulder-press', slug: 'shoulder-press', nameTr: 'Shoulder Press (Omuz İtiş)', nameEn: 'Shoulder Press', category: 'Omuz', equipment: 'Dumbbell / Makine', difficulty: 'Başlangıç', movementType: 'Bileşik (Compound)', movementPattern: 'Dikey İtiş', image: '/images/exercise-covers/shoulder-press.png', target: 'Anterior Deltoid, Lateral Deltoid', synergist: 'Triceps Brachii', desc: 'Omuz kütlesi ve dikey itiş gücünü geliştiren temel hareket.', startPos: 'Dambılları kulak hizanızda tutun, karını sıkın.', steps: ['Ağırlığı baş üstüne itin.', 'Tepe noktada kilitlenmeden durun.', 'Yavaşça kulak hizasına indirin.'], breathing: 'İtişte nefes verin, indirirken nefes alın.', tips: ['Beli çukurlaştırmayın.'], mistakes: ['Beli bükmek'], warnings: ['Dirsekleri hafif öne hizalayın.'], rom: 'Kulak hizasından baş üstüne kadar.' },
    { id: 'front-raise', slug: 'front-raise', nameTr: 'Front Raise (Ön Omuz Kaldırış)', nameEn: 'Front Raise', category: 'Omuz', equipment: 'Dumbbell', difficulty: 'Başlangıç', movementType: 'İzolasyon', movementPattern: 'Ön Kaldırış', image: '/images/exercise-covers/front-raise.png', target: 'Anterior Deltoid (Ön Omuz)', synergist: 'Pectoralis Major (Clavicular)', desc: 'Ön omuz başını tam izole eden egzersiz.', startPos: 'Dambılları uyluk önünde tutun.', steps: ['Dambılı göz hizanıza kaldırın.', '1 saniye bekleyin.', 'Aşağı indirin.'], breathing: 'Kaldırırken nefes verin, indirirken nefes alın.', tips: ['Gövdeyi sallamayın.'], mistakes: ['Momentum kullanmak'], warnings: ['Omuz seviyesinden yukarı kaldırmayın.'], rom: 'Uyluk önünden göz hizasına.' },
    { id: 'face-pull', slug: 'face-pull', nameTr: 'Cable Face Pull (Yüz Çekiş)', nameEn: 'Cable Face Pull', category: 'Omuz', equipment: 'Kablo', difficulty: 'Başlangıç', movementType: 'İzolasyon / Postür', movementPattern: 'Dış Rotasyon & Çekiş', image: '/images/exercise-covers/face-pull.png', target: 'Posterior Deltoid (Arka Omuz)', synergist: 'Rhomboids, Infraspinatus', desc: 'Postür düzeltme ve omuz sağlığı için eşsiz egzersiz.', startPos: 'Halatı göğüs hizasına ayarlayın.', steps: ['Halatı yüzünüze çekerken elleri dışa döndürün.', 'Dirsekleri yüksek tutun.', 'Arka omuzu sıkın.'], breathing: 'Çekerken nefes verin, uzatırken nefes alın.', tips: ['Her antrenman sonuna 3 set ekleyin.'], mistakes: ['Dirsekleri düşürmek'], warnings: ['Formu bozacak ağırlık seçmeyin.'], rom: 'Kollar uzalıdan elmacık kemiklerine kadar.' },
    { id: 'reverse-fly', slug: 'reverse-fly', nameTr: 'Reverse Fly (Arka Omuz Açış)', nameEn: 'Reverse Fly', category: 'Omuz', equipment: 'Kablo / Makine', difficulty: 'Başlangıç', movementType: 'İzolasyon', movementPattern: 'Yatay Dış Açış', image: '/images/exercise-covers/reverse-fly.png', target: 'Posterior Deltoid', synergist: 'Rhomboids', desc: 'Arka omuz başını izole eden açış hareketi.', startPos: 'Pec deck makinesine ters oturun.', steps: ['Kolları geriye açın.', 'Arka omuzu sıkarak bekleyin.', 'Öne yavaşça dönün.'], breathing: 'Açarken nefes verin, kapatırken nefes alın.', tips: ['Dirsek açısını bozmayın.'], mistakes: ['Gövdeyi sallamak'], warnings: ['Aşırı geriye zorlamayın.'], rom: 'Ön kapalıdan 180 derece geriye.' },
    { id: 'abd-machine', slug: 'machine-hip-abduction', nameTr: 'Machine Hip Abduction (Bacak Dış Açış)', nameEn: 'Machine Hip Abduction', category: 'Bacak', equipment: 'Makine', difficulty: 'Başlangıç', movementType: 'İzolasyon', movementPattern: 'Dış Açış', image: '/images/exercise-covers/abd-machine.png', target: 'Gluteus Medius, Gluteus Minimus', synergist: 'Tensor Fasciae Latae', desc: 'Yan kalça kas grubunu izole eden dışa açış makinesi.', startPos: 'Makineye oturun, dizleri pedlere hizalayın.', steps: ['Bacakları dışa açın.', 'En dışta 1 saniye sıkın.', 'Kontrollü dönün.'], breathing: 'Açılışta nefes verin, kapatırken nefes alın.', tips: ['Sırtı koltuktan ayırmayın.'], mistakes: ['Ağırlığı hızlıca düşürmek'], warnings: ['Eklem takılmasında açıyı daraltın.'], rom: 'Kapalıdan maksimum kalça açıklığına.' },
    { id: 'add-machine', slug: 'machine-hip-adduction', nameTr: 'Machine Hip Adduction (Bacak İç Kapatış)', nameEn: 'Machine Hip Adduction', category: 'Bacak', equipment: 'Makine', difficulty: 'Başlangıç', movementType: 'İzolasyon', movementPattern: 'İç Kapatış', image: '/images/exercise-covers/add-machine.png', target: 'Adductor Longus, Adductor Magnus', synergist: 'Gracilis', desc: 'İç bacak kas grubunu güçlendiren kapatış egzersizi.', startPos: 'Pedleri esnekliğinize göre açın.', steps: ['Bacakları orta hatta birleştirin.', 'Pedler temas ettiğinde sıkın.', 'Yavaşça açın.'], breathing: 'Kapatırken nefes verin, açarken nefes alın.', tips: ['Yavaş tempo uygulayın.'], mistakes: ['Belde çukur oluşturmak'], warnings: ['Aşırı açıda kasık zorlanmasına dikkat edin.'], rom: 'Açık konumdan orta hat temasına.' },
    { id: 'leg-extension', slug: 'leg-extension', nameTr: 'Leg Extension (Ön Bacak Açış)', nameEn: 'Leg Extension', category: 'Bacak', equipment: 'Makine', difficulty: 'Başlangıç', movementType: 'İzolasyon', movementPattern: 'Diz Ekstansiyonu', image: '/images/exercise-covers/leg-extension.png', target: 'Quadriceps (Ön Bacak)', synergist: 'Tensor Fasciae Latae', desc: 'Ön bacak kaslarını tam izole eden makine egzersizi.', startPos: 'Pedi kaval kemiği altına getirin.', steps: ['Bacakları yukarı uzatın.', 'Tepe noktada 1 saniye bacağı sıkın.', 'Yavaşça aşağı indirin.'], breathing: 'Kaldırırken nefes verin, indirirken nefes alın.', tips: ['Tepe sıkışmayı kaçırmayın.'], mistakes: ['Dizleri sertçe kilitlemek'], warnings: ['Ön çapraz bağ sakatlığında dikkat edin.'], rom: '90 derece bükülü dizden tam düzleşmeye.' },
    { id: 'leg-curl', slug: 'leg-curl', nameTr: 'Leg Curl (Arka Bacak Büküş)', nameEn: 'Leg Curl', category: 'Bacak', equipment: 'Makine', difficulty: 'Başlangıç', movementType: 'İzolasyon', movementPattern: 'Diz Fleksiyonu', image: '/images/exercise-covers/leg-curl.png', target: 'Hamstrings (Arka Bacak)', synergist: 'Gastrocnemius', desc: 'Arka bacak kas grubunu izole eden büküş hareketi.', startPos: 'Pedi bileğin hemen üstüne hizalayın.', steps: ['Pedi kalçanıza çekin.', 'Tepe noktada 1 saniye sıkın.', 'Kontrollü indirin.'], breathing: 'Bükerken nefes verin, uzatırken nefes alın.', tips: ['Kalçayı sehpadan kaldırmayın.'], mistakes: ['Bel çukuru oluşturmak'], warnings: ['Kramp girmesine karşı ısının.'], rom: 'Tam uzalıdan bükülü konuma.' },
    { id: 'leg-press', slug: 'leg-press', nameTr: 'Leg Press (Bacak İtiş)', nameEn: 'Leg Press', category: 'Bacak', equipment: 'Makine', difficulty: 'Orta', movementType: 'Bileşik (Compound)', movementPattern: 'Açılı İtiş', image: '/images/exercise-covers/leg-press.png', target: 'Quadriceps, Gluteus Maximus', synergist: 'Hamstrings', desc: 'Omurgaya dikey yük bindirmeden bacak gelişimi sağlayan itiş.', startPos: 'Ayakları platforma omuz genişliğinde koyun.', steps: ['Dizler 90 derece bükülene kadar indirin.', 'Topuklardan güç alarak yukarı itin.', 'Dizleri tam kilitlemeyin.'], breathing: 'İtişte nefes verin, indirirken nefes alın.', tips: ['Topuklar platformdan kalkmasın.'], mistakes: ['Dizleri içeri kıvırmak'], warnings: ['Alt sırtın yuvarlanmasına izin vermeyin.'], rom: '90 derece bükümden tam itişe.' },
    { id: 'romanian-deadlift', slug: 'romanian-deadlift', nameTr: 'Romanian Deadlift (RDL)', nameEn: 'Romanian Deadlift', category: 'Bacak', equipment: 'Barbell', difficulty: 'Orta', movementType: 'Bileşik (Hip Hinge)', movementPattern: 'Kalça Menteşesi', image: '/images/exercise-covers/romanian-deadlift.png', target: 'Hamstrings, Gluteus Maximus', synergist: 'Erector Spinae', desc: 'Arka bacak esnekliği ve kalça hipertrofisi sağlayan temel hareket.', startPos: 'Dizleri hafif bükük sabitleyin.', steps: ['Kalçayı geriye iterek barı bacaklara yakın indirin.', 'Hamstring esnemesinde durun.', 'Kalçayı öne sıkarak kalkın.'], breathing: 'Kalkarken nefes verin, inerken nefes alın.', tips: ['Barı bacaklardan uzaklaştırmayın.'], mistakes: ['Sırtı kamburlaştırmak'], warnings: ['Bel omurlarını zorlamayın.'], rom: 'Dik duruştan kaval kemiği ortasına.' },
    { id: 'glute-kickback', slug: 'glute-kickback', nameTr: 'Cable Glute Kickback (Kalça Geri İtiş)', nameEn: 'Cable Glute Kickback', category: 'Bacak', equipment: 'Kablo', difficulty: 'Orta', movementType: 'İzolasyon', movementPattern: 'Kalça Ekstansiyonu', image: '/images/exercise-covers/glute-kickback.png', target: 'Gluteus Maximus', synergist: 'Hamstrings', desc: 'Kalça kasını izole eden kablo egzersizi.', startPos: 'Gövdeyi hafif öne yatırın.', steps: ['Bacağı geriye itin.', 'Üst noktada 1-2 saniye sıkın.', 'Yavaşça dönün.'], breathing: 'Geri iterken nefes verin, öne dönerken nefes alın.', tips: ['Hareketi kalçadan başlatın.'], mistakes: ['Beli aşırı bükmek'], warnings: ['Alt beli zorlamayın.'], rom: 'Nötr duruştan tam geriye.' },
    { id: 'cable-pull-through', slug: 'cable-pull-through', nameTr: 'Cable Pull Through (Kablo Kalça Çekiş)', nameEn: 'Cable Pull Through', category: 'Bacak', equipment: 'Kablo', difficulty: 'Orta', movementType: 'Bileşik (Hip Hinge)', movementPattern: 'Kalça Çekiş', image: '/images/exercise-covers/cable-pull-through.webp', target: 'Gluteus Maximus, Hamstrings', synergist: 'Erector Spinae', desc: 'Hip hinge mekanizmasını pekiştiren kalça çekiş hareketi.', startPos: 'Kabloya arkanızı dönün, halatı bacak arasından tutun.', steps: ['Kalçayı geriye iterek eğilin.', 'Kalçayı öne sıkarak kalkın.', 'Tepe noktada kalçayı sıkın.'], breathing: 'Kalkışta nefes verin, eğilirken nefes alın.', tips: ['Kollarla değil kalçayla çekin.'], mistakes: ['Kolları bükmek'], warnings: ['Omurga açısını koruyun.'], rom: 'Öne eğilimden dik sıkışmaya.' },
    { id: 'triceps-kickback', slug: 'triceps-kickback', nameTr: 'Triceps Kickback (Arka Kol Geri Uzatış)', nameEn: 'Triceps Kickback', category: 'Kol', equipment: 'Dumbbell', difficulty: 'Başlangıç', movementType: 'İzolasyon', movementPattern: 'Dirsek Ekstansiyonu', image: '/images/exercise-covers/triceps-kickback.png', target: 'Triceps Brachii', synergist: 'Anterior Deltoid', desc: 'Arka kol kaslarını tam uzama noktalarında izole eden hareket.', startPos: 'Gövdeyi yere paralel yapın, üst kolu sabitleyin.', steps: ['Dambılı geriye itin.', '1 saniye arka kolu sıkın.', '90 derece bükün.'], breathing: 'Geri iterken nefes verin, öne bükerken nefes alın.', tips: ['Üst kolu çivi gibi sabitleyin.'], mistakes: ['Üst kolu sallamak'], warnings: ['Aşırı ağır dambıl seçmeyin.'], rom: '90 dereceden geriye düzleşmeye.' }
  ];

  const ex = exercises.find(e => e.slug === slug || e.id === slug) || exercises[0];
  const related = exercises.filter(e => e.slug !== ex.slug && e.category === ex.category).slice(0, 3);

  const html = `<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${ex.nameTr} — Biyomekanik Rehberi & Kas Aktivasyonu | Tunahan Keskin</title>
  <meta name="description" content="${ex.desc}">
  <link rel="canonical" href="https://tunahankeskin.com/egzersizler/${ex.slug}">
  
  <meta property="og:title" content="${ex.nameTr} — Tunahan Keskin Performance">
  <meta property="og:description" content="${ex.desc}">
  <meta property="og:image" content="${ex.image}">
  <meta property="og:url" content="https://tunahankeskin.com/egzersizler/${ex.slug}">

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;600;800;900&family=JetBrains+Mono:wght@400;700&display=swap" rel="stylesheet">
  
  <style>
    :root {
      --electric-blue: #1E90FF;
      --bg-dark: #070B12;
      --bg-navy: #0B1220;
      --card-bg: #111827;
      --text-light: #F8FAFC;
      --text-muted: #94A3B8;
      --border-dark: rgba(255,255,255,0.1);
      --font-display: 'Bebas Neue', sans-serif;
      --font-sans: 'Inter', sans-serif;
      --font-mono: 'JetBrains Mono', monospace;
    }
    * { margin:0; padding:0; box-sizing:border-box; }
    body { background: var(--bg-dark); color: var(--text-light); font-family: var(--font-sans); }
    .wrap { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
    nav { background: rgba(11,18,32,0.9); backdrop-filter: blur(12px); border-bottom: 1px solid var(--border-dark); position: sticky; top:0; z-index:100; padding: 16px 0; }
    .nav-inner { display:flex; justify-content:space-between; align-items:center; }
    .brand { font-family: var(--font-display); font-size:24px; color:#fff; text-decoration:none; display:flex; align-items:center; gap:8px; }
    .brand span { color: var(--electric-blue); }
    .nav-links a { color: var(--text-muted); text-decoration:none; font-family: var(--font-mono); font-size:12px; margin-left:20px; font-weight:700; text-transform:uppercase; }
    .nav-links a:hover { color:#fff; }
    .breadcrumb { font-family: var(--font-mono); font-size:12px; color: var(--text-muted); padding: 24px 0; }
    .breadcrumb a { color: var(--text-muted); text-decoration:none; }
    .breadcrumb span.active { color: var(--electric-blue); font-weight:bold; }
    .grid-2 { display:grid; grid-template-columns:1.2fr 0.8fr; gap:40px; margin-bottom:40px; align-items:start; }
    @media(max-width:768px){ .grid-2 { grid-template-columns:1fr; } }
    .badge { display:inline-block; font-family:var(--font-mono); font-size:11px; font-weight:bold; padding:4px 12px; border-radius:20px; text-transform:uppercase; margin-right:8px; margin-bottom:12px; }
    .badge-blue { background: rgba(30,144,255,0.15); color: var(--electric-blue); border: 1px solid rgba(30,144,255,0.3); }
    .badge-gray { background: rgba(255,255,255,0.05); color: var(--text-muted); border: 1px solid var(--border-dark); }
    .badge-green { background: rgba(34,197,94,0.15); color: #4ade80; border: 1px solid rgba(34,197,94,0.3); }
    h1 { font-family: var(--font-display); font-size: 56px; line-height: 1; text-transform: uppercase; margin-bottom: 8px; }
    .sub-title { font-family: var(--font-mono); font-size:14px; color: var(--text-muted); font-style:italic; margin-bottom:24px; }
    .muscle-card { background: var(--card-bg); border: 1px solid var(--border-dark); border-radius:16px; padding:16px; margin-bottom:16px; }
    .muscle-title { font-family:var(--font-mono); font-size:10px; font-weight:bold; text-transform:uppercase; margin-bottom:8px; display:block; }
    .tag { display:inline-block; font-family:var(--font-mono); font-size:12px; font-weight:bold; padding:4px 10px; border-radius:8px; margin-right:6px; margin-bottom:6px; }
    .tag-blue { background: rgba(30,144,255,0.2); color:#fff; border: 1px solid rgba(30,144,255,0.4); }
    .tag-amber { background: rgba(255,200,87,0.15); color: #FFC857; border: 1px solid rgba(255,200,87,0.3); }
    .cover-box { background: var(--bg-navy); border: 1px solid var(--border-dark); border-radius:24px; padding:16px; text-align:center; }
    .cover-box img { max-width:100%; height:auto; border-radius:16px; object-fit:contain; max-height:450px; }
    .info-grid { display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-bottom:60px; }
    @media(max-width:768px){ .info-grid { grid-template-columns:1fr; } }
    .info-card { background: var(--card-bg); border: 1px solid var(--border-dark); border-radius:20px; padding:24px; }
    .info-card-full { grid-column: span 2; }
    @media(max-width:768px){ .info-card-full { grid-column: span 1; } }
    .info-card-title { font-family:var(--font-mono); font-size:12px; font-weight:bold; text-transform:uppercase; margin-bottom:12px; display:flex; align-items:center; gap:8px; }
    .info-card p, .info-card li { font-size:14px; color: var(--text-muted); line-height:1.6; }
    .info-card ol, .info-card ul { padding-left:20px; }
    .info-card li { margin-bottom:8px; }
    footer { background: var(--bg-navy); border-top:1px solid var(--border-dark); padding:40px 0; text-align:center; font-family:var(--font-mono); font-size:12px; color:var(--text-muted); }
  </style>
</head>
<body>

  <nav>
    <div class="wrap nav-inner">
      <a href="/" class="brand">TK <span>PERFORMANCE</span></a>
      <div class="nav-links">
        <a href="/">Ana Sayfa</a>
        <a href="/#egzersizler">Egzersiz Kütüphanesi</a>
        <a href="/#hakkimda">Hakkımda</a>
      </div>
    </div>
  </nav>

  <main class="wrap">
    <div class="breadcrumb">
      <a href="/">Ana Sayfa</a> / <a href="/#egzersizler">Egzersizler</a> / <span class="active">${ex.nameTr}</span>
    </div>

    <!-- 1. ÜST BÖLÜM (2 SÜTUN) -->
    <div class="grid-2">
      <div>
        <div>
          <span class="badge badge-blue">${ex.category}</span>
          <span class="badge badge-gray">${ex.equipment}</span>
          <span class="badge badge-green">${ex.difficulty}</span>
          <span class="badge badge-blue">${ex.movementType}</span>
        </div>

        <h1>${ex.nameTr}</h1>
        <div class="sub-title">EN: ${ex.nameEn} • ${ex.movementPattern}</div>

        <div class="muscle-card">
          <span class="muscle-title" style="color:var(--electric-blue);">🎯 HEDEF (ANA) KAS GRUBU</span>
          <div>
            <span class="tag tag-blue">${ex.target}</span>
          </div>
        </div>

        <div class="muscle-card">
          <span class="muscle-title" style="color:#FFC857;">⚡ YARDIMCI (SİNERJİST) KASLAR</span>
          <div>
            <span class="tag tag-amber">${ex.synergist}</span>
          </div>
        </div>

        <div style="background:var(--bg-navy); border-left:4px solid var(--electric-blue); padding:16px; border-radius:12px; margin-top:20px;">
          <span style="font-family:var(--font-mono); font-size:11px; color:var(--electric-blue); font-weight:bold; display:block; margin-bottom:4px;">🔬 BİYOMEKANİK DEĞERLENDİRME</span>
          <p style="font-size:14px; color:var(--text-muted); line-height:1.6;">${ex.desc}</p>
        </div>
      </div>

      <div class="cover-box">
        <img src="${ex.image}" alt="${ex.nameTr}">
        <div style="font-family:var(--font-mono); font-size:11px; color:var(--text-muted); margin-top:12px;">TK PERFORMANCE HIGH-RES INFOGRAPHIC</div>
      </div>
    </div>

    <!-- 2. TEKNİK BİLGİ BLOKLARI (KARTLAR) -->
    <h2 style="font-family:var(--font-display); font-size:36px; text-transform:uppercase; margin-bottom:24px;">TEKNİK UYGULAMA REHBERİ</h2>
    
    <div class="info-grid">
      
      <div class="info-card">
        <div class="info-card-title" style="color:var(--electric-blue);">🏁 1. BAŞLANGIÇ POZİSYONU</div>
        <p>${ex.startPos}</p>
      </div>

      <div class="info-card">
        <div class="info-card-title" style="color:#4ade80;">🫁 2. NEFES TEKNİĞİ</div>
        <p>${ex.breathing}</p>
      </div>

      <div class="info-card info-card-full">
        <div class="info-card-title" style="color:var(--electric-blue);">📋 3. UYGULAMA ADIMLARI</div>
        <ol>
          ${ex.steps.map(s => `<li>${s}</li>`).join('')}
        </ol>
      </div>

      <div class="info-card">
        <div class="info-card-title" style="color:#FFC857;">💡 4. DOĞRU FORM İPUÇLARI</div>
        <ul>
          ${ex.tips.map(t => `<li>✓ ${t}</li>`).join('')}
        </ul>
      </div>

      <div class="info-card" style="border-color:rgba(239,68,68,0.3); background:rgba(239,68,68,0.05);">
        <div class="info-card-title" style="color:#f87171;">⚠️ 5. SIK YAPILAN HATALAR</div>
        <ul>
          ${ex.mistakes.map(m => `<li>✕ ${m}</li>`).join('')}
        </ul>
      </div>

      <div class="info-card">
        <div class="info-card-title" style="color:#fbbf24;">🛡️ 6. GÜVENLİK ÖNERİLERİ</div>
        <ul>
          ${ex.warnings.map(w => `<li>! ${w}</li>`).join('')}
        </ul>
      </div>

      <div class="info-card">
        <div class="info-card-title" style="color:var(--electric-blue);">📏 7. HAREKET AÇIKLIĞI (ROM)</div>
        <p>${ex.rom}</p>
      </div>

    </div>

    <!-- 3. BENZER EGZERSİZLER -->
    ${related.length > 0 ? `
    <h2 style="font-family:var(--font-display); font-size:36px; text-transform:uppercase; margin-bottom:24px;">BENZER EGZERSİZLER (${ex.category.toUpperCase()})</h2>
    <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:24px; margin-bottom:60px;">
      ${related.map(r => `
        <div style="background:var(--card-bg); border:1px solid var(--border-dark); border-radius:20px; padding:20px;">
          <div style="font-family:var(--font-mono); font-size:11px; color:var(--electric-blue); font-weight:bold; margin-bottom:8px;">${r.category} • ${r.equipment}</div>
          <div style="font-family:var(--font-display); font-size:24px; margin-bottom:12px;">${r.nameTr}</div>
          <img src="${r.image}" alt="${r.nameTr}" style="width:100%; height:180px; object-fit:contain; border-radius:12px; background:#000; margin-bottom:16px;">
          <a href="/egzersizler/${r.slug}" style="display:block; text-align:center; background:var(--electric-blue); color:#fff; padding:10px; border-radius:12px; font-family:var(--font-mono); font-size:12px; font-weight:bold; text-decoration:none;">🔍 İNCELE</a>
        </div>
      `).join('')}
    </div>
    ` : ''}

  </main>

  <footer>
    <div class="wrap">
      TUNAHAN KESKİN PERFORMANCE — SPORTS SCIENTIST & COACH
    </div>
  </footer>

</body>
</html>`;

  res.send(html);
});


app.get(['/tk_logo.png', '/tk%20logo.png'], (req, res) => {
  if (fs.existsSync(path.join(__dirname, 'tk logo.png'))) {
    return res.sendFile(path.join(__dirname, 'tk logo.png'));
  }
  if (fs.existsSync(path.join(__dirname, 'tk_logo.png'))) {
    return res.sendFile(path.join(__dirname, 'tk_logo.png'));
  }
  if (fs.existsSync(path.join(__dirname, 'public', 'tk_logo.png'))) {
    return res.sendFile(path.join(__dirname, 'public', 'tk_logo.png'));
  }
  return res.status(404).send('Logo not found');
});
// SPRINT V2 — MASTER PRODUCT ROUTES
app.get('/services', (req, res) => {
  res.redirect('/#services');
});

app.get('/services/:slug', (req, res) => {
  res.redirect('/#services');
});

app.get('/academy', (req, res) => {
  res.redirect('/#academy');
});

app.get('/success-stories', (req, res) => {
  res.redirect('/#success-stories');
});

app.get('/about', (req, res) => {
  res.redirect('/#hakkimda');
});

app.get('/contact', (req, res) => {
  res.redirect('/#contact');
});


app.use(express.static(path.join(__dirname, 'public'), { index: false }));
app.use(express.static(__dirname, { index: false }));

if (!fs.existsSync(path.dirname(DATA_FILE))) {
  fs.mkdirSync(path.dirname(DATA_FILE), { recursive: true });
}

function getContentData() {
  if (!fs.existsSync(DATA_FILE)) return {};
  try {
    return JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
  } catch (e) {
    return {};
  }
}

// Authentication Middleware
const requireAuth = (req, res, next) => {
  const token = req.cookies.admin_token;
  if (!token) return res.status(401).json({ error: 'Yetkisiz erişim' });
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Geçersiz veya süresi dolmuş oturum' });
  }
};

// API: Get Public Website Content (hides secret API keys)
app.get('/api/content', (req, res) => {
  try {
    const data = getContentData();
    const token = req.cookies.admin_token;
    let isAdmin = false;
    if (token) {
      try { jwt.verify(token, JWT_SECRET); isAdmin = true; } catch (e) {}
    }

    if (!isAdmin) {
      const publicData = { ...data };
      delete publicData.iyzicoApiKey;
      delete publicData.iyzicoSecretKey;
      delete publicData.paytrMerchantKey;
      delete publicData.paytrMerchantSalt;
      delete publicData.openaiApiKey;
      delete publicData.geminiApiKey;
      return res.json(publicData);
    }
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'İçerik okunurken bir hata oluştu' });
  }
});

// API: Admin Login
app.post('/api/login', (req, res) => {
  const { password } = req.body;
  if (password === ADMIN_PASSWORD) {
    const token = jwt.sign({ role: 'admin' }, JWT_SECRET, { expiresIn: '7d' });
    res.cookie('admin_token', token, {
      httpOnly: true,
      maxAge: 7 * 24 * 60 * 60 * 1000,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production'
    });
    return res.json({ success: true });
  }
  return res.status(401).json({ error: 'Hatalı şifre' });
});

// API: Admin Logout
app.post('/api/logout', (req, res) => {
  res.clearCookie('admin_token');
  res.json({ success: true });
});

// API: Auth Check
app.get('/api/auth-check', (req, res) => {
  const token = req.cookies.admin_token;
  if (!token) return res.json({ authenticated: false });
  try {
    jwt.verify(token, JWT_SECRET);
    return res.json({ authenticated: true });
  } catch (e) {
    return res.json({ authenticated: false });
  }
});

// API: Save Content (Requires Admin Auth)
app.post('/api/content', requireAuth, (req, res) => {
  try {
    const newContent = req.body;
    fs.writeFileSync(DATA_FILE, JSON.stringify(newContent, null, 2), 'utf8');
    res.json({ success: true, message: 'İçerik ve AI / ödeme ayarları başarıyla kaydedildi!' });
  } catch (error) {
    res.status(500).json({ error: 'İçerik kaydedilirken sunucu hatası oluştu' });
  }
});

// ==========================================
// 🤖 OPENAI (ChatGPT) / GEMINI AI CHATBOT
// ==========================================
app.post('/api/ai-chat', async (req, res) => {
  const { message } = req.body;
  if (!message || typeof message !== 'string') {
    return res.status(400).json({ reply: 'Lütfen geçerli bir mesaj yazın.' });
  }

  const content = getContentData();
  const openaiApiKey = process.env.OPENAI_API_KEY || content.openaiApiKey;
  const geminiApiKey = process.env.GEMINI_API_KEY || content.geminiApiKey;

  const systemPrompt = `Sen Spor Bilimci, Beden Eğitimi Öğretmeni ve 2. Kademe Fitness Antrenörü Tunahan Keskin'in 7/24 Yapay Zeka Koçluk ve Canlı Destek Asistanısın.

Görevin:
1. Ziyaretçilere antrenman, kas geliştirme, yağ yakımı, atletik performans, postür ve esnek beslenme konularında bilimsel, motive edici, samimi ve disiplinli bir Türkçe yanıt vermek.
2. Paketlerimiz hakkında bilgi vermek:
   - BAŞLANGIÇ (1.650 TL/ay): Kişiye özel antrenman programı + Form videosu kontrolü + Sınırsız mesajlaşma.
   - GELİŞİM (2.250 TL/ay - En Çok Tercih Edilen): Başlangıç paketindeki her şey + Beslenme & Makro Rehberi + Haftalık ölçüm takibi.
   - PREMIUM PERFORMANS (2.950 TL/ay): Tüm özellikler + Kişiye özel esnek beslenme planı + Detaylı video form analizi + Öncelikli iletişim.
3. Sitemizde 256-bit SSL korumalı iyzico ve PayTR kredi/banka kartı ödeme seçenekleri bulunduğunu belirtmek.
4. Özel tıbbi durumlar veya doğrudan koçluk görüşmesi için WhatsApp (https://wa.me/${content.whatsapp || '905445300481'}) bağlantısını sunmak.
5. Yanıtlarını kısa, öz, motive edici ve Türkçe olarak ver.`;

  if (openaiApiKey) {
    try {
      const postData = JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: message }
        ],
        temperature: 0.7,
        max_tokens: 350
      });

      const options = {
        hostname: 'api.openai.com',
        path: '/v1/chat/completions',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${openaiApiKey}`,
          'Content-Length': Buffer.byteLength(postData)
        }
      };

      const openaiReq = https.request(options, (openaiRes) => {
        let body = '';
        openaiRes.on('data', chunk => body += chunk);
        openaiRes.on('end', () => {
          try {
            const data = JSON.parse(body);
            if (data.choices && data.choices[0] && data.choices[0].message) {
              return res.json({ reply: data.choices[0].message.content });
            }
            throw new Error(data.error?.message || 'OpenAI yanıt veremedi');
          } catch (e) {
            return fallbackAiReply(req, res, message, content);
          }
        });
      });

      openaiReq.on('error', () => fallbackAiReply(req, res, message, content));
      openaiReq.write(postData);
      openaiReq.end();
      return;
    } catch (err) {
      console.warn('OpenAI çağrısı hatası, dahili AI kullanılıyor:', err.message);
    }
  }

  if (geminiApiKey) {
    try {
      const postData = JSON.stringify({
        contents: [
          {
            parts: [
              { text: systemPrompt + '\n\nKullanıcı Sorusu: ' + message }
            ]
          }
        ]
      });

      const options = {
        hostname: 'generativelanguage.googleapis.com',
        path: `/v1beta/models/gemini-1.5-flash:generateContent?key=${geminiApiKey}`,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(postData)
        }
      };

      const geminiReq = https.request(options, (geminiRes) => {
        let body = '';
        geminiRes.on('data', chunk => body += chunk);
        geminiRes.on('end', () => {
          try {
            const data = JSON.parse(body);
            if (data.candidates && data.candidates[0] && data.candidates[0].content) {
              const replyText = data.candidates[0].content.parts[0].text;
              return res.json({ reply: replyText });
            }
            throw new Error('Gemini yanıt vermedi');
          } catch (e) {
            return fallbackAiReply(req, res, message, content);
          }
        });
      });

      geminiReq.on('error', () => fallbackAiReply(req, res, message, content));
      geminiReq.write(postData);
      geminiReq.end();
      return;
    } catch (err) {
      console.warn('Gemini çağrısı hatası, dahili AI kullanılıyor:', err.message);
    }
  }

  return fallbackAiReply(req, res, message, content);
});

function fallbackAiReply(req, res, message, content) {
  const q = message.toLowerCase().trim();
  let reply = '';

  if (q.includes('fiyat') || q.includes('ücret') || q.includes('kaç tl') || q.includes('paket') || q.includes('maliyet') || q.includes('ne kadar')) {
    reply = `Tunahan Keskin Online Koçluk için 3 farklı seviye paketimiz bulunmaktadır:\n\n1️⃣ **BAŞLANGIÇ (1.650 TL/ay):** Kişiye özel antrenman programı + Form videosu kontrolü + Mesajlaşma takibi.\n2️⃣ **GELİŞİM (2.250 TL/ay - En Çok Tercih Edilen):** Başlangıç paketindeki her şey + Esnek Beslenme & Makro Rehberi + Haftalık tartı ve ölçüm takibi.\n3️⃣ **PREMIUM PERFORMANS (2.950 TL/ay):** Tüm özellikler + Kişiselleştirilmiş esnek beslenme planı + Detaylı video form analizi + Öncelikli iletişim.\n\nSitedeki **"Bu Paketi Seç & Öde"** butonundan iyzico veya PayTR ile güvenle satın alabilirsiniz! 💳✨`;
  } else if (q.includes('protein') || q.includes('suplement') || q.includes('kreatin') || q.includes('toz') || q.includes('takviye')) {
    reply = `Takviyeler antrenman ve beslenmenin tamamlayıcısıdır. 🧪 Kas gelişimi için kilo başına günlük 1.6 - 2.2 gram protein alımı idealdir. Kreatin monohidrat ise güç artışı ve kas içi su tutulumu için bilimsel olarak en çok kanıtlanmış takviyedir. Özel beslenme rehberimizde tüm suplement kullanım esaslarını detaylıca kurguluyoruz!`;
  } else if (q.includes('su') || q.includes('sıvı') || q.includes('hidrasyon')) {
    reply = `Su tüketimi, kas kasılması ve yağ yakım metabolizmasının en temel anahtarıdır! 💧 Günlük kilo başına 40-45 ml (ortalama 3 - 4.5 Litre) su tüketmen antrenman performansını %15'e kadar artırabilir ve ödem atımını hızlandırır.`;
  } else if (q.includes('kardiyo') || q.includes('hiit') || q.includes('koşu') || q.includes('yürüyüş')) {
    reply = `Kardiyo yağ yakımı için harika bir destektir ancak kas kütleni korumak için ilk odak noktan ağırlık antrenmanlarında Progressive Overload olmalıdır! 🏃‍♂️ Kardiyoyu haftada 2-3 gün 20-30 dakika LISS (düşük tempolu) veya HIIT şeklinde kişiye özel planlıyoruz.`;
  } else if (q.includes('postür') || q.includes('kambur') || q.includes('duruş') || q.includes('omurga') || q.includes('ağrı')) {
    reply = `Masa başı çalışanlar ve yanlış duruş alışkanlığı olanlar için anatomik postür düzeltme programları hazırlıyorum. 🧘‍♂️ Zayıf sırt/göğüs ve kalça kaslarını dengeleyerek 4-8 haftada ağrısız ve dik bir duruş kazanmanı sağlıyoruz.`;
  } else if (q.includes('form') || q.includes('video') || q.includes('teknik') || q.includes('analiz')) {
    reply = `Sakatlanmayı önlemenin ve kası maksimum uyarmanın yolu doğru tekniktir! 🎥 Gönderdiğin antrenman videolarını açı, açı hızı ve eklem yükü açısından inceleyip sana özel görüntülü geribildirim ve düzeltme notları iletiyorum.`;
  } else if (q.includes('haftada') || q.includes('kaç gün') || q.includes('sıklık') || q.includes('süre')) {
    reply = `Haftada 3, 4 veya 5 günlük antrenman şablonları hazırlayabiliriz. ⏱️ Önemli olan salonda geçirdiğin saat değil, kas gruplarını haftalık ideal hacimde (volume) ve bilimsel yoğunlukta (intensity) uyarabilmektir. Sizin yaşam temponuza en uygun programı kurguluyoruz.`;
  } else if (q.includes('motivasyon') || q.includes('disiplin') || q.includes('bahane') || q.includes('odak')) {
    reply = `Motivasyon başlatsa da sonuca ulaştıran tek şey **DİSİPLİNDİR!** 🔥 Aynada görmek istediğin vücut, antrenmandan kaçmadığın ve beslenmene sadık kaldığın günlerin eseridir. Bahane yok, bilimle devam! 💪`;
  } else if (q.includes('evde') || q.includes('ekipman') || q.includes('salon') || q.includes('gym')) {
    reply = `Evet, kesinlikle! Tunahan Hocamız ister salonda profesyonel ağırlıklarla, ister evinizdeki mevcut ekipmanlarla (veya tamamen vücut ağırlığınızla) yapabileceğiniz yüksek verimli bilimsel programlar hazırlamaktadır. 🏠🏋️‍♂️`;
  } else if (q.includes('beslenme') || q.includes('diyet') || q.includes('yemek') || q.includes('makro')) {
    reply = `Tunahan Hocamız sizi katı ve sürdürülemez diyetlere zorlamaz! 🥗 Sevdiğiniz gıdaları içeren, günlük kalori ve makro hedeflerinize uygun esnek beslenme rehberleri sunmaktadır. Gelişim ve Premium paketlerimizde beslenme desteği mevcuttur.`;
  } else if (q.includes('kas') || q.includes('hipertrofi') || q.includes('hacim') || q.includes('büyüme')) {
    reply = `Kas kütlesi artırımı için bilimsel kademeli yükleme (Progressive Overload) ve kişiye özel mekanik gerim ilkelerini uyguluyoruz. Hedefiniz kas geliştirmekse **GELİŞİM** veya **PREMIUM** paketimizi tercih edebilirsiniz! 🚀`;
  } else if (q.includes('yağ') || q.includes('kilo ver') || q.includes('zayıfla') || q.includes('göbek')) {
    reply = `Yağ yakımı sürecinde kas kütlenizi korurken kalori açığı oluşturarak maksimum metabolik yağ yakımı sağlıyoruz. Danışanlarımız 3 ayda ortalama 8–14 kg yağ kaybı başarmaktadır. 💪🔥`;
  } else if (q.includes('ödeme') || q.includes('taksit') || q.includes('kart') || q.includes('iyzico') || q.includes('paytr')) {
    reply = `Sitemizde 256-bit SSL korumalı **iyzico** ve **PayTR** Sanal POS altyapıları mevcuttur. Tüm kredi ve banka kartlarıyla 3D Secure güvencesiyle tek çekim veya 3/6/12 taksitle anında ödeme yapabilirsiniz! 💳`;
  } else if (q.includes('kimdir') || q.includes('unvan') || q.includes('tunahan') || q.includes('hoca')) {
    reply = `Tunahan Keskin; Beden Eğitimi ve Spor Öğretmeni ve 2. Kademe Fitness Antrenörüdür (Strength & Conditioning Coach). Bilimsel temellere dayalı antrenman yaklaşımıyla +500'den fazla danışanına fiziksel dönüşüm kazandırmıştır. 🎓🏅`;
  } else if (q.includes('iletişim') || q.includes('whatsapp') || q.includes('telefon') || q.includes('ulaş')) {
    const wa = content.whatsapp || '905445300481';
    reply = `Tunahan Hocamız ile doğrudan WhatsApp üzerinden görüşmek isterseniz https://wa.me/${wa} adresinden WhatsApp sohbetini başlatabilir veya Instagram @${content.instagram || 'pt.tunahankeskin'} adresinden DM atabilirsiniz! 📱`;
  } else {
    reply = `Harika bir soru! Tunahan Keskin ile %100 bilimsel ve kişiselleştirilmiş online koçluk sürecine başlamak için hedefinize uygun paketi seçip "Bu Paketi Seç & Öde" butonuna tıklayabilirsiniz. Dilerseniz özel sorularınız için WhatsApp bağlantımızdan doğrudan hocamızla da iletişime geçebilirsiniz! 🔥🏋️‍♂️`;
  }

  return res.json({ reply });
}

// IYZICO INTEGRATION
app.post('/api/payment/iyzico/init', (req, res) => {
  const { packageName, packagePrice, buyerName, buyerSurname, buyerEmail, buyerPhone } = req.body;
  if (!packageName || !packagePrice || !buyerName || !buyerSurname || !buyerEmail || !buyerPhone) {
    return res.status(400).json({ error: 'Lütfen tüm müşteri ve paket bilgilerini doldurun.' });
  }
  if (!Iyzipay) return res.status(400).json({ error: 'iyzico modülü aktif değil. Lütfen PayTR ödeme seçeneğini kullanınız.' });

  const content = getContentData();
  const apiKey = process.env.IYZICO_API_KEY || content.iyzicoApiKey || 'sandbox-test-key';
  const secretKey = process.env.IYZICO_SECRET_KEY || content.iyzicoSecretKey || 'sandbox-test-secret';
  const baseUrl = process.env.IYZICO_BASE_URL || content.iyzicoBaseUrl || 'https://sandbox-api.iyzipay.com';

  const iyzipay = new Iyzipay({ apiKey, secretKey, uri: baseUrl });
  const priceNumeric = parseFloat(packagePrice.replace(/[^0-9.]/g, '')) || 1650;
  const protocol = req.headers['x-forwarded-proto'] || req.protocol;
  const host = req.headers['x-forwarded-host'] || req.get('host');
  const callbackUrl = `${protocol}://${host}/api/payment/iyzico/callback`;

  const request = {
    locale: Iyzipay.LOCALE.TR,
    conversationId: 'TK_' + Date.now(),
    price: priceNumeric.toFixed(2),
    paidPrice: priceNumeric.toFixed(2),
    currency: Iyzipay.CURRENCY.TRY,
    basketId: 'B_' + Date.now(),
    paymentGroup: Iyzipay.PAYMENT_GROUP.PRODUCT,
    callbackUrl: callbackUrl,
    buyer: {
      id: 'BY_' + Date.now(),
      name: buyerName,
      surname: buyerSurname,
      gsmNumber: buyerPhone,
      email: buyerEmail,
      identityNumber: '11111111111',
      registrationAddress: 'Türkiye',
      ip: req.ip || '127.0.0.1',
      city: 'Istanbul',
      country: 'Turkey'
    },
    shippingAddress: {
      contactName: buyerName + ' ' + buyerSurname,
      city: 'Istanbul',
      country: 'Turkey',
      address: 'Online Koçluk Hizmeti'
    },
    billingAddress: {
      contactName: buyerName + ' ' + buyerSurname,
      city: 'Istanbul',
      country: 'Turkey',
      address: 'Online Koçluk Hizmeti'
    },
    basketItems: [
      {
        id: 'BI_' + Date.now(),
        name: packageName,
        category1: 'Fitness Koçluk',
        itemType: Iyzipay.BASKET_ITEM_TYPE.VIRTUAL,
        price: priceNumeric.toFixed(2)
      }
    ]
  };

  iyzipay.checkoutFormInitialize.create(request, (err, result) => {
    if (err || result.status !== 'success') {
      return res.status(400).json({ error: result?.errorMessage || 'iyzico ödeme başlatılamadı. Lütfen API anahtarlarınızı kontrol edin.' });
    }
    res.json({ success: true, checkoutFormContent: result.checkoutFormContent });
  });
});

// PAYTR INTEGRATION
app.post('/api/payment/paytr/init', (req, res) => {
  const { packageName, packagePrice, buyerName, buyerSurname, buyerEmail, buyerPhone } = req.body;
  if (!packageName || !packagePrice || !buyerName || !buyerSurname || !buyerEmail || !buyerPhone) {
    return res.status(400).json({ error: 'Lütfen tüm müşteri ve paket bilgilerini doldurun.' });
  }

  const content = getContentData();
  const merchantId = process.env.PAYTR_MERCHANT_ID || content.paytrMerchantId;
  const merchantKey = process.env.PAYTR_MERCHANT_KEY || content.paytrMerchantKey;
  const merchantSalt = process.env.PAYTR_MERCHANT_SALT || content.paytrMerchantSalt;

  if (!merchantId || !merchantKey || !merchantSalt) {
    return res.status(400).json({ error: 'PayTR Mağaza bilgileri tanımlanmamış. Lütfen Admin Paneli üzerinden PayTR API anahtarlarını giriniz.' });
  }

  const priceNumeric = parseFloat(packagePrice.replace(/[^0-9.]/g, '')) || 1650;
  const paymentAmount = Math.round(priceNumeric * 100);
  const merchantOid = 'TK' + Date.now();

  const protocol = req.headers['x-forwarded-proto'] || req.protocol;
  const host = req.headers['x-forwarded-host'] || req.get('host');
  const merchantOkUrl = `${protocol}://${host}/payment-success.html`;
  const merchantFailUrl = `${protocol}://${host}/payment-fail.html`;

  const userBasket = JSON.stringify([[packageName, priceNumeric.toFixed(2), 1]]);
  const userIp = req.ip || '127.0.0.1';
  const timeoutLimit = '30';
  const debugOn = '1';
  const testMode = content.paytrTestMode || '1';
  const noInstallment = '0';
  const maxInstallment = '12';
  const currency = 'TL';

  const hashString = merchantId + userIp + merchantOid + buyerEmail + paymentAmount + userBasket + noInstallment + maxInstallment + currency + testMode;
  const paytrToken = crypto.createHmac('sha256', merchantKey).update(hashString + merchantSalt).digest('base64');

  const postData = new URLSearchParams({
    merchant_id: merchantId,
    user_ip: userIp,
    merchant_oid: merchantOid,
    email: buyerEmail,
    payment_amount: paymentAmount.toString(),
    paytr_token: paytrToken,
    user_basket: userBasket,
    debug_on: debugOn,
    no_installment: noInstallment,
    max_installment: maxInstallment,
    user_name: buyerName + ' ' + buyerSurname,
    user_address: 'Online Koçluk Eğitimi',
    user_phone: buyerPhone,
    merchant_ok_url: merchantOkUrl,
    merchant_fail_url: merchantFailUrl,
    timeout_limit: timeoutLimit,
    currency: currency,
    test_mode: testMode
  }).toString();

  const options = {
    hostname: 'www.paytr.com',
    path: '/odeme/api/get-token',
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': Buffer.byteLength(postData)
    }
  };

  const paytrReq = https.request(options, (paytrRes) => {
    let body = '';
    paytrRes.on('data', chunk => body += chunk);
    paytrRes.on('end', () => {
      try {
        const data = JSON.parse(body);
        if (data.status === 'success') {
          return res.json({ success: true, iframeUrl: 'https://www.paytr.com/odeme/guvenli/' + data.token });
        }
        return res.status(400).json({ error: data.reason || 'PayTR token oluşturulamadı.' });
      } catch (e) {
        return res.status(500).json({ error: 'PayTR yanıtı işlenemedi.' });
      }
    });
  });

  paytrReq.on('error', (err) => {
    res.status(500).json({ error: 'PayTR sunucusuna bağlanılamadı.' });
  });

  paytrReq.write(postData);
  paytrReq.end();
});

app.get('*', (req, res, next) => {
  if (req.path.startsWith('/api/')) return next();
  if (fs.existsSync(path.join(__dirname, 'index.html'))) {
    return res.sendFile(path.join(__dirname, 'index.html'));
  }
  return res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Tunahan Keskin Web Server is running on port ${PORT}`);
});
