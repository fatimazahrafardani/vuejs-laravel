
import AddContact from "../components/AddContact.vue";
import ContactList from "../components/ContactList.vue";
import EditContact from "@/components/EditContact.vue";
import { createRouter, createWebHistory } from "vue-router"



const routes = [
    {
      name: "AddContact",
      path: "/add",
      component: AddContact,
    },
    {
      name: "ContactList",
      path: "/ContactList",
      component: ContactList,
    },
    {
      name: "EditContact",
      path: "/EditContact/edit/:id",
      component: EditContact,
    },
    {
      path: "/",
      redirect: "/ContactList", // Redirect to a default route
    },
  ];
  
 const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router;