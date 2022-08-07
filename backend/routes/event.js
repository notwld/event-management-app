const router = require('express').Router();
const Event = require('../models/event.model');
const User = require('../models/user.model');


router.get('/',  async (req, res) => {
    const events = await Event.find();
    res.send(events);
}
);

router.get('/:id',  async (req, res) => {
    const event = await Event.findById(req.params.id);
    res.send(event);
}
);

router.post('/create',  async (req, res) => {
    const event = new Event(req.body);
    await event.save();
    res.send(event);
}
);

router.put('/:id',  async (req, res) => {
    const event = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(event);
}
);

router.delete('/:id',async (req, res) => {
    await Event.findByIdAndDelete(req.params.id);
    res.send({ message: 'Event deleted successfully' });
}
);

module.exports = router;