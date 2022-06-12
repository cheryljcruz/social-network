const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/],
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought',
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
  },
  {
    // virtuals
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);
// total count of comments & replies
UserSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});

// create User model using userSchema
const User = model('User', UserSchema);

//export the user model
module.exports = User;
