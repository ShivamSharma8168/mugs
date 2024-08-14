import Link from "next/link";

const Page1 = () =>{
    return (
        <div className="firstPage">
            <div className="intro-lines">
                <span1>Hi, I am</span1>
                <br/>
                <span2>Rapheal Marcoux</span2>
                <br/>
                <div> <span3>UI & UX</span3></div>
               
                <span4>Designer</span4>
                 <br />

                 <p>
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

                 </p>
                 <br/>
                 <button>Hire Me</button>

            </div>

            <div className="imgSection">
                <div className="image-here">
                    <img src="assets/yello-man.jpg" />
                </div>
                <div className="contactIcons">
                    <a href=""><i class='bx bxl-facebook-circle'></i></a>
                    <a href=""><i class='bx bxl-twitter'></i></a>
                    <a href=""><i class='bx bxl-instagram'></i></a>
                    <a href=""><i class='bx bxl-linkedin' ></i></a>
                </div>
            </div>



            


        </div>

    )
};
export default Page1;