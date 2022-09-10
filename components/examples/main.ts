import { Data } from '../../types/data'

const aboutplaceholder = `Podstawy fizyki atomu wydanie 2 to nowa, odświeżona wersja znanego podręcznika, w której Autorka kompleksowo omawia zagadnienia związane z fizyką atomu.

Zarówno atomy różnych pierwiastków, jak i atomy różnych izotopów danego pierwiastka, a także atomy tego samego izotopu, ale będące w różnych stanach energetycznych (w różnych stanach wzbudzenia), różnią się od siebie w sposób wykrywalny doświadczalnie metodami fizyki atomowej. Te charakterystyczne, unikatowe cechy danego atomu wynikają z jego wewnętrznej struktury, określonej przede wszystkim usytuowaniem poszczególnych elektronów w powłoce elektronowej, a także, choć w mniejszym stopniu, własnościami jądra. Badanie i opis tej struktury stanowi przedmiot współczesnej fizyki atomu.

Chociaż w swojej istocie fizyka atomu rządzi się prawami fizyki kwantowej, w wielu przypadkach do opisu zjawisk atomowych można stosować prawa fizyki klasycznej, co wybitnie ułatwia rozwiązywanie różnych problemów. Jak każda nauka przyrodnicza, fizyka atomu jest nauką indukcyjną: na podstawie obserwacji i eksperymentu stara się odkryć i opisać w formie matematycznej prawa Przyrody, które są w niej zawarte i które nią rządzą. Jest to możliwe dzięki temu, że prawa te (jak to wiemy do dzisiaj) są niezmienne: raz wykryte i ustalone na podstawie poprawnie wykonanego doświadczenia, pozostają zawsze słuszne. Natomiast w miarę zwiększenia dokładności pomiarów mogą być one stopniowo uściślane.

 • Poznaj charakterystyczne wielkości promieniowania atomowego
 • Sprawdź, czym są widma absorpcyjne
 • Zobacz, jakie są konsekwencje zasady Pauliego dla struktury atomów
 • Przeanalizuj powstawanie liniowego widma rentgenowskiego`

export const Mathematics: Data = {
  TITLE: 'Matematyka',
  title_2: '',
  AUTHOR: ['Mateusz Słotwiński'],
  color: '#DB9200',
  icon: 'mathematics.svg',
  pages: 500,
  image: 'mathematics.jpg',
  about: aboutplaceholder,
  levels: [
    [
      'Wstęp do matematyki, algebra liniowa: wielomiany,',
      'macierze, wyznaczniki, przestzenie, rachunek wektorowy',
    ],
    ['Algebra abstrakcyjna: grupy, pierścienie i ciała'],
    ['Geometria ogólna i analityczna oraz topologia'],
    [
      'Analiza matematyczna I: funkcje jednej zmiennej, granice,',
      'pochodne, szeregi liczbowe i funkcyjne, rachunek całkowy',
    ],
    [
      'Analiza matematyczna II: funkcje wielu zmiennych, miara',
      `i całka Lebesgue'a, całki wielokrotne i formy różniczkowe`,
    ],
    [
      'Równania różniczkowe zwyczajne i cząstkowe,',
      'wstęp do rachunku wariacyjnego',
    ],
    [
      'Funkcje analityczne, analiza zespolona i funkcjonalna,',
      'układy dynamiczne i geometria różniczkowa',
    ],
    [
      'Matematyka dyskretna: logika, teoria mnogości,',
      'teoria gier, kombinatoryka, relacje, rekurencje',
    ],
    ['Propablistyka, statystyka i analiza danych'],
    [
      'Metody numeryczne i zastosowania matematyki w innych',
      'naukach przyrodniczych, technicznych oraz społecznych',
    ],
  ],
}

export const Physics: Data = {
  TITLE: 'Fizyka',
  title_2: '',

  AUTHOR: ['Mateusz Słotwiński'],
  color: '#006E89',
  icon: 'physics.svg',
  pages: 500,
  image: 'physics.jpg',
  about: aboutplaceholder,
  levels: [
    [
      'Mechanika: ruch postępowy i obrotowy, siły i równowaga,',
      'mechanika analityczna, teoria grawitacji Newtona',
    ],
    [
      'Podstawy hydrodynamiki, teoria sprężystości i drgania,',
      'fale mechaniczne, akustyka, szczególna teoria względności',
    ],
    [
      'Termodynamika i fizyka statystyczna, kinetyczna',
      'teoria gazów, elementy chemii fizycznej',
    ],
    [
      'Elektrodynamika: pole elektryczne i magnetyczne, prąd',
      'elektryczny, elektromagnetyzm, elementy elektroniki',
    ],
    ['Fale elektromagnetyczne, optyka geometryczna i falowa'],
    ['Mechanika kwantowa, optyka kwantowa,', 'wstęp do fizyki współczesnej'],
    [
      'Fizyka materii skondensowanej, podstawy fizyki',
      'półprzewodników, przewodnictwo elektryczne, fotonika',
    ],
    ['Fizyka atomowa, jądrowa i cząstek elementarnych'],
    [
      'Astronomia, astrofizyka i kosmologia, współczesna teoria',
      'grawitacji, ogólna teoria względności, grawitacja kwantowa',
    ],
  ],
}

