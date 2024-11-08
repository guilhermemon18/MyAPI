import { RolesRepository } from '@roles/repositories/RolesRepository';
import { createRolesController } from '@roles/useCases/createRole';
import { listRolesController } from '@roles/useCases/listRoles';
import { showRolesController } from '@roles/useCases/showRole';
import { Router } from 'express';

const rolesRouter = Router();

rolesRouter.post('/', (request, response) => {
  return createRolesController.handle(request, response);
});

rolesRouter.get('/', (request, response) => {
  return listRolesController.handle(request, response); //status = 200 é padrao de 'sucess'
});

rolesRouter.get('/:id', (request, response) => {
  return showRolesController.handle(request, response);
});

export { rolesRouter };
