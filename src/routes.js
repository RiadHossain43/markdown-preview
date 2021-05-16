import Index from "views/Index"
import Login from "views/auth/Login";

var routes = [
  {
    path: "/index",
    name: "UI/UX",
    icon: "ni ni-tv-2",
    component: Index,
    layout: "/admin",
  },
  {
    path: "/backend",
    name: "API",
    icon: "ni ni-vector",
    component: Index,
    layout: "/admin",
  },
  {
    path: "/deployment",
    name: "CI/CD",
    icon: "ni ni-spaceship",
    component: Index,
    layout: "/admin",
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25",
    component: Login,
    layout: "/auth",
    sideDeactivate:true
  },
];
export default routes;
