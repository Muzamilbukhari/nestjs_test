import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

    getAllUsers() {
        return 'You are seeing all the users';
    }
    
    createUser(body: any) {
        return JSON.stringify(body);
    }
    
    getOneUser(id: string) {
        return 'You are seeing a user with id ' + id;
    }
}
