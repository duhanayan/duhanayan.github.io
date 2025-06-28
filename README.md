# 🎮 Stack Game Clone

[![Unity](https://img.shields.io/badge/Unity-2022.3%2B-blue.svg)](https://unity.com/)
[![C#](https://img.shields.io/badge/C%23-8.0%2B-green.svg)](https://docs.microsoft.com/en-us/dotnet/csharp/)
[![DOTween](https://img.shields.io/badge/DOTween-1.2.7%2B-orange.svg)](http://dotween.demigiant.com/)

Ketchapp'in popüler [Stack](https://play.google.com/store/apps/details?id=com.ketchapp.stack&hl=tr) oyununun Unity ile geliştirilmiş klon versiyonu. Oyuncular blokları üst üste dizerek mümkün olduğunca yüksek kuleler oluşturmaya çalışır.

## 📋 İçindekiler

- [Özellikler](#-özellikler)
- [Teknolojiler](#️-teknolojiler)
- [Kurulum](#-kurulum)
- [Design Patterns](#️-design-patterns-ve-mimari)
- [Teknik Detaylar](#-teknik-detaylar)
- [Karşılaşılan Zorluklar](#-karşılaşılan-zorluklar-ve-çözümler)
- [Performans Optimizasyonları](#-performans-optimizasyonları)
- [Ekran Görüntüleri](#-ekran-görüntüleri)
- [Katkıda Bulunma](#-katkıda-bulunma)
- [Lisans](#-lisans)

## ✨ Özellikler

- 🎯 **Basit ve Sezgisel Oynanış**: Tek dokunuşla blok yerleştirme
- 🎨 **Dinamik Renk Sistemi**: 12 farklı renk paleti ile gradient geçişler
- 🎵 **Çeşitli Ses Efektleri**: Perfect hit ve normal yerleştirme sesleri
- 📱 **Mobil Optimize**: Touch input desteği
- 🎬 **Smooth Animasyonlar**: DOTween ile yumuşak geçişler
- 🏆 **Skor Sistemi**: Yüksek skor kaydetme
- 🎮 **Perfect Hit Sistemi**: Tam yerleştirme için özel efektler

## 🛠️ Teknolojiler

### Ana Teknolojiler
- **Unity Engine 2022.3+** - Oyun motoru
- **C# 8.0+** - Programlama dili
- **DOTween 1.2.7+** - Animasyon kütüphanesi
- **TextMeshPro** - UI metin sistemi

### Unity Bileşenleri
- **Rigidbody** - Fizik simülasyonu
- **BoxCollider** - Çarpışma algılama
- **AudioSource** - Ses yönetimi
- **SpriteRenderer** - Görsel render
- **Canvas/UI** - Kullanıcı arayüzü

## 🚀 Kurulum

1. **Unity Hub'ı açın**
2. **"Add" butonuna tıklayın**
3. **Bu projeyi seçin**
4. **Unity 2022.3 LTS veya üstü ile açın**
5. **Gerekli paketleri yükleyin:**
   - DOTween
   - TextMeshPro

## 🏗️ Design Patterns ve Mimari

### 1. Singleton Pattern
```csharp
public static UIManager i;
public static AudioManager i;
```
**Kullanım:** UI ve Audio yönetimi için global erişim

### 2. Object Pooling Pattern
```csharp
public class SlicePool : MonoBehaviour
{
    private Queue<Slice> _slicePool;
    public Slice GetSliceFromPool()
    public void ReturnSliceToPool(Slice slice)
}
```
**Kullanım:** Blok nesnelerinin performans optimizasyonu

### 3. Observer Pattern (Event-Driven)
```csharp
public event Action OnSlicePlaced, OnGameOver;
```
**Kullanım:** Sistemler arası iletişim

### 4. State Management Pattern
```csharp
private bool _isMovingInXAxis;
```
**Kullanım:** Oyun durumu yönetimi

### 5. Manager Pattern
```csharp
public class SliceManager : MonoBehaviour
```
**Kullanım:** Ana oyun mantığı yönetimi

## 🔧 Teknik Detaylar

### Proje Yapısı
```
Scripts/
├── SliceManager.cs      # Ana oyun mantığı
├── SlicePool.cs         # Object pooling sistemi
├── Slice.cs             # Blok davranışları
├── UIManager.cs         # UI yönetimi
├── ScoreManager.cs      # Skor sistemi
├── AudioManager.cs      # Ses yönetimi
├── CameraController.cs  # Kamera takibi
├── SliceColor.cs        # Renk sistemi
├── BackgroundColor.cs   # Arka plan efektleri
├── FPSDisplayer.cs      # Performans monitörü
└── GarbageCollector.cs  # Bellek yönetimi
```

### Ana Sistemler

#### SliceManager
- Oyun durumu yönetimi
- Blok yerleştirme mantığı
- Fizik hesaplamaları
- Event sistemi

#### SlicePool
- 500 blok önceden oluşturulur
- Performans optimizasyonu
- Bellek yönetimi

#### AudioManager
- Ses rotasyon sistemi
- Perfect hit sesleri
- Button click sesleri

## 🎯 Karşılaşılan Zorluklar ve Çözümler

### 1. Performans Optimizasyonu
**Problem:** Sürekli blok oluşturma/silme işlemleri
```csharp
private const int SLICE_DISABLE_INTERVAL = 20;
```
**Çözüm:** Object Pooling sistemi ile garbage collection minimize edildi

### 2. Fizik Simülasyonu
**Problem:** Düşen blokların performans etkisi
```csharp
void OnTriggerEnter(Collider other)
{
    if (other.TryGetComponent(out Slice slice))
        _slicePool.ReturnSliceToPool(slice);
}
```
**Çözüm:** Garbage Collector trigger sistemi ile otomatik temizlik

### 3. Kamera Takibi
**Problem:** Kule yükseldikçe kamera takibi
```csharp
private void OnSlicePlaced()
{
    _camera.transform.DOKill();
    _camera.transform.DOMoveY(_camera.transform.position.y + _sliceManager.SliceThickness, 0.48f)
        .SetEase(Ease.OutCirc);
}
```
**Çözüm:** DOTween ile smooth kamera hareketi

### 4. Renk Geçişleri
**Problem:** Görsel monotonluk
```csharp
public Color GetColor()
{
    float slicePercantage = (float)_sliceIndex / SLICE_COUNT_FOR_COLOR_CHANGE;
    Color startColor = _colors[_colorIndex % _colors.Length];
    Color endColor = _colors[(_colorIndex + 1) % _colors.Length];
    return Color.Lerp(startColor, endColor, slicePercantage);
}
```
**Çözüm:** Gradient renk geçişleri ile 15 blokta bir renk değişimi

### 5. Ses Yönetimi
**Problem:** Ses çeşitliliği ve performans
```csharp
public void PlayNormalPlacementSFX()
{
    if (_lastPlacementWasPerfect) _normalPlacementClipIndex = 0;
    AudioClip sfxClip = _normalPlacementSFXList[_normalPlacementClipIndex % _normalPlacementSFXList.Length];
    _audioSource.PlayOneShot(sfxClip);
    _normalPlacementClipIndex++;
}
```
**Çözüm:** Ses rotasyon sistemi ile farklı ses efektleri sırayla çalar

### 6. UI State Management
**Problem:** Karmaşık UI durumları
```csharp
enum OnGameRestartActionOrder
{
    SliceColor,
    SliceManager,
    CameraController,
    ScoreManager,
    AudioManager,
    BackgroundColor,
}
```
**Çözüm:** Prioritized Handler sistemi ile sıralı restart işlemleri

## ⚡ Performans Optimizasyonları

### Bellek Yönetimi
- **Object Pooling:** 500 blok önceden oluşturulur
- **Garbage Collection:** Otomatik temizlik sistemi
- **Memory Leaks:** Trigger-based cleanup

### FPS Optimizasyonu
- **Target FPS:** 60 FPS hedef
- **LOD System:** Eski bloklar devre dışı bırakılır
- **Efficient Rendering:** Minimal draw calls

### Fizik Sistemi
- **Rigidbody Interpolation:** Smooth hareket
- **Collision Detection:** Continuous collision detection
- **Gravity System:** Gerçekçi düşme efektleri

## 🎨 Görsel Özellikler

### Renk Sistemi
- 12 farklı renk paleti
- Gradient geçişler
- Background renk değişimleri

### Efektler
- Perfect hit white frame animasyonu
- Smooth kamera hareketleri
- Background gradient değişimleri

## 📱 Platform Uyumluluğu

- **Mobile Optimized:** Touch input desteği
- **Cross-Platform:** Unity'nin platform desteği
- **Performance Tuned:** Mobile cihazlar için optimize edilmiş

## 🔧 Kod Kalitesi

### Güçlü Yönler
- **Modüler Yapı:** Her sistem ayrı sınıflarda
- **Event-Driven Architecture:** Loose coupling
- **Performance Focused:** Object pooling, memory management
- **Clean Code:** Açık ve anlaşılır kod yapısı

### Geliştirilebilir Alanlar
- **Dependency Injection:** Singleton yerine DI container
- **Unit Testing:** Test coverage artırılabilir
- **Configuration System:** Sabit değerler config dosyasına taşınabilir

## 🖼️ Ekran Görüntüleri

*Ekran görüntüleri buraya eklenecek*

## 🤝 Katkıda Bulunma

1. Bu repository'yi fork edin
2. Feature branch oluşturun (`git checkout -b feature/AmazingFeature`)
3. Değişikliklerinizi commit edin (`git commit -m 'Add some AmazingFeature'`)
4. Branch'inizi push edin (`git push origin feature/AmazingFeature`)
5. Pull Request oluşturun

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için [LICENSE](LICENSE) dosyasına bakın.

## 👨‍💻 Geliştirici

**Adınız** - [GitHub Profiliniz](https://github.com/kullaniciadi)

Bu proje, oyun geliştirme portföyümün bir parçasıdır ve Ketchapp'in Stack oyunundan ilham alınarak geliştirilmiştir.

---

⭐ Bu projeyi beğendiyseniz yıldız vermeyi unutmayın! 