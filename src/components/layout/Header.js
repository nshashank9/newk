import React, {Fragment} from 'react';
import '../../App.css';
import { Link } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux';

const Header = () =>{
  const dispatch = useDispatch();
  const { user,loading } = useSelector(state => state.specs)
    return(  
      <>
        <nav class="navbar row">
          <div class="col-12 col-md-6 mt-2 mt-md-0">
            <div class="input-group">
              <input type="text" id="search_field" class="form-control" />
              <div class="input-group-append">
                <button id="search_btn" class="btn">
                  <i class="fa fa-search" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-3 mt-4 mt-md-0 text-center"> 
          {user ? (
                        <div className="ml-4 dropdown d-inline">
                            <Link to="#!" className="btn dropdown-toggle text-white mr-4" type="button" id="dropDownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

                                <figure className="avatar avatar-nav">
                                    <img
                                        src={user.avatar && user.avatar.url}
                                        alt={user && user.name}
                                        className="rounded-circle"
                                    />
                                </figure>
                                <span>{user && user.name}</span>
                            </Link>

                            <div className="dropdown-menu" aria-labelledby="dropDownMenuButton">
                                {user && user.role === 'admin' && (
                                    <Link className="dropdown-item" to="/dashboard">Dashboard</Link>
                                )}
                                <Link className="dropdown-item" to="/orders/me">Orders</Link>
                                <Link className="dropdown-item" to="/me">Profile</Link>
                                <Link className="dropdown-item text-danger" to="/">
                                    Logout
                                </Link>
                            </div>
                        </div>
                    ) : !loading && <Link to="/login" className="btn ml-4" id="login_btn">Login</Link>}
            <Link to="/kart" className="btn" id="login_btn">
              <span id="cart" class="ml-3">Cart</span>
              <span class="ml-1" id="cart_count">2</span>
            </Link>
            
          </div>
        </nav>
      </>
)}



export default Header;