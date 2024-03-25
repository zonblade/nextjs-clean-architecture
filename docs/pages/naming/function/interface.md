# Interface Function Naming

Interface adalah komponen penting dalam TypeScript yang digunakan untuk mendefinisikan struktur objek. Untuk menjaga konsistensi dalam kode, perlu adanya konvensi penamaan yang jelas untuk interface. Berikut adalah deskripsi untuk konvensi penamaan interface dalam TypeScript:


### Naming Conventions
- Huruf I: Nama interface dimulai dengan huruf I diikuti oleh nama objek atau konsep yang diwakili oleh interface tersebut.

- Snake Case: Nama interface menggunakan kaidah snake case, yaitu setiap kata dipisahkan oleh underscore (_), dan semuanya dalam huruf kecil.

- IRq dan IRs: Jika interface digunakan untuk merepresentasikan request dan response, maka digunakan prefiks IRq untuk request dan IRs untuk response, diikuti dengan snake case.


### Contoh
```tsx
interface I_ButtonProps {
    label: string;
    onClick: () => void;
}

interface IRq_UserLogin {
    username: string;
    password: string;
}

interface IRs_UserLogin {
    token: string;
    expiresAt: Date;
}
```

### Alasan Penamaan
- Jelas dan Deskriptif: Penggunaan huruf I di depan nama interface memberikan petunjuk langsung bahwa itu adalah sebuah interface. Ini membantu dalam membedakan interface dari kelas atau tipe data lainnya dalam kode.

- Konsistensi: Dengan menggunakan prefiks I dan snake case, kita menjaga konsistensi dalam penamaan interface di seluruh kode. Hal ini membuat kode lebih mudah dibaca dan dipahami oleh pengembang lain.

- Pembeda untuk Request dan Response: Penggunaan prefiks IRq dan IRs untuk request dan response secara jelas menunjukkan peran dan tujuan dari masing-masing interface. Hal ini memudahkan dalam navigasi kode dan pemahaman struktur komunikasi antara komponen dalam aplikasi.

- Memudahkan Identifikasi: Dengan konvensi penamaan yang jelas, pengembang dapat dengan cepat mengidentifikasi dan menggunakan interface yang sesuai dengan kebutuhan mereka. Hal ini mempercepat proses pengembangan dan mencegah kesalahan yang disebabkan oleh penggunaan interface yang salah.