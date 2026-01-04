import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { UserRequestPayload } from './contracts/user.model';

@Injectable()
export class UserService {
      constructor(
            @InjectRepository(User)
            private readonly userRepo: Repository<User>,
      ) { }

      async create(payload: UserRequestPayload) {
            const passwordHash = await bcrypt.hash(payload.password, 10);

            const user = this.userRepo.create({
                  name: payload.name,
                  username: payload.username,
                  email: payload.email,
                  passwordHash: passwordHash,
                  roles: payload.roles
            });

            return this.userRepo.save(user);
      }
}