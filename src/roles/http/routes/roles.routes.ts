import { CreateRoleController } from '@roles/useCases/createRole/CreateRoleController';
import { DeleteRoleController } from '@roles/useCases/deleteRole/DeleteRoleController';
import { ListRolesController } from '@roles/useCases/listRoles/ListRolesController';
import { ShowRoleController } from '@roles/useCases/showRole/ShowRoleController';
import { UpdateRoleController } from '@roles/useCases/updateRole/UpdateRoleController';
import { isAuthenticated } from '@shared/http/middlewares/isAuthenticated';
import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import { container } from 'tsyringe';

const rolesRouter = Router();
const createRolesController = container.resolve(CreateRoleController);
const listRolesController = container.resolve(ListRolesController);
const showRolesController = container.resolve(ShowRoleController);
const updateRolesController = container.resolve(UpdateRoleController);
const deleteRolesController = container.resolve(DeleteRoleController);

//middleware de autenticação:
rolesRouter.use(isAuthenticated);

rolesRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
    }),
  }),
  (request, response) => {
    return createRolesController.handle(request, response);
  },
);

rolesRouter.get(
  '/',
  celebrate({
    [Segments.QUERY]: Joi.object().keys({
      page: Joi.number(),
      limit: Joi.number(),
    }),
  }),
  (request, response) => {
    return listRolesController.handle(request, response);
  },
);

rolesRouter.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.string().uuid().required(),
    }),
  }),
  (request, response) => {
    return showRolesController.handle(request, response);
  },
);

rolesRouter.put(
  '/:id',
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.string().uuid().required(),
    }),
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
    }),
  }),
  (request, response) => {
    return updateRolesController.handle(request, response);
  },
);

rolesRouter.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.string().uuid().required(),
    }),
  }),
  (request, response) => {
    return deleteRolesController.handle(request, response);
  },
);

export { rolesRouter };