export const Biochemistry: Data = {
  TITLE: 'Budownictwo',
  title_2: '',
  AUTHOR: ['Mateusz Słotwiński'],
  color: '#81a50a',
  icon: 'biochemistry.svg',
  pages: 500,
  image: 'civil_engineering.jpg',
  about: aboutplaceholder,
  levels: [['Chemia budowlana i materiały budowlane']],
}

export const Electronics: Data = {
  TITLE: 'Elektronika',
  title_2: '',
  AUTHOR: ['Mateusz Słotwiński'],
  color: '#aa2222',
  icon: 'electronics.svg',
  pages: 500,
  image: 'electronics.jpg',
  about: aboutplaceholder,
  levels: [
    [
      'Wstęp do elektroniki i elektrotechniki, fizyczne podstawy',
      'elektroniki i półprzewodników, materiały w elektronice',
    ],
    [
      'Teoria obwodów i ich analiza, podstawy',
      'pomiarów wielkości elektrycznych',
    ],
    ['Sygnały i systemy, przetwarzanie i analiza sygnałów'],
    ['Elektronika analogowa'],
    ['Elektronika cyfrowa, systemy cyfrowe i komputerowe'],
    [
      'Technologie elektroniczne i fotoniczne, optoelektronika',
      'zintegrowana, fotonika światłowodowa',
    ],
    [
      'Elektronika mikrofalowa, wstęp do telekomunikacji,',
      'zaawansowane przetwarzanie sygnałów i obrazów',
    ],
    ['Podstawy mikrokontrolerów, mikrosystemów ', 'oraz systemów wbudowanych'],
    [
      'Podstawy mikroelektroniki, sieci czujnikowe, zasilanie',
      'urządzeń, projektowanie systemów elektronicznych',
    ],
  ],
}

export const Informatics: Data = {
  TITLE: 'Informatyka',
  title_2: '',
  AUTHOR: ['Mateusz Słotwiński'],
  color: '#3F647F',
  icon: 'informatics.svg',
  pages: 500,
  image: 'informatics.jpg',
  about: aboutplaceholder,
  levels: [
    ['Architektura komputerów'],
    ['Algorytmy i struktury danych'],
    [
      'Podstawy informatyki i programowania,',
      'systemy operacyjne, systemy UNIX',
    ],
    ['Programowanie strukturalne i obiektowe'],
    ['Programowanie aplikacji mobilnych i komputerowych'],
    ['Sieci komupterowe'],
    ['Bazy danych i data science'],
    ['Programowanie stron internetowych i aplikacji sieciowych'],
    ['Wprowadzenie do sztucznej inteligencji', ' oraz uczenia maszynowego'],
  ],
}

export const Mechatronics: Data = {
  TITLE: 'Mechatronika',
  title_2: '',
  AUTHOR: ['Mateusz Słotwiński'],
  color: '#62737C',
  icon: 'mechatronics.svg',
  pages: 500,
  image: 'mechatronics.jpg',
  about: aboutplaceholder,
  levels: [
    ['Podstawy mechatroniki i konstrukcji urządzeń precyzyjnych'],
    ['Sterowanie i monitorowanie urządzeń mechatronicznych'],
    ['Elektroniczne systemy pomiarowe'],
    ['Optomechatronika i inżynieria fotoniczna w mechatronice'],
    ['Mikromechanika, mikrotechnologie w mechatronice'],
    ['Mechatronika i informatyka przemysłowa'],
    ['Projektowanie mechatroniczne'],
  ],
}

