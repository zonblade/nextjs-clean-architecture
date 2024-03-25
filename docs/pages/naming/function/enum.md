# Enum Function Naming

Penamaan fungsi pada enum mengikuti kaidah berikut:\
E_[name]

#### Rincian Penamaan
**E**: Awalan yang menunjukkan bahwa variabel tersebut adalah enum.

**[name]**: Nama deskriptif dari enum tersebut, biasanya menggambarkan jenis atau kategori dari nilai yang direpresentasikan oleh enum.

## Contoh Penamaan
- **E_User_Management**: Digunakan untuk merepresentasikan enum yang terkait dengan manajemen pengguna dalam aplikasi.
```tsx
export enum E_User_Managament {
    FAIL_TO_CONFIRM = "fail:to:error",
}
```

#### Alasan Penamaan
- **Jelas dan Deskriptif**: Penamaan yang menggunakan awalan E_ serta nama deskriptif enum memudahkan dalam memahami tujuan dan nilai yang direpresentasikan oleh enum tersebut.

- **Konsistensi**: Dengan menggunakan pola E_[name], penamaan enum menjadi konsisten dan mudah diidentifikasi oleh pengembang saat membaca atau menulis kode.

- **Organisasi Kode**: Penamaan yang spesifik terhadap enum memungkinkan pengorganisasian kode yang lebih baik, terutama dalam hal pengelompokan enum berdasarkan fungsionalitas atau jenis data yang direpresentasikan.

