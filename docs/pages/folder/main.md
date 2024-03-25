## Struktur Folder Utama

### Rincian Struktur
- **app**: Direktori utama yang berisi seluruh kode aplikasi Next.js.
    - **[feature]**: Direktori yang berisi fitur-fitur utama dari aplikasi, diorganisir sesuai dengan masing-masing fitur.
    - **error.tsx**: File yang berisi komponen untuk menangani kesalahan dalam aplikasi, seperti halaman error 404.
    - **not-found.tsx**: File yang berisi komponen untuk menampilkan halaman "not found" ketika halaman yang diminta tidak  ditemukan.
    - **layout.tsx**: File yang berisi komponen layout default yang digunakan di seluruh aplikasi.

Contoh Struktur :
```sh
.
└── app
    ├── [feature]
    ├── ... #nextjs has documentation about this.
    └── layout.tsx
```

### Alasan Penggunaan
- **Organisasi**: Struktur folder ini membantu dalam pengorganisasian kode sesuai dengan fitur-fitur yang ada dalam aplikasi, memudahkan dalam pencarian dan navigasi.

- **Pengelolaan Kesalahan**: File error.tsx dan not-found.tsx membantu dalam penanganan kesalahan dan pengelolaan halaman "not found" dengan jelas.

- **Default Layout**: Dengan menyimpan layout default dalam file layout.tsx, memudahkan untuk memperbarui dan mengelola layout di seluruh aplikasi secara konsisten.