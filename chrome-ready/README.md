<p align="center">
  <img src="images/shanna-auth-logo.svg" width="100" height="100" alt="SHANNA Authenticator">
</p>
<h1 align="center">SHANNA Authenticator</h1>
<p align="center">Secure your accounts with two-factor authentication</p>
<p align="center">
  <a href="https://github.com/shannacore/shannauth/releases/latest">Unduh ekstensi Chrome</a> ·
  <a href="https://auth.shanna.id/">Website</a> ·
  <a href="https://auth.shanna.id/docs">Panduan lengkap</a> ·
  <a href="https://auth.shanna.id/docs/faq">FAQ</a>
</p>

---

## Versi 5.1.3 — siap dipasang

Repositori ini berisi ekstensi Chrome hasil build, bukan proyek yang harus dikompilasi sendiri. Anda tidak perlu Node.js, npm, terminal, atau akun developer berbayar untuk memasangnya secara lokal.

Paket ini belum diterbitkan di Chrome Web Store. Gunakan **Mode developer → Load unpacked** seperti petunjuk di bawah.

## Unduh paket yang benar

Buka [halaman Releases](https://github.com/shannacore/shannauth/releases/latest), lalu unduh:

**`SHANNA-Authenticator-Chrome-5.1.3.zip`**

Pilih file dengan nama tersebut pada bagian **Assets**. Ekstrak seluruh isinya; jangan memilih file ZIP langsung di Chrome.

## Pasang dalam beberapa langkah

1. Ekstrak ZIP ke folder tetap, misalnya `Documents/SHANNA-Authenticator`.
2. Buka Chrome, ketik **`chrome://extensions`** pada bilah alamat, lalu Enter.
3. Aktifkan **Developer mode / Mode developer** di kanan atas.
4. Klik **Load unpacked / Muat yang belum dipaketkan**.
5. Pilih folder hasil ekstrak yang langsung berisi **`manifest.json`**.
6. Setelah ekstensi muncul, buka ikon puzzle pada toolbar Chrome dan sematkan SHANNA Authenticator.

**Jangan hapus folder hasil ekstrak setelah memasang.** Chrome tetap membutuhkannya.

Struktur folder yang benar:

```text
SHANNA-Authenticator/
├── manifest.json       ← pilih folder ini di Load unpacked
├── dist/               ← kode aplikasi yang sudah dibangun
├── css/
├── images/
├── _locales/
├── view/
├── schema.json
└── LICENSE
```

Jika memakai **Code → Download ZIP**, ekstrak arsipnya dan pilih folder yang langsung berisi `manifest.json`. Paket Release tetap menjadi pilihan paling mudah.

## Mulai memakai kode OTP

1. Buka **Pengaturan → Keamanan** untuk melindungi data dengan kata sandi.
2. Pada layanan yang ingin diamankan, buka pengaturan 2FA dan pilih aplikasi authenticator.
3. Di SHANNA Authenticator, klik **Tambah akun / Add account**.
4. Pilih pindai QR pada halaman, impor gambar QR/URI, atau entri manual sesuai informasi dari layanan.
5. Masukkan kode yang muncul ke layanan asal sampai aktivasi 2FA dinyatakan berhasil.
6. Simpan recovery codes layanan dan buat backup authenticator.

Kode yang muncul belum berarti 2FA sudah aktif. Konfirmasi tetap harus diselesaikan pada layanan asal.

## Yang diperbarui

- Tampilan putih/lavender dengan kartu akun dan angka OTP yang lebih mudah dibaca.
- Pengelompokan angka 6 dan 8 digit tanpa mengubah kode yang disalin.
- Tema gelap tetap tersedia.
- Tombol Add account tidak lagi menimpa panel Pengaturan.
- Halaman About lebih rapi, memakai logo resmi dan jarak copyright yang nyaman.
- Fungsi TOTP/HOTP, QR, pencarian, pin, pengeditan, serta ekspor yang sudah ada tetap dipertahankan.

## Update tanpa kehilangan akun

**Backup dahulu. Jangan klik Remove untuk melakukan update biasa.**

1. Ekspor backup dan pastikan file tersimpan. Pilih cadangan terenkripsi bila tersedia.
2. Catat ID ekstensi, profil Chrome, dan folder instalasi yang sedang digunakan.
3. Ekstrak pembaruan, lalu ganti isi folder instalasi yang sama.
4. Buka `chrome://extensions` dan klik **Reload / Muat ulang** pada ekstensi yang sudah terpasang.
5. Pastikan ID ekstensi tetap sama dan akun masih terlihat.

Data mengikuti profil browser dan ID ekstensi, bukan hanya nama aplikasinya. Jangan pindah folder/profil atau uninstall sebelum backup dapat dipulihkan. Versi pengembangan tertentu sebelumnya memakai nomor `51.3`/`51.4`; versi ini menggunakan `5.1.3` sesuai penamaan produk. Jangan memaksa pemasangan jika Chrome menolak versi atau identitasnya.

## Backup dan privasi

- Kunci rahasia dan QR setup dapat dipakai untuk membuat kode yang sama. Jangan bagikan.
- Ekspor biasa dapat berisi rahasia terbaca; jangan menganggap semua backup terenkripsi.
- Simpan file backup dan kata sandinya secara terpisah. Uji pemulihan sebelum menghapus perangkat lama.
- Kode TOTP dibuat dari rahasia dan waktu perangkat; pastikan jam perangkat benar.
- Integrasi backup cloud memiliki konfigurasi/izin tersendiri. Periksa keberhasilannya, bukan hanya keberadaan menu.
- Format backup Android dan ekstensi berbeda; jangan menganggap impor lintas platform otomatis kompatibel.

## Jika ada masalah

| Masalah | Yang perlu diperiksa |
|---|---|
| Manifest missing / unreadable | Ekstrak ZIP; pilih folder dengan `manifest.json` langsung di dalamnya. |
| Akun kosong | Pastikan profil, folder, dan ID ekstensi sama; hapus filter pencarian. Jangan uninstall. |
| Kode ditolak | Periksa akun, jam otomatis, jenis kode, dan parameter layanan. |
| Update belum terlihat | Ganti file pada folder aktif, klik Reload, lalu buka ulang popup. |

Lihat [panduan pemecahan masalah](https://auth.shanna.id/docs#debugging). Laporan bug dapat dibuat melalui [GitHub Issues](https://github.com/shannacore/shannauth/issues); jangan sertakan secret, QR, kata sandi, OTP aktif, atau backup.

## Lisensi dan penghargaan

Dikelola oleh Shanna Studio. Proyek ini mempertahankan lisensi MIT dan atribusi Authenticator Extension. Lihat [LICENSE](LICENSE) dan halaman Lisensi pada ekstensi untuk pemberitahuan komponen terkait.

<p align="center">© Shanna Studio</p>
