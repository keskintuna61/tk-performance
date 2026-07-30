export interface Exercise {
  id: string;
  slug: string;
  nameTr: string;
  nameEn: string;
  title?: string;
  englishTitle?: string;
  category: 'Göğüs' | 'Sırt' | 'Omuz' | 'Bacak' | 'Kol' | 'Core' | 'Mobilite' | 'Atletik Performans';
  equipment: string;
  difficulty: 'Başlangıç' | 'Orta' | 'İleri';
  youtubeUrl?: string;
  coverImage: string;
  targetMuscles: string[];
  primaryMuscles?: string[];
  synergistMuscles: string[];
  secondaryMuscles?: string[];
  movementType: string;
  movementPattern?: string;
  description: string;
  startingPosition: string;
  executionSteps: string[];
  execution?: string[];
  breathing: string;
  proTips: string[];
  tips?: string[];
  commonMistakes: string[];
  mistakes?: string[];
  safetyWarnings: string[];
  warnings?: string[];
  rangeOfMotion: string;
  tempo?: string;
  commonErrors?: string[];
  alternatives?: string[];
  relatedExercises?: string[];
}

export const exercisesData: Exercise[] = [
  {
    id: "ex-1",
    slug: "chest-press-machine",
    nameTr: "Chest Press Machine (Göğüs İtiş Makinesi)",
    nameEn: "Chest Press Machine",
    title: "Chest Press Machine (Göğüs İtiş Makinesi)",
    englishTitle: "Chest Press Machine",
    category: "Göğüs",
    equipment: "Makine",
    difficulty: "Başlangıç",
    coverImage: "/images/exercise-covers/chest-press.png",
    movementType: "Bileşik (Compound)",
    movementPattern: "Yatay İtiş (Horizontal Push)",
    tempo: "2-0-1",
    targetMuscles: ["Pectoralis Major (Sternal & Clavicular Head)"],
    primaryMuscles: ["Pectoralis Major"],
    synergistMuscles: ["Anterior Deltoid", "Triceps Brachii"],
    secondaryMuscles: ["Anterior Deltoid", "Triceps Brachii"],
    description: "Göğüs kası liflerini omurgaya ve omuz eklemine aşırı yük bindirmeden hedefleyen temel, stabil ve yüksek biyomekanik verimli itiş hareketi.",
    startingPosition: "Koltuk yüksekliğini tutamaklar alt/orta göğüs hizanıza gelecek şekilde ayarlayın. Sırtınızı ve kalçanızı sehpadan ayırmadan omurganızı nötr pozisyonda tutun.",
    executionSteps: [
      "Nefes vererek göğüs kaslarınızı sıkarak tutamakları ileriye doğru ittirin.",
      "Dirsekleriniz kilitlenmeden (hiperektansiyon olmadan) hemen önce tepe noktada durun.",
      "Göğüs liflerinizde esnemeyi hissederek 3 saniyelik negatif tempoyla başlangıç noktasına dönün."
    ],
    execution: [
      "Nefes vererek göğüs kaslarınızı sıkarak tutamakları ileriye doğru ittirin.",
      "Dirsekleriniz kilitlenmeden hemen önce tepe noktada durun.",
      "Göğüs liflerinizde esnemeyi hissederek negatif tempoyla başlangıç noktasına dönün."
    ],
    breathing: "İtiş fazında (konsantrik) nefes verin; ağırlığı geriye indirirken (eksantrik) nefes alın.",
    proTips: [
      "Skapulalarınızı (kürek kemikleri) hareket boyunca arkada ve aşağıda (retraksiyon & depresyon) sabitleyin.",
      "Bileklerinizi geriye doğru bükmeyin; ön kol ile dik açı korunsun."
    ],
    tips: [
      "Kürek kemiklerinizi arkada sabitleyin.",
      "Bilekleri geriye bükmeyin."
    ],
    commonMistakes: [
      "Omuzları kulaklara doğru yukarı kaldırmak.",
      "İtiş esnasında kürek kemiklerini gevşetip göğüs kafesini kapatmak.",
      "Bel bölgesinde aşırı çukur oluşturmak."
    ],
    mistakes: [
      "Omuzları yukarı kaldırmak",
      "Sırtı koltuktan kaldırmak"
    ],
    safetyWarnings: [
      "Aşırı ağır kilolarda dirsekleri en tepe noktada sertçe kilitlemeyin.",
      "Omuz sakatlığı geçmişiniz varsa koltuk yüksekliğini düşürün."
    ],
    warnings: [
      "Dirsekleri tam kilitlemeyin."
    ],
    rangeOfMotion: "Tutamaklar göğüs hizasına paralel gelene kadar tam esnetme ve dirsekler 170 dereceye gelene kadar tam itiş.",
    alternatives: ["Incline Chest Press", "Decline Chest Press", "Chest Fly"],
    relatedExercises: ["incline-chest-press", "decline-chest-press", "chest-fly"]
  },
  {
    id: "ex-2",
    slug: "incline-chest-press",
    nameTr: "Incline Chest Press (Üst Göğüs İtiş)",
    nameEn: "Incline Chest Press",
    title: "Incline Chest Press (Üst Göğüs İtiş)",
    englishTitle: "Incline Chest Press",
    category: "Göğüs",
    equipment: "Dumbbell / Makine",
    difficulty: "Orta",
    coverImage: "/images/exercise-covers/incline-press.png",
    movementType: "Bileşik (Compound)",
    movementPattern: "Açılı Dikey İtiş",
    tempo: "3-1-1",
    targetMuscles: ["Pectoralis Major (Clavicular Head)"],
    primaryMuscles: ["Üst Göğüs (Clavicular Head)"],
    synergistMuscles: ["Anterior Deltoid", "Triceps Brachii"],
    secondaryMuscles: ["Ön Omuz", "Arka Kol"],
    description: "Üst göğüs kas liflerini maksimum biyomekanik açıyla uyararak klaviküler başı belirginleştiren temel itiş egzersizi.",
    startingPosition: "Bench açısını 30 derecede ayarlayın. Ayak tabanlarınızı yere sabitleyin, göğüs kafesinizi kabartın.",
    executionSteps: [
      "Ağırlığı kontrollü bir şekilde üst göğüs çizginize doğru indirin.",
      "Üst göğüs kaslarınızı kasarak ağırlığı yukarı ve hafifçe geriye doğru itin.",
      "Tepe noktada kas kasılmasını 1 saniye hissedin."
    ],
    breathing: "Yukarı itiş yaparken nefes verin, aşağı indirirken nefes alın.",
    proTips: [
      "Bench açısını 45 dereceden fazla yapmayın, aksi takdirde yük ön omuza kayar."
    ],
    commonMistakes: [
      "Bench açısını çok dik ayarlamak.",
      "Dirsekleri 90 derece dışa doğru açıp omuza fazla yük bindirmek."
    ],
    safetyWarnings: [
      "Omuz ağrısı hissederseniz açıyı 15-30 dereceye düşürün."
    ],
    rangeOfMotion: "Ağırlık üst göğüse değene kadar tam eksantrik esneme ve tepe noktaya kadar itiş.",
    alternatives: ["Chest Press Machine", "Chest Fly"],
    relatedExercises: ["chest-press-machine", "decline-chest-press", "chest-fly"]
  },
  {
    id: "ex-3",
    slug: "decline-chest-press",
    nameTr: "Decline Chest Press (Alt Göğüs İtiş)",
    nameEn: "Decline Chest Press",
    title: "Decline Chest Press (Alt Göğüs İtiş)",
    englishTitle: "Decline Chest Press",
    category: "Göğüs",
    equipment: "Serbest Ağırlık / Makine",
    difficulty: "Orta",
    coverImage: "/images/exercise-covers/decline-press.png",
    movementType: "Bileşik (Compound)",
    movementPattern: "Alt Açılı İtiş",
    tempo: "3-0-1",
    targetMuscles: ["Pectoralis Major (Lower Head)"],
    primaryMuscles: ["Alt Göğüs (Lower Sternal Head)"],
    synergistMuscles: ["Triceps Brachii", "Anterior Deltoid"],
    secondaryMuscles: ["Triceps", "Ön Omuz"],
    description: "Alt göğüs kas hattını belirginleştiren ve kürek kemiği stabilitesini artıran spesifik itiş egzersizi.",
    startingPosition: "Eğimli alt göğüs sehpasına yatarak ayaklarınızı sabitleyin. Barlar alt göğüs çizginizde olacak şekilde hizalanın.",
    executionSteps: [
      "Ağırlığı alt göğüs hizanıza doğru yavaşça indirin.",
      "Alt göğüs liflerinizi katarak ağırlığı yukarı itin.",
      "Kontrolü kaybetmeden başlangıç konumuna dönün."
    ],
    breathing: "İtişte nefes verin, indirirken yavaşça nefes alın.",
    proTips: [
      "Ayak sabitleyicilerini her zaman kilitli tutun."
    ],
    commonMistakes: [
      "Barı göğse çarptırmak.",
      "Boyun kaslarını gereksiz kasmak."
    ],
    safetyWarnings: [
      "Kan basıncı artışına karşı baş dönmesi hissedilirse hemen durulmalıdır."
    ],
    rangeOfMotion: "Alt göğüs hizasında tam esneme ve tepe noktada kasılma.",
    alternatives: ["Chest Press Machine", "Chest Fly"],
    relatedExercises: ["chest-press-machine", "incline-chest-press", "chest-fly"]
  },
  {
    id: "ex-4",
    slug: "chest-fly",
    nameTr: "Chest Fly (Göğüs Açış)",
    nameEn: "Chest Fly Machine / Cable",
    title: "Chest Fly (Göğüs Açış)",
    englishTitle: "Chest Fly Machine / Cable",
    category: "Göğüs",
    equipment: "Kablo / Makine",
    difficulty: "Başlangıç",
    coverImage: "/images/exercise-covers/chest-fly.png",
    movementType: "İzolasyon (Adduction)",
    movementPattern: "Yatay Açış / Kapatış",
    tempo: "3-1-2",
    targetMuscles: ["Pectoralis Major (Sternal Head)"],
    primaryMuscles: ["Göğüs Kasları"],
    synergistMuscles: ["Anterior Deltoid"],
    secondaryMuscles: ["Ön Omuz"],
    description: "Göğüs kaslarını yatay addüksiyon ekseninde izole ederek tepe noktasında tam izometrik sıkışma sağlayan açış hareketi.",
    startingPosition: "Tutamakları kavrayın, dirsekleri sabit hafif bükülü tutun. Göğsünüzü dik ve açık tutun.",
    executionSteps: [
      "Kolları dev bir ağaca sarılır gibi önde birleştirin.",
      "Ortada 1 saniye boyunca göğsünüzü tam sıkın.",
      "Yavaş tempo ile kolları geriye doğru açıp göğsü esnetin."
    ],
    breathing: "Kolları kapatırken nefes verin, geriye açarken nefes alın.",
    proTips: [
      "Bilekleri değil, dirseklerinizi birbirine yaklaştırmaya odaklanın."
    ],
    commonMistakes: [
      "Dirsekleri tamamen kilitlemek veya hareketi pres haline getirmek.",
      "Omuzları öne doğru yuvarlamak."
    ],
    safetyWarnings: [
      "Kolları arkaya aşırı açıp omuz kapsülünü zorlamayın."
    ],
    rangeOfMotion: "Omuz hizasına kadar esnetme ve önde tam birleştirme.",
    alternatives: ["Chest Press Machine", "Incline Chest Press"],
    relatedExercises: ["chest-press-machine", "incline-chest-press", "decline-chest-press"]
  },
  {
    id: "ex-5",
    slug: "lat-pulldown",
    nameTr: "Lat Pulldown (Geniş Üst Çekiş)",
    nameEn: "Lat Pulldown",
    title: "Lat Pulldown (Geniş Üst Çekiş)",
    englishTitle: "Lat Pulldown",
    category: "Sırt",
    equipment: "Kablo",
    difficulty: "Başlangıç",
    coverImage: "/images/exercise-covers/lat-pulldown.png",
    movementType: "Bileşik (Compound)",
    movementPattern: "Dikey Çekiş (Vertical Pull)",
    tempo: "3-1-1",
    targetMuscles: ["Latissimus Dorsi", "Teres Major"],
    primaryMuscles: ["Kanat Kasları (Latissimus Dorsi)"],
    synergistMuscles: ["Biceps Brachii", "Rhomboids", "Posterior Deltoid"],
    secondaryMuscles: ["Biceps", "Kürek Kemik Kasları"],
    description: "Sırt genişıliğini ve V-taper postürünü geliştiren en etkili biyomekanik dikey çekiş antrenmanı.",
    startingPosition: "Barı omuz genişliğinden biraz daha geniş tutun. Dizlerinizi pede sabitleyin, göğsünüzü yukarı kabartın.",
    executionSteps: [
      "Dirseklerinizi aşağı ve geriye yönlendirerek barı üst göğsünüze çekin.",
      "Kürek kemiklerinizi aşağı bastırıp 1 saniye sıkın.",
      "Barı yavaşça yukarı uzatarak lat kaslarınızı esnetin."
    ],
    breathing: "Çekiş anında nefes verin, barı yukarı bırakırken nefes alın.",
    proTips: [
      "Barı elinizle değil, dirseklerinizle aşağı çekiyormuş gibi zihinsel odak kurun."
    ],
    commonMistakes: [
      "Barı ensenin arkasına çekmek.",
      "Gövdeyi aşırı arkaya yatırarak hile yapmak."
    ],
    safetyWarnings: [
      "Barı hızlıca yukarı fırlatarak omuz tendonlarını zorlamayın."
    ],
    rangeOfMotion: "Kollar tam uzayana kadar esneme ve bar üst göğse değene kadar çekiş.",
    alternatives: ["Seated Cable Row"],
    relatedExercises: ["seated-row"]
  },
  {
    id: "ex-6",
    slug: "seated-row",
    nameTr: "Seated Cable Row (Oturarak Çekiş)",
    nameEn: "Seated Cable Row",
    title: "Seated Cable Row (Oturarak Çekiş)",
    englishTitle: "Seated Cable Row",
    category: "Sırt",
    equipment: "Kablo",
    difficulty: "Başlangıç",
    coverImage: "/images/exercise-covers/seated-row.png",
    movementType: "Bileşik (Compound)",
    movementPattern: "Yatay Çekiş (Horizontal Pull)",
    tempo: "2-1-2",
    targetMuscles: ["Latissimus Dorsi", "Rhomboids", "Middle Trapezius"],
    primaryMuscles: ["Sırt Kasları (Middle Back)"],
    synergistMuscles: ["Biceps Brachii", "Posterior Deltoid"],
    secondaryMuscles: ["Biceps", "Arka Omuz"],
    description: "Sırt kalınlığı, postür düzeltme ve skapula stabilitesi sağlayan mükemmel bir yatay çekiş egzersizi.",
    startingPosition: "Ayaklarınızı platforma dayayın, dizleri hafif bükük tutun, göğsünüzü dikleştirin.",
    executionSteps: [
      "Tutamağı karnınıza doğru çekerken dirseklerinizi gövdenize yakın tutun.",
      "Arkanızdaki kürek kemiklerini birleştirip 1 saniye sıkın.",
      "Kolları yavaşça öne uzatıp sırt liflerini esnetin."
    ],
    breathing: "Çekerken nefes verin, öne uzatırken nefes alın.",
    proTips: [
      "Çekişi biceps ile değil, dirsekleri geriye sürükleyerek sırtınızla yapın."
    ],
    commonMistakes: [
      "Gövdeyi öne ve arkaya çok fazla sallamak.",
      "Sırtı kamburlaştırmak."
    ],
    safetyWarnings: [
      "Belinizi bükerek ağırlık kaldırmayın."
    ],
    rangeOfMotion: "Kollar tam öne uzayana kadar esnetme, tutamak karna değene kadar çekiş.",
    alternatives: ["Lat Pulldown"],
    relatedExercises: ["lat-pulldown"]
  },
  {
    id: "ex-7",
    slug: "lateral-raise",
    nameTr: "Dumbbell Lateral Raise (Yan Omuz)",
    nameEn: "Dumbbell Lateral Raise",
    title: "Dumbbell Lateral Raise (Yan Omuz)",
    englishTitle: "Dumbbell Lateral Raise",
    category: "Omuz",
    equipment: "Dumbbell",
    difficulty: "Başlangıç",
    coverImage: "/images/exercise-covers/lateral-raise.png",
    movementType: "İzolasyon",
    movementPattern: "Yan Kaldırış (Abduction)",
    tempo: "2-1-2",
    targetMuscles: ["Lateral Deltoid (Yan Omuz)"],
    primaryMuscles: ["Yan Omuz (Lateral Deltoid)"],
    synergistMuscles: ["Supraspinatus", "Trapezius"],
    secondaryMuscles: ["Üst Trapez"],
    description: "Omuz genişliği ve 3D omuz görünümü kazandıran en etkili yan omuz izole egzersizi.",
    startingPosition: "Ayakta dik durun, dambılları yanlarınızda tutun. Dirsekler hafifçe bükük olsun.",
    executionSteps: [
      "Dambılları yanlara doğru omuz yüksekliğinize kadar kaldırın.",
      "Üst noktada 1 saniye duraksayın.",
      "Kontrollü bir şekilde dambılları aşağı indirin."
    ],
    breathing: "Kaldırırken nefes verin, indirirken nefes alın.",
    proTips: [
      "Trapezlerinizi kasmamak için omuzlarınızı aşağıda tutun."
    ],
    commonMistakes: [
      "Vücudu sallayarak ağırlık fırlatmak.",
      "Ağırlığı omuz seviyesinden çok yukarı kaldırmak."
    ],
    safetyWarnings: [
      "Aşırı ağır dambıllar kullanmak omuz manşetlerini (rotator cuff) zorlayabilir."
    ],
    rangeOfMotion: "Kalça hizasından omuz hizasına kadar 90 derecelik yay çizimi.",
    alternatives: ["Shoulder Press", "Front Raise", "Face Pull"],
    relatedExercises: ["shoulder-press", "front-raise", "face-pull", "reverse-fly"]
  },
  {
    id: "ex-8",
    slug: "shoulder-press",
    nameTr: "Shoulder Press (Omuz İtiş)",
    nameEn: "Shoulder Press",
    title: "Shoulder Press (Omuz İtiş)",
    englishTitle: "Dumbbell / Machine Shoulder Press",
    category: "Omuz",
    equipment: "Dumbbell / Makine",
    difficulty: "Başlangıç",
    coverImage: "/images/exercise-covers/shoulder-press.png",
    movementType: "Bileşik (Compound)",
    movementPattern: "Dikey İtiş (Vertical Press)",
    tempo: "3-0-1",
    targetMuscles: ["Anterior Deltoid", "Lateral Deltoid"],
    primaryMuscles: ["Ön ve Yan Omuz"],
    synergistMuscles: ["Triceps Brachii", "Upper Trapezius"],
    secondaryMuscles: ["Arka Kol", "Üst Trapez"],
    description: "Omuz kütlesi ve dikey itiş gücünü geliştiren temellerin başında gelen bileşik hareket.",
    startingPosition: "Dik sehpa açısında dambılları kulak hizanızda tutun. Core bölgenizi sıkı tutun.",
    executionSteps: [
      "Ağırlığı başınızın üzerine doğru kontrollü bir şekilde itin.",
      "Dirsekler kilitlenmeden hemen önce tepe noktada durun.",
      "Yavaş tempo ile dambılları kulak hizasına kadar indirin."
    ],
    breathing: "İtişte nefes verin, yavaşça indirirken nefes alın.",
    proTips: [
      "Beli aşırı çukurlaştırmayın, karın kaslarınızı aktif tutun."
    ],
    commonMistakes: [
      "Beli büküp üst göğsü devreye sokmak.",
      "Dambılları yukarıda birbirine çarptırmak."
    ],
    safetyWarnings: [
      "Omuz impingement riski için dirseklerinizi hafifçe öne doğru hizalayın."
    ],
    rangeOfMotion: "Kulak hizasından baş üstü tam itişe kadar.",
    alternatives: ["Lateral Raise", "Front Raise"],
    relatedExercises: ["lateral-raise", "front-raise", "face-pull"]
  },
  {
    id: "ex-9",
    slug: "front-raise",
    nameTr: "Front Raise (Ön Omuz Kaldırış)",
    nameEn: "Front Raise",
    title: "Front Raise (Ön Omuz Kaldırış)",
    englishTitle: "Dumbbell Front Raise",
    category: "Omuz",
    equipment: "Dumbbell",
    difficulty: "Başlangıç",
    coverImage: "/images/exercise-covers/front-raise.png",
    movementType: "İzolasyon",
    movementPattern: "Ön Kaldırış (Flexion)",
    tempo: "2-0-2",
    targetMuscles: ["Anterior Deltoid"],
    primaryMuscles: ["Ön Omuz (Anterior Deltoid)"],
    synergistMuscles: ["Pectoralis Major (Clavicular Head)"],
    secondaryMuscles: ["Üst Göğüs"],
    description: "Ön omuz başını tam izole eden ve omuz fleksiyon gücünü artıran egzersiz.",
    startingPosition: "Dambılları uyluklarınızın önünde tutun, duruşunuzu dikleştirin.",
    executionSteps: [
      "Kolları hafif bükük tutarak dambılı öne doğru göz hizanıza kaldırın.",
      "Üst noktada 1 saniye bekleyin.",
      "Kontrollü bir şekilde aşağı indirin."
    ],
    breathing: "Kaldırırken nefes verin, indirirken nefes alın.",
    proTips: [
      "Gövdenizi sallamadan sadece ön omuz kasınızla ağırlığı kaldırın."
    ],
    commonMistakes: [
      "Belinizi geriye doğru bükmek.",
      "Momentum kullanmak."
    ],
    safetyWarnings: [
      "Omuz seviyesinden daha yukarı kaldırıp ekleme yük bindirmeyin."
    ],
    rangeOfMotion: "Uyluk önünden göz hizasına kadar 90 derece.",
    alternatives: ["Shoulder Press", "Lateral Raise"],
    relatedExercises: ["shoulder-press", "lateral-raise", "face-pull"]
  },
  {
    id: "ex-10",
    slug: "face-pull",
    nameTr: "Cable Face Pull (Yüz Çekiş)",
    nameEn: "Cable Face Pull",
    title: "Cable Face Pull (Yüz Çekiş)",
    englishTitle: "Cable Face Pull",
    category: "Omuz",
    equipment: "Kablo",
    difficulty: "Başlangıç",
    coverImage: "/images/exercise-covers/face-pull.png",
    movementType: "İzolasyon / Postür",
    movementPattern: "Dış Rotasyon & Çekiş",
    tempo: "2-1-2",
    targetMuscles: ["Posterior Deltoid", "Infraspinatus"],
    primaryMuscles: ["Arka Omuz & Rotator Cuff"],
    synergistMuscles: ["Rhomboids", "Middle Trapezius"],
    secondaryMuscles: ["Orta Trapez", "Kürek Kemiği Kasları"],
    description: "Postür düzeltme, omuz sağlığı ve arka omuz başı gelişimi için eşsiz bir rehabilitasyon & performans hareketi.",
    startingPosition: "Kablo makinesine halat takıp göğüs hizasına ayarlayın. Nötr duruş alın.",
    executionSteps: [
      "Halatı yüzünüze çekerken ellerinizi dışa doğru döndürün.",
      "Dirseklerinizi omuz seviyesinde yüksek tutun.",
      "Arka omuzu ve kürek kemiklerini sıkarak 1 saniye bekleyin."
    ],
    breathing: "Yüze doğru çekerken nefes verin, öne uzatırken nefes alın.",
    proTips: [
      "Postür sağlığı için her antrenmanın sonuna 3 set ekleyin."
    ],
    commonMistakes: [
      "Ağırlığı göğse doğru çekmek.",
      "Dirsekleri aşağı düşürmek."
    ],
    safetyWarnings: [
      "Aşırı ağır kilo seçip formu bozmayın."
    ],
    rangeOfMotion: "Kollar öne uzalı halden halat elmacık kemiklerine gelene kadar.",
    alternatives: ["Reverse Fly"],
    relatedExercises: ["reverse-fly", "lateral-raise", "shoulder-press"]
  },
  {
    id: "ex-11",
    slug: "reverse-fly",
    nameTr: "Reverse Fly (Arka Omuz Açış)",
    nameEn: "Reverse Fly",
    title: "Reverse Fly (Arka Omuz Açış)",
    englishTitle: "Reverse Pec Deck Fly",
    category: "Omuz",
    equipment: "Kablo / Makine",
    difficulty: "Başlangıç",
    coverImage: "/images/exercise-covers/reverse-fly.png",
    movementType: "İzolasyon",
    movementPattern: "Yatay Dış Açış",
    tempo: "2-1-2",
    targetMuscles: ["Posterior Deltoid"],
    primaryMuscles: ["Arka Omuz"],
    synergistMuscles: ["Rhomboids", "Middle Trapezius"],
    secondaryMuscles: ["Sırt Kasları"],
    description: "Arka omuz başını izole eden ve omuz çevresi kas dengesini sağlayan açış hareketi.",
    startingPosition: "Pec deck makinesine ters oturun, tutamakları göğüs hizasında tutun.",
    executionSteps: [
      "Kolları hafif bükük tutarak tutamakları geriye doğru açın.",
      "Arka omuzu sıkarak 1 saniye duraklayın.",
      "Yavaşça öne doğru başlangıç pozisyonuna dönün."
    ],
    breathing: "Geriye açarken nefes verin, önde birleştirirken nefes alın.",
    proTips: [
      "Hareketi yaparken dirsek açınızı hiç bozmayın."
    ],
    commonMistakes: [
      "Hareketi triceps ile çekmeye çalışmak.",
      "Gövdeyi sallamak."
    ],
    safetyWarnings: [
      "Aşırı geriye zorlayıp omuz eklemine yük bindirmeyin."
    ],
    rangeOfMotion: "Önde eller yakın konumdan geriye 180 derece açılıma kadar.",
    alternatives: ["Face Pull"],
    relatedExercises: ["face-pull", "lateral-raise", "shoulder-press"]
  },
  {
    id: "ex-12",
    slug: "machine-hip-abduction",
    nameTr: "Machine Hip Abduction (Bacak Dış Açış)",
    nameEn: "Machine Hip Abduction",
    title: "Machine Hip Abduction (Bacak Dış Açış)",
    englishTitle: "Machine Hip Abduction",
    category: "Bacak",
    equipment: "Makine",
    difficulty: "Başlangıç",
    coverImage: "/images/exercise-covers/abd-machine.png",
    movementType: "İzolasyon",
    movementPattern: "Kalça Dış Açış (Abduction)",
    tempo: "2-1-2",
    targetMuscles: ["Gluteus Medius", "Gluteus Minimus"],
    primaryMuscles: ["Yan Kalça (Gluteus Medius)"],
    synergistMuscles: ["Tensor Fasciae Latae", "Gluteus Maximus"],
    secondaryMuscles: ["Üst Kalça"],
    description: "Yan kalça kas grubunu ve kalça stabilitesini sağlayan izole bacak açış hareketi.",
    startingPosition: "Makineye oturun, sırtınızı koltuğa yaslayın, dizlerinizi pedlere hizalayın.",
    executionSteps: [
      "Kalça kaslarınızı katarak bacakları dışa doğru açın.",
      "En dış noktada 1 saniye kalçanızı sıkın.",
      "Kontrollü şekilde başlangıç noktasına dönün."
    ],
    breathing: "Açılışta nefes verin, kapatırken nefes alın.",
    proTips: [
      "Sırtınızı koltuktan ayırmadan hareketi sadece kalçadan başlatın."
    ],
    commonMistakes: [
      "Gövdeyi sallamak.",
      "Ağırlığı hızlıca düşürmek."
    ],
    safetyWarnings: [
      "Kalça ekleminde takılma hissi varsa ped açısını küçültün."
    ],
    rangeOfMotion: "Tam kapalı konumdan maksimum kalça açıklığına kadar.",
    alternatives: ["Machine Hip Adduction", "Glute Kickback"],
    relatedExercises: ["machine-hip-adduction", "glute-kickback", "leg-press"]
  },
  {
    id: "ex-13",
    slug: "machine-hip-adduction",
    nameTr: "Machine Hip Adduction (Bacak İç Kapatış)",
    nameEn: "Machine Hip Adduction",
    title: "Machine Hip Adduction (Bacak İç Kapatış)",
    englishTitle: "Machine Hip Adduction",
    category: "Bacak",
    equipment: "Makine",
    difficulty: "Başlangıç",
    coverImage: "/images/exercise-covers/add-machine.png",
    movementType: "İzolasyon",
    movementPattern: "İç Bacak Kapatış (Adduction)",
    tempo: "2-1-2",
    targetMuscles: ["Adductor Longus", "Adductor Magnus"],
    primaryMuscles: ["İç Bacak (Adductors)"],
    synergistMuscles: ["Gracilis", "Pectineus"],
    secondaryMuscles: ["Kasık Kasları"],
    description: "İç bacak kas grubunu güçlendiren ve kasık sağlığını destekleyen kapatış egzersizi.",
    startingPosition: "Makineye oturun, pedleri esnekliğinize uygun açın.",
    executionSteps: [
      "İç bacak kaslarınızı kullanarak bacakları orta hatta birleştirin.",
      "Pedler temas ettiğinde 1 saniye sıkın.",
      "Yavaşça bacakları açın."
    ],
    breathing: "Kapatırken nefes verin, açarken nefes alın.",
    proTips: [
      "Diz eklem sağlığı için yavaş ve kontrollü tempo uygulayın."
    ],
    commonMistakes: [
      "Belde çukur oluşturmak.",
      "Momentum kullanmak."
    ],
    safetyWarnings: [
      "Aşırı açıda kasık zorlanmasına dikkat edin."
    ],
    rangeOfMotion: "Açık konumdan orta hat temas noktasına kadar.",
    alternatives: ["Machine Hip Abduction"],
    relatedExercises: ["machine-hip-abduction", "leg-press", "leg-extension"]
  },
  {
    id: "ex-14",
    slug: "leg-extension",
    nameTr: "Leg Extension (Ön Bacak Açış)",
    nameEn: "Leg Extension",
    title: "Leg Extension (Ön Bacak Açış)",
    englishTitle: "Leg Extension Machine",
    category: "Bacak",
    equipment: "Makine",
    difficulty: "Başlangıç",
    coverImage: "/images/exercise-covers/leg-extension.png",
    movementType: "İzolasyon",
    movementPattern: "Diz Ekstansiyonu",
    tempo: "2-1-2",
    targetMuscles: ["Quadriceps (Rectus Femoris, Vastus Lateralis/Medialis)"],
    primaryMuscles: ["Ön Bacak (Quadriceps)"],
    synergistMuscles: ["Tensor Fasciae Latae"],
    secondaryMuscles: ["Kalça Fleksörleri"],
    description: "Ön bacak kaslarını tam izole eden ve diz üstü lif kasılmasını sağlayan makine egzersizi.",
    startingPosition: "Makineye oturun, pedi kaval kemiğinizin alt kısmına hizalayın.",
    executionSteps: [
      "Quadriceps kaslarınızı katarak bacakları yukarı uzatın.",
      "Tepe noktada 1 saniye bacağınızı tam sıkın.",
      "Ağırlığı kontrollü bir şekilde aşağı indirin."
    ],
    breathing: "Bacakları kaldırırken nefes verin, indirirken nefes alın.",
    proTips: [
      "Göz yaşı kası (vastus medialis) aktivasyonu için tepe sıkışmayı kaçırmayın."
    ],
    commonMistakes: [
      "Dizleri sertçe kilitlemek.",
      "Kalçayı koltuktan kaldırmak."
    ],
    safetyWarnings: [
      "Ön çapraz bağ sakatlığınız varsa son 15 derecede aşırı yüklenmeyin."
    ],
    rangeOfMotion: "90 derece bükülü dizden tam düzleşmeye kadar.",
    alternatives: ["Leg Press", "Leg Curl"],
    relatedExercises: ["leg-press", "leg-curl", "romanian-deadlift"]
  },
  {
    id: "ex-15",
    slug: "leg-curl",
    nameTr: "Leg Curl (Arka Bacak Büküş)",
    nameEn: "Leg Curl",
    title: "Leg Curl (Arka Bacak Büküş)",
    englishTitle: "Leg Curl Machine",
    category: "Bacak",
    equipment: "Makine",
    difficulty: "Başlangıç",
    coverImage: "/images/exercise-covers/leg-curl.png",
    movementType: "İzolasyon",
    movementPattern: "Diz Fleksiyonu",
    tempo: "3-1-2",
    targetMuscles: ["Hamstrings (Biceps Femoris, Semitendinosus)"],
    primaryMuscles: ["Arka Bacak (Hamstrings)"],
    synergistMuscles: ["Gastrocnemius"],
    secondaryMuscles: ["Kalf Kasları"],
    description: "Arka bacak kas grubunu izole ederek diz fleksiyon kuvvetini artıran temel bacak hareketi.",
    startingPosition: "Makineye yüzüstü yatın veya oturun. Pedi bileğin hemen üstüne hizalayın.",
    executionSteps: [
      "Arka bacak kaslarınızı kasarak pedi kalçanıza çekin.",
      "Tepe noktada 1 saniye sıkın.",
      "Kontrollü tempo ile geri indirin."
    ],
    breathing: "Bükerken nefes verin, uzatırken nefes alın.",
    proTips: [
      "Kalçanızı sehpadan kaldırmayın."
    ],
    commonMistakes: [
      "Bel çukuru oluşturmak.",
      "Negatifte ağırlığı serbest bırakmak."
    ],
    safetyWarnings: [
      "Kramp girmesine karşı iyi ısının."
    ],
    rangeOfMotion: "Tam uzalı ayaktan bükülü konuma kadar.",
    alternatives: ["Romanian Deadlift", "Leg Extension"],
    relatedExercises: ["romanian-deadlift", "leg-extension", "leg-press"]
  },
  {
    id: "ex-16",
    slug: "leg-press",
    nameTr: "Leg Press (Bacak İtiş)",
    nameEn: "Leg Press",
    title: "Leg Press (Bacak İtiş)",
    englishTitle: "45 Degree Leg Press",
    category: "Bacak",
    equipment: "Makine",
    difficulty: "Orta",
    coverImage: "/images/exercise-covers/leg-press.png",
    movementType: "Bileşik (Compound)",
    movementPattern: "Açılı Alt Ekstremite İtiş",
    tempo: "3-0-1",
    targetMuscles: ["Quadriceps", "Gluteus Maximus"],
    primaryMuscles: ["Ön Bacak & Kalça"],
    synergistMuscles: ["Hamstrings", "Adductor Magnus"],
    secondaryMuscles: ["Arka Bacak", "İç Bacak"],
    description: "Omurgaya dikey yük bindirmeden yüksek hacimli bacak ve kalça gelişimi sağlayan compound itiş.",
    startingPosition: "Ayaklarınızı platforma omuz genişliğinde koyun, sırtınızı tam dayayın.",
    executionSteps: [
      "Emniyeti açın, dizler 90 derece bükülene kadar platformu indirin.",
      "Topuklarınızdan güç alarak platformu yukarı itin.",
      "Dizlerinizi tam kilitlemeden durun."
    ],
    breathing: "İtişte nefes verin, indirirken nefes alın.",
    proTips: [
      "Topuklarınızın platformdan kalkmasına asla izin vermeyin."
    ],
    commonMistakes: [
      "Dizleri içeri kıvırmak (valgus).",
      "Dizleri tepe noktada kilitlemek."
    ],
    safetyWarnings: [
      "Alt sırtın sehpadan yuvarlanmasına (butt wink) izin vermeyin."
    ],
    rangeOfMotion: "90 derece diz bükümünden tam itişe kadar.",
    alternatives: ["Leg Extension", "Romanian Deadlift"],
    relatedExercises: ["leg-extension", "romanian-deadlift", "leg-curl"]
  },
  {
    id: "ex-17",
    slug: "romanian-deadlift",
    nameTr: "Romanian Deadlift (RDL)",
    nameEn: "Romanian Deadlift",
    title: "Romanian Deadlift (RDL)",
    englishTitle: "Romanian Deadlift",
    category: "Bacak",
    equipment: "Barbell",
    difficulty: "Orta",
    coverImage: "/images/exercise-covers/romanian-deadlift.png",
    movementType: "Bileşik (Hip Hinge)",
    movementPattern: "Kalça Menteşesi (Hip Hinge)",
    tempo: "3-1-1",
    targetMuscles: ["Hamstrings", "Gluteus Maximus"],
    primaryMuscles: ["Arka Bacak & Kalça"],
    synergistMuscles: ["Erector Spinae", "Adductor Magnus"],
    secondaryMuscles: ["Bel Kasları"],
    description: "Arka bacak esnekliği ve kalça hipertrofisi sağlayan en temel posterior zincir egzersizi.",
    startingPosition: "Ayakta dik durun, barı tutun. Dizlerinizi hafifçe kırıp sabitleyin.",
    executionSteps: [
      "Kalçanızı geriye iterek barı bacaklarınıza yakın indirin.",
      "Hamstring esnemesini hissettiğiniz noktada durun.",
      "Kalçayı öne sıkarak dik konuma gelin."
    ],
    breathing: "Yukarı kalkarken nefes verin, inip esnerken nefes alın.",
    proTips: [
      "Barı bacaklarınızdan hiç uzaklaştırmayın."
    ],
    commonMistakes: [
      "Sırtı kamburlaştırmak.",
      "Squat gibi dizleri fazla bükmek."
    ],
    safetyWarnings: [
      "Omurga stabilitesini korumak için belinizi bükmeyin."
    ],
    rangeOfMotion: "Dik duruştan kaval kemiği ortasına kadar esneme.",
    alternatives: ["Cable Pull Through", "Glute Kickback"],
    relatedExercises: ["cable-pull-through", "glute-kickback", "leg-curl"]
  },
  {
    id: "ex-18",
    slug: "glute-kickback",
    nameTr: "Cable Glute Kickback (Kalça Geri İtiş)",
    nameEn: "Cable Glute Kickback",
    title: "Cable Glute Kickback (Kalça Geri İtiş)",
    englishTitle: "Cable Glute Kickback",
    category: "Bacak",
    equipment: "Kablo",
    difficulty: "Orta",
    coverImage: "/images/exercise-covers/glute-kickback.png",
    movementType: "İzolasyon",
    movementPattern: "Kalça Ekstansiyonu",
    tempo: "2-1-2",
    targetMuscles: ["Gluteus Maximus"],
    primaryMuscles: ["Ana Kalça (Gluteus Maximus)"],
    synergistMuscles: ["Hamstrings"],
    secondaryMuscles: ["Arka Bacak"],
    description: "Kalça kasını izole ederek dikey geriye itiş ile maksimum tepe kasılması sağlayan egzersiz.",
    startingPosition: "Bilekliği bağlayın, makineye tutunun, gövdeyi hafif öne yatırın.",
    executionSteps: [
      "Kalçanızı sıkarak bacağınızı geriye itin.",
      "Üst noktada 1-2 saniye sıkın.",
      "Yavaşça başlangıç pozisyonuna dönün."
    ],
    breathing: "Geri iterken nefes verin, öne dönerken nefes alın.",
    proTips: [
      "Hareketi belinizden değil, kalça kasınızdan başlatın."
    ],
    commonMistakes: [
      "Beli aşırı çukurlaştırmak.",
      "Vücudu sallamak."
    ],
    safetyWarnings: [
      "Alt belinizi hiperektansiyona zorlamayın."
    ],
    rangeOfMotion: "Ön nötr duruştan geriye tam kalça sıkışmasına kadar.",
    alternatives: ["Cable Pull Through", "Machine Hip Abduction"],
    relatedExercises: ["cable-pull-through", "machine-hip-abduction", "romanian-deadlift"]
  },
  {
    id: "ex-19",
    slug: "cable-pull-through",
    nameTr: "Cable Pull Through (Kablo Kalça Çekiş)",
    nameEn: "Cable Pull Through",
    title: "Cable Pull Through (Kablo Kalça Çekiş)",
    englishTitle: "Cable Pull Through",
    category: "Bacak",
    equipment: "Kablo",
    difficulty: "Orta",
    coverImage: "/images/exercise-covers/cable-pull-through.webp",
    movementType: "Bileşik (Hip Hinge)",
    movementPattern: "Kalça Çekiş / Menteşe",
    tempo: "2-1-2",
    targetMuscles: ["Gluteus Maximus", "Hamstrings"],
    primaryMuscles: ["Kalça & Arka Bacak"],
    synergistMuscles: ["Erector Spinae"],
    secondaryMuscles: ["Bel Kasları"],
    description: "Hip hinge hareket mekanizmasını pekiştiren ve kalça kasılması sağlayan kablo egzersizi.",
    startingPosition: "Kabloya arkanızı dönün, halatı bacak arasından tutun.",
    executionSteps: [
      "Kalçayı geriye iterek öne eğilin.",
      "Kalçayı öne sıkarak dik konuma gelin.",
      "Tepe noktada kalçayı 1 saniye sıkın."
    ],
    breathing: "Kalkışta nefes verin, eğilirken nefes alın.",
    proTips: [
      "Kollarınızla değil, sadece kalçanızla çekiş yapın."
    ],
    commonMistakes: [
      "Kolları bükmek.",
      "Squat yapmak."
    ],
    safetyWarnings: [
      "Omurga açısını koruyun."
    ],
    rangeOfMotion: "Öne eğilimden dik sıkışmaya kadar.",
    alternatives: ["Romanian Deadlift", "Glute Kickback"],
    relatedExercises: ["romanian-deadlift", "glute-kickback", "machine-hip-abduction"]
  },
  {
    id: "ex-20",
    slug: "triceps-kickback",
    nameTr: "Triceps Kickback (Arka Kol Geri Uzatış)",
    nameEn: "Triceps Kickback",
    title: "Triceps Kickback (Arka Kol Geri Uzatış)",
    englishTitle: "Dumbbell Triceps Kickback",
    category: "Kol",
    equipment: "Dumbbell",
    difficulty: "Başlangıç",
    coverImage: "/images/exercise-covers/triceps-kickback.png",
    movementType: "İzolasyon",
    movementPattern: "Dirsek Ekstansiyonu",
    tempo: "2-1-2",
    targetMuscles: ["Triceps Brachii (Lateral & Medial Head)"],
    primaryMuscles: ["Arka Kol (Triceps)"],
    synergistMuscles: ["Anterior Deltoid"],
    secondaryMuscles: ["Arka Omuz"],
    description: "Arka kol kaslarını tam uzama tepe noktasında izole eden dambıl hareketi.",
    startingPosition: "Gövdenizi yere paralel yapın, üst kolu gövdeye paralel sabitleyin.",
    executionSteps: [
      "Dirseği sabitleyerek dambılı geriye itin.",
      "Kol düzleştiğinde 1 saniye arka kolu sıkın.",
      "Yavaşça dirseği 90 derece bükün."
    ],
    breathing: "Geri iterken nefes verin, öne bükerken nefes alın.",
    proTips: [
      "Üst kolunuzu bir çivi gibi gövdenize sabitleyin."
    ],
    commonMistakes: [
      "Üst kolu sallamak.",
      "Gövdeyi dikleştirmek."
    ],
    safetyWarnings: [
      "Aşırı ağır dambıl seçmeyin."
    ],
    rangeOfMotion: "90 derece bükülü dirsekten tam kilitli geriye uzatışa kadar.",
    alternatives: ["Shoulder Press"],
    relatedExercises: ["shoulder-press", "chest-press-machine"]
  }
];
