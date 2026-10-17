import type { LandingDictionary } from "./dictionary-types";

export const huDictionary: LandingDictionary = {
  meta: {
    title: "SlickKit | Privát, azonnali mindennapi eszközök. Felhőbe való feltöltés nélkül.",
    description:
      "Mindennapi PDF-, kép- és médiaeszközök, amelyek közvetlenül az Ön számítógépén futnak. Szerkesszen bizalmas szerződéseket, pénzügyi kimutatásokat és személyes dokumentumokat felhőfeltöltés és előfizetési díjak nélkül.",
    keywords: [
      "SlickKit",
      "privát pdf eszközök",
      "offline pdf szerkesztő",
      "felhő feltöltés nélkül",
      "pdf egyesítés biztonságos",
      "pdf tömörítés helyben",
      "gdpr megfelelőség",
      "bizalmas dokumentumok",
    ],
    ogTitle: "SlickKit | Privát, azonnali mindennapi eszközök. Felhőbe való feltöltés nélkül.",
    ogDescription:
      "Fájleszközök, amelyek tiszteletben tartják a magánszféráját. Szerkesszen bizalmas PDF-eket, pénzügyi jelentéseket és képeket 100%-ban helyben, előfizetések nélkül.",
  },
  header: {
    skipToContent: "Ugrás a tartalomhoz",
    brandTag: "Studio",
    nav: {
      tools: "Eszközeink",
      howItWorks: "Hogyan működik",
      versus: "Összehasonlítás",
      compliance: "Megfelelőség",
      faq: "GYIK",
    },
    switchTheme: "Színtéma váltása",
    themeDaylight: "Váltás nappali módra",
    themeDark: "Váltás éjszakai módra",
    openPdfToolkit: "SlickKit PDF megnyitása",
    toggleMenu: "Navigációs menü megnyitása",
  },
  hero: {
    eyebrow: "Privát Mindennapi Eszközök",
    headlineBefore: "Mindennapi fájleszközök, amelyek az Ön ",
    headlineHighlight: "adatait védik",
    headlineAfter: " elsőként.",
    subtext:
      "Szerkesszen bizalmas PDF-eket, pénzügyi iratokat és fényképeket közvetlenül a gépén. Nulla felhőfeltöltés és nincsenek havi előfizetések.",
    openPdfToolkit: "SlickKit PDF megnyitása",
    exploreSuite: "Eszközök felfedezése",
    verifierTitle: "Interaktív helyi adatvédelmi garancia",
    testWithFile: "Kipróbálás bármilyen fájllal",
    presets: [
      {
        id: "finance-audit",
        name: "Penzugy_Q4_2026.pdf",
        sizeLabel: "18.4 MB · Pénzügy",
        category: "Bizalmas pénzügyi kimutatás",
        speedLabel: "0.2 mp",
      },
      {
        id: "legal-nda",
        name: "Ugyfel_Szerzodes.pdf",
        sizeLabel: "6.2 MB · Jogi",
        category: "Bizalmas vállalati szerződés",
        speedLabel: "0.1 mp",
      },
      {
        id: "tax-return",
        name: "Adobevallas_2026.pdf",
        sizeLabel: "12.8 MB · Személyes",
        category: "Érzékeny adóügyi dokumentum",
        speedLabel: "0.2 mp",
      },
    ],
    docLabel: "Dokumentum",
    speedLabel: "Sebesség",
    opening: "Megnyitás...",
    instantPrefix: "Azonnali",
    cloudUploadsLabel: "Felhőfeltöltések",
    zeroFilesUploaded: "0 fájl feltöltve",
    localGuarantee: "100%-ban az Ön gépén marad.",
    useCasesTitle: "Olyan embereknek készült, akik nap mint nap érzékeny dokumentumokat kezelnek",
    useCases: {
      finance: "Pénzügy & Bank",
      legal: "Jogi szerződések",
      company: "Vállalat & HR",
      personal: "Adók & Okmányok",
      office: "Napi irodai munka",
    },
  },
  productSuite: {
    sectionTitle: "Egyetlen egyszerű eszközkészlet mindennapi fájljaihoz.",
    sectionSubtext:
      "Gyors és kényelmes segédprogramok dokumentumaihoz, képeihez és médiatartalmaihoz. Minden közvetlenül a saját gépén zajlik, így a bizalmas adatok soha nem kerülnek fel a webre.",
    availableNow: "MÁR ELÉRHETŐ",
    comingSoon: "FEJLESZTÉS ALATT",
    notifyMe: "Értesítést kérek, ha kész",
    pdf: {
      title: "SlickKit PDF",
      tag: "Mindennapi & bizalmas PDF-ek",
      description:
        "Egyesítsen, daraboljon, tömörítsen és rendezzen át PDF-eket másodpercek alatt. Ideális pénzügyi kivonatokhoz, szerződésekhez, számlákhoz és adóívekhez, amelyeket tilos felhőbe tölteni.",
      openToolkit: "SlickKit PDF megnyitása",
      previewModes: {
        compress: {
          label: "Tömörítés",
          desc: "Akár 80%-os méretcsökkentés a szöveg tisztaságának megőrzésével.",
          stat: "14.2 MB → 2.8 MB 0.4 mp alatt",
        },
        merge: {
          label: "Egyesítés",
          desc: "Többoldalas jelentések, mellékletek és szerződések összefűzése.",
          stat: "3 dokumentum összefűzve helyben",
        },
        rotate: {
          label: "Forgatás",
          desc: "Fejjel lefelé beszkennelt oldalak javítása egyetlen kattintással.",
          stat: "Azonnali elforgatás",
        },
      },
    },
    image: {
      title: "SlickKit Image",
      tag: "Böngészőoldali képopitmalizálás",
      description:
        "Tömeges konvertálás, metaadatok törlése, valamint PNG, JPEG és WebP fájlok tömörítése közvetlenül a grafikus kártyája segítségével.",
      previewTitle: "Hardveres WebP és AVIF tömörítés",
      qualityLabel: "Célminőség",
      reductionLabel: "Megtakarított tárhely",
    },
    vault: {
      title: "SlickKit Vault",
      tag: "Helyi dokumentumbiztonság és kitakarás",
      description:
        "Tisztítsa meg az érzékeny dokumentumokat, takarja ki az azonosítókat, távolítsa el a rejtett metaadatokat és védje jelszóval a PDF-eket küldés előtt.",
      previewTitle: "Dokumentum- és metaadat-tisztítás",
      exifLabel: "GPS- és EXIF-címkék törlése",
      passphraseLabel: "Titkosítás a böngészőben",
    },
    video: {
      title: "SlickKit Video",
      tag: "Helyi képernyő- és videóvágó",
      description:
        "Vágjon képernyőfelvételeket, alakítson MP4 fájlokat kisméretű WebM klipekké és távolítson el hangsávokat a WebAssembly FFmpeg technológiával.",
      previewTitle: "Felhőmentes videótömörítő",
      formatLabel: "Kimeneti formátum",
      trimLabel: "Gyors, minőségromlás nélküli vágás",
    },
  },
  benchmark: {
    sectionTitle: "Miért jobb a helyi feldolgozás a felhőnél?",
    sectionSubtext:
      "A hagyományos online PDF-szolgáltatók távoli szerverekre töltik fel bizalmas iratait. A SlickKit mindent közvetlenül a számítógépe memóriájában dolgoz fel.",
    workloads: [
      {
        id: "tax-forms",
        label: "Adó- és banki bizonylatok",
        cloudTimeSec: "25 mp",
        localTimeSec: "Azonnali",
        cloudRiskNote: "Idegen szerverekre feltöltve",
        benefitBadge: "100% Privát",
      },
      {
        id: "finance-report",
        label: "Bizalmas pénzügyi jelentés",
        cloudTimeSec: "45 mp",
        localTimeSec: "Azonnali",
        cloudRiskNote: "Sérti a vállalati adatvédelmi szabályzatot",
        benefitBadge: "Munkahelyre alkalmas",
      },
      {
        id: "client-deck",
        label: "Nagy, 200 oldalas prezentáció",
        cloudTimeSec: "2+ perc",
        localTimeSec: "1 mp alatt",
        cloudRiskNote: "Gyakran fennakad a fájlméret-korlátozásokon",
        benefitBadge: "Nincs méretkorlát",
      },
    ],
    cloudHeading: "Hagyományos felhőszolgáltatások",
    cloudSubheading: "Feltöltés → Távoli sorban állás → Letöltés",
    localHeading: "SlickKit Silicon motor",
    localSubheading: "Nulla hálózati késleltetés · Közvetlenül a memóriában",
    privacyVerdict: "Garantáltan nulla feltöltés",
    privacyVerdictDesc:
      "Dokumentumai soha nem utaznak az interneten keresztül. Teljesen lekapcsolhatja a Wi-Fi-t, és a SlickKit zökkenőmentesen működik tovább.",
  },
  manifesto: {
    titleBefore: "Az Ön teljes ",
    titleHighlight: "lelki békéjére tervezve.",
    thesisP1:
      "Minden évben több millió bizalmas jogi szerződést, adóbevallást és pénzügyi vizsgálatot töltenek fel gondolkodás nélkül kétes konvertáló oldalakra.",
    thesisP2:
      "Hiszünk abban, hogy az alapvető mindennapi fájleszközöknek privátnak, azonnalinak és az Ön tulajdonának kell lenniük – nem pedig havi 20 dollárért bérelt szolgáltatásnak.",
    principles: [
      {
        title: "Biztonságos a bizalmas és pénzügyi munkákhoz",
        badge: "SOHA NEM HAGYJA EL AZ ESZKÖZÉT",
        tagline: "Olyan fájlokhoz, amelyeket sehova sem szabad feltöltenie.",
        description:
          "Akár negyedéves pénzügyi kimutatásokat készít elő, akár titoktartási szerződést tekint át vagy adóíveket fűz össze, dokumentumai szigorúan a gépén maradnak. Nem szivároghatnak ki harmadik félhez.",
        points: [
          "Megbízható banki, pénzügyi, jogi és személyes dokumentumokhoz",
          "Fájljai semmilyen körülmények között nem kerülnek felhőszerverekre",
          "Kapcsolja le a Wi-Fi-t, és dolgozzon tovább teljes biztonságban",
        ],
      },
      {
        title: "Egyszeri örökös licenc. Nulla előfizetés.",
        badge: "FIZESSEN EGYSZER, BIRTOKOLJA ÖRÖKKÉ",
        tagline: "Ne fizessen havonta tízezreket pusztán egy PDF szerkesztéséért.",
        description:
          "Nem kellene alapvető segédeszközöket bérelnie. Mivel a számítógépe végzi el a számításokat, nincsenek óriási szerverköltségeink, amelyeket Önre kellene hárítanunk. Használja az alapeszközöket ingyen, vagy szerezzen örökös hozzáférést.",
        points: [
          "Nincsenek rejtett havidíjak vagy automatikus megújulások",
          "Vásárolja meg egyszer, és birtokolja örökre",
          "A legfontosabb funkciók azonnal, regisztráció nélkül elérhetők",
        ],
      },
      {
        title: "Azonnali sebesség feltöltési várakozás nélkül",
        badge: "NINCSENEK VÁRÓLISTÁK ÉS KORLÁTOZÁSOK",
        tagline: "Nyisson meg egy 300 oldalas anyagot olyan gyorsan, mint egy egyoldalas jegyzetet.",
        description:
          "Felejtse el a lassú feltöltési csíkokat és a bosszantó fájlméret-korlátokat a határidők előtt. Mivel semmi sem utazik a hálózaton keresztül, még a hatalmas iratok és a nagy felbontású szkennelések is a másodperc törtrésze alatt megnyílnak és elmentődnek.",
        points: [
          "Tökéletesen működik lassú szállodai vagy vonatos internet mellett is",
          "Nagy pénzügyi anyagok és szkennelések kezelése késleltetés nélkül",
          "Letisztult, zavartalan munkaterület hirdetések és felugró ablakok nélkül",
        ],
      },
    ],
  },
  faq: {
    sectionTitle: "Gyakran ismételt kérdések.",
    sectionSubtext: "Minden fontos tudnivaló adatvédelmi felépítésünkről és technológiánkról.",
    items: [
      {
        category: "Adatvédelem és biztonság",
        question: "Feltöltődnek a dokumentumaim bármilyen szerverre a SlickKit PDF használatakor?",
        answer:
          "Nem. A SlickKit PDF 100%-ban helyben, az Ön gépén fut kliensoldali JavaScript, Web Workers és WebAssembly technológiák segítségével. Fájljai soha nem hagyják el az eszközt, és semmilyen felhőszerverre nem töltődnek fel. Ezt a böngészője Fejlesztői eszközeinek Hálózat lapján bármikor ellenőrizheti: 0 bájt adatforgalmat fog látni.",
      },
      {
        category: "Offline használat",
        question: "Használhatom a SlickKit PDF-et internetkapcsolat nélkül is?",
        answer:
          "Igen. Miután a webalkalmazás betöltődött a böngészőjében vagy telepítette Progressive Web App (PWA) formájában, az összes feldolgozó motor helyben fut. Kikapcsolhatja a Wi-Fi-t, dolgozhat repülőgépen vagy szigorúan zárt hálózatokon is.",
      },
      {
        category: "Jogi megfelelőség",
        question: "Alkalmas a SlickKit PDF szigorúan bizalmas szerződésekhez és banki adatokhoz?",
        answer:
          "Igen. Mivel a hálózaton egyetlen bájt adat sem halad át, a SlickKit teljes mértékben megfelel a szigorú titoktartási (NDA) elvárásoknak, a pénzügyi előírásoknak és a GDPR adatvédelmi elveinek, hiszen semmiféle harmadik fél általi adatkezelés nem történik.",
      },
      {
        category: "Összehasonlítás és teljesítmény",
        question: "Miben különbözik a SlickKit PDF az online szolgáltatásoktól, mint az iLovePDF vagy Smallpdf?",
        answer:
          "A hagyományos online PDF-szolgáltatók távoli szerverekre töltik fel a fájlokat, ahol azok várakozási sorba kerülnek és ideiglenesen tárolódnak. A SlickKit megszünteti a fel- és letöltés lépéseit: közvetlenül a számítógépe memóriájában dolgozza fel a fájlokat, így biztonságosabb, gyorsabb és mentes a havi előfizetési kényszertől.",
      },
      {
        category: "Korlátok és árak",
        question: "Vannak fájlméret-korlátozások vagy rejtett költségek?",
        answer:
          "Nincsenek mesterséges szerverkorlátok. Mivel a fájlokat a saját gépe hardvere dolgozza fel, az egyetlen határt az elérhető RAM memóriája jelenti. A SlickKit ingyenes, kötelező előfizetések, regisztráció és bankkártya-adatok nélkül használható.",
      },
    ],
  },
  footer: {
    launchBannerTitle: "Kezelje bizalmas dokumentumait teljes biztonságban.",
    launchBannerSubtext:
      "Nyissa meg a SlickKit PDF-et közvetlenül a böngészőjében. Nulla felhőfeltöltés, regisztráció nélkül és havidíjak nélkül.",
    openPdfToolkit: "SlickKit PDF megnyitása",
    exploreSuite: "Eszközök felfedezése",
    brandDescription:
      "Privát, kliensoldalon futó mindennapi eszközök szakembereknek és magánszemélyeknek, akik érzékeny iratokkal dolgoznak.",
    offlineMode: "Offline használatra kész · 100% Kliensoldali",
    onlineMode: "Csatlakozva · Felhőbeli adatátvitel nélkül",
    globalEditions: "NEMZETKÖZI KIADÁSOK (9 NYELV):",
    colProducts: "Termékek",
    colComparisons: "Összehasonlítások",
    colCompliance: "Megfelelőség & Biztonság",
    colCompany: "Jogi & Bizalom",
    copyright: "SlickKit Studio. Minden jog fenntartva. Telemetria és felhős követés nélkül.",
    terms: "Felhasználási feltételek",
    privacy: "Adatvédelmi irányelvek",
    refunds: "Visszatérítési szabályzat",
    contact: "Kapcsolat & Támogatás",
  },
};
