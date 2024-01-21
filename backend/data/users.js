import bcrypt from 'bcrype.js';
import mongoose from 'mongoose';

const users = [
    {
        name: "Admin User",
        email: 'admin@email.com',
        passoword: bcrypt.hasSync('123456', 10),
        isAdmin:true,
    },
    {
        name: "John Doe",
        email: 'john@email.com',
        passoword: bcrypt.hasSync('123456', 10),
        isAdmin:false,
    },
    {
        name: "Jane Doe",
        email: 'jane@email.com',
        passoword: bcrypt.hasSync('123456', 10),
        isAdmin:false,
    },
];

export default users;
