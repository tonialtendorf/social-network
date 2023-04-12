const { Schema, model } = require('mongoose');

// Schema to create User model

//instructions: DELETE THIS: Create a virtual called friendCount that retrieves the length of the user's friends array field on query.

const userSchema = new Schema(
  {
    username: {String, required: true, unique, trimmed} ,
    email: {String, required: true, unique, 'mongoose matching validation'},
    thoughts: {'Array of _id values referencing the Thought model'},
    friends: {'Array of _id values referencing the User model (self-reference)'},
    videos: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Video',
      },
    ],
  },
  {
    // Mongoose supports two Schema options to transform Objects after querying MongoDb: toJSON and toObject.
    // Here we are indicating that we want virtuals to be included with our response, overriding the default behavior
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Create a virtual property `fullName` that gets and sets the user's full name
userSchema
  .virtual('fullName')
  // Getter
  .get(function () {
    return `${this.first} ${this.last}`;
  })
  // Setter to set the first and last name
  .set(function (v) {
    const first = v.split(' ')[0];
    const last = v.split(' ')[1];
    this.set({ first, last });
  });

// Initialize our User model
const User = model('user', userSchema);

module.exports = User;