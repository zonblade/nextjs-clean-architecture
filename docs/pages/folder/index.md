# Struktur Folder

## Struktur Folder Utama

### Rincian Struktur
- app: Direktori utama yang berisi seluruh kode aplikasi Next.js.
    - [feature]: Direktori yang berisi fitur-fitur utama dari aplikasi, diorganisir sesuai dengan masing-masing fitur.
    - error.tsx: File yang berisi komponen untuk menangani kesalahan dalam aplikasi, seperti halaman error 404.
    - not-found.tsx: File yang berisi komponen untuk menampilkan halaman "not found" ketika halaman yang diminta tidak  ditemukan.
    - layout.tsx: File yang berisi komponen layout default yang digunakan di seluruh aplikasi.

Contoh Struktur :
```sh
.
└── app
    ├── [feature]
    ├── error.tsx
    ├── not-found.tsx
    └── layout.tsx
```

### Alasan Penggunaan
- Organisasi: Struktur folder ini membantu dalam pengorganisasian kode sesuai dengan fitur-fitur yang ada dalam aplikasi, memudahkan dalam pencarian dan navigasi.

- Pengelolaan Kesalahan: File error.tsx dan not-found.tsx membantu dalam penanganan kesalahan dan pengelolaan halaman "not found" dengan jelas.

- Default Layout: Dengan menyimpan layout default dalam file layout.tsx, memudahkan untuk memperbarui dan mengelola layout di seluruh aplikasi secara konsisten.


## Struktur Folder Fitur

### Rincian Struktur
- [feature]: Direktori yang berisi fitur-fitur utama dari aplikasi, diorganisir sesuai dengan masing-masing fitur.
    - $action: Direktori yang berisi komponen-komponen terkait dengan tindakan (action) atau perilaku fitur tertentu.
    - $function: Direktori yang berisi komponen-komponen terkait dengan fungsionalitas atau operasi khusus dari fitur tersebut.
    - $element: Direktori yang berisi komponen-komponen terkait dengan elemen visual atau UI yang digunakan dalam fitur tersebut.
    - index.tsx: File utama yang berfungsi sebagai entry point atau penghubung untuk fitur tersebut.

Contoh struktur :
```sh
.
└── [feature]
    ├── $action
    ├── $function
    ├── $element
    └── index.tsx
```

### Alasan Penggunaan
- Struktur Terorganisir: Penyusunan folder berdasarkan fitur-fitur utama memungkinkan untuk pengelompokan dan pengorganisasian kode yang lebih terstruktur dan terkelola dengan baik.

- Pengelolaan Fitur: Dengan memisahkan setiap fitur ke dalam direktori yang terpisah, memudahkan dalam pengembangan, pemeliharaan, dan pengujian fitur-fitur tersebut.

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


## Struktur Folder Element

### Rincian Struktur
- $element: Direktori yang berisi berbagai elemen visual atau UI yang digunakan dalam aplikasi.
    - client.table.pagination.tsx: File yang berisi komponen atau logika terkait dengan pagination (penomoran halaman) dalam tabel di sisi klien.
    - server.table.tsx: File yang berisi komponen atau logika terkait dengan tabel di sisi server dalam aplikasi.

Contoh Struktur :    
```sh
.
└── $element
    ├── client.table.pagination.tsx
    └── server.table.tsx
```

### Alasan Penggunaan
- Pemisahan Elemen UI: Dengan memisahkan setiap elemen visual atau UI ke dalam direktori yang terpisah, memungkinkan untuk pengelolaan dan pemeliharaan elemen-elemen tersebut dengan baik.

- Keterbacaan Kode: Penyusunan kode berdasarkan elemen visual atau UI memudahkan pengembang untuk menemukan dan memahami logika terkait dengan elemen tersebut.

- Reusable Components: Komponen-komponen terkait dengan elemen visual atau UI dapat dikelompokkan secara terorganisir dalam direktori yang sesuai, meningkatkan keterbacaan dan keterorganisasian kode, serta memfasilitasi penggunaan ulang yang efisien.