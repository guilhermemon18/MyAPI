import { Role } from '@roles/entities/Role';
import { DataSource } from 'typeorm';
import { CreateRolesTable1730932314556 } from './migrations/1730932314556-CreateRolesTable';
import { CreateUsersTable1657996796706 } from './migrations/1731132644694-CreateUsersTable';

export const dataSource = new DataSource({
  type: 'sqlite',
  database: './db.sqlite',
  entities: [Role],
  migrations: [CreateRolesTable1730932314556, CreateUsersTable1657996796706],
});
