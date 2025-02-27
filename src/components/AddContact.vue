<template>
  <div class="form-container">
    <h2>Add Contact</h2>
    <form @submit.prevent="submitForm">
      <label>id:</label>
      <input type="text" v-model="contact.id" required />

      <label>Name:</label>
      <input type="text" v-model="contact.name" required />

      <label>Email:</label>
      <input type="email" v-model="contact.email" required />

      <label>Designation:</label>
      <input type="text" v-model="contact.designation" required />

      <label>Contact No:</label>
      <input type="text" v-model="contact.contact_no" required />

      <button type="submit">Add Contact</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "AddContact",
  data() {
    return {
      contact: {
        id: "",
        name: "",
        email: "",
        designation: "",
        contact_no: "",
      },
    };
  },
  methods: {
  async submitForm() {
    try {
      // Récupérer le token CSRF
      await axios.get("http://127.0.0.1:8000/sanctum/csrf-cookie");

      // Envoyer la requête avec le token
      const response = await axios.post("http://127.0.0.1:8000/contacts", this.contact);
      console.log(response.data);
      alert("Contact added successfully!");

      // Réinitialiser le formulaire
      this.contact = { id: "", name: "", email: "", designation: "", contact_no: "" };
    } catch (error) {
      console.error("Error adding contact:", error.response?.data || error.message);
    }
  },
}

};
</script>

<style scoped>
.form-container {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  background: linear-gradient(135deg, #b80202, #670000);
  color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

h2 {
  text-align: center;
}

label {
  display: block;
  margin-top: 10px;
}

input {
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border-radius: 5px;
  border: none;
}

button {
  width: 100%;
  padding: 10px;
  margin-top: 15px;
  background-color: white;
  color: #b80202;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #f7e4e4;
}
</style>
