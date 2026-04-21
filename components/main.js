import html from "html-literal";
import * as views from "../views";

export default (state) => html`
  <main>
    ${views[state.view.toLowerCase()] ? views[state.view.toLowerCase()](state) : views.main(state)}
  </main>
`;
