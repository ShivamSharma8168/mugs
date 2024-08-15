import Link from "next/link";

const ProjectsPage = () => {
    return (
        <>
        <br></br> <br></br>
        <div className="projectContainer">
            <span>My Projects</span>
            <p>lorem ipsim Lorem ipsum dolor sit ameipsim Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor      </p>
            <div className="nav-btns">
                <button id="" >AI</button>
                <button id="" >UI/UX</button>
                <button  id="web-btn" >Web Design</button>
                <button id="" >App Design</button>
                <button id="" >Graphic Design</button>

            </div>
            <div className="projectList">
                <div className="box">
                    <div className="img-box">
                        <img src="assets/hotelpage.jpg" />
                        <span1>Hotel Website</span1>
                        <p>Developed a fully functional, Responsive Website. Lorem Ipsum Dolor Lorem Ipsum Dolor</p>

                    </div>

                </div>
                <div className="box">
                <div className="img-box">
                <img src="assets/landing-page.jpeg" />
                <span1>Landing Page</span1>
                <p>Lorem Ipsum Dolor Lorem Lorem Ipsum Dolor Lorem Lorem Ipsum Dolor Lorem Lorem Ipsum Dolor Lorem </p>

                </div>

                </div>
                <div className="box">
                <div className="img-box">
                <img src="assets/ecommerce.jpg" />
                <span1>Ecommerce Website</span1>
                <p>Lorem Ipsum Dolor Lorem Lorem Ipsum Dolor Lorem Lorem Ipsum Dolor Lorem Lorem Ipsum Dolor Lorem </p>

                </div>

                </div>
                
            </div>


        </div>
        </>
    );
}

export default ProjectsPage;