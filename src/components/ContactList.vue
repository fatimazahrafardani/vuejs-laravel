<template>
  <div class="table-container">
    <table class="contact-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Designation</th>
          <th>Contact No</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="contact in contacts" :key="contact.id">
          <td>{{ contact.id }}</td>
          <td>{{ contact.name }}</td>
          <td>{{ contact.email }}</td>
          <td>{{ contact.designation }}</td>
          <td>{{ contact.contact_no }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ContactList",
  data() {
    return {
      contacts: [],
    };
  },
  created() {
    this.getcontacts();
  },
  methods: {
    async getcontacts() {
      let url = "http://127.0.0.1:8000/contacts";
      await axios
        .get(url)
        .then((response) => {
          this.contacts = response.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
/* Center the table on the page */
.table-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
}

/* Table styling */
.contact-table {
  width: 80%;
  max-width: 1000px;
  border-collapse: collapse;
  background-color: #ffffff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  font-family: Arial, sans-serif;
  text-align: left;
  font-size: 16px;
}

/* Gradient header */
thead {
  background: linear-gradient(135deg, #b80202, #670000);
  color: white;
}

th,
td {
  padding: 15px 20px;
  border-bottom: 1px solid #e0e0e0;
}

th {
  font-weight: bold;
  text-transform: uppercase;
}

/* Row hover effect */
tbody tr:hover {
  background-color: #f7e4e4;
}

/* Alternate row colors */
tbody tr:nth-child(even) {
  background-color: #f9f3f3;
}
</style>
