import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {UserEntity} from "../models/user.entity";
import {Repository} from "typeorm";
import {UserI} from "../models/user.interface";
import {from, Observable} from "rxjs";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private userRepository: Repository<UserEntity>
    ) {
    }

    add(user: UserI): Observable<UserI> {
        return from(this.userRepository.save(user));
    }

    findAll():Observable<UserI[]>{
        return from(this.userRepository.find())
    }
}
