const list=[

    {
        name:"Christina Woods",
        email:'ChristinaWoods@company.com',
        Status:'Active',
        Role:'User',
        LastLogin:'2 Days ago',
        Permission:'Invalid',
        Others:'...'
    },

    {
        name:'Joshea Fox',
        email:'JoshyaFox@company.com',
        Status:'Inactive',
        Role:'Admin',
        LastLogin:"3 Days ago",
        Permission:'Valid',
        Others:'...'
    },

    {
        name:'Katherine White',
        email:'KatherineWhite@company.com',
        Status:'Active',
        Role:'Admin',
        LastLogin:'3 Days ago',
        Permission:'Invalid',
        Others:'...'
    },


    {
        name:'Mary Carlson',
        email:'MaryCarlson@company.com',
        Status:'Inactive',
        Role:'Admin',
        LastLogin:'1 Day ago',
        Permission:'Valid',
        Others:'...'
    },

    {
        name:'Nicole  Larson',
        email:'Nicolelarsonn@company.com',
        Status:'Active',
        Role:'User',
        LastLogin:'1 Day ago',
        Permission:'Valid',
        Others:'...'
    },

    {
        name:'Raymond Pattersonn',
        email:'RaymondPatter@company.com',
        Status:'Inactive',
        Role:'User',
        LastLogin:'2 Days ago',
        Permission:'Valid',
        Others:'...'
    },

    {
        name:'Roger Carpenter',
        email:'RogerCarpenter@company.com',
        Status:'Active',
        Role:'User',
        LastLogin:'2 Days ago',
        Permission:'Valid',
        Others:'...'
    },    {
        name:"Christina Woods",
        email:'ChristinaWoods@company.com',
        Status:'Active',
        Role:'User',
        LastLogin:'2 Days ago',
        Permission:'Invalid',
        Others:'...'
    },

    {
        name:'Joshea Fox',
        email:'JoshyaFox@company.com',
        Status:'Inactive',
        Role:'Admin',
        LastLogin:"3 Days ago",
        Permission:'Valid',
        Others:'...'
    },

    {
        name:'Katherine White',
        email:'KatherineWhite@company.com',
        Status:'Active',
        Role:'Admin',
        LastLogin:'3 Days ago',
        Permission:'Invalid',
        Others:'...'
    },


    {
        name:'Mary Carlson',
        email:'MaryCarlson@company.com',
        Status:'Inactive',
        Role:'Admin',
        LastLogin:'1 Day ago',
        Permission:'Valid',
        Others:'...'
    },

    {
        name:'Nicole  Larson',
        email:'Nicolelarsonn@company.com',
        Status:'Active',
        Role:'User',
        LastLogin:'1 Day ago',
        Permission:'Valid',
        Others:'...'
    },

    {
        name:'Raymond Pattersonn',
        email:'RaymondPatter@company.com',
        Status:'Inactive',
        Role:'User',
        LastLogin:'2 Days ago',
        Permission:'Valid',
        Others:'...'
    },

    {
        name:'Roger Carpenter',
        email:'RogerCarpenter@company.com',
        Status:'Active',
        Role:'User',
        LastLogin:'2 Days ago',
        Permission:'Valid',
        Others:'...'
    },
    {
        name:"Christina Woods",
        email:'ChristinaWoods@company.com',
        Status:'Active',
        Role:'User',
        LastLogin:'2 Days ago',
        Permission:'Invalid',
        Others:'...'
    },

    {
        name:'Joshea Fox',
        email:'JoshyaFox@company.com',
        Status:'Inactive',
        Role:'Admin',
        LastLogin:"3 Days ago",
        Permission:'Valid',
        Others:'...'
    },

    {
        name:'Katherine White',
        email:'KatherineWhite@company.com',
        Status:'Active',
        Role:'Admin',
        LastLogin:'3 Days ago',
        Permission:'Invalid',
        Others:'...'
    },


    {
        name:'Mary Carlson',
        email:'MaryCarlson@company.com',
        Status:'Inactive',
        Role:'Admin',
        LastLogin:'1 Day ago',
        Permission:'Valid',
        Others:'...'
    },

    {
        name:'Nicole  Larson',
        email:'Nicolelarsonn@company.com',
        Status:'Active',
        Role:'User',
        LastLogin:'1 Day ago',
        Permission:'Valid',
        Others:'...'
    },

    {
        name:'Raymond Pattersonn',
        email:'RaymondPatter@company.com',
        Status:'Inactive',
        Role:'User',
        LastLogin:'2 Days ago',
        Permission:'Valid',
        Others:'...'
    },

    {
        name:'Roger Carpenter',
        email:'RogerCarpenter@company.com',
        Status:'Active',
        Role:'User',
        LastLogin:'2 Days ago',
        Permission:'Valid',
        Others:'...'
    },    {
        name:"Christina Woods",
        email:'ChristinaWoods@company.com',
        Status:'Active',
        Role:'User',
        LastLogin:'2 Days ago',
        Permission:'Invalid',
        Others:'...'
    },

    {
        name:'Joshea Fox',
        email:'JoshyaFox@company.com',
        Status:'Inactive',
        Role:'Admin',
        LastLogin:"3 Days ago",
        Permission:'Valid',
        Others:'...'
    },

    {
        name:'Katherine White',
        email:'KatherineWhite@company.com',
        Status:'Active',
        Role:'Admin',
        LastLogin:'3 Days ago',
        Permission:'Invalid',
        Others:'...'
    },


    {
        name:'Mary Carlson',
        email:'MaryCarlson@company.com',
        Status:'Inactive',
        Role:'Admin',
        LastLogin:'1 Day ago',
        Permission:'Valid',
        Others:'...'
    },

    {
        name:'Nicole  Larson',
        email:'Nicolelarsonn@company.com',
        Status:'Active',
        Role:'User',
        LastLogin:'1 Day ago',
        Permission:'Valid',
        Others:'...'
    },

    {
        name:'Raymond Pattersonn',
        email:'RaymondPatter@company.com',
        Status:'Inactive',
        Role:'User',
        LastLogin:'2 Days ago',
        Permission:'Valid',
        Others:'...'
    },

    {
        name:'Roger Carpenter',
        email:'RogerCarpenter@company.com',
        Status:'Active',
        Role:'User',
        LastLogin:'2 Days ago',
        Permission:'Valid',
        Others:'...'
    }
]








// let Tableheader=['Name','Email','Status','Role','Last login','Permission'];

// let flexContainer=document.querySelector('#flex-container');

// Tableheader.forEach(
//     header => {
//         let theader=document.createElement('div');
//         theader.innerText=header;
//         flexContainer.appendChild(theader);
//         console.log(heashow-auth-list
   
// )
// let table=document.querySelector('table')

console.log("Hey");

let authDropdown=document.querySelector('.show-auth-list');
console.log(authDropdown);


let authclickbutton=authDropdown.addEventListener('click',function(){
    if( authDropdown.id==='show-auth-list-block'){
       authDropdown.id='show-auth-list-display'
    }else{
        authDropdown.id='show-auth-list-block'
    }
})


// let authClick=authDropdown.addEventListener('click', function(){
//     console.log("function getting called");
//    if(document.getElementById('show-auth-list-block')===null){
//         document.querySelector('.show-auth-list').id='show-auth-list-block';
//         console.log("printing top one");
//         // document.querySelector('.show-auth-list').style.backgroundColor='#363A43';
//    }else{
//     console.log("printing top one");
//     document.querySelector('.show-auth-list').id='show-auth-list-display';
//     // document.querySelector('.show-auth-list').style.backgroundColor='rgb(161, 160, 161)';
// }
// })