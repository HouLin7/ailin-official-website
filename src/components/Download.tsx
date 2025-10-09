export default function Download() {
  return (
    <section id="download" className="download">
      <h2>Download the Ailin App</h2>
      <p>Available now on major app stores</p>
      <div className="download-buttons">
        <a href="https://apps.apple.com/app/id0000000000" className="store-btn apple"> App Store</a>
        <a href="https://play.google.com/store/apps/details?id=com.ailin.app" className="store-btn google">▶ Google Play</a>
      </div>
      <div className="qr">
        <img src="/qr.png" alt="QR Code" />
      </div>
    </section>
  );
}
