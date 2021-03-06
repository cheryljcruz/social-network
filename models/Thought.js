const { Schema, model } = require('mongoose');
const moment = require('moment');

const ReactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      trim: true,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) =>
        moment(createdAtVal).format('MMM Do YYYY, h:mm:ss a'),
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const ThoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (createdAtVal) =>
      moment(createdAtVal).format('MMM Do YYYY, h:mm:ss a '),
  },
  username: {
    type: String,
    required: true,
  },
  reactions: [ReactionSchema],
},
{
  toJSON: {
    virtuals: true,
    getters: true,
  },
  id: false,
}
);

ThoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

// create thought model using schema
const Thought = model('Thought', ThoughtSchema);

// export thought model
module.exports = Thought;
