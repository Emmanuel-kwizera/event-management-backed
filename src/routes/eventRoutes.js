const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');

router.post('/create', eventController.createEvent);
router.get('/all', eventController.getAllEvents);
router.get('/:title', eventController.getEventByName)
router.put('/:id', eventController.updateEvent)
router.delete("/:id", eventController.deleteEvent)
module.exports = router;