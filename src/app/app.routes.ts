import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "",
    loadComponent: () => import("./components/map/map").then((m) => m.Map),
  },
];
