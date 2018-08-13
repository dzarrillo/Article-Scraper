const mongoose = require("mongoose");

const Schema = mongoose.Schema;
// Todo: I think I might have to add a unique noteid for this collection
const NoteSchema = new Schema({
  title: {
  	type: String
  }, 
  body: {
  	type: String
  }
});

const Note = mongoose.model("Note", NoteSchema);

module.exports = Note;
