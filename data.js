import bcrypt from 'bcryptjs';
export const data = {
    users: [
        {
            "name": "admin",
            "email": "admin@example.com",
            "password": bcrypt.hashSync("12345", 8),
            "isAdmin": true,
        },
        {
            "name": "user",
            "email": "user@example.com",
            "password": bcrypt.hashSync("12345", 8),
            "isAdmin": false,
        },
    ]
    ,
    product: [
        { 
            "name": "Trendies Black Dial",
            "brand": "fast track",
            "price": 10,
            "countInStock": 20,
            "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo vel modi eum ipsum quia nostrum quaerat quas quisquam assumenda. Inc_idunt",
            "category": "watch",
            "photo": "https://staticimg.titan.co.in/Fastrack/Catalog/38058PP01_1.jpg?pView=listing"
        },
        {   
            "name": "Trendis Dark Grey",
            "brand": "fast track",
            "price": 30,
            "countInStock": 20,
            "description": "Adipisicing elit. Explicabo vel modi eum ipsum quia nostrum quaerat quas quisquam assumenda. Inc_idunt",
            "category": "Watch",
            "photo": "https://staticimg.titan.co.in/Fastrack/Catalog/38058PP02_1.jpg?pView=listing"
        },
        {   
            "name": "Silicon Strap",
            "brand": "fast track",
            "price": 50,
            "countInStock": 20,
            "description": "Lorem ipsum dolor, sit amet consectetur psum quia nostrum quaerat quas quisquam assumenda. Inc_idunt",
            "category": "Watch",
            "photo": "https://staticimg.titan.co.in/Fastrack/Catalog/38057PP01_1.jpg?pView=listing"
        },
        {   
            "name": "Silicon Strap Black",
            "brand": "fast track",
            "price": 34,
            "countInStock": 30,
            "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo vel modi eum ipsum quia nostrum quaerat quas quisquam assumenda. Inc_idunt",
            "category": "Watch",
            "photo": "https://staticimg.titan.co.in/Fastrack/Catalog/38057PP03_1.jpg?pView=listing"
        },
        {   
            "name": "All Nighters Blue",
            "brand": "fast track",
            "price": 68,
            "countInStock": 30,
            "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo vel modi eum ipsum quia nostrum quaerat quas quisquam assumenda. Inc_idunt",
            "category": "Watch",
            "photo": "https://staticimg.titan.co.in/Fastrack/Catalog/3195AP02_1.jpg?pView=listing"
        },
        {   
            "name": "Fast Fit Watch",
            "brand": "fast track",
            "price": 53,
            "countInStock": 30,
            "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo vel modi eum ipsum quia nostrum quaerat quas quisquam assumenda. Inc_idunt",
            "category": "Watch",
            "photo": "https://staticimg.titan.co.in/Fastrack/Catalog/3224NL02_1.jpg?pView=listing"
        },
        ]
}