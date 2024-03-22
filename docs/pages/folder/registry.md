# Registry Folder Structure

### Rincian Struktur Folder:
- app: Direktori utama yang berisi kode aplikasi tingkat tinggi. Di sini, biasanya terdapat file-file terkait konfigurasi aplikasi, definisi tata letak, dan file-file terkait tampilan tingkat tinggi.

- registry: Direktori yang berisi kode terkait dengan registrasi dan konfigurasi modul-modul atau fitur-fitur aplikasi (dalam hal ini seperti global konstan). Dalam struktur ini, direktori ini merupakan direktori utama:
    - [module].register.tsx: File yang berisi registrasi/konstan dan konfigurasi untuk modul atau fitur tertentu. File ini bertindak sebagai tempat untuk mendaftarkan dan mengkonfigurasi berbagai bagian dari modul atau fitur tersebut.

Contoh Struktur
```sh
.
└── registry/
    └── routes.register.tsx
```

### Alasan Penggunaan:
- Pemisahan Konfigurasi: Struktur folder ini memisahkan kode registrasi dan konfigurasi untuk modul-modul atau fitur-fitur aplikasi dari kode logika bisnis dan presentasi.

- Keterbacaan: Dengan memisahkan kode konfigurasi ke dalam struktur yang terorganisir, memudahkan pengembang untuk menemukan dan memahami konfigurasi untuk setiap modul atau fitur.

- Skalabilitas: Struktur folder ini memungkinkan aplikasi untuk berkembang dengan menambahkan atau mengubah modul-modul atau fitur-fitur tanpa mempengaruhi kode logika bisnis dan presentasi.

- Pemeliharaan Kode: Kode registrasi dan konfigurasi yang terpisah memudahkan untuk memperbarui atau memperbaiki konfigurasi modul atau fitur tanpa risiko merusak kode logika bisnis dan presentasi.