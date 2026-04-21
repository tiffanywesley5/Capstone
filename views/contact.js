import html from "html-literal";

export default (state) => html`
  <section class="contact-page">
    <h1>${state.header}</h1>
    <p>${state.content}</p>

    <form>
      <label for="name">Name</label>
      <input type="text" id="name" name="name" required>

      <label for="email">Email</label>
      <input type="email" id="email" name="email" required>

      <label for="message">What phase are you in?</label>
      <textarea id="message" name="message" rows="4"></textarea>

      <button type="submit" class="cta-button">Send</button>
    </form>
  </section>
`;
