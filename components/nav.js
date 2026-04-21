import html from "html-literal";
import navItem from "./navitems";

export default (links) => html`
  <nav>
    <i class="fas fa-bars hamburger"></i>
    <ul class="hidden--mobile nav-links">
      ${links.map((link) => navItem(link)).join("")}
    </ul>
  </nav>
`;
