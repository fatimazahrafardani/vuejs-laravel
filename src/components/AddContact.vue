<template>
  <div class="form-container">
    <h2>Add Contact</h2>
    <div class="alert">
      <ul>
        <li v-for="(error, index) in errors" :key="index">
          {{ error }}

        </li>
      </ul>
    </div>
    <form @submit.prevent="submitForm">
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
        name: "",
        email: "",
        designation: "",
        contact_no: "",
        errors:[],
      },
    };
  },
  methods: {
  async submitForm() {
    try {

      const response = await axios.post("http://127.0.0.1:8000/api/contact", this.contact);
      console.log(response.data);
      alert("Contact added successfully!");

      // Réinitialiser le formulaire
      this.contact = {  name: "", email: "", designation: "", contact_no: "" };
    } catch (error) {
      console.error("Error adding contact:", error.response?.data || error.message);
    }
  },
  savecontact(){
    this.errors=[];
    if(!this.contact.name){
      this.errors.push('Name is required');
    }
    if(!this.contact.email){
      this.errors.push('Email is required');
    }
    if(!this.contact.designation){
      this.errors.push('Designation is required');
    }
    if(!this.contact.contact_no){
        this.errors.push('Contact Number is required');
    }

  }
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
