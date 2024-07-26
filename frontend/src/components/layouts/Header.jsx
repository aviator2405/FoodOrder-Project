import React from 'react'
import Search from './Search';

export default function header() {
  return <nav className="navbar row sticky-top">
    {/* logo */}
    <div className="col-12 col-md-3">
        <img src="/images/logo.webp" alt="logo" className='logo'/>
    </div>
    {/* search bar and search icon */}
    <div className="col-12 col-md-6 mt-md-6">
        <Search />
    </div>
    <div className="col-12 col-md-3 mt-4 mt-md-0">
        <span className="ml-3" id="cart">
            Cart
        </span>
        <span className="ml-1" id="cart_count">0</span>
        {
            10<5 ?(
                <>
                <div className="ml-4 dropdown d-inline">
                    <figure className='avatar avator-nav'>
                        <img src="/images/images.png" alt="avator image" className="rounded-circle" />
                    </figure>
                    <span style={{color:"white",fontWeigth:"bolder"}}>WSA Developer</span>
                </div>
                </>
            ):(
                <div className="btn ml-4" id="login_btn">
                    Login
                </div>
            )
        }
    </div>
  </nav>;
  
}
