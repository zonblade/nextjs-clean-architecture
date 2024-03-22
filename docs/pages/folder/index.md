## Garis Besar Struktur Folder

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