import express, { Express } from 'express';
import './config/database';
import dotenv from 'dotenv';
dotenv.config();
import { logger } from './logger/logger';
import { ErrorHandler } from './middleware';
import './config/passport.jwt';
import './config/passport.googleOuth';
import routes from './routes/index';
import passport from 'passport';
import cors from 'cors';
import session from 'express-session';
import { IsAuthenticated } from './config/passport.googleOuth';

const port = process.env.PORT_SERVER || 8000;

class AppServer {
    constructor() {
        const app: Express = express();
        app.use(express.urlencoded({ extended: true }));
        app.use('/', express.static('./PDF'));
        app.use(express.json());
        app.use(
            cors({
                optionsSuccessStatus: 200,
                credentials: true,
            }),
        );
        app.use(
            session({
                secret: process.env.SESSION_SECERET,
                resave: false,
                saveUninitialized: true,
            }),
        );
        app.use(passport.initialize());
        app.use(passport.session());
        app.use(IsAuthenticated);
        app.use('/api/v1', routes);
        app.use(ErrorHandler);
        app.listen(port, () => {
            logger.info(`🚀 Server is listening on Port:- ${port}`);
        });
    }
}
new AppServer();
