# Function Naming

Penamaan fungsi dasar mengikuti kaidah berikut :\
[server/client]_fungsi

Untuk fungsi client
```tsx
export function CFN_CreateUser(prop: I_CreateUser) {

}
```

Untuk fungsi server
```tsx
export function SFN_CreateUser(prop: I_CreateUser) {

}
```


## Element Naming
Penamaan fungsi pada element mengikuti kaidah berikut :\
[server/client]_[element]

Untuk client
```tsx
const CE_Pagination = () => {
    const [page, setPage] = useState(0)
    return (
        <div>{page}</div>
    )
}
```

Untuk server
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

## Action Naming

Penamaan fungsi pada action mengikuti kaidah berikut :\
ACT_[action]

```tsx
export async function ACT_CreateUser(data: string){
    // API Call

    return
}
```

## Constant Naming
Penamaan fungsi pada constant mengikuti kaidah berikut:\
E_[name]

```tsx
export enum E_User_Managament {
    FAIL_TO_CONFIRM = "fail:to:error",
}
```


