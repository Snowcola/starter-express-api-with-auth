import { Router } from 'express';
import bodyParser from 'body-parser';
import User from '../models/user';

const router = Router();

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

// GETS A SINGLE USER FROM THE DATABASE
router.get('/:id', function(req, res) {
  User.findById(req.params.id, { password: 0 }, function(err, user) {
    if (err)
      return res.status(500).send('There was a problem finding the user.');
    if (!user) return res.status(404).send('No user found.');
    res.status(200).send(user);
  });
});

export default router;
