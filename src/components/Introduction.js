import Button from "react-bootstrap/esm/Button";
import { Container } from "react-bootstrap";

const Introduction = (props) => {
    return(
        <>
        <Container>

            <div class="text-start" id="intro">
                <p>- introducing</p>
                <h3 id="heading">Hello</h3>
                <h1 id="heading">I'm Vernell</h1>
                <h1 id="heading">Miller</h1>
                <p>An Atlanta-based Full Stack Engineer | 
                2D/3D <br></br>Graphic Designer with a background in<br></br>Game Development and Design. I am an <br></br>exceptional team player, and I strongly believe <br></br>in the words of Japanese Author - Ryunosuke Satoro, <br></br>“Individually, we are one drop. Together, we are an ocean.”
                </p>
                <p>I have a passion for exploring new learning opportunities <br></br>and applying the new knowledge in exciting and creative ways.
                </p>

                <Button id="contact">Contact Me</Button>
            </div>

            <div>
                <img class="img-fluid" id="mainIMG" src="/me.png" alt="Me" width="900"/>
                
            </div>
        </Container>
        </> 
    );
};

export default Introduction