import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

function Home() {
    return (

        <div>
         
        <div className='text-center container mt-5'>
           
           {/* <img src={} className='w-25' alt="" /> */}
           <div  className="w-75 mx-auto mt-5">
           <Carousel>
 <Carousel.Item className='w-100'>
   <img
     className="d-block w-100"
     src="https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
     
     alt="First slide"
   />
   {/* <Carousel.Caption>
     <h3>First slide label</h3>
     <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
   </Carousel.Caption>  */}
 </Carousel.Item>
 <Carousel.Item className='w-100'>
   <img
     className="d-block w-100"
     src="https://images.pexels.com/photos/2144200/pexels-photo-2144200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
     alt="Second slide"
   />

   {/* <Carousel.Caption>
     <h3>Second slide label</h3>
     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
   </Carousel.Caption> */}
 </Carousel.Item>
 <Carousel.Item className="w-100">
   <img
     className="d-block w-100"
     src="https://images.pexels.com/photos/2619967/pexels-photo-2619967.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
     alt="Third slide"
   />

   {/* <Carousel.Caption>
     <h3>Third slide label</h3>
     <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
   </Carousel.Caption> */}
 </Carousel.Item>
</Carousel>
</div>
<p style={{color:"darkgoldenrod"}} className="display-5"> <b><i>Welcome To Signature Cuisine</i></b></p>

<div>

           <p className="lead fs-6 w-100 p-3 card shadow" style={{backgroundColor:"lightpink"}}>
           <b>Updated February 9th, 2022</b> <br></br>
     
COVID POLICY UPDATE <br/>
WE ARE REOPENING FOR INDOOR DINING STARTING THURSDAY 2/10/22. WE WILL REQUIRE PROOF OF VACCINATION, NEGATIVE TEST (WITHIN 72 HOURS), OR RECOVERY FROM COVID (WITHIN 90 DAYS) FOR INDOOR DINING. WE WILL ALSO DO OUR BEST TO PROVIDE OUTDOOR SEATING.
PLEASE STAY HOME IF YOU ARE FEELING SICK. YOU MUST WEAR A MASK WHILE WALKING AROUND INSIDE THE RESTAURANT. THANK YOU VERY MUCH FOR UNDERSTANDING! WE ARE AS EXCITED AS YOU ARE FOR THINGS TO RETURN TO NORMAL, HOPEFULLY SOON! :) </p>
<p className="lead fs-6 p-3 card shadow" style={{backgroundColor:"blanchedalmond"}}>
<br/><b>CURRENT MENU </b><br/>

WE HAVE CHANGED OUR MENU SINCE THE COVID PANDEMIC. WE NOW FOCUS ON SERVING RESPONSIBLY GROWN & SOURCED INGREDIENTS, MANY OF WHICH COME FROM THE ALHAMBRA FARMERS MARKET. CLICK HERE TO SEE OUR CURRENT MENU (WE ALSO HAVE DAILY SPECIALS THAT ARE NOT LISTED). MENU & PRICES MAY BE SUBJECT TO CHANGE AT ANYTIME.
NO RESERVATIONS (BUT YES WAITLIST!)
WE DO NOT TAKE RESERVATIONS AS WE SEAT GUESTS ON A FIRST COME FIRST SERVE BASIS. HOWEVER, YOU CAN JOIN OUR YELP WAITLIST TO SAVE YOUR SPOT AHEAD OF TIME (SAME DAY ONLY)!
BUSINESS HOURS
THURSDAY THROUGH MONDAY - 9:00AM - 3:00PM 
TUESDAY AND WEDNESDAY CLOSED
INDOOR AND OUTDOOR SEATING, TAKEOUT, AND DELIVERY AVAILABLE
           </p>
           </div>
       </div>

  </div>
    )
}

export default Home
