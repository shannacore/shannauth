# SHANNA Authenticator 5.1.3 — Chrome built runtime

Ini **hasil build dari developer subset**, bukan source dan bukan aplikasi Android.
Tidak perlu Node.js/npm untuk memasangnya. Konfigurasi cloud pada build developer
sengaja kosong; menu cloud bukan bukti sinkronisasi berfungsi.

1. Ekstrak ZIP ke folder tetap.
2. Buka `chrome://extensions`, aktifkan Developer mode.
3. Pilih Load unpacked dan pilih folder yang langsung berisi `manifest.json`.
4. Jangan hapus folder tersebut selama ekstensi digunakan.

Backup dulu sebelum mengganti instalasi. Data mengikuti profil/ID ekstensi;
jangan uninstall, pindah profil, atau pindah folder tanpa backup yang bisa dipulihkan.
Jangan gunakan profil berisi akun asli untuk pengujian developer.

Untuk mengubah source, gunakan `SHANNA-Authenticator-Chrome-5.1.3-developer.zip`.
ZIP runtime ini dapat menjadi input unggahan manual Chrome Web Store setelah review;
bukan berarti sudah diterbitkan atau disetujui. Tidak ada unggahan otomatis.

Pertahankan `LICENSE` dan `view/licenses.html`. Dikelola Shanna Studio,
berbasis Authenticator Extension dengan lisensi MIT dan atribusi komponen terkait.
