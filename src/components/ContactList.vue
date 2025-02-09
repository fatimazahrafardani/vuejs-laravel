<template>
  <div>
    <h1>{{ title }}</h1>
    <h1>lisssssssssst</h1>
    <table>
      <thead>
        <tr>
          <th class="croped">id </th>
          <th class="croped">name </th>
          <th class="croped">email</th>
          <th class="croped">design</th>
          <th class="croped">contact</th>
        </tr>
      </thead>
      <tbody v-for="contact in contacts" :key="contact.id">
        <tr>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "ContactList",
  data() {
    return {
      title: "Hello Vue!",
      contacts: [],
    };
  },
  created(){
   this.getcontacts();
  },
  methods: {
   async getcontacts() {
    let url = "http://127.0.0.1:8000/contacts";
    await axios.get(url).then(Response=>{
    this.contacts= Response.data;
    console.log(this.contacts);
    }).catch(error=>{
      console.log(error);
    })
      
    }
  },
  mounted() {
    console.log("Component mounted!");
  }
};
</script>

<style scoped>
h1 {
  color: #42b983;
}
</style>