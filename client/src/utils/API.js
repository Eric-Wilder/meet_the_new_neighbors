import axios from "axios";

export default {
  // Gets all Profiles
  getProfiles: function() {
    return axios.get("/api/profiles");
  },
  // Gets the Profiles with the given id
  getProfile: function(id) {
    return axios.get("/api/profiles/" + id);
  },
  // Deletes the Profiles with the given id
  deleteProfile: function(id) {
    return axios.delete("/api/profiles/" + id);
  },
  // Saves a Profiles to the database
  saveProfile: function(profileData) {
    return axios.post("/api/profiles", profileData);
  }
};
