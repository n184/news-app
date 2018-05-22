var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new NoteSchema object
// This is similar to a Sequelize model
var FinNoteSchema = new Schema({
	pic: String,
  // `title` is of type String
  title: String,
  // `body` is of type String
  body: String
});

// This creates our model from the above schema, using mongoose's model method
var FinNote = mongoose.model("FinNote", FinNoteSchema);

// Export the Note model
module.exports = FinNote;