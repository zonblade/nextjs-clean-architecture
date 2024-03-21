## Struktur Folder Action

### Rincian Struktur
- $action: Direktori yang berisi berbagai tindakan (actions) atau operasi tertentu yang dilakukan dalam aplikasi.
    - action.create.user.tsx: File yang berisi komponen atau logika terkait dengan pembuatan (create) pengguna dalam aplikasi.
    - constant.tsx: File yang berisi konstanta atau enumerasi yang digunakan dalam tindakan (actions) atau operasi tersebut.

Contoh struktur :
```sh
.
└── $action
    ├── action.create.user.tsx
    └── constant.tsx
```

### Alasan Penggunaan
- Pemisahan Fungsionalitas: Dengan memisahkan setiap tindakan (action) ke dalam direktori yang terpisah, memungkinkan untuk pengelolaan dan pemeliharaan fungsionalitas tersebut dengan baik.

- Pengorganisasian Kode: Penyusunan kode berdasarkan tindakan (actions) memungkinkan untuk pengelompokan logika terkait ke dalam file yang terpisah, meningkatkan keterbacaan dan keterorganisasian kode.
