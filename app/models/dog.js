const mongoose = require('mongoose')

const Schema = mongoose.Schema

const dogSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  breed: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  tricks: {
    type: [String]
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true,
  toObject: {
    transform: (_doc, dog) => {
      return dog
    }
  }
})

module.exports = mongoose.model('Dog', dogSchema)
