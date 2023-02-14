import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';
import { getBeerDetail } from '../../services/beer.service';

export default function CardBeer() {
  const [beers, setBeers] = useState([]);
  const { id } = useParams();
  const loadBeersDetails = async () => {
    getBeerDetail(id).then((response) => {
      setBeers(response.data);
    });
  };

  useEffect(() => {
    loadBeersDetails();
  }, []);

  return beers.length === 0 ? (
    <p>Carregando...</p>
  ) : (
    beers.map((beer) => (
      <div className="CardStyle">
        <Card
          style={{
            width: 'auto',
            background: 'white',
            margin: '1rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Card.Body
            style={{
              display: 'flex',
              flexDirection: 'column',
              flexWrap: 'nowrap',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Card.Title style={{ color: 'black' }}>{beer.name}</Card.Title>
            <Card.Subtitle
              style={{ color: 'black' }}
              className="mb-2 text-muted"
            >
              {beer.tagline}
            </Card.Subtitle>
            {' '}
            <Card.Img
              style={{
                margin: '2rem',
                maxHeight: '480px',
                maxWidth: '120px',
              }}
              src={beer.image_url}
              maxheight={480}
              maxwidth={120}
            />
            <Card.Text>{beer.description}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    ))
  );
}
