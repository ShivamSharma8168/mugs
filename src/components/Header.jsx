import Link from "next/link";
const Header = () =>{
    return (
        <header>
            <div className="container">
                <div className="leftSection">
                    <div className="logo">
                        <img src="assets/my-image.jpg" />
                    </div>
                    <div className="logo-name"> <span>Rapheal</span> </div>                    
                </div>

                <div className="rightSection">
                    <a href="" >Home</a>
                    <a href="" >About Me</a>
                    <a href="" >Services</a>
                    <a href="" >Projects</a>
                    <a href="" >Testimonials</a>
                    <a href="" >Contact</a>
                    
                    <button id="cv-download" >Download CV</button>


                </div>


            </div>
       
        
        
         </header>
    )
}

export default Header;