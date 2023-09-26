import Home from "./home";
import Register from "./register";
import Login from "./login";
import PageNotFound from "./pagenotfound";

export {
  Home,
  Register,
  Login,
  PageNotFound,
};

export enum SelectedPage {
  Home = "/Project-Website/home",
  Register = "/Project-Website/signup",
  Login = "/Project-Website/login",
  PageNotFound = "404",
};