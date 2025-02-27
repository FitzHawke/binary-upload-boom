const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
  comment: {
    type: String,
    required: true,
  },

  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post',
  },

  commenter: {
    type: String,
    ref: 'User',
  },

  commenterId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Comment', CommentSchema);
