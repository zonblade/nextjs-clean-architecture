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




## Element Naming

Penamaan fungsi pada element mengikuti kaidah berikut :\
[server/client]_[element]

#### Rincian Penamaan
- Client Element (CE):
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
- Server Element (SE):
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

## Action Naming

Penamaan fungsi pada action mengikuti kaidah berikut :\
ACT_[action]

#### Rincian Penamaan
- ACT: Awalan yang menunjukkan bahwa fungsi tersebut adalah tindakan (action) yang dijalankan dalam konteks tertentu.

- [action]: Deskripsi singkat dari tindakan yang dilakukan oleh fungsi tersebut.

## Contoh Penamaan
ACT_SubmitForm: Digunakan untuk mengeksekusi tindakan pengiriman formulir.
```tsx
export async function SubmitForm(data: string){
    // API Call

    return
}
```

#### Alasan Penamaan
- **Jelas dan Deskriptif**: Penamaan yang menggunakan awalan ACT_ serta deskripsi singkat dari tindakan tersebut membantu dalam memahami tujuan dan fungsi dari setiap tindakan.

- **Konsistensi**: Dengan menggunakan pola ACT_[action], penamaan fungsi menjadi konsisten dan mudah diidentifikasi oleh pengembang saat membaca atau menulis kode.

- **Organisasi Kode**: Penamaan yang spesifik terhadap tindakan memungkinkan pengorganisasian kode yang lebih baik, terutama dalam aplikasi yang menggunakan pendekatan berbasis aksi (action-based).


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





