
import React, { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
function Navbar() {
    return (
        <>
            <Fragment>
                <nav className="navbar-section">
                    {/* <label htmlFor="checkbox" id="btn"> <i className="fa fa-bars" style={{ fontSsize: "24px" }}></i></label>
                    <input hidden type="checkbox" id="checkbox" /> */}
                    <div className="navbars">
                        <div className="box1 box"> <Link className="nav-link" to="/" ><i className="fa fa-home" id="decrese"  style={{ fontSize: "16px", paddingLeft:"30px"}}></i></Link></div>
                        <div className="box2 box"> <Link className="nav-link" to="/candle">candles</Link></div>
                        <div className="box3 box"> <Link className="nav-link" to="/soap">soaps</Link></div>
                        <div className="box4 box">  <Link className="nav-link" to="/tart">tarts</Link></div>
                        <div className="box5 box"> <Link className="nav-link" to="/special">specials</Link></div>
                        <div className="box6 box"> <Link className="nav-link" to="/reveal">reveal</Link></div>
                        <div className="box7 box"> <Link className="nav-link" to="/photo">photo</Link></div>
                        <div className="box8 box"> <Link className="nav-link" to="/rep">reprsent</Link></div>
                        <div className="box9 box"> <Link className="nav-link" to="/check"><i className="fa fa-shopping-cart" style={{ fontSize: "17px", }}></i>chekout</Link></div>
                        <span className="main-logo">9795<br />*****<br />CRTIFIED BUYER</span>
                    </div>
                
                </nav>
                <Outlet />
            </Fragment>
        </>
    )
}
export default Navbar;