import HomeView from '@/views/HomeView.vue';
import NotFoundView from '@/views/NotFoundView.vue';
import { createRouter, createWebHistory } from 'vue-router';
import CommissionsView from '@/views/CommissionsView.vue';
import CommissionsItemsView from '@/views/CommissionsItemsView.vue';
import DistributorsView from '@/views/DistributorsView.vue';
import appEndpoint from "@/config/appEndpoint.js";


const routes = [
    {
        path: appEndpoint.home,
        name: "home",
        component: HomeView
    },
    {
        path: appEndpoint.commission,
        name: "commission",
        component: CommissionsView
    },
    {
        path: '/commissions/:id',
        name: "commission-items",
        component: CommissionsItemsView,
        props: true
    },
    {
        path: appEndpoint.distributors,
        name: "distributors",
        component: DistributorsView
    },
    {
        path: appEndpoint.notFoundPage,
        name: "not-found",
        component: NotFoundView
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
