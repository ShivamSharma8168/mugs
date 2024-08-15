import Link from "next/link";
const Header = () => {
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
                    {/* <Link href="/"> <a>Home</a> </Link>
                    <Link href="/about"> <a>About Me</a> </Link>
                    <Link href="/services">  <a  >Services</a> </Link>
                    <Link href="/projects"> <a  >Projects</a> </Link>
                    <Link href="/testimonials">  <a  >Testimonials</a> </Link>
                    <Link href="/contact"> <a  >Contact</a> </Link> */}
                    <Link href="/"> Home </Link>
                    <Link href="/about"> About Me </Link>
                    <Link href="/services">  Services </Link>
                    <Link href="/projects"> Projects </Link>
                    <Link href="/testimonials"> Testimonials </Link>
                    <Link href="/contact"> Contact</Link>

                    <a href="assets/ShivamResume.pdf" download="ShivamResume.pdf">  <button id="cv-download" >Download CV</button> </a>


                </div>


            </div>



        </header>
    )
}

export default Header;