# Katkı Rehberi

**Bayram Harçlığı Endeksi (BHE)** projesine katkı verdiğiniz için teşekkürler.

## Proje Yapısı

Aşağıdaki yapıyı koruyun:

- `public/index.html`
- `public/assets/css/styles.css`
- `public/assets/js/app.js`
- `public/assets/images/*`
- `public/assets/icons/*`
- `public/assets/fonts/*`

## Geliştirme Kuralları

- Değişiklikleri küçük ve odaklı tutun.
- Gereksiz bağımlılık eklemeyin.
- Mevcut görsel dil ve etkileşim düzenini koruyun.
- Arayüz değişikliklerinde mobil görünümü mutlaka kontrol edin.
- `public/assets/` altında tutarlı göreli dosya yolları kullanın.

## Katkı Akışı

1. `main` dalından yeni bir dal açın.
2. Değişikliği uygulayın.
3. Hızlı sözdizimi kontrolü yapın:
   - `node --check public/assets/js/app.js`
4. Açık ve net bir mesajla commit atın.
5. Kısa test/doğrulama notu ile PR açın.

## Commit Mesaj Biçimi

- `feat: ...` yeni özellik
- `fix: ...` hata düzeltme
- `refactor: ...` davranış değiştirmeyen iç düzenleme
- `docs: ...` dokümantasyon değişikliği

## Pull Request Kontrol Listesi

- [ ] Kapsam net ve sınırlı
- [ ] Kırık asset yolu yok
- [ ] Mobil görünüm kontrol edildi
- [ ] JS sözdizimi kontrolü geçti
- [ ] Gerekliyse dokümantasyon güncellendi
