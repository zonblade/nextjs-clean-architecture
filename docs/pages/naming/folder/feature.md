## Feature Naming

Aplikasi akan di desain menggunakan fitur-based, semua fitur akan memiliki foldernya sendiri.
Dan penamaan fitur akan diterapkan berdasarkan scope yang dimaksud.
Sebagai contoh, jika terdapat fitur management user maka folder yang akan dibuat pada fitur tersebut adalah sebagai berikut :

```sh
.
└── app /
    └── user/
        └── management
```

### Alasan Penggunaan 

- Memudahkan Pengembangan: Dengan menggunakan metode ini maka , pengembangan aplikasi akan menjadi lebih mudah karena fitur sudah dikelompokan oleh foldernya dan jika terdapat tambahan fitur pada scope tersebut akan jauh lebih mudah.

- Memudahkan Debugging: Jika terjadi error, akan lebih mudah. Kita dapat langsung mencarinya pada feature yang terkait.

