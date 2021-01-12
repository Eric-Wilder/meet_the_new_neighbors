import axios from "axios";

export default {
  // Gets all books
  getFamilies: function() {
    return axios.get("/api/families");
  },
  // Gets the book with the given id
  getFamily: function(id) {
    return axios.get("/api/families/" + id);
  },
  // Deletes the book with the given id
  deleteFamily: function(id) {
    return axios.delete("/api/families/" + id);
  },
  // Saves a book to the database
  saveFamily: function(familyData) {
    return axios.post("/api/families", familyData);
  }
};
