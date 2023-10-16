export enum END_POINTS {
    AUTH = '/auth',
    ALL = '*',
    USER = '/',
    ADMIN = '/admin',
    GET_USERS = '/get-users',
    DELETE_USER = '/delete-user/:id',
    EDIT_USER = '/edit-user/:id',
    CRAETE_USER = '/create-user',
    LOGIN = '/login',
    AUTH_GOOGLE = '/auth/google',
    AUTH_GOOGLE_CALLBACK = '/auth/google/callback',
    AUTH_GOOGLE_SUCESS = '/auth/google/success',
}
