
const Header = () => {
    return (
        <>
        <div className="head-section">
           <div className="head">
                    <p>
                        <li id="logo1" style={{position:"fixed",top:"25px", left:"72px", color:"red"}}></li>
                        <li id="logo2" style={{position:"fixed",top:"25px", left:"195px", color:"red"}}></li>
                        <span style={{ fontSize: "2rem",color:"green" }}> miasurpris </span>
                        <br />
                        The PERFECT GIFT FOR YOU</p>
                </div>
                 <div className="icon1">
                    <i id="icon" className='fas fa-soap' style={{ fontSize: "30px" }}></i>
                    <p className="para1">all our soap isworth up to$99</p>
                    </div>
                    <div className="icon2">
                    <i id="icon" className="fa fa-tree" style={{ fontSize: "30px" }}></i>
                    <p className="para2">100% hand craft and ecofreindly</p></div>
                    <div className="icon3">
                    <i id="icon" className='fas fa-shipping-fast' style={{ fontSize: "30px", }}></i>
                    <p className="para3">
                        standard shipping once
                        order over $55
                    </p>
                </div>
                </div>

        </>
    )
}
export default Header;

