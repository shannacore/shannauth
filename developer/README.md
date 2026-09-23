# SHANNA Authenticator 5.1.3 — Chrome developer subset

Folder source dalam repositori utama: https://github.com/shannacore/shannauth/tree/main/developer
Folder siap pakai: [`../chrome-ready/`](../chrome-ready/) pada checkout repositori.
Unduhan kedua paket: https://github.com/shannacore/shannauth/releases/latest
Versi tetap **5.1.3**; tidak perlu repositori terpisah untuk developer.

**Paket pengembang, bukan paket siap dipasang dan bukan ZIP untuk Chrome Web Store.**
Hanya source ekstensi Chrome (Vue 2 + TypeScript), aset, konfigurasi build, lisensi,
dan pemeriksaan terkait. Tidak ada Android, website/admin/Firebase, riwayat Git,
node_modules, hasil build, source map, data pengguna, atau konfigurasi OAuth asli.

## Pilih paket yang benar

- `SHANNA-Authenticator-Chrome-5.1.3-developer.zip`: untuk mengubah dan membangun source.
- `SHANNA-Authenticator-Chrome-5.1.3-ready.zip`: runtime yang sudah dibangun; ekstrak
  lalu pilih folder berisi `manifest.json` lewat Chrome **Load unpacked**. Tidak perlu npm.
- Ready adalah salinan persis ZIP rilis lokal lama dengan nama tanpa akhiran `-ready`.
  Build developer memakai konfigurasi cloud kosong dan **tidak identik byte** dengan ready.

## Build dari ZIP tanpa Git atau Bash

Prasyarat: Node.js 24 + npm (diuji dengan Node 24.19.0, npm 11.17.0).
Ekstrak ke folder baru, lalu jalankan terminal dari folder dengan `package.json`:

```text
npm ci --ignore-scripts --no-audit --no-fund
npm run build
npm test
```

`--ignore-scripts` melewati download Chromium Puppeteer dan lifecycle script dependency.
Build ini tidak bergantung pada lifecycle script tersebut. Untuk pengujian browser,
gunakan Chrome/Chrome for Testing lokal melalui `PUPPETEER_EXECUTABLE_PATH` bila belum
ada browser di cache Puppeteer. Gunakan profil uji sementara, bukan akun asli.

Build hanya membuat `dist/` dan `chrome/`; tidak melakukan formatter otomatis,
Git, upload, push, deploy, build Android, Firefox, atau Edge.
`npm run lint` memeriksa TypeScript tanpa menulis perubahan.
`npm run test:browser` menjalankan uji OTP publik dan UI di browser uji lokal.

Untuk memasang hasil build: Chrome → `chrome://extensions` → Developer mode →
Load unpacked → pilih **`chrome/`**, bukan folder source.
Untuk menghasilkan ZIP runtime (memerlukan Python 3 yang dapat dipanggil `python`):

```text
npm run package
```

Hasil: `artifacts/SHANNA-Authenticator-Chrome-5.1.3-built-runtime.zip` dengan
`manifest.json` langsung di root. Untuk unggahan manual ke Chrome Web Store,
pilih ZIP **built-runtime**, bukan developer ZIP; lakukan review izin, listing,
kebijakan, konfigurasi dan pengujian lebih lanjut dahulu. Skrip tidak mengunggah apa pun.

## Konfigurasi cloud opsional — sengaja kosong

`src/models/credentials.ts` adalah **stub baru**, bukan file privat dari source asli.
Export `getCredentials()` menyediakan `dropbox.client_id`, `drive.client_id`,
`drive.client_secret`, `onedrive.client_id`, dan `onedrive.client_secret` kosong.
Manifest developer menghapus blok `oauth2` milik proyek asal; untuk integrasi Chrome
Google Drive, daftarkan aplikasi OAuth Anda sendiri dan tambahkan konfigurasi yang sesuai.

OTP lokal, UI, dan ekspor dapat dibangun tanpa kredensial cloud. Menu cloud tetap ada,
tetapi **Google Drive/Dropbox/OneDrive tidak diklaim bekerja atau sudah diuji**.
Isi client ID publik milik Anda, sesuaikan redirect URI/ID ekstensi dan izin provider,
lalu audit alur OAuth di `src/background.ts` dan `src/models/backup.ts`.
Jangan menanam confidential client secret dalam ekstensi publik: kode browser dapat
dibaca pengguna. Beberapa alur lama memakai field `client_secret`; integrasi aman
mungkin memerlukan perubahan desain OAuth, bukan sekadar mengisi stub.

Perubahan staging khusus Chrome: manifest OAuth disanitasi, tautan manifest PWA di
popup dihapus, badge browser lain dan runner lintas browser tidak disertakan.
Logika aplikasi lain tidak diubah. ZIP ini sengaja tidak memuat suite Mocha lama;
`npm test` menjalankan dua pemeriksaan UI Node, bukan klaim seluruh suite telah lulus.

## Lisensi dan distribusi

Pertahankan `LICENSE` (MIT/Authenticator Extension) dan `view/licenses.html`.
Source memakai dependency lama termasuk Vue 2; keberhasilan build bukan audit keamanan.
Kedua ZIP tersedia pada Release repositori **shannacore/shannauth** yang sama.
**Code → Download ZIP** menyediakan folder `chrome-ready/` dan `developer/`.
Untuk pemasangan tanpa build, pilih `chrome-ready/` atau unduh aset `-ready.zip`.
ZIP developer hanya berisi isi folder ini; jalankan perintah build dari sini.
Skrip build dan packaging tetap lokal; tidak ada unggahan otomatis.
