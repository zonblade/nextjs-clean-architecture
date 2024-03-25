## Struktur Folder Fitur

### Rincian Struktur
- [feature]: Direktori yang berisi fitur-fitur utama dari aplikasi, diorganisir sesuai dengan masing-masing fitur.
    - $action: Direktori yang berisi komponen-komponen terkait dengan tindakan (action) atau perilaku fitur tertentu.
    - $function: Direktori yang berisi komponen-komponen terkait dengan fungsionalitas atau operasi khusus dari fitur tersebut.
    - $element: Direktori yang berisi komponen-komponen terkait dengan elemen visual atau UI yang digunakan dalam fitur tersebut.
    - page.tsx: File utama yang berfungsi sebagai entry point atau penghubung untuk fitur tersebut.

Contoh struktur :
```sh
.
└── [feature]
    ├── $action
    ├── $function
    ├── $element
    ├── $lang
    └── page.tsx
```
### Alasan Penggunaan
- Struktur Terorganisir: Penyusunan folder berdasarkan fitur-fitur utama memungkinkan untuk pengelompokan dan pengorganisasian kode yang lebih terstruktur dan terkelola dengan baik.

- Pengelolaan Fitur: Dengan memisahkan setiap fitur ke dalam direktori yang terpisah, memudahkan dalam pengembangan, pemeliharaan, dan pengujian fitur-fitur tersebut.
