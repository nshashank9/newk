import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { getSpecs,  clearErrors } from '../../actions/itemac'

/**
* @author
* @function Spec

**/

const Specs = ({match}) => {
    const dispatch = useDispatch();
    const { loading, error, products } = useSelector(state => state.specs)
    useEffect(() => {
         if (error) { 
        dispatch(clearErrors())
    }
        dispatch(getSpecs(match.params.id))
    },[dispatch, error, match.params.id]);
  return(
      
         <div>
         <div className="row f-flex justify-content-around">
             <div className="col-12 col-lg-5 img-fluid" id="product_image">
                 <img src="https://i5.walmartimages.com/asr/1223a935-2a61-480a-95a1-21904ff8986c_1.17fa3d7870e3d9b1248da7b1144787f5.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff" alt="sdf" height="500" width="500" />
             </div>
             <div className="col-12 col-lg-5 mt-5">
                 <h3>{products.name}</h3> 
                 <div className="rating-outer">
                     <div className="rating-inner"></div>
                 </div>
                 <span id="no_of_reviews">{products.ratings}</span>
                 <hr />
                 <p id="product_price">{products.price}</p>
                 <div className="stockCounter d-inline">
                     <span className="btn btn-danger minus">-</span>
                     <input type="number" className="form-control count d-inline" value="1" readOnly />
                     <span className="btn btn-primary plus">+</span>
                 </div>
                 <button type="button" id="cart_btn" className="btn btn-primary d-inline ml-4">Add to Cart</button>
                 <p>Status: <span id="stock_status">In Stock</span></p>
                 <hr />
                 <h4 className="mt-2">Description:</h4>
                 <p>35 Inch LED</p>
                 <hr /> 
                 <button id="review_btn" type="button" className="btn btn-primary mt-4" data-toggle="modal" data-target="#ratingModal">
                     Submit Your Review
                 </button>
                 <div className="row mt-2 mb-5">
                     <div className="rating w-50">
                         <div className="modal fade" id="ratingModal" tabIndex="-1" role="dialog" aria-labelledby="ratingModalLabel" aria-hidden="true">
                             <div className="modal-dialog" role="document">
                                 <div className="modal-content">
                                     <div className="modal-header">
                                         <h5 className="modal-title" id="ratingModalLabel">Modal Top</h5>
                                         <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                             <span aria-hidden="true">&times;</span>
                                         </button>
                                     </div>
                                     <div className="modal-body">
                                         <ul className="stars" >
                                             <li className="star"><i className="fa fa-star"></i></li>
                                             <li className="star"><i className="fa fa-star"></i></li>
                                             <li className="star"><i className="fa fa-star"></i></li>
                                             <li className="star"><i className="fa fa-star"></i></li>
                                             <li className="star"><i className="fa fa-star"></i></li>
                                         </ul>
                                         <textarea name="review" id="review" className="form-control mt-3">
                                         </textarea>
                                         <button className="btn my-3 float-right review-btn px-4 text-white" data-dismiss="modal" aria-label="Close">Submit</button>
                                     </div>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
     </div> 
   )
 }

export default Specs;
