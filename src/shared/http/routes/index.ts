import { AppError } from '@shared/errors/AppError';
import { Router } from 'express';

const routes = Router();

routes.get('/', (request, response) => {
  throw new AppError('Acesso negado');
  return response.status(200).json({
    message: 'Olá Dev!',
  });
});

export { routes };
