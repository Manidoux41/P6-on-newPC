import { Router } from 'express';
import passport from 'passport';

const userRouter = Router();

// Authentication

userRouter.post('/signup', passport.authenticate('signup', { session: false }), 
    async (req,res,next) =>{
        res.json({
            message: 'Signup Ok',
            user: req.user
        })
    }
)

userRouter.post('/login', (req,res,next) => {
    passport.authenticate('login', async (err,user) => {
        try {
            if(err || !user) {
                const error = new Error('Une erreur est survenue.')
                return next(error)
            }
            req.login(user, { session: false}, async error => {
                if(error) return next(error)
                const body = {id: user._id, email: user.email}
                res.json(body)
            })
        } catch (error) {
            return next(error)
        }
    })(req,res,next)
})




export default userRouter;