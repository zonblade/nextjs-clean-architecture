
## Clean Architecture NextJs! (v1.0)

[![Github](assets/images/github-mark.png)](https://github.com/zonblade/nextjs-clean-architecture)
[![Stats](https://img.shields.io/github/contributors/zonblade/nextjs-clean-architecture)](https://github.com/zonblade/nextjs-clean-architecture/graphs/contributors)

sebelum membaca dokumentasi ini, pastikan **keilmuan** memahami `NextJs` sudah
mencukupi untuk memahami beberapa hal dasar dalam dokumentasi *NextJS*. Dikarenakan
dokumentasi clean-architecture tidak akan mencakup hal-hal dasar dalam penggunaan/pembangunan
aplikasi menggunakan `NextJs`.

- [Boiler Plate Basic](#a)
- [Example Project](#a)
___

### Keilmuan minimal sebelum memulai

- **NextJs**: Penggunaan NextJs dalam pembangunan aplikasi.
    - **Next Action**: Penggunaan Next Action dalam pembangunan aplikasi.

- **ReactJs**: Penggunaan ReactJs dalam pembangunan aplikasi.
    - **Hook Lifecycle**: Penggunaan hook lifecycle dalam pembangunan aplikasi.
    - **Component Section Lifecycle**: Penggunaan lifecycle pada section component dalam pembangunan aplikasi. 
- **TypeScript**: Penggunaan TypeScript dalam pembangunan aplikasi.
- **Tailwind**: Penggunaan Tailwind dalam pembangunan aplikasi.

___
### Garis Besar Struktur Folder

`Basic Folder Structure`
```sh
.
├── .next
├── node_modules
├── src/
│   ├── api/
│   │   ├── feature/
│   │   │   └── api.[sub-action].tsx
│   │   └── common.ts
│   ├── app/
│   │   ├── feature/
│   │   │   ├── $action/
│   │   │   │   ├── action.[name].ts
│   │   │   │   └── constant.tsx
│   │   │   ├── $element/
│   │   │   │   ├── server.[name].tsx
│   │   │   │   └── client.[name].tsx
│   │   │   ├── $function/
│   │   │   │   ├── sfn.[name].ts
│   │   │   │   └── cfn.[name].ts
│   │   │   ├── $lang/
│   │   │   │   ├── id.ts
│   │   │   │   └── index.ts
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── lib
│   └── middleware.ts
└── package.json
```