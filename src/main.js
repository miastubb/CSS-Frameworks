import "./style.css";
import { createHeader } from "./components/header.js";
import miaAndPippin from "./pics/mia-and-pippin.jpg";

const headerContainer = document.querySelector("#header");

const loggedInPages = ["/profile/", "/feed/"];

const isLoggedInPage = loggedInPages.some((page) =>
  window.location.pathname.includes(page),
);

if (headerContainer) {
  headerContainer.innerHTML = createHeader(isLoggedInPage);
}

const profileImage = document.querySelector("#profile-image");

if (profileImage) {
  profileImage.src = miaAndPippin;
}
