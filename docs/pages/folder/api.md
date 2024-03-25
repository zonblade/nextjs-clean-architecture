# API Folder Structures

### Rincian Struktur
- app: Direktori utama yang berisi seluruh kode aplikasi Next.js.
- api: Direktori yang berisi kode yang terkait dengan API. Dalam struktur ini, terdapat sub-direktori yang dipisahkan oleh feature.
    - [feature]: Direktori ini berisi API yang terkait hanya dengan feature tersebut. 
        - [feature].tsx: File utama yang berisi API dari fitur tersebut.
    - common.tsx: File yang berisi kode yang digunakan secara umum di seluruh aplikasi. Biasanya berisi fungsi-fungsi bantu, konstanta-konstanta, atau komponen-komponen umum yang digunakan secara luas di berbagai fitur.

Contoh struktur :
```sh
.
├── app/
├── lib/
├── reg/
└── api/
    ├── user/
    │   ├── premium.ts
    │   └── account.ts
    ├── product/
    │   ├── data.public.ts
    │   ├── data.list.ts
    │   └── create.ts
    └── common.ts
```

### Alasan Penggunaan:
- Pemisahan Fungsionalitas: Struktur folder ini memisahkan kode menjadi lapisan-lapisan yang terdefinisi dengan jelas, seperti tampilan, logika bisnis, dan logika presentasi.

- Keterbacaan: Dengan memisahkan kode ke dalam struktur yang terorganisir, memudahkan pengembang untuk menemukan dan memahami bagian-bagian tertentu dari aplikasi.

- Skalabilitas: Struktur folder ini memungkinkan aplikasi untuk berkembang secara organik dengan menambahkan atau mengubah fitur-fitur tanpa mempengaruhi bagian-bagian lain dari aplikasi.

- Pemeliharaan Kode: Kode yang terisolasi dalam lapisan-lapisan yang terdefinisi memudahkan untuk memperbarui atau memperbaiki bagian-bagian tertentu dari aplikasi tanpa risiko merusak bagian lain.