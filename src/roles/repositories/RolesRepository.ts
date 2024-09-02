import { Role } from '@roles/entities/Role';

//Repository é uma classe responsável por realizar toda e qualquer manipulação dos dados na estrutura de dados.
//Este tipo de classe implementa métodos como: criar um registro, exibir um registro, apagar um registro, listar registros etc.

type CreateRoleDTO = {
  name: string;
};

export class RolesRepository {
  private roles: Role[] = [];

  constructor() {}

  create({ name }: CreateRoleDTO) {
    const role = new Role();

    Object.assign(role, {
      name,
      created_at: new Date(),
    });

    this.roles.push(role);
    return role;
  }
}
