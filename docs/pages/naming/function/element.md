
## Element Naming

Penamaan fungsi pada element mengikuti kaidah berikut :\
[server/client]_[element]

#### Rincian Penamaan
- **Client Element (CE)**:
    - Fungsi-fungsi yang berinteraksi dengan elemen (component) pada sisi klien (client) dari aplikasi.
    - Contoh: CE_Pagination digunakan untuk mengatur nilai pada suatu elemen di sisi klien.
```tsx
const CE_Pagination = () => {
    const [page, setPage] = useState(0)
    return (
        <div>{page}</div>
    )
}

```
- **Server Element (SE)**:
    - Fungsi-fungsi yang berinteraksi dengan elemen pada sisi server dari aplikasi.
    - Contoh: SFN_GetValue digunakan untuk mendapatkan nilai dari suatu elemen di sisi server.
```tsx
const SE_Table = () => {
    return (
        <table>
            <thead>
            </thead>
            <tbody>
            </tbody>
        </table>
    )
}
```

#### Alasan Penamaan
- **Jelas dan Deskriptif**: Penamaan yang menggambarkan fungsi serta lokasi di mana fungsi tersebut dijalankan (sisi klien atau server) memudahkan pengembang untuk memahami tujuan dan konteks dari fungsi tersebut.

- **Konsistensi**: Dengan menggunakan pola [server/client]_[element], penamaan fungsi menjadi konsisten dan mudah diidentifikasi oleh pengembang saat membaca kode.

- **Organisasi Kode**: Penamaan yang membedakan fungsi berdasarkan lokasi dan peran dalam aplikasi membantu dalam organisasi dan pemeliharaan kode yang lebih efisien.