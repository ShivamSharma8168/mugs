import Link from "next/link";

const TestimonialsPage = () =>{
    return (
        <>
        <br></br> <br></br>
        <div className="testimonialsContainer">
            <span>Testimonials</span>
            <p>lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor  </p>
            <div className="slidingimages">
                <div className="containimg active">
                    <img src="assets/man1.jpeg" alt="" />
                    <p>lorem ipsum dolor   dolor lorem ipsum dolor lorem i  dolor lorem ipsum dolor lorem ilorem ipsum dolor lorem ipsum dolor lorem ipsum dolor </p>

                </div>
                <div className="containimg">
                <img src="assets/man2.jpg" alt="" />
                <p>lorem ipsum dolor lorem ipsum dolor lorem   dolor lorem ipsum dolor lorem i  dolor lorem ipsum dolor lorem iipsum dolor lorem ipsum dolor </p>

                </div>
                <div className="containimg">
                <img src="assets/man3.jpg" alt="" />
                <p>lorem ipsum   dolor lorem ipsum dolor lorem i  dolor lorem ipsum dolor lorem i dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor </p>

                </div>

                
            </div>
            <div className="slidingindex">
                <div className="indexbox"></div>
                <div className="indexbox"></div>
                <div className="indexbox"></div>
                <div className="indexbox"></div>
            </div>

        </div>
        </>


    );
}
export default TestimonialsPage;