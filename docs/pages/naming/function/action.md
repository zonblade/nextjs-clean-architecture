## Action Naming

Penamaan fungsi pada action mengikuti kaidah berikut :\
ACT_[action]

#### Rincian Penamaan
- ACT: Awalan yang menunjukkan bahwa fungsi tersebut adalah tindakan (action) yang dijalankan dalam konteks tertentu.

- [action]: Deskripsi singkat dari tindakan yang dilakukan oleh fungsi tersebut.

## Contoh Penamaan
ACT_SubmitForm: Digunakan untuk mengeksekusi tindakan pengiriman formulir.
```tsx
export async function ACT_SubmitForm(data: string){
    // API Call

    return
}
```

#### Alasan Penamaan
- **Jelas dan Deskriptif**: Penamaan yang menggunakan awalan ACT_ serta deskripsi singkat dari tindakan tersebut membantu dalam memahami tujuan dan fungsi dari setiap tindakan.

- **Konsistensi**: Dengan menggunakan pola ACT_[action], penamaan fungsi menjadi konsisten dan mudah diidentifikasi oleh pengembang saat membaca atau menulis kode.

- **Organisasi Kode**: Penamaan yang spesifik terhadap tindakan memungkinkan pengorganisasian kode yang lebih baik, terutama dalam aplikasi yang menggunakan pendekatan berbasis aksi (action-based).