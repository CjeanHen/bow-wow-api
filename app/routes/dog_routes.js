const express = require('express')
const passport = require('passport')

const Dog = require('../models/dog')

const customErrors = require('../../lib/custom_errors')

const handle404 = customErrors.handle404

const requireOwnership = customErrors.requireOwnership

const removeBlanks = require('../../lib/remove_blank_fields')
const requireToken = passport.authenticate('bearer', { session: false })

const router = express.Router()

// INDEX
// GET /dogs
router.get('/dogs', requireToken, (req, res, next) => {
  Dog.find()
    .then(dogs => {
      return dogs.map(dog => dog.toObject())
    })
    .then(dogs => res.status(200).json({ dogs: dogs }))
    .catch(next)
})

// SHOW
// GET /dogs/5a7db6c74d55bc51bdf39793
router.get('/dogs/:id', requireToken, (req, res, next) => {
  Dog.findById(req.params.id)
    .then(handle404)
    .then(dog => res.status(200).json({ dog: dog.toObject() }))
    .catch(next)
})

// CREATE
// POST /dogs
router.post('/dogs', requireToken, (req, res, next) => {
  req.body.dog.owner = req.user.id

  Dog.create(req.body.dog)
    .then(dog => {
      res.status(201).json({ dog: dog })
    })
    .catch(next)
})

// UPDATE
// PATCH /examples/5a7db6c74d55bc51bdf39793
router.patch('/dogs/:id', requireToken, removeBlanks, (req, res, next) => {
  delete req.body.dog.owner

  Dog.findById(req.params.id)
    .then(handle404)
    .then(dog => {
      requireOwnership(req, dog)

      return dog.updateOne(req.body.dog)
    })
    .then(() => res.sendStatus(204))
    .catch(next)
})

// DESTROY
// DELETE /examples/5a7db6c74d55bc51bdf39793
router.delete('/dogs/:id', requireToken, (req, res, next) => {
  Dog.findById(req.params.id)
    .then(handle404)
    .then(dog => {
      requireOwnership(req, dog)
      dog.deleteOne()
    })
    .then(() => res.sendStatus(204))
    .catch(next)
})

module.exports = router
