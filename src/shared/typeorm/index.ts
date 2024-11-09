import { Role } from '@roles/entities/Role';
import { User } from '@users/entities/User';
import { DataSource } from 'typeorm';
import { CreateRolesTable1730932314556 } from './migrations/1730932314556-CreateRolesTable';
import { CreateUsersTable1657996796706 } from './migrations/1731132644694-CreateUsersTable';
import { AddRoleIdToUsersTable1731134747477 } from './migrations/1731134747477-AddRoleIdToUsersTable';

export const dataSource = new DataSource({
  type: 'sqlite',
  database: './db.sqlite',
  entities: [Role, User],
  migrations: [
    CreateRolesTable1730932314556,
    CreateUsersTable1657996796706,
    AddRoleIdToUsersTable1731134747477,
  ],
});
