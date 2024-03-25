# Library Folder Structures

### Rincian Struktur Folder:
- app: Direktori utama yang berisi kode aplikasi tingkat tinggi. Di sini, biasanya terdapat file-file terkait konfigurasi aplikasi, definisi tata letak, dan file-file terkait tampilan tingkat tinggi.

- lib: Direktori yang berisi kode-kode pustaka atau library yang digunakan dalam aplikasi. Dalam struktur ini, direktori ini merupakan direktori utama:
    - [library].tsx: File utama yang berisi implementasi dan definisi dari pustaka atau library tersebut. File ini dapat berisi berbagai jenis fungsi, kelas, atau komponen yang menjadi bagian dari pustaka.

Contoh Struktur :
```sh
.
├── api/
├── app/
├── reg/
└── lib/
    ├── redis/
    │   └── index.ts
    ├── math.ts
    └── button.tsx
```

### Alasan Penggunaan:
- Pemisahan Kode: Struktur ini memisahkan kode pustaka dari kode aplikasi utama, memudahkan pengembangan dan pengelolaan pustaka secara terpisah.

- Penggunaan Kembali: Dengan memisahkan kode pustaka ke dalam struktur yang terorganisir, pustaka dapat digunakan kembali di berbagai proyek atau bagian dari aplikasi.

- Skalabilitas: Struktur folder ini memungkinkan pengembangan pustaka secara independen, sehingga memudahkan untuk menambahkan atau memperbarui pustaka tanpa mempengaruhi kode aplikasi utama.

- Pemeliharaan Kode: Kode pustaka yang terisolasi dalam struktur yang terdefinisi memudahkan untuk memperbarui atau memperbaiki pustaka tanpa risiko merusak kode aplikasi utama.