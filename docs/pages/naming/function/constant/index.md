## Constant Naming
Penamaan fungsi pada constant mengikuti kaidah berikut:\
E_[name]

#### Rincian Penamaan
E: Awalan yang menunjukkan bahwa konstanta tersebut adalah konstanta dalam aplikasi.

[name]: Nama deskriptif dari konstanta tersebut, biasanya menggambarkan jenis atau kategori dari nilai yang direpresentasikan oleh konstanta.

## Contoh Penamaan
- E_User_Management: Digunakan untuk merepresentasikan konstanta yang terkait dengan manajemen pengguna dalam aplikasi.
```tsx
export enum E_User_Managament {
    FAIL_TO_CONFIRM = "fail:to:error",
}
```

#### Alasan Penamaan
- **Jelas dan Deskriptif**: Penamaan yang menggunakan awalan E_ serta nama deskriptif konstanta memudahkan dalam memahami tujuan dan nilai yang direpresentasikan oleh konstanta tersebut.

- **Konsistensi**: Dengan menggunakan pola E_[name], penamaan konstanta menjadi konsisten dan mudah diidentifikasi oleh pengembang saat membaca atau menulis kode.

- **Organisasi Kode**: Penamaan yang spesifik terhadap konstanta memungkinkan pengorganisasian kode yang lebih baik, terutama dalam hal pengelompokan konstanta berdasarkan fungsionalitas atau jenis data yang direpresentasikan.


