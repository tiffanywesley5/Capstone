import html from "html-literal";

export default (state) => html`
  <section class="about-page">
    <h1>${state.header}</h1>
    <p>${state.content}</p>

    <h2>Why Phase.ai exists</h2>
    <p>Most beauty founders under 250K in revenue are making critical business decisions without structured financial intelligence. Phase.ai is the readiness layer, the tool you use before making decisions that will either build the foundation for real growth or quietly break the business.</p>
  </section>
`;
