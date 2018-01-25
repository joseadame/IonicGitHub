import { Repository } from '../models/repository.interface';
import { USER_LIST } from '../mocks/user.mocks';

const repositoryList: Repository[] = [
    {
        name: 'Ionic 3 camera',
        description: 'This is a repository',
        owner: USER_LIST[0]
    },

    {
        name: 'Ionic 3 gps',
        description: 'This is a repository for gps',
        owner: USER_LIST[1]
    },
    {
        name: 'Ionic 3 Barometer',
        description: 'This is a repository',
        owner: USER_LIST[1]
    },
    {
        name: 'Ionic 3 Infrared',
        description: 'This is a repository',
        owner: USER_LIST[0]
    },

]

export const REPOSITORY_LIST = repositoryList;