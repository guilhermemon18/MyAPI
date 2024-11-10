import { rolesRouter } from '@roles/http/routes/roles.routes';
import { usersRouter } from '@users/http/user.routes';
import { Router } from 'express';

const routes = Router();

routes.get('/', (request, response) => {
  return response.status(200).json({
    message: 'Olá Dev!',
  });
});

routes.use('/roles', rolesRouter);
routes.use('/users', usersRouter);

export { routes };
