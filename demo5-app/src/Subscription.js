import "./Subscription.css";

export function Subscription() {
  return (
    <div className="subscription-container">
      <h2>Spotify Premium</h2>
      <p>Enjoy ad-free music, offline playback, and high-quality audio.</p>
      <ul>
        <li> Unlimited skips</li>
        <li>High-quality audio</li>
        <li> Offline mode</li>
        <li> No ads</li>
      </ul>
      <button className="back-btn" onClick={() => window.history.back()}>
        Go Back
      </button>
    </div>
  );
}
