import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
function UncontrolledExample() {
  return (
    <div className='crousel'>
                
    <Carousel>
       
      <Carousel.Item>
     
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1517646458010-ea6bd9f4a75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="First slide"
        />
       
        <Carousel.Caption>
    
            <div className='main-icon'>
          
        <Button variant='primary' className='btn'><i className="fa fa-shopping-bag" style={{fontSize:"24px",paddingLeft:"10px"}}></i>SHOP NOW TODAY</Button><br/>
        <br/>
        <Button variant="success" className='btn'><i className='fab fa-google-play' style={{fontSize:"24px"}}></i>Google play</Button>
          <p className='para para1'><li className='circle'>100%
              <br/>start<br/> up</li></p>
             </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1543378993-e0041dcb24cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=340&q=80"
          alt="Second slide"
        />

        <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1528731708534-816fe59f90cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt="Third slide"
        />

        <Carousel.Caption>
    
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default UncontrolledExample;