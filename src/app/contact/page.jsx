import Link from "next/link";

const ConnectionPage = () => {
    return (<>
    
    <br></br> <br></br>



            <div className="connectionPage">
            <span>Lets Design Together</span>
            <p> To check the functionalities of the components , I put My Resume in download button just to check the donwload functionality.  </p>
            <div className="contactSection">
                <input type="email" placeholder="Enter Your Email" id="" required="" />
                <button>Contact Me</button>
            </div>

           
        </div>
         <div className="footerPage">
         <div className="leftSection1">
             <div className="logo">
                 <img src="assets/my-image.jpg" />
             </div>
             <span>Mumair</span>
         </div>

         <div className="rightSection">
          
             <Link href="/"> Home </Link>
             <Link href="/about"> About Me </Link>
             <Link href="/services"> Services </Link>
             <Link href="/projects"> Projects </Link>
             <Link href="/testimonials">  Testimonials</Link>
             <Link href="/contact"> Contact </Link>

         </div>
         <div className="contactIcons">

             <a href=""><i class='bx bxl-facebook-circle'></i></a>
             <a href=""><i class='bx bxl-twitter'></i></a>
             <a href=""><i class='bx bxl-instagram'></i></a>
             <a href=""><i class='bx bxl-linkedin' ></i></a>



         </div>
         <div className="copyright">
             <p>&copy; 2024 <span>Mumair</span> All Rights Reserved.</p>
         </div>





        </div>
        </>

        

    




    );
}
export default ConnectionPage;