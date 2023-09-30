export const routes = [
  {
    path: "/",
    name: "layout",
    component: () => import("@/layout/index.vue"),
    children: [
      {
        path: "/",
        name: "introduction",
        component: () => import("@/pages/Introduction.vue"),
      },
      {
        path: "/crafttable",
        name: "crafttable",
        component: () => import("@/pages/CraftTable.vue"),
      },
      {
        path: "/modinfo",
        name: "modinfo",
        component: () => import("@/pages/ModInfo.vue"),
      },
    ],
  },
];
