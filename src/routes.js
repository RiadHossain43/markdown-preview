import Index from "views/Index"
import Login from "views/auth/Login";
import Editor from "views/editor/Editor"
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
  {
    path: "/editor",
    name: "Editor",
    icon: "ni ni-key-25",
    component: Editor,
    layout: "/auth",
    sideDeactivate:true
  },
];
export default routes;
