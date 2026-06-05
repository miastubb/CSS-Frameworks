import "./style.css";
import { createHeader } from "./components/header.js";
import miaAndPippin from "./pics/mia-and-pippin.jpg";

const headerContainer = document.querySelector("#header");

if (headerContainer) {
  headerContainer.innerHTML = createHeader();
}

const profileImage = document.querySelector("#profile-image");

if (profileImage) {
  profileImage.src = miaAndPippin;
}
