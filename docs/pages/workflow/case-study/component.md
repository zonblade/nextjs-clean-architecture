## Studi-Kasus Element Lifecycle.

untuk menghindari `Element Drilling` maupun `Redux` yang menyampah/tidak tertata dengan rapi
maupun bentuk data yang acak, disarankan untuk menggunakan Emitter jika `client component` tersebut
terpisah oleh server component

- Workflow
- Contoh Kode
___
### workflow

![api call](assets/images/case-study/nextjs.workflow-a.png)
![api call](assets/images/case-study/nextjs.workflow-b.png)
___
### Contoh Kode

#### Page File
```tsx
# app/feature/page.tsx

export default function Page(){

    return (
        <>
            <SE_Header />
            <SE_List />
        </>
    )
}
```

#### Server Files

jika kita melakukan render beberapa client element pada server element, 
CE_ tersebut tidak akan dapat berkomunikasi melalui direct-line maupun props drilling tanpa
melakukan refresh maupun mengupdate cookie (*jika menggunakan cookie*)
rekomendasi fetch data ditaruh pada `CE_List`, akan dijelaskan pada bagian Client Files

```tsx
# app/feature/$element/server.header.tsx

export function SE_Header(){
    return (
        <div>
            <CE_SearchBar/>
            <div>
                <CE_SaveButton/>
            </div>
        </div>
    )
}
```

```tsx
# app/feature/$element/server.datalist.tsx

export function SE_List(){

    const data = await APIS_Data();

    return (
        <div>
            {data?(
               <CE_List data={data} />
            ):(<></>)}
        </div>
    )
}
```

#### Client Files

jadi cara untuk mengupdate data jika komponen search
mengirim data seperti dibawah ini.
```sh
<CE_SearchBar/> ::<--update-->:: <CE_List/>
```
dengan menggunakan `useEffect` atau `useMemo`. contoh dibawah ini 
pada file `client.header.search.tsx` melakukan emit/mengirim data
dan pada file `client.datalist.tsx` melakukan listen data.
```tsx
# app/feature/$element/client.header.search.tsx

export function CE_SearchBar(){
    const [searchText, setSearchText] = useState('');

    const updateSearch = (search:string)=>{
        setSearchText(search);
        GlobalEmitter.emit(E_Somethn.SEARCH, search);
    }

    return (
        <></>
    )
}

```
```tsx
# app/feature/$element/client.datalist.tsx

export function CE_List(prop:{data:I_Lists[]}){

    const [searchText, setSearchText] = useState('');
    const [data, setData] = useState<I_Lists[]>(data);

    useEffect(()=>{
        GlobalEmitter.addListener(E_Somethn.SEARCH, (text:string)=>{
            setSearchText(text)
        })
        return ()=>{
            GlobalEmitter.removeAllListener(E_Somethn.SEARCH)
        }
    },[])

    useEffect(()=>{
        CFN_DataFetch({
            search:searchText,
            whileDone:(data:I_Lists[])=>{
                setData(data)
            },
            whileError:()=>{
                // do something
            }
        })

        return ()=>{}
    },[searchText])

    return(
        <></>
    )
}
```
