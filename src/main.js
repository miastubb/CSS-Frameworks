import "./style.css";
import { createHeader } from "./components/header.js";

const headerContainer = document.querySelector("#header");

if (headerContainer) {
  headerContainer.innerHTML = createHeader();
}
