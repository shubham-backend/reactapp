import React from 'react'
export const Footer = () => {
    let footerstyle = {
        position : "fixed",
        left: 0,
        bottom: 0,
        width : "100%",
        //top : "100vh",
        //marginTop: "985vh",
    }
    return(
        <footer className="bg-dark text-light py-3" style={footerstyle}>
            {/* <p className="text-center">
                Copyright &copy; shubham-cake-shop.com
            </p> */}
                
            <p>
                    <div class="sup-nav" style={{"paddingRight": "9px", "marginBottom": "15px", "width": "100%"}}>   
                    <span className="text-center" style={{marginRight:"-180px"}}>Copyright &copy; shubham-cake-shop.com</span>               
                    <span style={{"paddingRight":"10px","textAlign": "right","float": "right"}}>                        <img src="https://img.aazho.com/sf/tr:f-auto//desktop/contact-us/call_e3jDIEba0d.png"  style={{"height": "11px"}} /> +91 - 8709874654 <b>Help ?</b></span>                         
                    </div>
                </p>
        </footer>
    )
}
