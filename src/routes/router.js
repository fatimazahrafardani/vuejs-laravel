
import AddContact from "../components/AddContact.vue";
import ContactList from "../components/ContactList.vue";
import { createRouter, createWebHistory } from "vue-router"


const routes =[
    { 
        name: "AddContact",
        path: "/add",
        component: AddContact,
    },
    {
        
        name: "ContactList",
        path: "/cantactlist",
        component :ContactList,
        
    }

]
 const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router;