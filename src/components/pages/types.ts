import Home from "./home";
import Register from "./register";
import PageNotFound from "./pagenotfound";

export {
  Home,
  Register,
  PageNotFound,
};

export enum SelectedPage {
  Home = "/reactts/home",
  Register = "/reactts/registration",
  PageNotFound = "404",
};