const express = require('express');
const router = express.Router();
const ticketController = require('../controllers/ticketController');


router.post('/buy-ticket', ticketController.createTicket);
router.get('/all', ticketController.getAllTickets);
router.get('/:id', ticketController.getTicketsByUserId);
router.put('/:id', ticketController.updateTicket);
router.delete('/:id', ticketController.deleteTicket);

module.exports = router;