## Struktor Folder Function

### Rincian Struktur
- $function: Direktori yang berisi berbagai fungsi atau operasi tertentu yang dilakukan dalam aplikasi.
    - sfn.table.constructor.tsx: File yang berisi komponen atau logika terkait dengan konstruksi (constructor) atau inisialisasi tabel dalam aplikasi.
    - cfn.create.user.tsx: File yang berisi komponen atau logika terkait dengan pembuatan (create) pengguna dalam aplikasi.

Contoh Struktur :     
```sh
.
└── $function
    ├── sfn.table.constructor.tsx
    └── cfn.create.user.tsx
```

### Alasan Penggunaan
- Pemisahan Fungsionalitas: Dengan memisahkan setiap fungsi atau operasi ke dalam direktori yang terpisah, memungkinkan untuk pengelolaan dan pemeliharaan fungsionalitas tersebut dengan baik.

- Keterbacaan Kode: Penyusunan kode berdasarkan fungsi atau operasi memudahkan pengembang untuk menemukan dan memahami logika terkait dengan fungsi tersebut.

- Pengorganisasian Komponen: Komponen-komponen terkait dengan fungsi atau operasi dapat dikelompokkan secara terorganisir dalam direktori yang sesuai, meningkatkan keterbacaan dan keterorganisasian kode.
