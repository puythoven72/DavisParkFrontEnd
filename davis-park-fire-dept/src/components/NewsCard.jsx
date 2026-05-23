
import '../card.css'

function NewsCard() {
  return (
    <div className="news-card">
      <div className="news-card-header">
        <span className="news-icon">📰</span>
        <span className="news-title">Latest News</span>
        <span className="news-icon bullhorn">📣</span>
      </div>

      <div className="news-card-body">
        <h3 className="news-headline">
          Big Announcement Just In
        </h3>
        <p className="news-summary">
          Stay up to date with the latest updates, alerts, and important
          announcements tailored just for you.
        </p>
      </div>

      <button className="news-card-button">
        Read More
      </button>
    </div>
  );
};

export default NewsCard