## Function File Naming

Fungsi juga dapat dibedakan menjadi server function dan client function. 


### Naming Conventions:
- **sfn.[module].tsx**: Pola penamaan ini digunakan untuk file yang berisi fungsi atau logika spesifik untuk sisi server (server-side) dari aplikasi. Bagian [module] mencerminkan nama atau deskripsi singkat dari modul atau fitur yang terkait dengan fungsi tersebut.

- **cfn.[module].tsx**: Pola penamaan ini digunakan untuk file yang berisi fungsi atau logika spesifik untuk sisi klien (client-side) dari aplikasi. Bagian [module] mencerminkan nama atau deskripsi singkat dari modul atau fitur yang terkait dengan fungsi tersebut.

Contoh : 

**Server function**:
```sfn.table.constructor.tsx```: File ini diperuntukan untuk membantu merender table pada server-side.

**Client function**:
```cfn.create.user.tsx```: File ini diperuntukan untuk membuat user pada client-side.
