import passport from 'passport';
import { Strategy } from 'passport-local';

import UserModel from '../models/userModel.js';

import JWT from 'passport-jwt';

const { Strategy: JWTstrategy, ExtractJwt} = JWT

passport.use(
    'signup',
    new Strategy({
        usernameField : 'email',
        passwordField : 'password'
    },
    async (email, password, done) => {
        try {
            const user = await UserModel.create({ email, password })
            return done(null, user)
        } catch (error) {
            return done(error)
        }
    })
)

passport.use(
    'login',
    new Strategy({
        usernameField : 'email',
        passwordField : 'password'
    },
    async (email, password, done) => {
        try {
            const user = await UserModel.findOne({email})

            if (!user) {
                return done(null, false, { message: 'User not found'})
            }

            const validate = await user.isValidPassword(password);

            if(!validate) {
                return done(null, false, { message: 'Mot de passe/username incorrect'})
            }

            return done(null, user, { message: 'Connexion successfull !'})
        } catch (error) {
            return done(error)
        }
    })
)

passport.use(
    new JWTstrategy(
        {
            secretOrKey: process.env.SECRET_KEYWORD,
            jwtFromRequest: ExtractJwt.fromUrlQueryParameter('token')
        },
        async (token, done) => {
            try {
                return done(null, token.user)
            } catch (error) {
                done(error)
            }
        }
    )
)

export default passport;