export const Chemistry: Data = {
  TITLE: 'Technologia',
  title_2: 'Chemiczna',
  AUTHOR: ['Mateusz Słotwiński'],
  color: '#A19059',
  icon: 'chemistry.svg',
  pages: 500,
  image: 'chemistry.jpg',
  about: aboutplaceholder,
  levels: [
    ['Chemia ogólna, nieorganiczna i strukturalna,', 'podstawy elektrochemii'],
    [
      'Chemia analityczna i stosowana, zarządzanie chemikaliami,',
      'aparatura chemiczna, analiza chemiczna i instrumentalna',
    ],
    ['Chemia organiczna, bioorganiczna, bionieorganiczna', 'i biochemia'],
    [
      'Chemia fizyczna i termodynamika chemiczna, podstawy',
      'chemii kwantowej, chemia jądrowa z radiochemią',
    ],
    [
      'Surowce energetyczne i ich przetwarzanie,',
      'biopaliwa i paliwa alternatywne, procesy spalania',
    ],
    [
      'Krystalografia i materiały w technologii chemicznej,',
      'technologia i chemia materiałów, chemia polimerów',
    ],
    ['Inżynieria chemiczna i procesowa, aparatura procesowa'],
    ['Technologia chemiczna, projektowanie procesów', 'technologicznych'],
  ],
}

export const Economics: Data = {
  TITLE: 'Ekonomia',
  title_2: '',

  AUTHOR: ['Mateusz Słotwiński'],
  color: '#658791',
  icon: 'economics.svg',
  pages: 500,
  image: 'economics.jpg',
  about: aboutplaceholder,
  levels: [
    ['Podstawy ekonomii i prawa gospodarczego,', 'historia gospodarcza'],
    ['Mikroekonomia, ekonomia przedsiębiorstwa,', 'rynki czynników produkcji'],
    ['Makroekonomia'],
    [
      'Gospodarka światowa i handel międzynarodowy,',
      'międzynarodowe stosunki gospodarcze',
    ],
    [
      'Gospodarka państwowa, polityka społeczna,',
      'gospodarcza regionalna i lokalna, ',
    ],
    [
      'Ekonomia sektora publicznego, podstawy finansów,',
      'publicznych, ubezpieczeń i bankowości',
    ],
    ['Analiza ekonomiczna i analityka gospodarcza,', 'matematyka w ekonomii'],
    ['Ekonomia behawioralna i ewolucyjna, kapitalizm i demokracja'],
  ],
}

export const Telecommunications: Data = {
  TITLE: 'Telekomunikacja',
  title_2: '',
  AUTHOR: ['Mateusz Słotwiński', 'Janusz Korwin-Mikke', 'Richard Watterson'],
  color: '#008F7F',
  icon: 'telecommunications.svg',
  pages: 500,
  image: 'telecommunications.jpg',
  about: aboutplaceholder,
  levels: [
    ['Wprowadzenie do telekomunikacji'],
    ['Usługi i aplikacje internetu'],
    ['Sieci i chmury teleinformatyczne'],
    ['Techniki kodowania i modulacji'],
    ['Transmisja bezprzewodowa i anteny'],
    ['Transmisja przewodowa'],
    ['Techniki bezprzewodowe i multimedialne'],
    ['Techniki teleinformatyczne'],
  ],
}

export const Biophysics: Data = {
  TITLE: 'Biofizyka',
  title_2: 'i fizyka medyczna',
  AUTHOR: ['Mateusz Słotwiński'],
  color: '#2e7d32',
  icon: 'biophysics.svg',
  pages: 500,
  image: 'biophysics.jpg',
  about: aboutplaceholder,
  levels: [
    [
      'Wprowadzenie do zastosowań fizyki i metod fizycznych',
      'w biologii i medycynie, genetyka i biologia molekularna',
    ],
    [
      'Wstęp do biofizyki, fizyka i biomechanika komórki, struktura',
      'oraz funkcje cząsteczek i makrocząsteczek biologicznych',
    ],
    [
      'Metody biofizyki molekularnej, biofizyka doświadczalna,',
      'mechanika kwantowa układów molekularnych',
    ],
    [
      'Fizyka medyczna, wprowadzenie do nauk medycznych,',
      'promieniowanie, ochrona radiologiczna i dozymetria',
    ],
    [
      'Optyka biomedyczna i okularowa, optometria, biofizyka',
      'zmysłów, radiofarmaceutyki, radiochemia, radiologia',
    ],
    [
      'Nanomateriały i nanotechnologie w medycynie, analiza',
      'i przetwarzanie obrazu mikroskopowego,',
    ],
    [
      'Elektroniczna aparatura medyczna, biomechanika',
      'inżynierska, podstawy inżynierii biomedycznej',
    ],
    ['Bioinformatyka i biologia obliczeniowa, biocybernetyka'],
    [
      'Metody fizyki i informatyki w neurobiologii, neurofizyka,',
      'neuroinformatyka, sztuczna inteligencja i sieci neuronowe',
    ],
  ],
}

