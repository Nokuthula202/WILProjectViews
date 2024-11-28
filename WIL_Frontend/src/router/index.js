import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/student_views/DashboardPage.vue";
import About from "../views/student_views/AboutPage.vue";
import Register from "../views/student_views/RegistrationPage.vue";
import Login from "../views/student_views/LoginPage.vue";
import Profile from "../views/student_views/StudentProfile.vue";
import TrackingPage from "../views/student_views/TrackingPage.vue"; // Update the path accordingly
const routes = [
    { path: "/", component: Home },
    { path: "/about", component: About },
    { path: "/register", component: Register },
    { path: "/login", component: Login },
    { path: "/profile", component: Profile },
    { path: "/tracking", component: TrackingPage }, // Add tracking page route
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
