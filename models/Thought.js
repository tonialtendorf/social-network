const { Schema, model } = require('mongoose');
const Response = require('./Response');

// Schema to create Post model
const thoughtSchema = new Schema(
  {
    thoughtText: {Strong, required: true, minLength: 1, maxLength: 280},
    createdAt: {
      type: Date,
      default: Date.now,
      //Use a getter method to format the timestamp on query
    },
    username: {String, required: true},
        //user that created this thought
    reactions: [Reaction],

//Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.


  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Create a virtual property `responses` that gets the amount of response per video
videoSchema
  .virtual('getResponses')
  // Getter
  .get(function () {
    return this.responses.length;
  });

// Initialize our Video model
const Video = model('video', videoSchema);

module.exports = Video;