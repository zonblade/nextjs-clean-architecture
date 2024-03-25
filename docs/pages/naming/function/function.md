# Function Naming

Deskripsi untuk Function Naming Conventions:\
CFN_[nama-fungsi] -> Client Function\
SFN_[nama-fungsi] -> Server Function\

CFN_: Prefiks "CFN_" digunakan untuk menandai fungsi yang terkait dengan klien (client) dalam aplikasi. Ini memberikan petunjuk bahwa fungsi tersebut digunakan atau dieksekusi di sisi klien.

SFN_: Prefiks "SFN_" digunakan untuk menandai fungsi yang terkait dengan server dalam aplikasi. Ini memberikan petunjuk bahwa fungsi tersebut digunakan atau dieksekusi di sisi server.

[nama-fungsi]: Bagian ini adalah nama unik yang menggambarkan tujuan atau tugas dari fungsi tersebut. Penamaan harus jelas dan deskriptif agar memudahkan penggunaan dan pemahaman fungsi.

### Contoh
```tsx
// Client Function
export const CFN_CreateUser = () => {
    // Logika untuk membuat pengguna di sisi klien
};

// Server Function
export const SFN_CreateUser = () => {
    // Logika untuk membuat pengguna di sisi server
};
```

Dengan menggunakan konvensi penamaan seperti ini, pengembang dapat dengan mudah mengidentifikasi jenis fungsi yang sedang digunakan dalam aplikasi mereka. Ini membantu dalam pemeliharaan, pengembangan, dan debugging kode dengan memisahkan fungsionalitas antara klien dan server.





