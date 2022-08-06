const router = require('express').Router();
const User = require('../models/user.model');


router.post('/login', async (req, res,next) => {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
        return res.status(401).send('Unauthorized');
    }
    else if (user.password !== req.body.password) {
        return res.status(401).send('Unauthorized');
    }
    else {
        req.session.user = user._id.toString()
        res.send({user:user,message:'Logged in'});
    }
    next();
}
);

router.post('/signup', async (req, res,next) => {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
        return res.status(400).send('User already exists');
    }
    else if (!req.body.email || !req.body.password) {
        return res.status(400).send('Bad Request');
    }
    else {
        const user = new User(req.body);
        await user.save();
        res.send(user);
    }
    next();
}
);

router.get('/logout', async (req, res,next) => {
    req.session.destroy();
    res.send({ message: 'Logout successful' });
    next();
}
);

// router.get('/:id', async (req, res,next) => {
//     const user = await User.findById({_id:req.params.id});
//     if (!user) {
//         return res.status(404).send('User not found');
//     }
//     else {
//         res.send(user);
//     }
// });

module.exports = router;
