import About from "./about";
import Resume from "./resume";
import PageNotFound from "./pagenotfound";

export {
  About,
  Resume,
  PageNotFound,
};

export enum SelectedPage {
  About = "/reactts/about",
  Resume = "/reactts/resume",
  PageNotFound = "404",
};