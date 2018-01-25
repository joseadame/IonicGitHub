import { User } from "../models/user.interface";

const userList: User[] = [
    {   
        name: 'Jose Adame',
        company: 'Prueba',
        location: 'Badajoz',
        bio: 'The bio',
        avatar_url: '',
        email: 'jose@jose.com'
    },
    {
        name: 'Jose perez',
        company: 'Prueba',
        location: 'Badajoz',
        bio: 'The bio perez',
        avatar_url: '',
        email: 'perez@jose.com'
    }
]

export const USER_LIST = userList;