# Function Naming

Penamaan fungsi dasar mengikuti kaidah berikut :\
[server/client]_fungsi

#### Rincian Penamaan
- Client Functions (CFN):
    - Fungsi-fungsi yang ditujukan untuk operasi atau tindakan di sisi klien (client) dari aplikasi.
    - Contoh: CFN_CreateUser digunakan untuk membuat pengguna baru di sisi klien.

```tsx
export function CFN_CreateUser(prop: I_CreateUser) {

}
```

- Server Functions (SFN): 
    - Fungsi-fungsi yang ditujukan untuk operasi atau tindakan di sisi server dari aplikasi.
    - Contoh: SFN_CreateUser digunakan untuk membuat pengguna baru di sisi server.

```tsx
export function SFN_CreateUser(prop: I_CreateUser) {

}
```

#### Alasan Penamaan
- **Konsistensi**: Dengan menggunakan pola [server/client]_fungsi, penamaan fungsi menjadi konsisten dan mudah dipahami oleh pengembang, baik itu di sisi klien maupun server.

- **Pembeda**: Penamaan yang membedakan antara fungsi yang dijalankan di sisi klien dan sisi server memudahkan dalam manajemen kode dan meminimalkan kemungkinan kebingungan.

- **Keterbacaan**: Penamaan yang jelas dan deskriptif meningkatkan keterbacaan dan pemahaman kode, baik untuk pengembang saat ini maupun pengembang baru yang menggali kode.


