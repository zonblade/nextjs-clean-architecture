# Lang Function Naming

Deskripsi Fungsi pada File Language:
LANG_[feature]_[language]

- **Prefix "LANG_"**: Setiap fungsi diawali dengan prefiks "LANG_", yang menunjukkan bahwa itu adalah fungsi terkait language atau lokal (localization). Prefiks ini memberikan petunjuk langsung bahwa fungsi tersebut berisi data bahasa.

- **[feauture]**: Bagian ini mencerminkan fitur atau bagian dari aplikasi yang terkait dengan fungsi bahasa tersebut. Penamaan ini memberikan konteks tentang penggunaan fungsi bahasa dalam konteks tertentu dalam aplikasi.

- **[language]**: Bagian ini menunjukkan kode bahasa atau lokal tertentu yang terkait dengan fungsi bahasa tersebut. Ini memungkinkan untuk membedakan antara variasi bahasa yang berbeda dalam aplikasi.


Contoh
```tsx
export const LANG_Login_iden = {
    username: 'Nama Pengguna'
};
export const LANG_Login_idfr = {
    username: 'Nom d\'utilisateur'
};
```

Dengan menggunakan konvensi penamaan seperti ini, pengembang dapat dengan mudah mengidentifikasi, mengelompokkan, dan mengelola fungsi bahasa dalam aplikasi mereka. Ini memungkinkan untuk mendukung berbagai bahasa dan lokal dengan konsisten dan terstruktur.




