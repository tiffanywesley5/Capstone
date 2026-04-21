import html from "html-literal";

export default (state) => html`
  <section id="hero">
    <h1>${state.header}</h1>
    <p>${state.content}</p>
    <a href="/about" data-navigo class="cta-button">Start Free Readiness Assessment</a>
  </section>

  <section id="weather-widget">
    <h2>Your customers' climate today</h2>
    <p class="weather-hint">Beauty trends shift with the weather. Here is what your target market is experiencing right now in St. Louis.</p>
    <div id="weather">Loading weather...</div>
  </section>

  <section id="features">
    <h2>What Phase.ai does for you</h2>
    <div class="card-grid">
      <div class="card">
        <h3>True Cost Calculator</h3>
        <p>Know your real cost of goods including your own labor. Stop guessing, start knowing.</p>
      </div>
      <div class="card">
        <h3>SKU Profitability</h3>
        <p>See which products actually make money and which ones are quietly draining your business.</p>
      </div>
      <div class="card">
        <h3>Readiness Score</h3>
        <p>Get a 0 to 100 score that tells you exactly where you stand and what to fix next.</p>
      </div>
    </div>
  </section>

  <section id="who" class="highlight-section">
    <h2>Who this is for</h2>
    <p>You are a beauty founder doing zero to 250K in revenue. You make great products. You have loyal customers. But when it comes to your numbers, pricing, margins, costs, compliance, you are flying blind.</p>
    <p>Phase.ai gives you the clarity to make your next move with confidence, not guesswork.</p>
  </section>
`;
