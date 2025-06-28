// Simple language switcher
let currentLanguage = 'tr';

// Translations object
const translations = {
    tr: {
        // Navigation
        profileTitle: "Oyun Geliştiricisi",
        resume: "Özgeçmiş",
        backToHome: "Ana Sayfaya Dön",
        
        // Hero section
        heroTitle: "Oyun Geliştiricisi",
        heroSubtitle: "Performansa odaklı, oynanabilirliği yüksek oyunlar geliştiriyorum",
        name: "Duhan Ayan",
        gameDeveloper: "Oyun Geliştiricisi",
        unity: "Unity",
        yearsExp: "Yıl Deneyim",
        completedProjects: "Tamamlanan Proje",
        
        // Skills section
        techExp: "Teknik Yetenekler",
        programming: "Programlama",
        gameEngines: "Oyun Motorları",
        tools: "Araçlar",
        c: "C",
        cpp: "C++",
        csharp: "C#",
        unity2d: "Unity 2D",
        unityUI: "Unity UI",
        git: "Git",
        visualStudio: "Visual Studio",
        blender: "Blender",
        mobile: "Mobil",
        
        // Projects section
        gameProj: "Oyun Projeleri",
        projectsSubtitle: "Son geliştirdiğim oyun projeleri",
        viewProject: "Projeyi İncele",
        stack: "Stack",
        juicyMerge: "Juicy Merge",
        multiplayerArena: "Multiplayer Arena",
        desc1: "Unity ile geliştirilen mobil oyun Stack'ın klon versiyonu",
        juicyMergeDesc: "Meyveleri birleştirerek büyük meyveler oluşturduğunuz puzzle oyunu",
        desc3: "Unity ile geliştirilen çok oyunculu arena oyunu",
        puzzle: "Puzzle",
        multiplayer: "Çok Oyunculu",
        
        // About section
        aboutTitle: "Hakkımda",
        profileText: "Tutkulu bir oyun geliştiricisi olarak, performansa odaklı, oynanabilirliği yüksek projeler üretmeyi hedefliyorum. Sistem seviyesinden kullanıcı arayüzüne kadar oyunların tüm katmanlarında deneyimliyim.",
        
        // Project pages
        teamSize: "Takım: 1 Kişi",
        role: "Rol: Game Developer",
        year2025: "2025",
        mobileGame: "Hyper Casual",
        puzzleGame: "Puzzle Game",
        viewSource: "Kaynak Kodu Görüntüle",
        playGame: "Oyunu Oyna",
        screenshots: "Ekran Görüntüleri",
        projectOverview: "Proje Genel Bakış",
        myRole: "Rolüm ve Sorumluluklar",
        technicalDetails: "Teknik Yetenekler",
        challenges: "Karşılaşılan Zorluklar",
        developmentProcess: "Geliştirme Süreci",
        results: "Sonuçlar",
        techStack: "Teknoloji Yığını",
        
        // Stack specific
        stackOverview: "Stack, popüler mobil oyun Stack'ın klon versiyonudur. Unity ile geliştirilen bu proje, oyuncuların blokları üst üste dizerek yüksek kuleler inşa etmelerini sağlar. Oyun, basit ama bağımlılık yapıcı mekaniklerle oyuncuları uzun süre oyunda tutmayı hedefler.",
        gameMechanics: "Oyun Mekanikleri & Fizik",
        mobileOptimization: "Performans Optimizasyonu",
        uiuxDesign: "UI/UX & Görsel Sistem",
        scoringSystem: "Skor & Motivasyon Sistemi",
        developmentPlatform: "Unity & C# Geliştirme",
        architecture: "Mimari & Kod Kalitesi",
        mobileDevelopment: "Mobil Geliştirme",
        memoryManagement: "Bellek Yönetimi",
        versionControl: "Versiyon Kontrolü",
        codeQuality: "Kod Kalitesi",
        soloDevelopment: "Tek Kişilik Geliştirme",
        projectDelivery: "Proje Teslimi",
        
        // Stack roles
        stackRole1: "• Mükemmel vuruş sistemi (0.05f tolerans) geliştirdim ve değişken X/Z hareketi ile dilim kesme algoritması tasarladım<br>• Unity Rigidbody, BoxCollider ve sürekli çarpışma algılama ile gerçekçi fizik simülasyonu oluşturdum",
        stackRole2: "• TextMeshPro ile modern arayüz tasarladım ve DOTween animasyonları (solma, hareket geçişleri) ekledim<br>• HSV interpolasyonu ile arka plan ve dilim renk senkronizasyonu sağlayarak sürükleyici görsel deneyim oluşturdum",
        stackRole3: "• PlayerPrefs ile yüksek skor kaydetme sistemi kurarak, gerçek zamanlı skor takibi ve yeni rekor algılama sistemi geliştirdim<br>• Ses geri bildirimi ve motivasyonel oyun döngüsü ile oyuncu tutma mekanizması oluşturdum",
        stackRole4: "• Nesne havuzlama ile sıfıra yakın Instantiate sistemi kurarak, manuel bellek yönetimi (Çöp Toplayıcı) gerçekleştirdim<br>• CPU ani artışlarını %70 azaltarak, maksimum 60 FPS hedefi ile platformlar arası performans sağladım",
        
        // Stack technical details
        platformDetails: "• Unity 6 ile modern C# özelliklerini kullanarak geliştirme yaptım<br>• DOTween ile performanslı animasyon işlemleri (arayüz solma, hareket geçişleri, zamanlayıcılar) gerçekleştirerek yumuşak kullanıcı deneyimi sağladım",
        architectureDetails: "• Singleton servis katmanı (Ses, Arayüz, Skor) tasarladım ve olay tabanlı iletişim sistemi kurduk<br>• Yüksek okunabilirlik, Temiz Kod prensipleri ve birim testine uygun metot tasarımı gerçekleştirdim",
        mobileDetails: "• Dokunma girişi optimizasyonu yaparak platformlar arası uyumluluk sağladım<br>• 60 FPS hedefi ile performans garantisi vererek duyarlı arayüz tasarımı gerçekleştirdim",
        memoryDetails: "• 500 dilim nesne havuzlama ile bellek sızıntısı önleme sistemi kurduk<br>• Görünmeyen nesneleri devre dışı bırakarak, manuel çöp toplayıcı ile CPU ani artışlarını %70 azalttım",
        versionControlDetails: "• Git ile özellik-dal yapısında çalışarak, kod bütünlüğünü korudum<br>• Proje yönetimi ve versiyon kontrolü ile güvenli geliştirme süreci oluşturdum",
        codeQualityDetails: "• Yüksek okunabilirlik ve Temiz Kod prensipleri uyguladım<br>• Genişletilebilirlik için arayüzler tasarlayarak, birim testine uygun metot tasarımı ile sürdürülebilir kod yapısı oluşturdum",
        soloDevelopmentDetails: "• Tüm proje süreçlerini tek başıma yönettim<br>• Sistem tasarımından kod yazımına, test ve optimizasyona kadar her aşamayı kendim gerçekleştirdim",
        projectDeliveryDetails: "• 2023 yılında başarıyla tamamladım<br>• Test kullanıcılarından olumlu geri bildirimler aldım, mobil platformlarda sorunsuz performans ve oyuncu memnuniyeti sağladım",
        
        // Stack challenges
        stackChallenge1: "• 0.05f taşma toleransı ile mükemmel vuruş sistemini uyguladım<br>• Değişken X/Z hareket koordinasyonu ve dilim kesme algoritmasının hassas çalışmasını sağladım",
        stackChallenge2: "• Gerçek zamanlı kesme & düşen dilim instantiate işlemlerinin FPS'i etkilemesi sorununu çözdüm<br>• Nesne havuzlama ile CPU ani artışlarını %70 azaltarak, 60 FPS hedefini korudum",
        stackChallenge6: "• CameraController ile dinamik hedef yüksekliğine yumuşak geçiş animasyonu tasarladım<br>• DOTween ile 0.48s ease-out-circ animasyonu kullanarak 'ani geçiş' hissini ortadan kaldırdım",
        stackChallenge7: "• Arka plan ve dilim renklerinin uyumsuz geçişlerinden kaçınmak için BackgroundColor sınıfında HSV interpolasyonu kullandım<br>• 12 renk paleti ile gradyan geçişler sağladım",
        
        // Stack results
        stackResults: "• Proje başarıyla tamamlandı ve test kullanıcılarından olumlu geri bildirimler aldım<br>• Oyun mekanikleri akıcı çalışıyor ve mobil platformlarda sorunsuz performans gösteriyor<br>• Proje, Unity ile mobil oyun geliştirme konusunda değerli deneyim kazandırdı",
        
        // Juicy Merge specific
        juicyMergeOverview: "Juicy Merge, Google Play Store'da 10M+ indirme ve 4.4 yıldız puanına sahip popüler \"Fruit Merge: Juicy Drop Game\" oyununun klon versiyonudur. Aynı meyveleri birleştirerek daha büyük meyveler oluşturduğunuz bağımlılık yapıcı puzzle oyunu. Unity ile geliştirilen bu proje, sürükle-bırak mekanikleri, stratejik oynanış ve renkli görsel efektlerle oyuncuları uzun süre oyunda tutmayı hedefler.",
        mergeAlgorithm: "Birleştirme Algoritması & Çarpışma Algılama",
        performanceOptimization: "Performans Optimizasyonu",
        visualEffects: "Görsel Efekt Sistemi",
        conceptDesign: "Konsept & Tasarım",
        coreDevelopment: "Temel Geliştirme",
        polishOptimization: "İyileştirme & Optimizasyon",
        dataManagement: "Veri Yönetimi",
        
        // Juicy Merge roles
        juicyMergeRole1: "• 12 farklı meyve türü (Kiraz'dan Karpuz'a) ile enum tabanlı tip sistemi geliştirdim<br>• Çarpışma algılama ile otomatik birleştirme sistemi kurarak, InstanceID kontrolü ile çift birleştirme sorununu çözdüm<br>• Fare tabanlı sürükle-bırak mekanikleri ve doğurma bekleme süresi sistemi ekledim",
        juicyMergeRole2: "• TextMeshPro ile modern arayüz tasarladım ve birleştirme animasyonları için parçacık efektleri ekledim<br>• Renk kodlu doğurma efektleri ve hamle sayacı gösterimi ile oyuncu deneyimini geliştirdim<br>• Yüksek skor takibi ve yeniden başlatma işlevselliği ile oyun sonu ekranı oluşturdum",
        juicyMergeRole3: "• Meyve türü tabanlı skor sistemi geliştirdim ve PlayerPrefs ile yüksek skor kalıcılığı sağladım<br>• Gerçek zamanlı skor gösterimi ve yeni rekor algılama sistemi ekledim<br>• Hamle sayacı takibi ve oyun sonu tetikleme sistemi ile oyun akışını tamamladım",
        juicyMergeRole4: "• Unity ObjectPool ile bellek verimli meyve doğurma sistemi tasarladım<br>• 120 FPS hedef kare hızı için collectionCheck: false ile performans optimizasyonu yaptım<br>• Meyve Havuzu konteyneri ile düzenli nesne yönetimi ve otomatik temizlik sistemi kurduk",
        
        // Juicy Merge technical details
        juicyPlatformDetails: "• Unity ObjectPool ile bellek yönetimi sistemini kurarak, enum tabanlı tip sistemi geliştirdim<br>• Rigidbody2D fiziği, çarpışma algılama ve singleton desen uygulaması ile oyun altyapısını oluşturdum",
        juicyMobileDetails: "• Fare ve dokunma girişi işleme sistemini optimize ettim ve her meyve türü için Physics2D materyalleri hazırladım<br>• 120 FPS hedefi ile platformlar arası uyumluluk sağlayarak duyarlı arayüz tasarımı gerçekleştirdim",
        juicyDataDetails: "• PlayerPrefs ile yüksek skor kalıcılığı sistemi kurarak, FruitSpawner için singleton desen uyguladım<br>• Nesne havuzlama ile verimli bellek yönetimi sağlayarak otomatik temizlik sistemi geliştirdim",
        
        // Juicy Merge challenges
        mergeChallenge: "• InstanceID kontrolü ile çift birleştirme sorununu çözdüm ve IsMerging flag'i ile race condition problemlerini giderdim<br>• Aynı meyve türü algılama sistemi geliştirerek otomatik birleştirme tetikleme mekanizması kurduk<br>• Physics2D çarpışma işleme sistemini optimize ettim",
        performanceChallenge: "• Object Pooling ile memory leak sorunlarını önleyerek, 60 FPS hedefi için performans optimizasyonu gerçekleştirdim<br>• Koleksiyon kontrolünü devre dışı bırakarak verimli meyve oluşturma sistemi ve otomatik temizlik mekanizması geliştirdim",
        visualChallenge: "• Particle System entegrasyonu ile renk kodlu meyve birleştirme efektleri oluşturdum<br>• Modern arayüz tasarımı ile oyun sonu ekranı ve yeniden başlatma işlevselliği geliştirdim",
        
        // Juicy Merge process
        conceptProcess: "• Orijinal Fruit Merge oyununu detaylı analiz ederek, 12 meyve türü enum tasarımı gerçekleştirdim<br>• Physics2D materyal sistemi planlaması yaparak, Object Pooling mimarisi ve Singleton desen uygulaması ile proje altyapısını oluşturdum",
        coreProcess: "• FruitSpawner singleton yapısını kurarak, ObjectPool uygulaması ve çarpışma algılama sistemi geliştirdim<br>• ScoreManager, GameEnderScript ve FPSDisplay bileşenlerini oluşturarak Physics2D materyalleri kurulumunu tamamladım",
        polishProcess: "• 60 FPS optimizasyonu gerçekleştirerek, Particle System entegrasyonu ve arayüz iyileştirme çalışmaları yaptım<br>• Performans testi, memory leak önleme ve platformlar arası test süreçlerini tamamladım",
        
        // Gallery captions
        mainMenu: "Ana Menü Ekranı",
        inGame: "Oyun İçi Ekranı",
        gameOver: "Oyun Sonu Ekranı",
        gameplayVideo: "Oynanış Videosu",
        gameplayScreenshot: "Oynanış Ekran Görüntüsü",
        videoNotSupported: "Tarayıcınız video oynatmayı desteklemiyor."
    },
    en: {
        // Navigation
        profileTitle: "Game Developer",
        resume: "Resume",
        backToHome: "Back to Home",
        
        // Hero section
        heroTitle: "Game Developer",
        heroSubtitle: "I develop performance-focused, highly playable games",
        name: "Duhan Ayan",
        gameDeveloper: "Game Developer",
        unity: "Unity",
        yearsExp: "Years Experience",
        completedProjects: "Completed Projects",
        
        // Skills section
        techExp: "Technical Skills",
        programming: "Programming",
        gameEngines: "Game Engines",
        tools: "Tools",
        c: "C",
        cpp: "C++",
        csharp: "C#",
        unity2d: "Unity 2D",
        unityUI: "Unity UI",
        git: "Git",
        visualStudio: "Visual Studio",
        blender: "Blender",
        mobile: "Mobile",
        
        // Projects section
        gameProj: "Game Projects",
        projectsSubtitle: "Recently developed game projects",
        viewProject: "View Project",
        stack: "Stack",
        juicyMerge: "Juicy Merge",
        multiplayerArena: "Multiplayer Arena",
        desc1: "Clone version of the mobile game Stack developed with Unity",
        juicyMergeDesc: "Puzzle game where you combine fruits to create larger fruits",
        desc3: "Multiplayer arena game developed with Unity",
        puzzle: "Puzzle",
        multiplayer: "Multiplayer",
        
        // About section
        aboutTitle: "About Me",
        profileText: "As a passionate game developer, I aim to produce performance-focused, highly playable projects. I am experienced in all layers of games from system level to user interface.",
        
        // Project pages
        teamSize: "Team: 1 Person",
        role: "Role: Game Developer",
        year2025: "2025",
        mobileGame: "Hyper Casual",
        puzzleGame: "Puzzle Game",
        viewSource: "View Source Code",
        playGame: "Play Game",
        screenshots: "Screenshots",
        projectOverview: "Project Overview",
        myRole: "My Role and Responsibilities",
        technicalDetails: "Technical Skills",
        challenges: "Challenges Faced",
        developmentProcess: "Development Process",
        results: "Results",
        techStack: "Tech Stack",
        
        // Stack specific
        stackOverview: "Stack is a clone version of the popular mobile game Stack. Developed with Unity, this project allows players to build high towers by stacking blocks on top of each other. The game aims to keep players engaged for long periods with simple but addictive mechanics.",
        gameMechanics: "Game Mechanics & Physics",
        mobileOptimization: "Performance Optimization",
        uiuxDesign: "UI/UX & Visual System",
        scoringSystem: "Scoring & Motivation System",
        developmentPlatform: "Unity & C# Development",
        architecture: "Architecture & Code Quality",
        mobileDevelopment: "Mobile Development",
        memoryManagement: "Memory Management",
        versionControl: "Version Control",
        codeQuality: "Code Quality",
        soloDevelopment: "Solo Development",
        projectDelivery: "Project Delivery",
        
        // Stack roles
        stackRole1: "• Developed perfect hit system (0.05f tolerance) and designed slice cutting algorithm with variable X/Z movement<br>• Created realistic physics simulation with Unity Rigidbody, BoxCollider and continuous collision detection",
        stackRole2: "• Designed modern interface with TextMeshPro and added DOTween animations (fade, movement transitions)<br>• Created immersive visual experience with HSV interpolation for background and slice color synchronization",
        stackRole3: "• Established high score saving system with PlayerPrefs, developed real-time score tracking and new record detection system<br>• Created player retention mechanism with audio feedback and motivational game loop",
        stackRole4: "• Established near-zero Instantiate system with object pooling, performed manual memory management (Garbage Collector)<br>• Reduced CPU spikes by 70%, achieved cross-platform performance with maximum 60 FPS target",
        
        // Stack technical details
        platformDetails: "• Developed using Unity 6 with modern C# features<br>• Achieved smooth user experience with DOTween for performance animation operations (interface fade, movement transitions, timers)",
        architectureDetails: "• Designed singleton service layer (Audio, UI, Score) and established event-driven communication system<br>• Achieved high readability, Clean Code principles and unit test-friendly method design",
        mobileDetails: "• Optimized touch input for cross-platform compatibility<br>• Achieved responsive interface design with 60 FPS target performance guarantee",
        memoryDetails: "• Established memory leak prevention system with 500 slice object pooling<br>• Reduced CPU spikes by 70% by disabling invisible objects and manual garbage collector",
        versionControlDetails: "• Maintained code integrity by working with feature-branch structure in Git<br>• Created secure development process with project management and version control",
        codeQualityDetails: "• Applied high readability and Clean Code principles<br>• Created sustainable code structure with interfaces designed for extensibility and unit test-friendly method design",
        soloDevelopmentDetails: "• Managed all project processes alone<br>• Performed every stage from system design to coding, testing and optimization myself",
        projectDeliveryDetails: "• Successfully completed in 2023<br>• Received positive feedback from test users, achieved seamless performance and player satisfaction on mobile platforms",
        
        // Stack challenges
        stackChallenge1: "• Implemented perfect hit system with 0.05f overflow tolerance<br>• Ensured precise operation of variable X/Z movement coordination and slice cutting algorithm",
        stackChallenge2: "• Solved the problem of real-time cutting & falling slice instantiate operations affecting FPS<br>• Maintained 60 FPS target by reducing CPU spikes by 70% with object pooling",
        stackChallenge6: "• Designed smooth transition animation to dynamic target height with CameraController<br>• Eliminated 'sudden transition' feeling using DOTween with 0.48s ease-out-circ animation",
        stackChallenge7: "• Used HSV interpolation in BackgroundColor class to avoid inconsistent transitions between background and slice colors<br>• Provided gradient transitions with 12 color palette",
        
        // Stack results
        stackResults: "• Project was successfully completed and received positive feedback from test users<br>• Game mechanics work smoothly and show seamless performance on mobile platforms<br>• The project provided valuable experience in Unity mobile game development",
        
        // Juicy Merge specific
        juicyMergeOverview: "Juicy Merge is a clone version of the popular \"Fruit Merge: Juicy Drop Game\" with 10M+ downloads and 4.4 star rating on Google Play Store. It's an addictive puzzle game where you combine same fruits to create larger fruits. Developed with Unity, this project aims to keep players engaged for long periods with drag-and-drop mechanics, strategic gameplay and colorful visual effects.",
        mergeAlgorithm: "Merge Algorithm & Collision Detection",
        performanceOptimization: "Performance Optimization",
        visualEffects: "Visual Effects System",
        conceptDesign: "Concept & Design",
        coreDevelopment: "Core Development",
        polishOptimization: "Polish & Optimization",
        dataManagement: "Data Management",
        
        // Juicy Merge roles
        juicyMergeRole1: "• Developed enum-based type system with 12 different fruit types (from Cherry to Watermelon)<br>• Established automatic merge system with collision detection, solved double merge problem with InstanceID control<br>• Added mouse-based drag-and-drop mechanics and spawn waiting time system",
        juicyMergeRole2: "• Designed modern interface with TextMeshPro and added particle effects for merge animations<br>• Enhanced player experience with color-coded spawn effects and move counter display<br>• Created game over screen with high score tracking and restart functionality",
        juicyMergeRole3: "• Developed fruit type-based scoring system and ensured high score persistence with PlayerPrefs<br>• Added real-time score display and new record detection system<br>• Completed game flow with move counter tracking and game end triggering system",
        juicyMergeRole4: "• Designed memory-efficient fruit spawning system with Unity ObjectPool<br>• Performed performance optimization with collectionCheck: false for 120 FPS target frame rate<br>• Established organized object management and automatic cleanup system with Fruit Pool container",
        
        // Juicy Merge technical details
        juicyPlatformDetails: "• Established memory management system with Unity ObjectPool and developed enum-based type system<br>• Created game infrastructure with Rigidbody2D physics, collision detection and singleton pattern implementation",
        juicyMobileDetails: "• Optimized mouse and touch input processing system and prepared Physics2D materials for each fruit type<br>• Achieved responsive interface design with cross-platform compatibility at 120 FPS target",
        juicyDataDetails: "• Established high score persistence system with PlayerPrefs and applied singleton pattern for FruitSpawner<br>• Developed automatic cleanup system with efficient memory management through object pooling",
        
        // Juicy Merge challenges
        mergeChallenge: "• Solved double merge problem with InstanceID control and eliminated race condition problems with IsMerging flag<br>• Established automatic merge triggering mechanism by developing same fruit type detection system<br>• Optimized Physics2D collision processing system",
        performanceChallenge: "• Prevented memory leak problems with Object Pooling and performed performance optimization for 60 FPS target<br>• Developed efficient fruit creation system and automatic cleanup mechanism by disabling collection check",
        visualChallenge: "• Created color-coded fruit merge effects with Particle System integration<br>• Developed game over screen and restart functionality with modern interface design",
        
        // Juicy Merge process
        conceptProcess: "• Performed detailed analysis of original Fruit Merge game and designed 12 fruit type enum<br>• Created project infrastructure with Physics2D material system planning, Object Pooling architecture and Singleton pattern implementation",
        coreProcess: "• Established FruitSpawner singleton structure and developed ObjectPool implementation and collision detection system<br>• Completed Physics2D materials setup by creating ScoreManager, GameEnderScript and FPSDisplay components",
        polishProcess: "• Performed 60 FPS optimization and conducted Particle System integration and interface improvement work<br>• Completed performance testing, memory leak prevention and cross-platform testing processes",
        
        // Gallery captions
        mainMenu: "Main Menu Screen",
        inGame: "In Game Screen",
        gameOver: "Game Over Screen",
        gameplayVideo: "Gameplay Video",
        gameplayScreenshot: "Gameplay Screenshot",
        videoNotSupported: "Your browser does not support video playback."
    }
};

// Function to switch language
function switchLanguage(lang) {
    currentLanguage = lang;
    
    // Save language preference
    localStorage.setItem('preferredLanguage', lang);
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });
    
    // Update language selector
    const langSelect = document.querySelector('.language-select select');
    if (langSelect) {
        langSelect.value = lang;
    }
}

// Function to get current language
function getCurrentLanguage() {
    return currentLanguage;
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Load saved language or default to Turkish
    const savedLanguage = localStorage.getItem('preferredLanguage') || 'tr';
    currentLanguage = savedLanguage;
    
    // Apply translations
    switchLanguage(currentLanguage);
    
    // Add event listener to language selector
    const langSelect = document.querySelector('.language-select select');
    if (langSelect) {
        langSelect.addEventListener('change', (e) => {
            switchLanguage(e.target.value);
        });
    }
}); 