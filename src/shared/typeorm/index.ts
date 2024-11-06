import { DataSource } from 'typeorm';
import { CreateRolesTable1730932314556 } from './migrations/1730932314556-CreateRolesTable';

export const dataSource = new DataSource({
  type: 'sqlite',
  database: './db.sqlite',
  entities: [],
  migrations: [CreateRolesTable1730932314556],
});
