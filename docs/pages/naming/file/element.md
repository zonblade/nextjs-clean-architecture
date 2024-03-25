## Element (Component) File Naming 

Next JS 14 memiliki fungsi untuk membedakan server component dan client component.\ 
Server Component di render di Server.\
Client Component di render di Client.

Oleh karena itu penamaan pada file component di Next JS 14 sangat dibutuhkan.\

### Naming Conventions:
- **client.[module].tsx**: Pola penamaan ini digunakan untuk file yang berisi elemen atau komponen yang spesifik untuk sisi klien (client-side) dari aplikasi. Bagian [module] mencerminkan nama atau deskripsi singkat dari modul atau fitur yang terkait dengan elemen atau komponen tersebut.

- **server.[module].tsx**: Pola penamaan ini digunakan untuk file yang berisi elemen atau komponen yang spesifik untuk sisi server (server-side) dari aplikasi. Bagian [module] mencerminkan nama atau deskripsi singkat dari modul atau fitur yang terkait dengan elemen atau komponen tersebut.

Contoh :

**Server Element** :

```server.table.tsx```: File ini berisikan kode modul untuk element Table yang dirender pada server.

**Client Element**:

```client.table.pagination.tsx```: File ini berisikan kode modul untuk element Pagination yang dirender pada client.

### Alasan Penggunaan:
- **Keterbacaan**: Konvensi penamaan yang jelas membuatnya mudah bagi pengembang untuk menemukan dan memahami fungsi dari setiap file dalam kode basis.

- **Konsistensi**: Dengan menggunakan pola penamaan yang konsisten, pengembang dapat dengan cepat mengidentifikasi file-file yang berhubungan dengan elemen atau komponen dalam proyek.

- **Memisahkan Fungsionalitas**: Pola penamaan yang spesifik membantu dalam memisahkan kode elemen atau komponen untuk sisi klien dan sisi server dalam aplikasi, meningkatkan pemahaman tentang struktur dan organisasi proyek.