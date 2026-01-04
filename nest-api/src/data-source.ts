import 'reflect-metadata';
import { DataSource } from 'typeorm';
import path from 'path';

export const AppDataSource = new DataSource({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'quanque123',
      database: 'trkienblog',
      entities: [path.join(__dirname, '/modules/**/entities/*.entity.{ts,js}')],
      migrations: [path.join(__dirname, '/migrations/*.{ts,js}')],
      synchronize: false, // luôn false
});