import { DataSource } from 'typeorm';
import { CreateRolesTable1730932314556 } from './migrations/1730932314556-CreateRolesTable';
import { Role } from '@roles/entities/Role';

export const dataSource = new DataSource({
  type: 'sqlite',
  database: './db.sqlite',
  entities: [Role],
  migrations: [CreateRolesTable1730932314556],
});
