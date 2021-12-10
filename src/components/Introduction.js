import Button from "react-bootstrap/esm/Button";

const Introduction = (props) => {
    return(
        <div class="text-start" id="intro">

            <p class="text-start">- introducing</p>
            <h3 class="text-start">Hello</h3>
            <h1 class="text-start">I'm Vernell</h1>
            <h1 class="text-start">Miller</h1>
            <p class="text-start">An Atlanta-based Full Stack Engineer | 
            2D/3D <br></br>Graphic Designer with a background in<br></br>Game Development and Design. I am an <br></br>exceptional team player, and I strongly believe <br></br>in the words of Japanese Author - Ryunosuke Satoro, <br></br>“Individually, we are one drop. Together, we are an ocean.”
            </p>
            <p class="text-start">I have a passion for exploring new learning opportunities <br></br>and applying the new knowledge in exciting and creative ways.
            </p>

            <Button id="contact">Contact Me</Button>


        </div>
        
    );
};

export default Introduction