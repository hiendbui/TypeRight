const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const Test = require('../../models/Test')
const validateTestInput = require('../../validation/tests');

router.get('/', (req, res) => {
    Test.find()
        .sort({ updatedAt: -1 })
        .limit(10)
        .then(tests => res.json(tests))
        .catch(err => res.status(404).json({ notestsfound: 'No tests found' }));
});

router.get('/user/:user_id', (req, res) => {
    Test.find({uploader: req.params.user_id})
        .then(tests => res.json(tests))
        .catch(err =>
            res.status(404).json({ notestsfound: 'No tests found from that user' }
        )
    );
});

router.get('/random', (req, res) => {
    Test.aggregate([{ $sample: {size: 1}}])
        .then(test => res.json(test))
        .catch(err =>
            res.status(404).json({ notestsfound: 'No random sample test found' })
        );
});

router.get('/:id', (req, res) => {
    Test.findById(req.params.id)
        .then(test => res.json(test))
        .catch(err =>
            res.status(404).json({ notestsfound: 'No test found with that ID' })
        );
});

router.post('/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
      const { errors, isValid } = validateTestInput(req.body);
  
      if (!isValid) {
        return res.status(400).json(errors);
      }
  
      const newTest = new Test({
        title: req.body.title,
        content: req.body.content,
        uploader: req.user.id
      });
  
      newTest.save().then(test => res.json(test));
    }
);

router.delete('/:id',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {

        Test.deleteOne({_id: req.params.id})
            .then(() => {
                res.json({ id: req.params.id, message: 'Deleted!' });
            })
            .catch(error => {
                res.status(400).json({ error });
            });
});

router.patch('/:id',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const { errors, isValid } = validateTestInput(req.body);
    
        if (!isValid) {
            return res.status(400).json(errors);
        }

        Test.findById(req.params.id)
            .then(test => {
                test.title = req.body.title;
                test.content = req.body.content;
                test.save().then(test => res.json(test));
            })
            .catch(err =>
                res.status(404).json({ notestsfound: 'No test found with that ID' })
            )
});

module.exports = router;