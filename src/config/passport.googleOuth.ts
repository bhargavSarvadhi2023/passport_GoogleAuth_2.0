import passport from 'passport';
import dotenv from 'dotenv';
dotenv.config();
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { db } from '../model/index';

passport.serializeUser((user: any, done) => {
    done(null, user);
});

passport.deserializeUser((user: any, done) => {
    done(null, user);
});

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: process.env.GOOGLE_CALLBACK_URL,
        },
        async (accessToken, refreshToken, profile, done) => {
            try {
                console.log(accessToken);
                const checkExitsUser = await db.googleUserModel.findOne({
                    where: { google_id: profile.id },
                });
                if (!checkExitsUser) {
                    const createUser = await db.googleUserModel.create({
                        google_id: profile.id,
                        display_name: profile.displayName,
                        given_name: profile.name.givenName,
                        family_name: profile.name.familyName,
                        email: profile.emails
                            ? profile.emails[0].value
                            : undefined,
                        profile_picture_url: profile.photos[0].value,
                    });
                }
                const user = {
                    id: profile.id,
                    displayName: profile.displayName,
                    email: profile.emails ? profile.emails[0].value : undefined,
                };
                return done(null, user);
            } catch (error) {
                return done(null, error);
            }
        },
    ),
);

export const IsAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        console.log('fire auth');
        return next();
    }
};
