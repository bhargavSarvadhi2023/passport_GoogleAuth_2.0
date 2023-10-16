import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database';

export const googleUserModel = sequelize.define('GoogleAuthusers', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    google_id: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    display_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    family_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    given_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    profile_picture_url: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
});
