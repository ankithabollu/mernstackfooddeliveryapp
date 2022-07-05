import React from "react";
import { VscGithub,VscTwitter } from "react-icons/vsc";
import { TiSocialLinkedinCircular,TiSocialInstagram,TiSocialFacebookCircular } from "react-icons/ti";

function Footer() {
  return (
    <footer className="font-small bg-dark text-light">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-2">
                <h5 className="text-uppercase text-light ms-2 pt-5">Feel free to contact us.</h5>
                <p>Thank you for choosing Signature Cuisine... Visit Again:) </p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-5 mb-md-0 mb-1 pt-5">
                <h5 className="text-uppercase">ContactUs</h5>
                <ul className="list-unstyled text-white">
                   
                    <li>9890234478</li>
                    
                </ul>
            </div>

            <div className="col-md-6 mb-md-0 mb-1 text-center">
                <h5 className="text-uppercase">Follow Us</h5>
                <ul className="list-unstyled d-inline">
                    <li className="d-inline p-2"><a className="text-decoration-none" href="#!">Facebook <TiSocialFacebookCircular/></a></li>
                    <li className="d-inline p-2"><a className="text-decoration-none" href="#!">Twitter <VscTwitter/></a></li>
                    <li className="d-inline p-2"><a className="text-decoration-none" href="#!">Instagram <TiSocialInstagram/></a></li>
                    <li className="d-inline p-2"><a className="text-decoration-none" href="#!">LinkedIn <TiSocialLinkedinCircular/></a></li>
                    <li className="d-inline p-2"><a className="text-decoration-none" href="#!"> Github <VscGithub/></a></li>

                </ul>
                
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-1 text-light pb-4 pt-2">© 2022 Copyright:
        <a className="text-decoration-none" href="#"> <b>SignatureCuisine.com</b></a>
    </div>

</footer>
  );
}

export default Footer;