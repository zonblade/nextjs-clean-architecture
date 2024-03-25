# Type Naming Conventions

Konvensi penamaan untuk tipe data (type) dalam TypeScript adalah langkah penting dalam pengembangan kode yang konsisten dan mudah dimengerti. Dengan menggunakan kaidah yang jelas, kita dapat meningkatkan keterbacaan dan konsistensi dalam kode. Berikut adalah deskripsi untuk type naming convention dalam TypeScript:


### Naming Conventions
- **Huruf T di Depan**: Nama tipe data dimulai dengan huruf T diikuti oleh nama konsep atau objek yang diwakili oleh tipe data tersebut. Ini memberikan petunjuk langsung bahwa itu adalah sebuah tipe data.

- **Snake Case**: Nama tipe data menggunakan kaidah snake case, yaitu setiap kata dipisahkan oleh underscore (_), dan semuanya dalam huruf kecil. Ini membuat tipe data lebih mudah dibaca dan membedakan kata-kata dalam penamaan.

### Contoh
```tsx
type T_LoginData = {
    username: string;
    password: string;
};

type T_UserProfile = {
    id: number;
    name: string;
    email: string;
};
```

Dengan menerapkan konvensi penamaan ini, kita dapat meningkatkan keterbacaan, konsistensi, dan pemahaman tentang struktur tipe data dalam kode TypeScript. Ini membantu pengembang lain untuk dengan cepat mengidentifikasi dan menggunakan tipe data yang sesuai dengan kebutuhan mereka dalam pengembangan aplikasi