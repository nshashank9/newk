import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({i}) => {
    return (
      <div key={i._id} className="col-sm-12 col-md-6 col-lg-3 my-3">
        <div className="card p-3 rounded">
          <img
            className="card-img-top mx-auto"
            src={i.images[0].url}
          />
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">
              <Link to={`/items/${i._id}`}>{i.name}</Link>
            </h5>
            <div className="ratings mt-auto">
              <div className="rating-outer">
                <div className="rating-inner" style={{ width: `${(i.ratings / 5) * 100}%` }}></div>
              </div>
              <span id="no_of_reviews">{i.ratings}</span>
            </div>
            <p className="card-text">{i.price}</p>
            <Link to={`/items/${i._id}`} id="view_btn" className="btn btn-block">View Details</Link>
          </div>
        </div>
      </div>
    )
}

export default Product;