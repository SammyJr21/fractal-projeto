import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';
import { getBeers } from '../services/beer.service';
import './Home.css';

export default function Home() {
  const [beers, setBeers] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const limit = 25;
  const loadBeers = async (page) => {
    getBeers(page, limit).then((response) => {
      setBeers(response.data);
    });
  };
  useEffect(() => {
    setPageCount(Math.ceil(325 / limit));
    loadBeers(1);
  }, [limit]);

  const handlePageClick = async (selectedValue) => {
    loadBeers(selectedValue.selected + 1);
  };
  return (
    <div className="container">
      <div className="row m-2">
        {beers.map((beer) => (
          <Link to={`card/${beer.id}`} state={{ codigo: beer.id }}>
            <div
              className="beer"
              key={beer.id}
            >
              <img src={beer.image_url} alt="beer" height={80} width={20} />
              <div className="beerText">
                <span className="beerText_span">{beer.name}</span>
                <p className="beerText_p">{beer.tagline}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div>
        <ReactPaginate
          previousLabel="previous"
          nextLabel="next"
          breakLabel="..."
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName="pagination justify-content-center"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakClassName="page-item"
          breakLinkClassName="page-link"
          activeClassName="active"
        />
      </div>
    </div>
  );
}
