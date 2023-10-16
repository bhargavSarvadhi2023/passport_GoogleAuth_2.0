import { Sequelize } from 'sequelize';
import { sequelize } from '../config/database';
import { userModel } from './user.model';
import { googleUserModel } from './google.user.model';

export const db = {
    Sequelize,
    sequelize,
    userModel,
    googleUserModel,
};
db.sequelize.sync();
