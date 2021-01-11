const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const Attempt = require('../../models/Attempt')

router.post('/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        
        const newAttempt = new Attempt({
            time: req.body.time,
            wpm: parseInt(Math.ceil(req.body.wpm)),
            typos: req.body.typos,
            user: req.user.id,
            test: req.body.test,
            accuracy: req.body.accuracy,
            placeholder: req.body.placeholder
        });

        newAttempt.save()
            .then(attempt => res.json(attempt))
            .catch(err => res.status(400).json({cannotSave: 'Unable to save test attempt'}));
    }
);
//on the frontend: if wpm is 0, then do not make post request

router.get('/users/:user', (req, res) => {
    Attempt.find({ user : req.params.user })
    .then(attempts => {
        const newObj = {}
        attempts.forEach((attempt) => newObj[attempt.id] = attempt)
        return res.json(newObj)
    })
        .catch(err => res.status(404).json({ usernotfound: 'No such user' }));
    })
    
router.get('/tests/:test', (req, res) => {
    Attempt.find({ test : req.params.test })
    .sort({ wpm: -1 })
    .limit(5)
    .then(attempts => {
        const newObj = {}
        attempts.forEach((attempt) => newObj[attempt.id] = attempt)
        return res.json(newObj)
    })
    .catch(err => res.status(404).json({ testnotfound: 'No such test' }));
})

router.get('/:user/:test', (req, res) => {
    Attempt.find( { $and: [ { user : req.params.user }, { test : req.params.test } ]})
        .then(attempts => {
        const newObj = {}
        attempts.forEach((attempt) => newObj[attempt.id] = attempt)
        return res.json(newObj)
    })
        .catch(err => res.status(404).json({ errs: 'No such user or test' }));
})
module.exports = router;