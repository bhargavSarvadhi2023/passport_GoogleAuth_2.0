import { loginValidation } from '../../validation/basic.Validation';
import { authController } from '../../controller/index';
import BaseRoute from '../base.routes';
import { END_POINTS } from '../../constant/index';
import passport from 'passport';
import { IsAuthenticated } from '../../config/passport.googleOuth';

class AuthRoutes extends BaseRoute {
    async initializeRoutes() {
        this.router.post(
            END_POINTS.LOGIN,
            loginValidation,
            authController.login,
        );
        this.router.get(
            END_POINTS.AUTH_GOOGLE,
            passport.authenticate('google', {
                scope: ['email', 'profile'],
            }),
        );
        this.router.get(
            END_POINTS.AUTH_GOOGLE_CALLBACK,
            passport.authenticate('google', {
                successRedirect:
                    'http://192.168.2.68:5000/api/v1/auth/auth/google/success',
                failureRedirect: '/auth/google/failure',
            }),
        );
        this.router.get(
            END_POINTS.AUTH_GOOGLE_SUCESS,
            authController.googleAuthSucess,
        );
        this.router.get(
            '/user/check',
            IsAuthenticated,
            authController.checkUser,
        );
    }
}
export const authRoutes = new AuthRoutes().router;
