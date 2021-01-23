import axios from "axios";

export default {
  // Gets all families
  getFamilies: function() {
    return axios.get("/api/families");
  },
  // Gets the family with the given id
  getFamily: function(id) {
    return axios.get("/api/families/" + id);
  },
  // Saves a family profile to the database
  saveFamily: function(familyData) {
    return axios.post("/api/families", familyData);
  },

updateFamily: function(id, data) {
  return axios.put("/api/families/" + id, data);
}
};
