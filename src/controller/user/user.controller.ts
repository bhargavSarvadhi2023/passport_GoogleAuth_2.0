import { ApplicationController } from '../base.application.controller';
import { db } from '../../model/index';
import { DataTypes } from 'sequelize';
import { sequelize } from '../../config/database';
import { Otp } from '../../utils/interface';

class UserController extends ApplicationController {
    constructor() {
        super(db.userModel);
    }
}
export const userController = new UserController();
