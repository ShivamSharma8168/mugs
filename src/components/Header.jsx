import Link from "next/link";
const Header = () =>{
    return (
        <header>
            <div className="container">
                <div className="leftSection">
                    <div className="logo">
                        <img src="assets/my-image.jpg" />
                    </div>
                      <span>Mumair</span>                   
                </div>

                <div className="rightSection">
                    <a href="" id="" >Home</a>
                    <a href="" id="" >About Me</a>
                    <a href="" id="" >Services</a>
                    <a href="" id="" >Projects</a>
                    <a href="" id="" >Testimonials</a>
                    <a href="" id="" >Contact</a>
                    
                    <a href="assets/ShivamResume.pdf" download="ShivamResume.pdf">  <button id="cv-download" >Download CV</button> </a> 


                </div>


            </div>
       
        
        
         </header>
    )
}

export default Header;