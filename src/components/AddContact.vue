<template>
  <div>
    <h1>{{ title }}</h1>
    <h1>addddd</h1>
  </div>
</template>

<script>
export default {
  name: "AddContact",
  data() {
    return {
      title: "Hello Vue!",
    };
  },
  methods: {
    myMethod() {
      console.log("Method executed!");
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