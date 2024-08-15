import Link from "next/link";

const FooterPage = () => {
    return (
        <div className="footerPage">
            <div className="leftSection1">
                <div className="logo">
                    <img src="assets/my-image.jpg" />
                </div>
                <span>Mumair</span>
            </div>
        
            <div className="rightSection">
                <a href="" >Home</a>
                <a href="" >About Me</a>
                <a href="" >Services</a>
                <a href="" >Projects</a>
                <a href="" >Testimonials</a>
                <a href="" >Contact</a>              
                         
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

    );
}
export default FooterPage;