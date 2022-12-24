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


export default userRouter;