# Folder Naming

In this Next JS Clean Architecture we use _feature or page slicing_ as our architecture.\
Every feature should have their folder and do not combine them with other feature.

This is essentials because combined feature in 1 folder can cause a problem in bug fixing.\
Distinct folder per feature make bug fixing convenient.

The app folder should contain list of feature or page :

```sh
├── Website /
│   ├── About 
│   └── Contact
└── Dashboard/
    ├── Login
    └── User/
        └── Management
```


## Feature Naming

On feature, name it based on what scope it is.\
Example for feature like _management user_, the scope is _user_ and the feature is _management_

```sh
.
└── app /
    └── user/
        └── management
```

By **scoping** the feature we can add **more feature** regarding the scope **seemlesly**.


## Other Folder Naming

Other folder naming outsing pages use **$**.\
By doing this we distinct the pages folder with other folder,\
and it is easier too with Next JS App Router.

```sh
.
├── user /
│   ├── management/
│   │   ├── $action
│   │   └── $element
│   └── $action
└── $navigator
```

Every page has component (card, box, modal, .etc) and the component should be named as **_$element_**\
Function naming you can also use **_$function_** as the naming folder.

