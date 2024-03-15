# File Naming 

## Element (Component) File Naming 

Next JS 14 memiliki fungsi untuk membedakan server component dan client component.\ 
Server Component di render di Server.\
Client Component di render di Client.

Oleh karena itu penamaan pada file component di Next JS 14 sangat dibutuhkan.\

Untuk penamaan pada Server Component gunakan :\
server.[name].tsx\
contoh: server.table.tsx

Untuk penamaan pada Client Component gunakan :\
client.[name].tsx\
contoh: client.table.tsx


## Function File Naming

Fungsi juga dapat dibedakan menjadi server function dan client function. 

Untuk penamaan pada Server Function gunakan :\
sfn.[name].tsx\
contoh: sfn.table.constructor.tsx

Untuk penamaan pada Client Function gunakan :\
cfn.[name].tsx\
contoh: cfn.create.user.tsx


## Action File Naming

Action file digunakan untuk melakukan request API dari client component.\

Untuk penamaan pada Action File gunakan :\
action.[name].tsx\
contoh: action.create.user.tsx


## Constant File Naming

Pada pemrograman kita seringkali membutuhkan data konstan untuk mendukung fungsi yang akan dijalankan.\
Data konstan tersebut seringkali dipakai juga ditempat lain untuk menjalankan fungsi.\
Jika konstan ditempatkan disetiap fungsi maka akan membuat kode semakin panjang.\

Diperlukan 1 file untuk menampung data konstan tersebut yang dapat dipanggil ketika diperlukan.

Penamaan file pada constant adalah :  constant.tsx