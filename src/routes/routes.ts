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
      {
        path: "/buildhourse",
        name: "buildhourse",
        component: () => import("@/pages/BuildHourse.vue"),
      },
      {
        path: "/furniture",
        name: "furniture",
        component: () => import("@/pages/Furniture.vue"),
      },
    ],
  },
];
