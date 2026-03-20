## Bayram Harçlığı Endeksi (BHE)

Bu proje, yıllara göre bayram harçlığı değişimini görselleştirmenize yardımcı olur. Nominal değer, 2026 eşdeğeri, Big Mac adedi ve Big Mac alım gücü skoru metriklerini tek ekranda sunar; böylece dönemleri hızlıca karşılaştırabilirsiniz.

Proje durumu: aktif olarak geliştiriliyor.

### Temel işlevler

BHE, veri hikayesi üretmek isteyen son kullanıcılar, içerik üreticileri ve geliştiriciler için tasarlanmıştır. Kullanıcının yıllar arası değişimi incelemesine, metrik bazında kıyas yapmasına ve paylaşılabilir özet üretmesine yardımcı olur.

Tek sayfalık statik arayüz; slider, karşılaştırma seçimi ve interaktif grafik kullanarak çalışır. Kullanıcıdan yıl ve metrik seçimini alır, bunu istemci tarafında işleyip grafik ve kartlara yansıtır. Teknik detaylar için [geliştirici dokümantasyonu](#geliştirici-dokümantasyonu) bölümüne bakın.

### BHE ne yapmaz?

Uygulama canlı API'den veri çekmez. Otomatik veri güncelleme, kullanıcı hesap sistemi veya sunucu tarafı veri doğrulama içermez.

## Veri Kaynağı ve Hesaplama (Big Mac)

Veriler temsilidir. Yıllık seri için elde tanımlı bayram harçlığı, 2026 eşdeğeri, Big Mac adedi ve Big Mac skoru alanları kullanıldı.

Kaynak ilhamı: [TÜİK Veri Portalı](https://data.tuik.gov.tr/), [TÜİK Haber Bültenleri](https://www.tuik.gov.tr/Home/HaberBultenleriPartial), [2025 fitre haberi](https://www.ntv.com.tr/galeri/turkiye/2025te-fitre-ne-kadar-oldu%2C-ewY3Sr3N0mSb0rdBmttXA), [World Population Review / Turkey](https://worldpopulationreview.com/countries/turkey), [The Economist Big Mac Data](https://github.com/TheEconomist/big-mac-data).

- 2005-2025 dönemi Big Mac yerel fiyat referansı: [The Economist Big Mac Data](https://github.com/TheEconomist/big-mac-data).
- 2025/2026 için Türkiye fiyatları, güncel yerel fiyat bandı bilgisiyle (tekli burger ve menü fiyatları) kalibre edilmiştir.
- `Big Mac adedi` hesabı: `nominal harçlık / yılın Big Mac fiyatı`.
- `Big Mac skoru`: serideki en yüksek Big Mac adedi 100 kabul edilerek normalize edilir.

## Önkoşullar

Bu aracı kullanmadan önce şunlara aşina olmanız önerilir:

- Temel HTML, CSS ve JavaScript bilgisi
- Komut satırı ve `npm` kullanımı

Şunlara sahip olmanız gerekir:

- Node.js 20+ ve npm
- Modern bir tarayıcı (Chrome, Firefox, Safari, Edge)
- Depoyu okuyup düzenlemek için dosya sistemi erişimi

## BHE nasıl kullanılır?

### Yıl seçmek ve temel görünümü okumak

1. Sayfayı açın.
   1. `public/index.html` dosyasını tarayıcıda çalıştırın.
   2. Üst bölümdeki ana kartları kontrol edin.
   3. Varsayılan yılın son yıl olduğunu doğrulayın.
2. Yıl slider'ını hareket ettirin.
3. Kartlardaki nominal, eşdeğer, Big Mac adedi ve Big Mac skoru değişimini gözlemleyin.

### Metrik değiştirip grafiği karşılaştırmak

1. Metrik sekmelerinden birini seçin.
2. `KARŞI` alanından karşılaştırma yılını belirleyin.
   1. Seçili yıl ile karşı yılın grafikte işaretlendiğini kontrol edin.
   2. `Karşılaştırma Özeti` kartında farkı ve yüzde değişimi inceleyin.
   3. Hangi yılın önde olduğunu doğrulayın.
3. Gerekirse farklı metriklerde aynı kıyası tekrar edin.

### X paylaşım bağlantısı üretmek

1. Seçmek istediğiniz yıl ve metriği ayarlayın.
2. `X'TE PAYLAŞ` bağlantısına tıklayın.
   1. Açılan paylaşım metnini kontrol edin.
   2. Yıl ve skor bilgisinin doğru geldiğini doğrulayın.
   3. İsterseniz metni düzenleyip paylaşın.
3. Bağlantının proje URL'sini içerdiğini doğrulayın.

## Sorun Giderme

Sayfa açılıyor ama stil uygulanmıyor:

- `public/index.html` içindeki CSS yolu `./assets/css/styles.css` olmalı.

Fontlar görünmüyor:

- `public/assets/fonts/mozilla-headline/` altındaki `.ttf` dosyalarının mevcut olduğunu kontrol edin.

Lint komutu hata veriyor:

- Önce `npm install` çalıştırın, sonra `npm run lint` tekrar deneyin.

## Yardım alma ve issue bildirme

- Hata bildirimlerini GitHub Issues üzerinden iletin: `https://github.com/doguabaris/bhe/issues`
- Soru ve destek için aynı repo üzerinde issue açın. Hedef yanıt süresi: 3-7 gün.

## Geliştirici dokümantasyonu

### Teknik uygulama

Uygulama, istemci tarafında Vanilla JavaScript ile grafik ve kart güncellemelerini yapar. HTML/CSS yapısına bağlı olarak yıl ve metrik seçimlerini işler; veri setini (`public/assets/js/app.js`) kullanarak SVG grafiğini ve karşılaştırma alanlarını yeniden üretir. Big Mac odaklı metrikler aynı veri seti üzerinden hesaplanır ve sunulur.

Proje, ESLint, Stylelint ve remark ile kod kalitesi denetimi yapar. Bu kontroller JavaScript, CSS ve Markdown tutarlılığını korumak için kullanılır.

### Kod yapısı

`public/assets/js/app.js` modülü uygulamanın durum yönetimini, render akışını, grafik üretimini ve karşılaştırma hesaplarını yapar. `public/assets/css/` dizini görsel stil ve layout kurallarını içerir; `public/assets/fonts/`, `public/assets/images/` ve `public/assets/icons/` dizinleri statik varlıkları barındırır.

`public/index.html` giriş noktasıdır. `CONTRIBUTING.md` katkı sürecini, `CODE_OF_CONDUCT.md` topluluk davranış kurallarını tanımlar.

### Yerel geliştirme

#### Kurulum ortamı

Geliştirme ortamı hazırlığı:

1. Depoyu klonlayın.
   1. `git clone <repo-url>`
   2. `cd bhe`

#### Yükleme

Bağımlılıkları yükleme:

1. npm bağımlılıklarını kurun.
   1. `npm install`
   2. Kurulumun hatasız tamamlandığını doğrulayın.

#### Yapılandırma

Yapılandırma:

1. Asset yollarının `public/index.html` ve `public/assets/css/styles.css` içinde doğru olduğunu kontrol edin.
2. Node.js sürümünüzün güncel olduğunu doğrulayın.

#### Build ve test

Yerelde çalıştırma:

1. Uygulamayı tarayıcıda açın.
   1. `public/index.html` dosyasını doğrudan açın veya basit bir statik sunucu kullanın.
   2. Yıl slider'ı, metrik sekmeleri ve karşılaştırma alanını test edin.

Test/Lint çalıştırma:

1. Tüm kalite kontrollerini çalıştırın.
   1. `npm run lint`
   2. Gerekirse alt komutlarla ayrı ayrı kontrol edin: `lint:js`, `lint:css`, `lint:md`.

#### Hata ayıklama

- `npm ERR! missing script: lint`
  - `package.json` dosyasının proje kökünde olduğundan ve `scripts` alanının bulunduğundan emin olun.

- `Failed to load resource` veya dosya yolu hataları
  - `public/index.html` ve CSS içindeki göreli asset yollarını kontrol edin.

## Katkı nasıl yapılır?

BHE sürdürücüleri katkıları memnuniyetle kabul eder.

- Hata düzeltmeleri
- Dokümantasyon iyileştirmeleri
- UX/UI iyileştirmeleri
- Kod kalite geliştirmeleri

### Katkı süreci

Katkıdan önce topluluk beklentilerini belirleyen [Davranış Kuralları](./CODE_OF_CONDUCT.md) belgesini okuyun. Kod düzeni için mevcut lint kurallarını ve proje yapısını takip edin.

1. Katkı dalı açın.
   1. `main` dalını güncelleyin.
   2. `feature/...` veya `fix/...` isimli yeni dal açın.

1. Değişikliği tamamlayıp PR açın.
   1. `npm run lint` çalıştırın.
   2. Kısa bir doğrulama notu ile PR açın.

## Katkıda bulunanlar

Bu projenin ana geliştiricisi: Doğu Abaris.

## Lisans

Lisans bilgisi için [LICENSE](./LICENSE) dosyasına bakın.