export const Astrophysics: Data = {
  TITLE: 'Astrofizyka',
  title_2: 'i Astronomia',
  AUTHOR: ['Mateusz Słotwiński'],
  color: '#3A5489',
  icon: 'astronomy.svg',
  pages: 500,
  image: 'astronomy.jpg',
  about: aboutplaceholder,
  levels: [
    ['Astronomia ogólna i sferyczna'],
    ['Astronomia pozagalaktyczna'],
    ['Grawitacja i fale grawitacyjne, teoria wzlędności', 'i mechanika nieba'],
    ['Astrofizyka ogólna i teoretyczna'],
    ['Budowa i ewolucja gwiazd, czarne dziury'],
    [
      'Astrofizyka obiektów zwartych, soczewkowanie grawitacyjne,',
      'białe karły, gwiazdy neutronowe, pulsary, supernowe',
    ],
    ['Astrofizyka obserwacyjna'],
    ['Radioastronomia, materia z kosmosu,', 'astrofizyka wysokich energii'],
    ['Kosmologia teoretyczna'],
  ],
}

export const PhysicsNanostr: Data = {
  TITLE: 'Fizyka Materiałów',
  title_2: 'i Nanostruktur',
  AUTHOR: ['Mateusz Słotwiński'],
  color: '#6D547C',
  icon: 'physicsnanostr.svg',
  pages: 500,
  image: 'physicsnanostr.jpg',
  about: aboutplaceholder,
  levels: [
    [
      'Fizyka, chemia i optyka ciała stałego, fizyka materiałów',
      'i materii skondensowanej, rzeczywista struktura materii',
    ],
    [
      'Fizyka półprzewodników i przyrządów półprzewodnikowych,',
      'półprzewodnikowe przyrządy optoelektroniczne',
    ],
    ['Kwantowe metody fizyki ciała stałego,', 'nadprzewodnictwo i nadciekłość'],
    [
      'Metody badania materiałów: strukturalne, termiczne,',
      'spektroskopowe i elektryczne',
    ],
    ['Nanostruktury, nanoinżynieria i nanotechnologie'],
    [
      'Metody magazynowania i przetwarzania energii,',
      'fotowoltaika, ogniwa paliwowe',
    ],
    ['Komputerowe metody modelowania i projektowania', 'materiałów'],
  ],

  advanced: true,
}

export const PhysicsNuclear: Data = {
  TITLE: 'Fizyka i Technika',
  title_2: 'Jądrowa',
  AUTHOR: ['Mateusz Słotwiński'],
  color: '#FF7C1E',
  icon: 'physicsnuclear.svg',
  pages: 500,
  image: 'physicsnuclear.jpg',
  about: aboutplaceholder,
  levels: [
    [
      'Zaawansowana fizyka cząstek i oddziaływań elementarnych,',
      'fizyka atomowa',
    ],
    [
      'Zaawansowana fizyka i chemia jądrowa, fizyka zderzeń',
      'jąder atomowych i ciężkich jonów',
    ],
    [
      'Metody i techniki jądrowe, detekcja i analiza promieniowania',
      'jądrowego oraz substancji promieniotwórczych',
    ],
    [
      'Fizyka reaktorów jądrowych, energetyka jądrowa',
      'i termojądrowa, nowe rozwiązania w energetyce',
    ],
    [
      'Narzędzia komputerowe fizyki jądrowej,',
      'modelowanie procesów jądrowych',
    ],
    ['Układy kontrolno-pomiarowe w instalacjach jądrowych', ''],
    [
      'Oddziaływanie promieniowania jonizującego z materią,',
      'dozymetria, ochrona radiologiczna i bezpieczeństwo jądrowe',
    ],
  ],

  advanced: true,
}

export const QuantumEngineering: Data = {
  TITLE: 'Inżynieria',
  title_2: 'Kwantowa',
  AUTHOR: ['Mateusz Słotwiński'],
  color: '#004260',
  icon: 'quantum_engineering.svg',
  pages: 500,
  image: 'quantum_engineering.jpg',
  about: aboutplaceholder,
  levels: [
    ['Zaawansowana mechanika kwantowa i kwantowa teoria pola'],
    [
      'Elektrodynamika kwantowa, makroskopowe zjawiska',
      'kwantowe - nadprzewodnictwo i nadciekłość',
    ],
    [
      'Fizyka kropek kwantowych, kwantowy efekt halla',
      'wstęp do teorii przejść fazowych',
    ],
    ['Optyka kwantowa'],
    ['Informatyka kwantowa i kryptografia kwantowa'],
    [
      'Plazmonika nanostruktur metalicznych, elementy chemii',
      'kwantowej, teoria dekoherencji',
    ],
  ],

  advanced: true,
}
