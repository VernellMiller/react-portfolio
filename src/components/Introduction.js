const Introduction = (props) => {
    return(
        <>
            <div id="Home" class="container">
                <div class="row gap100">
                    <div class="col-lg-6 col-md-7 col-sm-12 text-start" id="intro">
                        <h3 id="heading" class="fw-bold ">Hello</h3>
                        <h1 id="heading" class="fw-bold ">I'm Vernell</h1>
                        <h1 id="heading" class="fw-bold ">Miller</h1>
                        <p>An Atlanta-based Full Stack Engineer | 
                        2D/3D <br></br>Graphic Designer with a background in<br></br>Game Development and Design. I am an <br></br>exceptional team player, and I strongly believe <br></br>in the words of Japanese Author - Ryunosuke Satoro, <br></br>
                        <p class="fw-bold ">“Individually, we are one drop. Together, we are an ocean.”</p>
                        </p>
                        <p>I have a passion for exploring new learning opportunities <br></br>and applying the new knowledge in exciting and creative ways.
                        </p>
                        <a
                            className="text-decoration-none" href="mailto:vernellmiller1@gmailcom">

                            <div id="contact" className="rounded">
                            Contact Me
                            </div>
                        </a>
                    </div>
                    <div class="col-lg-6 col-md-5 col-sm-12">
                        <img class="img-fluid" id="mainIMG" src="/me.png" alt="Me" width="900"/>
                    </div>
                </div>
            </div>
        </> 
    );
};

export default Introduction