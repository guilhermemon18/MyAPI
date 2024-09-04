import { Role } from '@roles/entities/Role';

//Repository é uma classe responsável por realizar toda e qualquer manipulação dos dados na estrutura de dados.
//Este tipo de classe implementa métodos como: criar um registro, exibir um registro, apagar um registro, listar registros etc.

type CreateRoleDTO = {
  name: string;
};

export class RolesRepository {
  private roles: Role[];
  private static INSTANCE: RolesRepository;

  private constructor() {
    this.roles = [];
  }

  public static getInstance(): RolesRepository {
    if (!RolesRepository.INSTANCE) {
      RolesRepository.INSTANCE = new RolesRepository();
    }
    return RolesRepository.INSTANCE;
  }

  create({ name }: CreateRoleDTO): Role {
    const role = new Role();

    Object.assign(role, {
      name,
      created_at: new Date(),
    });

    this.roles.push(role);
    return role;
  }

  findAll(): Role[] {
    return this.roles;
  }

  findByName(name: string): Role | undefined {
    return this.roles.find(role => role.name === name);
  }
}
