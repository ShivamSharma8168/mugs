import Link from "next/link";

const servicePage = () =>{
    return (
        <div className="serviceContainer">
            <heading>Services</heading>
            {/* paragraph here  */}
            <p>lorem Ipsum eate orem ipsim Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do orem ipsim Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do  </p>
            <div className="servicesboxes">
                <div className="servicebox">
                   <img src="assets/ui.png" alt="" /> 
                   <span>UI/UX</span> 
                  <p>lorem ipsim Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore.</p>

                </div>
                <div className="servicebox">
                <img src="assets/ux.png" alt="" />
                <span>Web Design</span>
                <p>lorem ipsim Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore.</p>
                    
                </div>
                <div className="servicebox">
                <img src="assets/app-development.png" alt="" />
                <span>App Design</span>
                <p>lorem ipsim Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore.</p>

                </div>
                <div className="servicebox">
                <img src="assets/illustration.png" alt="" />
                <span>Graphic Design</span>
                <p>lorem ipsim Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore.</p>
                </div>
                
               
            </div>

        </div>

    );
};

export default servicePage;