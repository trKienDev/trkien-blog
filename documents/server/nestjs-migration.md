**NESTJS - Migration**

# Bước 1: tạo entity chuẩn
```typescript
@Entity('users')
export class User {
      @PrimaryGeneratedColumn('uuid')
      id: string;

      @Column()
      name: string;

      @Column({ unique: true })
      username: string;

      @Column({ unique: true })
      email: string;

      @Column()
      passwordHash: string;

      @Column('text', { array: true })
      roles: string[];
}
```

# Bước 2: Cấu hình chuẩn cho NestJS runtime (API chạy)
app.module.ts
```typescript
TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: 5432,
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,

      autoLoadEntities: true, // chỉ cho runtime
      synchronize: false,     // luôn false
});
```

- Đúng chuẩn NestJS
- Dễ maintain
- Không ảnh hưởng migration


# Bước 3: Cấu hình chuẩn cho Migration (QUAN TRỌNG)
```typescript
import 'reflect-metadata';
import { DataSource } from 'typeorm';
import path from 'path';

export const AppDataSource = new DataSource({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: 5432,
      username: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASS || 'password',
      database: process.env.DB_NAME || 'dbname',

      entities: [path.join(__dirname, '/modules/**/entities/*.entity.{ts,js}')],
      migrations: [path.join(__dirname, '/migrations/*.{ts,js}')],

      synchronize: false,
});
```

# Bước 3: Build rồi chạy CLI bằng JS
package.json
```typescript
{
      "scripts": {
            "build": "nest build",

            "migration:generate": "npm run build && npx typeorm -d dist/data-source.js migration:generate src/migrations/create-users",
            "migration:run": "npm run build && npx typeorm -d dist/data-source.js migration:run",
            "migration:revert": "npm run build && npx typeorm -d dist/data-source.js migration:revert"
      }
}
```

```bash
npm run build
```


# Bước 4: generate migration
```bash
npm run migration:generate
```

- ***src/migrations/create-users*** → tên migration
- ***-d src/data-source.ts*** → chỉ rõ DataSource

sau lệnh này sẽ thấy file: dist/migrations/1700000000000-create-users.ts / src/migrations/ ......

# Bước 5: run migration
```bash
npm run migration:run
```

==> **PostgreSQL** có bảng ***users*** → insert OK.
