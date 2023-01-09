import Button from "react-bootstrap/esm/Button"
import {data} from "./Data"
import Footer from "./Footer"
import UncontrolledExample from "./UncontrolledExample"
const Photo=()=>{
    return(
        <>
        <UncontrolledExample/>
        <Button variant="success" id="btns" style={{marginLeft:"600px",marginTop:"15px"}}>FEATUREDS PRODUCTS</Button>
        <hr/>
<div className="container">

{
    data.map((item,i)=>{
        return(
            <>
  
  <div className="item11" key={i}>
    <img src={item.img} alt="ihgd" className="images"/>
    <h3 style={{fontSize:"15px",color:"red"}}>{item.name}</h3>
    <h4 style={{fontSize:"16px",color:"black"}}>{item.brand}</h4>
    <h5 style={{color:"green"}}>{item.rating}</h5>
    <h6 style={{color:"green"}}>{item.rate}<i className='fas fa-box' style={{fontSize:"24px",paddingLeft:"170px"}}></i></h6>

    </div>
            </>
        )
    })
}
</div>
<Button variant="success" id="btns" style={{marginLeft:"600px",marginTop:"5px"}}>SHOW MORE</Button>

<Footer/>
</>
)
}
export default Photo