import { checkPermission } from '../../middleware/index';
import BaseRoute from '../base.routes';
import { END_POINTS, ROLES } from '../../constant/index';

class UserRoutes extends BaseRoute {
    async initializeRoutes() {}
}
export const userRoutes = new UserRoutes().router;
