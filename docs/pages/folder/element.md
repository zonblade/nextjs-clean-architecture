## Struktur Folder Element

### Rincian Struktur
- **$element**: Direktori yang berisi berbagai elemen visual atau UI yang digunakan dalam aplikasi.
    - **client.table.pagination.tsx**: File yang berisi komponen atau logika terkait dengan pagination (penomoran halaman) dalam tabel di sisi klien.
    - **server.table.tsx**: File yang berisi komponen atau logika terkait dengan tabel di sisi server dalam aplikasi.

Contoh Struktur :    
```sh
.
├── $action
├── $element
│   ├── client.table.pagination.tsx
│   └── server.table.tsx
├── $function
├── $lang
└── page.tsx
```

### Alasan Penggunaan
- **Pemisahan Elemen UI**: Dengan memisahkan setiap elemen visual atau UI ke dalam direktori yang terpisah, memungkinkan untuk pengelolaan dan pemeliharaan elemen-elemen tersebut dengan baik.

- **Keterbacaan Kode**: Penyusunan kode berdasarkan elemen visual atau UI memudahkan pengembang untuk menemukan dan memahami logika terkait dengan elemen tersebut.

- **Reusable Components**: Komponen-komponen terkait dengan elemen visual atau UI dapat dikelompokkan secara terorganisir dalam direktori yang sesuai, meningkatkan keterbacaan dan keterorganisasian kode, serta memfasilitasi penggunaan ulang yang efisien.