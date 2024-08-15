import Link from "next/link";

const AboutPage = () =>{
    return (<>
        <br></br> <br></br>
        <div className="aboutContainer">
            <div className="photoContainer">
                <div className="imgBox">
                    <img src="assets/aboutmeimg.jpg" alt="" />
                </div>
            </div>
            <div className="aboutMeContainer">
                <div className="aboutLine">About Me</div>
                <p> For Your kind Information , this NextJs portfolio is developed as an assignment , Figma design is converted into NextJs portfolio and currnetly It does not meet Responsive Requirement .</p>
                <div className="skillBars">
                    UX
                    <div className="ux-box">
                        <div className="ux-skill">

                        </div>
                    </div>
                    <br/>
                    Website Design

                    <div className="ux-box">
                        <div className="web-skill">
                            
                        </div>
                    </div>
                    <br/>
                    App Design
                    <div className="ux-box">
                        <div className="app-skill">
                            
                        </div>
                    </div>
                    <br/>
                    Graphic Design
                    <div className="ux-box">
                        <div className="G-skill">
                            
                        </div>
                    </div>
                    <br/>
                    Next JS
                    <div className="ux-box">
                        <div className="nextjs-skill">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>


    );
};

export default AboutPage;