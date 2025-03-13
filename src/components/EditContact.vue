
<template>
    <div class="form-container">
      <h2>Edit Contact</h2>
  
      <div v-if="errors.length" class="alert">
        <ul>
          <li v-for="(error, index) in errors" :key="index">
            {{ error }}
          </li>
        </ul>
      </div>
  
      <form @submit.prevent="updateContact">
        <label>Name:</label>
        <input type="text" v-model="contact.name" required />
  
        <label>Email:</label>
        <input type="email" v-model="contact.email" required />
  
        <label>Designation:</label>
        <input type="text" v-model="contact.designation" required />
  
        <label>Contact No:</label>
        <input type="text" v-model="contact.contact_no" required />
  
        <button type="submit">Update Contact</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    name: "EditContact",
    data() {
      return {
        contact: {
          name: "",
          email: "",
          designation: "",
          contact_no: ""
        },
        errors: []
      };
    },
    created() {
      this.fetchContact(); // Fetch contact when component loads
    },
    methods: {
      async fetchContact() {
        try {
          const response = await axios.get(`http://127.0.0.1:8000/api/contact/${this.$route.params.id}`);
          this.contact = response.data.data;
          console.log(this.contact)
        } catch (error) {
          console.error("Error fetching contact:", error.response?.data || error.message);
        }
      },
      async updateContact() {
        try {
          const response =   await axios.post(`http://127.0.0.1:8000/api/contact/${this.$route.params.id}`, this.contact);
          alert("Contact updated successfully!");
          console.log(response.data);
          this.$router.push({ name: "ContactList" });
          this.errors = [];
          } catch (error) {
            console.error("Error updating contact:", error.response?.data || error.message);
            this.errors = error.response?.data?.errors || [];
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
  
  .alert {
    background-color: #ffcccc;
    color: #900;
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 10px;
  }
  </style>
  