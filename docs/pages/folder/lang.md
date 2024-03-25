# Language Folder Structures

Dalam pengembangan aplikasi dengan TypeScript menggunakan Next.js 14, penting untuk memiliki struktur folder yang terorganisir dengan baik untuk manajemen language atau lokal (localization) dalam proyek Anda. Berikut adalah deskripsi tentang struktur folder yang direkomendasikan:

- Folder app/: Merupakan direktori utama yang berisi seluruh kode aplikasi.

- Folder [feature]/: Setiap fitur dalam aplikasi memiliki direktori tersendiri di bawah folder app/, yang berisi komponen, logika, dan sumber daya terkait fitur tersebut.

- Folder $lang/: Setiap fitur memiliki sub-direktori khusus untuk menampung file bahasa (language) atau lokal (localization). Prefiks $ menandakan bahwa ini adalah sub-direktori yang berisi file-file khusus terkait language.

- File id_en.ts: Merupakan file TypeScript yang berisi definisi dari language atau lokal tertentu. id adalah kode singkat untuk bahasa (misalnya, en untuk bahasa Inggris) dan en adalah kode negara atau wilayah (misalnya, US untuk Amerika Serikat).

- File index.tsx: File ini digunakan untuk mengkonfigurasi atau mengekspor type atau konfigurasi yang terkait dengan bahasa atau lokal. Ini memungkinkan penggunaan language dalam seluruh komponen dan logika fitur dengan mudah.


```sh
.
└── app/
    ├── user/
    │   ├── page.tsx
    │   ├── $action
    │   ├── $element
    │   ├── $function
    │   └── $lang/
    │       ├── id_en.ts
    │       └── index.tsx
    ├── dashboard/
    │   ├── ...
    │   └── $lang/
    │       ├── id_en.ts
    │       └── index.tsx
    └── products/
        ├── ...
        └── $lang/
            ├── id_en.ts
            └── index.tsx
```

Dengan struktur folder yang terorganisir seperti ini, pengembang dapat dengan mudah mengelola dan menambahkan language dalam proyek Next.js 14. Setiap fitur memiliki folder khusus untuk bahasa, memastikan bahwa pengelolaan language berjalan lancar dan terstruktur dengan baik.
