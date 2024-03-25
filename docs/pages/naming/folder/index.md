# Folder Naming

In this Next JS Clean Architecture we use _feature or page slicing_ as our architecture.\
Every feature should have their folder and do not combine them with other feature.

This is essentials because combined feature in 1 folder can cause a problem in bug fixing.\
Distinct folder per feature make bug fixing convenient.

The app folder should contain list of feature or page :

```sh
├── website /
│   ├── about 
│   └── contact
└── dashboard/
    ├── login
    └── user/
        └── management
```

##### selengkapnya : 
- [NextJs App Routing](https://nextjs.org/docs/app/building-your-application/routing)
- [NextJs File Convention](https://nextjs.org/docs/app/api-reference/file-conventions)
