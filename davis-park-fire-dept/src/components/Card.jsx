import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function Card() {
  return (
    
      <Card>
        {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
       <div className="news-card-header">
        <span className="news-icon">📰</span>
        <span className="news-title">Latest News</span>
        <span className="news-icon bullhorn">📣</span>
      </div>
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
     
    
  );
}

export default Card;